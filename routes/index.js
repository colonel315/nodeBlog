let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');
let Post = require('../models/post');
let User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
	//if there is a user
	if(req.isAuthenticated()) {
		Post.find({}, (err, posts) => {
			posts = posts.reverse();
			User.find({}, (err, users) => {
				res.render('userIndex', {
					title: 'News Feed',
					posts: posts,
					users: users
				})
			});

		});
	}
	else {
		res.render('index', {
			title: 'FooBlog'
		});
	}

});

module.exports = router;
