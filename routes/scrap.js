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
        // var start_pos = output.indexOf('1.') + 1;
        // var end_pos = output.indexOf('2.',start_pos);
        // var text_to_get = output.substring(start_pos,end_pos);        
        // res.send(mySubString);
        var array=[];
        for (i = 0 ; i < 115 ; i ++ ) {
            var start_pos = output.indexOf((i+1) +'. ') + 1;
            var end_pos = output.indexOf((i+ 2)+'. ',start_pos);
            var text_to_get = output.substring(start_pos,end_pos);
            array.push({text_to_get});
        }
        // console.log(array[100])
        res.send(array)
        // res.send(data)
        // const $ = cheerio.load();
        // res.send($)
    }catch(err){
        console.log(err)
    }
})

module.exports = router;