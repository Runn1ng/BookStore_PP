const { Sale } = require('../models/sale');
const { ObjectId } = require('mongoose').Types;


exports.getSale = async function(req, res){
    const sale = await Sale.findOne({_id : parseInt(req.params.id)})
    res.send({'result' : sale});
};

exports.createSale = async function(req, res){
    const sale = new Sale(req.body);
    await sale.save();
    res.json({state: 'success', saleId: sale.id});
};

exports.updateSale = function(req, response){
    const {id} = req;
    res.send("Изменения закупки");
};

exports.deleteSale = function(req, response){
    const {id} = req;
    res.send("Удаление закупки");
};