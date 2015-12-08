var express = require('express')
var router = express.Router()


router.get('/cat', function(req, res, next) {
  res.render('download_pages', {
  	title : "CAT Papers",
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
  	branches : 1,
    branchname : [
          ""
        ]
  })
})

router.get('/xat', function(req, res, next) {
  res.render('download_pages', {
  	title : "XAT Papers",
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
  	branches : 1,
    branchname : [
          ""
        ]
  })
})

module.exports = router