const { Publisher } = require('../models/publisher.js');
const { ObjectId } = require('mongoose').Types;

exports.index = async function(req, res) {
    res.send(await Publisher.find());
}

exports.getPublisher = async function(req, res){
    const publisher = await Publisher.findById(req.params.id);
    res.send({'result' : publisher});
};

exports.createPublisher = async function(req, res){
    const publisher = new Publisher(req.body);
    await publisher.save();
    res.json({state: 'success', publisherId: publisher.id});
};

exports.updatePublisher = async function(req, response){
    const {id} = req;
    await Publisher.findByIdAndUpdate(id, req.body);
    res.send("Изменения издателя");
};

exports.deletePublisher = async function(req, response){
    const {id} = req;
    await Publisher.findByIdAndDelete(id);
    res.send("Удаление издателя");
};