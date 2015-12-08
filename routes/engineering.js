var express = require('express')
var router = express.Router()


router.get('/jee-main', function(req, res, next) {
  res.render('download_pages', {
  	title : "JEE - Main Papers",
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
  			],
  	branches : 1
  })
})


router.get('/jee-adv', function(req, res, next) {
  res.render('download_pages', {
  	title : "JEE - Advanced Papers",
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
  			],
  	branches : 1
  })
})

module.exports = router