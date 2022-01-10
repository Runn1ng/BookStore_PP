const {Book} = require('../models/book.js'); 
const saleController = require('../controllers/saleController.js');

exports.index = async function (req, res){
    // await saleController.fillDatabase();
    let books = await Book.find().populate('author').populate('publisher');

    let result = [];
    books.map(function(doc){
        result.push({
            id: doc._id,
            image: doc.image,
            name: doc.name,
            author: doc.author.firstname + " " + doc.author.lastname,
            publisher: doc.publisher.firstname,
            price: doc.price,
            cover: doc.cover,
            available: doc.count > 0,
            article: doc.article            
        })
    });
    res.send(result);
};

exports.getBook = async function(req, res){
    const {id} = req.params;
    let book = await Book.findById(id).populate('author').populate('publisher');

    if (book != null) {
        res.send({
            id: book._id,
            image: book.image,
            name: book.name,
            author: book.author.firstname + " " + book.author.lastname,
            publisher: book.publisher.firstname,
            price: book.price,
            cover: book.cover,
            available: book.count > 0,
            article: book.article
        });
    } else {
        res.send("Книга не найдена");
    }
    
};

exports.createBook = async function(req, res){
    const book = new Book(req.body);
    await book.save();
    res.json({state: 'success', bookId: book.id});
};

exports.updateBook = async function(req, response){
    if (req.session.isAdmin) {
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

exports.deleteBook = async function(req, response){
    const {id} = req;
    if (req.session.isAdmin) {
        const book = await Book.findById(id)
        book.remove();
        res.send("Книга удалена");
    } else {
        res.send("Недостаточно прав");
    }
};