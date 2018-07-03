const express = require('express');
const loginController = require('../controllers/userController.js');
const router = express.Router();

// GET register page
router.get('/register', (req, res) => {
	res.render('register', {
		title: 'Register'
	});
});

/* register a new user. */
router.post('/register', function(req, res, next) {
	loginController.register(req, res, next);
});

// login form
router.get('/login', (req, res) => {
	res.render('login', {
		title: 'Login'
	});
});

//login process
router.post('/login', (req, res, next) => {
	loginController.login(req, res, next);
});

// logout
router.get('/logout', function(req, res) {
	req.logout();
	req.flash('success', 'You are logged out');
	res.redirect('/users/login');
});

module.exports = router;
