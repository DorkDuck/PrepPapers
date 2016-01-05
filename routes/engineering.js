var express = require('express')
var router = express.Router()

var jeemLinks = [
      "http://www.vidyalankar.org/file/JEEMain/JEEMAIN-2015_Question_Paper_Solution.pdf",
      "http://www.vidyalankar.org/file/JEE-MAIN-2014-Question-Paper-and-Solution.pdf",
      "http://www.vidyalankar.org/file/iit_jee/JEE-MAIN-2013-Question-Paper-and-Solution.pdf"
]

var jeeaLinks = [
      "http://www.vidyalankar.org/jee-advanced-2015-solution-answerkey.aspx",
      "http://admission.aglasem.com/iit-jee-advanced-2014-question-paper-answers/",
      "http://admission.aglasem.com/iit-jee-advanced-2013-question-paper-answers/"
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