const express = require('express');
const passport = require('passport');
const loginController = require('../controllers/loginController.js');
const router = express.Router();

/* GET users listing. */
router.post('/register', function(req, res, next) {
	loginController.register(req, res, next);
});

// login form
router.get('/login', (req, res) => {
	res.render('login');
});

//login process
router.post('/login', (req, res, next) => {
	passport.authenticate('local', {
		successRedirect:'/',
		failureRedirect:'/users/login',
		failureFlash: true
	})(req, res, next);
});

// logout
router.get('/logout', function(req, res) {
	req.logout();
	req.flash('success', 'You are logged out');
	res.redirect('/users/login');
});

module.exports = router;
