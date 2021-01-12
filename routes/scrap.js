const express = require('express');
const router = express.Router();
const cheerio = require('cheerio');
const axios = require('axios')

router.get('/', async(req, res)=>{
    try {
        const {data} = await axios.get('https://edurat.blogspot.com/2018/06/100-best-physics-mcqs-for-entrance.html?m=1');
        const htmltags = JSON.stringify(data);
        const $ = cheerio.load(htmltags);
        const output = $('span').text();
        res.send(output)
        // res.send(data)
        // const $ = cheerio.load();
        // res.send($)
    }catch(err){
        console.log(err)
    }
})

module.exports = router;