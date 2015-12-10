var express = require('express')
var router = express.Router()

var aipmtLinks = [
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com"
]

var aiimsLinks = [
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com"
]

router.get('/aipmt', function(req, res, next) {
  res.render('download_pages', {
  	title : "AIPMT Papers",
  	years : [ 
  				"2015",
		          "2014",
		          "2013",
		          "2012",
		          "2011",
		          "2010",
		          "2009",
		          "2008",
		          "2007"
  			],
  	saal : 9,
    links : aipmtLinks
  })
})


router.get('/aiimsmbbs', function(req, res, next) {
  res.render('download_pages', {
    title : "AIIMS MBBS Papers",
    years : [ 
          "2015",
          "2014",
          "2013",
          "2012",
          "2011",
          "2010",
          "2009",
          "2008"
        ],
    saal : 8,
    links : aiimsLinks
  })
})

module.exports = router