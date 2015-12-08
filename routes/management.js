var express = require('express');
var router = express.Router();


router.get('/cat', function(req, res, next) {
  res.render('download_pages');
})

module.exports = router;