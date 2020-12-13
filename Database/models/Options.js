let mongoose = require('mongoose');
const optionSchema = require('../schemas/OptionSchema');
const Option = mongoose.model('option', optionSchema);
module.exports = Option;
