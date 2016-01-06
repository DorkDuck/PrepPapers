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
      "http://www.upsc.gov.in/questionpaper/2015.htm#PageTop",
  		"http://www.upsc.gov.in/questionpaper/2014.htm#PageTop",
      "http://www.upsc.gov.in/questionpaper/2013.htm#PageTop",
      "http://www.upsc.gov.in/questionpaper/2012.htm#PageTop",
      "http://www.upsc.gov.in/questionpaper/2011.htm#PageTop",
      "http://www.upsc.gov.in/questionpaper/2010.htm#PageTop",
      "http://www.upsc.gov.in/questionpaper/2009.htm#PageTop"
  	]
  })
})


module.exports = router