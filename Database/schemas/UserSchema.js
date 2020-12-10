let mongooseLocal = require('mongoose')
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
        unique:true
    },
    passport: {
        type:String,
        required:true
    }
});

module.exports = userSchema;