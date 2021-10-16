const {Author} = require('../models/author.js');
const { ObjectId } = require('mongoose').Types;

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

exports.updateAuthor = function(req, response){
    const {id} = req;
    res.send("Изменения автора");
};

exports.deleteAuthor = function(req, response){
    const {id} = req;
    res.send("Удаление автора");
};