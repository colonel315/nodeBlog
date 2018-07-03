const mongoose = require('mongoose');
Schema = mongoose.Schema;

// User Schema
const PostSchema = mongoose.Schema({
	message: {
		type: String,
		required: true
	},
	users: {
		type: [{type: Schema.Types.ObjectId, ref: 'User'}],
	}
});

let post = module.exports = mongoose.model('Post', PostSchema);