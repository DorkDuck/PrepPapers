var express = require('express')
var router = express.Router()

var catLinks = [
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
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

var xatLinks = [
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com"
]
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
          "2006",
          "2005",
          "2004",
          "2003",
          "2002",
          "2001",
          "2000",
          "1999"
        ],
    saal : 17,
    links : catLinks
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
          "2008"
        ],
    saal : 8,
    links : xatLinks
  })
})

module.exports = router