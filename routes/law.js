var express = require('express')
var router = express.Router()

var clatLinks = [
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com"
]

var ailetLinks = [
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com"
]
router.get('/clat', function(req, res, next) {
  res.render('download_pages', {
    title : "CLAT Papers",
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
    links : clatLinks
  })
})

router.get('/ailet', function(req, res, next) {
  res.render('download_pages', {
    title : "AILET Papers",
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
    links : ailetLinks
  })
})

module.exports = router