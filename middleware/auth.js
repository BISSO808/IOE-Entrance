const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

module.exports = (req, res, next) => {
	const token = req.header('x-auth-token');
	if (!token) {
		return res.status(401).json({ msg: 'No token, auth denied' });
	}
	try {
		const decoded = jwt.verify(token, secret);
		res.user = decoded.user;
		next();
	} catch (err) {
		return res.status;
	}
};
