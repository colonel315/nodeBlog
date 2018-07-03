let Post = require('../models/post');
let User = require('../models/user');

function addPost(req, res) {
	req.checkBody('post', 'Post cannot be empty').notEmpty();

	let errors = req.validationErrors();

	if(errors) {
		console.log(errors);
		Post.find({}, (err, posts) => {
			res.render('userIndex', {
				title: 'News Feed',
				posts: posts,
				errors: errors
			})
		});
	}
	else {
		let post = new Post();

		//save message
		post.message = req.body.post;

		//save userID that made the post
		post.users.push(req.user._id);

		//save post object into db
		post.save((err) => {
			if(err) {
				console.log(err);
				return;
			}
			res.redirect('/');
		})
	}
}

module.exports = {
	addPost: addPost
};