var express = require('express');
var router = express.Router();


router.get('/10-standard', function(req, res, next) {
  res.render('download_pages', {
  	title: "CBSE Class 10 Papers",
  	years : [ 
  				"2015",
  				"2014",
  				"2013",
  				"2012",
  				"2011",
  				"2010",
  				"2009",
  				"2008",
  				"2007",
  				"2006"
  			]
  });
})


router.get('/12-standard', function(req, res, next) {
  res.render('download_pages', {
  	title: "CBSE Class 12 Papers",
  	years : [ 
  				"2015",
  				"2014",
  				"2013",
  				"2012",
  				"2011",
  				"2010",
  				"2009",
  				"2008",
  				"2007",
  				"2006"
  			]
  });
})

module.exports = router;