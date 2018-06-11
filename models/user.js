const mongoose = require('mongoose');
Schema = mongoose.Schema;

// User Schema
const UserSchema = mongoose.Schema({
	fname: {
		type: String,
		required: true,
		notEmpty: true,
	},
	lname: {
		type: String,
		required: true,
		notEmpty: true,
	},
	email: {
		type: String,
		required: true,
		notEmpty: true,
		isEmail: {
			errorMessage: "Invalid Email"
		}
	},
	username: {
		type: String,
		required: true,
		notEmpty: true
	},
	password: {
		type: String,
		required: true,
		notEmpty: true,
		isLength: {
			options:[{min: 7}],
			errorMessage: "Password must be at least 7 characters long"
		},
		matches: {
			options: ["(?=.*[a-zA-Z])(?=.*[0-9]+).*", "g"],
			errorMessage: "Password must be alphanumeric."
		},
		errorMessage: "Invalid password"
	},
	friend_id: {
		type: {type: Schema.Types.ObjectId, ref: 'User'}
	},
});

let User = module.exports = mongoose.model('User', UserSchema);