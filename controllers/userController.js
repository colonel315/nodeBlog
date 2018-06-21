const bcrypt = require('bcryptjs');
const passport = require('passport');
let User = require('../models/user'); // Bring in User Model
const validation = require('../models/validationSchema');
const registrationSchema = validation.registrationSchema;

/**
 * registers a new user into the system after checking if the username and email are unique.
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function register(req, res, next) {
	//begin registering new user
	const fname = req.body.fname;
	const lname = req.body.lname;
	const email = req.body.email;
	const username = req.body.username;
	const password = req.body.password;

	// validates each field using the registrationSchema
	req.checkBody(registrationSchema);
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

	let errors = req.validationErrors();

	if(errors) {
		res.render('register', {
			errors: errors
		});
	}
	else {
		let newUser = new User({
			fname: fname,
			lname: lname,
			email: email,
			username: username,
			password: password
		});

		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(newUser.password, salt, (error, hash) => {
				if(error) {
					console.log(error);
				}
				newUser.password = hash;
				newUser.save((err) => {
					if(err) {
						console.log(err);
						// first 24 characters of the message are not required
						let message = err.message.substring(24);
						console.log('message = ', message);
						// split into array at the comma
						let errors = message.split(',');
						console.log('errors = ', errors);

						res.render('register', {
							errors: errors,
							title: 'Register'
						})
					}
					else {
						req.flash('success', 'You are now registered and can log in');
						res.redirect('/users/login');
						return next();
					}
				})
			});
		})
	}
}

/**
 * logs the user in
 * @param req
 * @param res
 * @param next
 */
function login(req, res, next) {
	passport.authenticate('local', {
		successRedirect:'/',
		failureRedirect:'/users/login',
		failureFlash: true
	})(req, res, next);
}

module.exports = {
	register: register,
	login: login
};