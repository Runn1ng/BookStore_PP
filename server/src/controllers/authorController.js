const {Author} = require('../models/author.js');
const { ObjectId } = require('mongoose').Types;
const {Book} = require('../models/book.js'); 

exports.index = async function (req, res){
    let authors = await Author.find()
    let authorsNames = []
    for(author of authors) {
        authorsNames.push({'id' : author.id, 'name' : author.toString()});
    }
    res.send(authorsNames);
};

exports.getAuthor = async function(req, res){
    const author = await Author.findOne({_id : parseInt(req.params.id)})
    res.send({'result' : author});
};

exports.createAuthor = async function(req, res){
    const author = new Author(req.body);
    await author.save();
    res.json({state: 'success', authorId: author.id});
};

exports.updateAuthor = async function(req, response){
    await Author.findOneAndUpdate({_id : parseInt(req.params.id)}, req.body, {
        returnOriginal: false
      });
    res.send("Изменения автора");
};

exports.deleteAuthor = async function(req, response){
    const author = await Author.findOne({_id : parseInt(req.params.id)})
    const books = Book.find({author: author});
    (await books).forEach(book => {
        book.remove();
    })
    author.remove();
    res.send("Удаление автора");
};