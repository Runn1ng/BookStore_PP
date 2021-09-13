const {BookModel} = require('../models/book.js'); 

exports.index = function (req, res){
    res.send("Список книг");
};

exports.getBook = async function(req, res){
    res.send('Получение книг')
};

exports.createBook = async function(req, res){
    const book = new BookModel(req.body);
    await book.save();
    res.json({state: 'success', bookId: book.id});
};

exports.updateBook = function(req, response){
    const {id} = req;
    res.send("Изменение в книге");
};

exports.deleteBook = function(req, response){
    const {id} = req;
    res.send("Удаление книги");
};