var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/submit-sketch', function (req, res, next) {
  var base64Sketch = req.body.data;

  require("fs").writeFile("./public/images/sketch.jpg", base64Sketch, 'base64', function (err) {
    console.log(err);
  });
});


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
