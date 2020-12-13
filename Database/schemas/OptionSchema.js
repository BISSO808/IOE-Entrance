const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const optionSchema = new Schema({
	details: [
		{
			option: {
				type: String,
			},
		},
	],
	question: {
		type: Schema.Types.ObjectId,
		ref: 'question',
	},
});

module.exports = optionSchema;
