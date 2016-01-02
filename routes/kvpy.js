var express = require('express')
var router = express.Router()

var kvpyLink = [
      "http://schools.aglasem.com/1135"
]


router.get('/', function(req, res, next) {
  res.render('download_pages', {
    title : "KVPY Papers",
    years : [ 
          "2009 - 2015"
        ],
    saal : 1,
    links : kvpyLink
  })
})

module.exports = router