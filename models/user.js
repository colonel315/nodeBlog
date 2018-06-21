const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// User Schema
const UserSchema = mongoose.Schema({
	fname: {
		type: String,
		required: true
	},
	lname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
});

UserSchema.plugin(uniqueValidator, { message: '{VALUE} is already in use'});

let User = module.exports = mongoose.model('User', UserSchema);