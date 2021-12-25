const {Book} = require('../models/book.js'); 

exports.index = function (req, res){
    res.send("Список книг");
};

exports.getBook = async function(req, res){
    res.send('Получение книг')
};

exports.createBook = async function(req, res){
    const book = new Book(req.body);
    await book.save();
    res.json({state: 'success', bookId: book.id});
};

exports.updateBook = function(req, response){
    if (user.is_admin && user.auth) {
        const {id} = req;
        await Book.findOneAndUpdate({_id : id}, req.body, {
            returnOriginal: false
        });
        res.send("Изменение в книге");
    } else {
        res.status(403)
        res.send("Нет доступа");
    }
};

exports.deleteBook = function(req, response){
    const {id} = req;
    res.send("Удаление книги");
};