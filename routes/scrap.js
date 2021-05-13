const express = require('express');
const router = express.Router();
const cheerio = require('cheerio');
const axios = require('axios');
var obj = require('./unitId.json');
var file = require('./myjsonfile.json');
var gis = require('g-i-s');
var fs = require('fs');
var k = [];
router.get('/', async (req, res) => {
	try {
		const { data } = await axios.get(
			'https://edurat.blogspot.com/2018/06/100-best-physics-mcqs-for-entrance.html?m=1'
		);
		const htmltags = JSON.stringify(data);
		const $ = cheerio.load(htmltags);
		const output = $('span').text();
		// var start_pos = output.indexOf('1.') + 1;
		// var end_pos = output.indexOf('2.',start_pos);
		// var text_to_get = output.substring(start_pos,end_pos);
		// res.send(mySubString);
		var array = [];
		for (i = 0; i < 115; i++) {
			var start_pos = output.indexOf(i + 1 + '. ') + 1;
			var end_pos = output.indexOf(i + 2 + '. ', start_pos);
			var text_to_get = output.substring(start_pos, end_pos);
			array.push({ text_to_get });
		}
		// console.log(array[100])
		res.send(array);
		// res.send(data)
		// const $ = cheerio.load();
		// res.send($)
	} catch (err) {
		console.log(err);
	}
});

router.get('/hey', async (req, res) => {
	var p = 0;
	var arr = [];
	for (var i = 0; i < 50; i++) {
		val = obj[i];
		if (val.InsName == null) {
			continue;
		}
		// console.log(val.InsName);
		gis(val.InsName, logResults);
		// console.log(img);
	}
	// console.log('ehy is');
	// console.log(i);
	// if (i == 10) {
	// 	storeArr(arr);
	// }
	// gis('cats', logResults)
	function logResults(error, results) {
		//console.log('somtheig');
		if (error) {
			console.log(error);
		} else {
			p++;
			var a = JSON.stringify(results[0], null, '  ');
			var mySubString = a.substring(
				a.lastIndexOf('"http') + 1,
				a.lastIndexOf('",')
			);
			//console.log('somtheig');
			arr.push(mySubString);
			console.log(p);
			if (p == 50) {
				storeArr(arr);
			}
		}
	}
});
function storeArr(obj) {
	//console.log('we are here');
	var objwr = {
		url: obj,
	};
	//console.log(objwr);
	fs.writeFileSync(
		'/home/bisso/Ioe-Enterance/routes/myjsonfile.json',
		JSON.stringify(objwr),
		(err) => {
			// throws an error, you could also catch it here
			if (err) throw err;

			// success case, the file was saved
			console.log('Lyric saved!');
		}
	);
}
function Stuff(arr) {
	console.log(arr);
}

// function storeArr(obj) {
// 	try {
// 		fs.writeFileSync('./myjsonfile.json', JSON.stringify(obj));
// 	} catch (err) {
// 		console.error(err);
// 	}
// }

module.exports = router;
