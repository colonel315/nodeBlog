const mongoose = require('mongoose');
Schema = mongoose.Schema;

// User Schema
const PostSchema = mongoose.Schema({
	message: {
		type: String
	},
	user_id: {
		type: {type: Schema.Types.ObjectId, ref: 'User'}
	}
});

let User = module.exports = mongoose.model('User', UserSchema);