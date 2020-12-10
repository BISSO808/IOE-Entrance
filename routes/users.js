var express = require('express');
var router = express.Router();
const User = require('../Database/schemas/UserSchema')
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');

const secret = process.env.SECRET; 
/* GET users listing. */
router.post('/', function(req, res, next) {
console.log(secret);
});

module.exports = router;
