var express = require('express')
var router = express.Router()

var jeemLinks = [
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com"
]

var jeeaLinks = [
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com"
]

router.get('/jee-main', function(req, res, next) {
  res.render('download_pages', {
  	title : "JEE - Main Papers",
  	years : [ 
  				"2015",
  				"2014",
  				"2013"
  			],
  	saal : 3,
    links : jeemLinks
  })
})


router.get('/jee-adv', function(req, res, next) {
  res.render('download_pages', {
    title : "JEE - Advanced Papers",
    years : [ 
          "2015",
          "2014",
          "2013"
        ],
    saal : 3,
    links : jeeaLinks
  })
})

module.exports = router