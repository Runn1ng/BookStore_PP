const { Sale } = require('../models/sale');
const { User } = require('../models/user');
const { Author, AuthorSchema } = require('../models/author');
const { Book } = require('../models/book');
const { Purchase } = require('../models/purchase');
const { Publisher } = require('../models/publisher');
const { ObjectId } = require('mongoose').Types;

exports.index = async function(req, res){
    const sale = await Sale.find()
    res.send(sale);
};

exports.getSale = async function(req, res){
    const sale = await Sale.findById(req.params.id)
    res.send(sale);
};

exports.createSale = async function(req, res){
    const sale = new Sale(req.body);
    await sale.save();
    res.json({state: 'success', saleId: sale.id});
};

exports.updateSale = function(req, response){
    const {id} = req.params;
    await Sale.findByIdAndUpdate(id, req.body);
    res.send("Изменения закупки");
};

exports.deleteSale = function(req, response){
    const {id} = req.params;
    await Sale.findByIdAndDelete(id);
    res.send("Удаление закупки");
};

exports.fillDatabase = async function(req, response) {

    let firstPublisher = new Publisher({firstname: 'olegus'});
    await firstPublisher.save();
    let secondPublisher = new Publisher({firstname: 'amogus'});
    await secondPublisher.save();

    let firstAuthor = new Author({firstname: 'Буник', lastname: 'Иван', patronymic: "Курицын"});
    await firstAuthor.save();
    let secondAuthor = new Author({firstname: 'Пуник', lastname: 'Иван', patronymic: "Курицын"});
    await secondAuthor.save();
    
    let firstBook = new Book({name: 'Маленький прынц', publisher: firstPublisher._id, author: firstAuthor._id, price: 500});
    await firstBook.save();
    let secondBook = new Book({name: 'Маленький прын2', publisher: secondPublisher._id, author: firstAuthor._id, price: 500});
    await secondBook.save();
    let thirdBook = new Book({name: 'Маленький прынц3', publisher: firstPublisher._id, author: secondAuthor._id, price: 500});
    await thirdBook.save();
    let fourthBook = new Book({name: 'Маленький прынц4', publisher: secondPublisher._id, author: secondAuthor._id, price: 500});
    await fourthBook.save();
}