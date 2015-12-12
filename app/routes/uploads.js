var express = require('express');
var router = express.Router();
var util = require("util");
var fs = require("fs");

router.get('/', function(req, res) {
  res.render("uploadPage", {title: "Upload image file:"});

});


// @TODO move to imgmanip and fetch date there and render .. 
router.post("/upload", function(req, res, next){
  console.log('upload file ......');
  // console.log(req.body) // form fields

  if (req.file){
    console.log(req.file);
    fs.rename(req.file.path, req.file.destination + req.file.originalname);
  }

  // on upload send data / param
  var img_name = req.file.originalname;
  res.send(img_name);

// imgmanip
// res.render( "uploadPage", {filename: req.param('img_name')});


});

module.exports = router;
