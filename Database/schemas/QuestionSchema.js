const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const questionSchema = new Schema({
	details: {
		type: String,
		required: true,
	},
	options: {
		type: String,
		required: true,
	},

	subject: {
		type: String,
		required: true,
	},
	answer: {
		type: String,
	},
});

module.exports = questionSchema;
