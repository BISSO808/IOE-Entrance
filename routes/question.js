const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Question = require('../Database/models/Questions');
const Option = require('../Database/models/Options');
router.get('/', auth, async (req, res) => {
	try {
		let questions = await Question.find({});
		res.send(questions);
	} catch (err) {
		//console.log(err);
		res.status(500).send('server error');
	}
});

router.get('/:subject', auth, async (req, res) => {
	try {
		let questions = await Question.find({ subject: req.params.subject });
		res.send(questions);
	} catch (err) {
		//console.log(err);
		res.status(500).send('server error');
	}
});

router.post('/', auth, async (req, res) => {
	try {
		question = new Question({
			details: req.body.detail,
			subject: req.body.subject,
			answer: req.body.answer,
		});
		option = new Option({ question: question.id });
		const array = req.body.option;
		array.forEach((obj) => {
			option.details.unshift({ option: obj });
		});
		question['options'] = option.id;
		await question.save();
		await option.save();
		return res.send('added');
	} catch (err) {
		res.status(500).send('server error');
	}
});
module.exports = router;
