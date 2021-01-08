var express = require('express');
var router = express.Router();
const User = require('../Database/models/Users');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');

const secret = process.env.SECRET;
/* GET users listing. */
router.post(
	'/',
	[
		check('name', 'Name is required').not().isEmpty(),
		check('email', 'Name is required').not().isEmpty(),
		check('password', 'password is required').not().isEmpty(),
	],
	async function (req, res, next) {
		const errors = validationResult(req);
		if (errors.isEmpty()) {
			var { name, email, password } = req.body;
			try {
				let user = await User.findOne({ email });
				if (!user) {
					const saltRounds = 10;
					bcrypt.genSalt(saltRounds, function (err, salt) {
						bcrypt.hash(password, salt, async function (err, hash) {
							password = hash;
							user = new User({
								name,
								email,
								password: hash,
							});
							await user.save();
							const payload = {
								user: {
									id: user.id,
								},
							};
							const token = JWT.sign(payload, secret, { expiresIn: 36000 });
							res.json({ token });
						});
					});
				} else {
					return res.status(400).json({ errors: 'User Exist' });
				}
			} catch (err) {
				res.status(500).send('server error');
			}
		} else {
			return res.status(400).json({ errors: errors.array() });
		}
	}
);
module.exports = router;
