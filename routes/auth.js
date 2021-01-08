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
		const user = await User.findById(res.user.id).select('-password');
		res.json(user);
	} catch (err) {
		res.status(500).send('server error');
	}
});

router.post(
	'/',
	[
		check('email', 'Email is required').not().isEmpty(),
		check('password', 'password is required').not().isEmpty(),
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (errors.isEmpty()) {
			let user = await User.findOne({ email: req.body.email });
			console.log(user)
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
							const errors = [{ msg: 'Wrong password' }];
							res.status(400).json({ msg: errors });
						}
					}
				);
			} else {
				const errors = [{ msg: 'Invalid username' }];
				res.status(400).json({ msg: errors });
			}
		} else {
			console.log(errors);
			res.status(400).json({ msg: errors.array() });
		}
	}
);

module.exports = router;
