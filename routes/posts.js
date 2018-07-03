const express = require('express');
const router = express.Router();
let postController = require('../controllers/postController');

// CREATE a new post
router.post('/add', ensureAuthenticated, (req, res) => {
	postController.addPost(req, res);
});


// access control
function ensureAuthenticated(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}
	else {
		req.flash('danger', 'please login');
		res.redirect('/users/login');
	}
}
module.exports = router;
