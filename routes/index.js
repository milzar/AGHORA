var express = require('express');
var router = express.Router();
let printSketch = require('../public/print');

/* GET home page. */
router.post('/submit-sketch', function (req, res, next) {
    var base64Sketch = req.body.data;

    require("fs").writeFile("./public/outputSketch/sketch.jpg", base64Sketch, 'base64', function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Saving image success")
            printSketch();
        }
    });
});


router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

module.exports = router;
