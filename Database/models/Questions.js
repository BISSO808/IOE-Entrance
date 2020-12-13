let mongoose = require('mongoose');
const questionSchema = require('../schemas/QuestionSchema');
const Question = mongoose.model('question', questionSchema);
module.exports = Question;
