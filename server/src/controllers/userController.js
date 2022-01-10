const { User } = require('../models/user');
const { ObjectId } = require('mongoose').Types;
const crypto = require('crypto')

// User API

exports.register = async function (req, res){
    
    if (req.body.password) {
        req.body.password = hash(req.body.password)
    }

	if (req.body.login) {
		const existUser = await User.exists({login: req.body.login});
	
		if (existUser) {
			res.json({result: 'fail', error: 'Пользователь с таким логином уже есть'})
		} else {
			const user = new User(req.body);
			await user.save();
			res.json({result: 'success'});
		}
	}
}

exports.login = async function(req, res){
	return User
		.findOne({login: req.body.login})
		.then(function(doc){
            if (doc == null || req.body.login == undefined) {
				res.send({'result': 'fail', 'error': 'Пользователя нет'});
                return;
            }

			if (doc.password == hash(req.body.password) ){
				if (req.session.user_id == doc.id) {
					res.send({'result': 'error', 'error': 'Вы уже авторизованы'})
				} else {
					req.session.isAuth = true
					req.session.isAdmin = doc.is_admin
					req.session.user_name = `${doc.firstname} ${doc.lastname}`;
					req.session.user_id = doc.id
					res.send({'result': 'success'});
				}	
			} else {
                res.send({'result': 'fail', 'error': 'Неправильный пароль'});
			}
		})
}

exports.logout = async function(req, res){
	return User
		.findOne({login: req.body.login})
		.then(function(doc){
            if (doc == null || req.body.login == undefined) {
				res.send({'result': 'fail', 'error': 'Пользователя нет'});
                return;
            }

			if (doc.password == hash(req.body.password) ){
				res.send({'result': 'success', 'token': 'token'});
			} else {
                res.send({'result': 'fail', 'error': 'Неправильный пароль'});
			}
		})
}


function hash(text) {
	return crypto.createHash('sha1')
	.update(text).digest('base64')
}