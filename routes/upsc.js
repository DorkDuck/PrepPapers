var express = require('express')
var router = express.Router()


router.get('/', function(req, res, next) {
  res.render('upsc_subjects', {
  	years: 7,
  	year: [
  		"2015",
          "2014",
          "2013",
          "2012",
          "2011",
          "2010",
          "2009"
  	],
  	links: [
  		"http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com"
  	]
  })
})


module.exports = router