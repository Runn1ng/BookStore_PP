const { Publisher } = require('../models/publisher.js');
const { ObjectId } = require('mongoose').Types;


exports.getPublisher = async function(req, res){
    const publisher = await Publisher.findOne({_id : parseInt(req.params.id)})
    res.send({'result' : publisher});
};

exports.createPublisher = async function(req, res){
    const publisher = new Publisher(req.body);
    await publisher.save();
    res.json({state: 'success', publisherId: publisher.id});
};

exports.updatePublisher = function(req, response){
    const {id} = req;
    res.send("Изменения издателя");
};

exports.deletePublisher = function(req, response){
    const {id} = req;
    res.send("Удаление издателя");
};