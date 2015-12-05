var express = require('express');
var router = express.Router();
var util = require("util");
var fs = require("fs");

router.get('/', function(req, res) {
  res.render("uploadPage", {title: "Upload image file:"});
});

router.post("/upload", function(req, res, next){
  console.log('upload file ......');
  // console.log(req.body) // form fields

  if (req.file){
    console.log(req.file);
    fs.rename(req.file.path, req.file.destination + req.file.originalname);
  }
});

module.exports = router;
