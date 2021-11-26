const { Purchase } = require('../models/purchase');
const { ObjectId } = require('mongoose').Types;


exports.getPurchase = async function(req, res){
    const purchase = await Purchase.findOne({_id : parseInt(req.params.id)})
    res.send({'result' : purchase});
};

exports.createPurchase = async function(req, res){
    const purchase = new Purchase(req.body);
    await purchase.save();
    res.json({state: 'success', purchaseId: purchase.id});
};

exports.updatePurchase = function(req, response){
    const {id} = req;
    res.send("Изменения закупки");
};

exports.deletePurchase = function(req, response){
    const {id} = req;
    res.send("Удаление закупки");
};