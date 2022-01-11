const { Purchase } = require('../models/purchase');
const { ObjectId } = require('mongoose').Types;

exports.index = async function(req, res) {
    res.send(await Purchase.find());
}

exports.getPurchase = async function(req, res){
    const purchase = await Purchase.findOne({_id : parseInt(req.params.id)})
    res.send({'result' : purchase});
};

exports.createPurchase = async function(req, res){
    const purchase = new Purchase(req.body);
    await purchase.save();
    res.json({state: 'success', purchaseId: purchase.id});
};

exports.updatePurchase = async function(req, response){
    const {id} = req.params;
    await Purchase.findByIdAndUpdate(id, req.body);
    res.send("Изменения закупки");
};

exports.deletePurchase = async function(req, response){
    const {id} = req;
    await Purchase.findByIdAndDelete(id);
    res.send("Удаление закупки");
};