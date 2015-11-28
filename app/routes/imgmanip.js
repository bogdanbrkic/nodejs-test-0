var express = require('express');
var router = express.Router();
var lwip = require('lwip');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('imgmanip', { title: 'Image manipulation test page' });

  // reading a image file and saveing imto another
  lwip.open('public/images/demo-manip.jpg', function(err, image) {
    // if (err) throw err;
    // console.log("Image :", image);
    image.batch()
      .scale(0.5) // scale to 50%
      .rotate(90, 'white') // rotate 45degs clockwise (white fill)
      .writeFile('public/images/demo-manip-res.jpg', function(err){
          // check err...
          // done.
        });
  });

  // lwip.create(500, 500, 'yellow', function(err, image){
  // // check err
  // // console.log("Image :", image);
  // // 'image' is a 500X500 solid yellow canvas.
  // image.batch()
  //   .writeFile('public/images/output.jpg', function(err){
  //       // check err...
  //       // done.
  //     });
// });


    // reading a image from buffer
    // var fs = require('fs');
    // fs.readFile('img/demo-manip.jpg', function(err, buffer) {
    //   lwip.open(buffer, 'jpg', function(err, image) {
    //     if (err) throw err;
    //   });
    // });

});

module.exports = router;
