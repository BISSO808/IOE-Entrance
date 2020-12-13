const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const bcrypt = require('bcrypt');
const User = require('../Database/models/Users');
const { check, validationResult } = require('express-validator');
const JWT = require('jsonwebtoken');
const secret = process.env.SECRET;
router.get('/', auth, async (req, res) => {
	try {
		console.log(res.user.id);
		const user = await User.findById(res.user.id).select('-password');

		res.json(user);
	} catch (err) {
		res.status(500).send('server error');
	}
});

router.post(
	'/',
	[
		check('email', 'Email is required'),
		check('password', 'password is required'),
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (errors.isEmpty()) {
			let user = await User.findOne({ email: req.body.email });
			if (user) {
				await bcrypt.compare(
					req.body.password,
					user.password,
					function (err, result) {
						if (result) {
							const payload = {
								user: {
									id: user.id,
								},
							};
							const token = JWT.sign(payload, secret, { expiresIn: 36000 });
							res.json({ token });
						} else {
							res.status(400).json({ msg: 'Incorrect password' });
						}
					}
				);
			} else {
				return res.status(400).json({ msg: 'Invalid username' });
			}
		} else {
			return res.status(400).json({ errors: errors.array() });
		}
	}
);

module.exports = router;
