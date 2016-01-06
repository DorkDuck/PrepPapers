var express = require('express')
var router = express.Router()

var clatLinks = [
      "http://www.examrace.com/d/pdf/dd21b4b3/CLAT-Solved-Paper-2015.pdf",
      "http://www.examrace.com/d/pdf/e8db6b86/CLAT-Solved-Paper-2014.pdf",
      "http://www.examrace.com/d/pdf/f7b6eb98/CLAT-2013-Solved-Paper.pdf",
      "http://www.sakshieducation.com/PreviousPapers/CLAT/clat-2012_QuestionPaper.pdf",
      "http://www.examrace.com/d/pdf/9e78745b/CLAT-Solved-Paper-2011.pdf",
      "http://www.examrace.com/d/pdf/2eff8dcf/CLAT-Solved-Paper-2010.pdf",
      "http://www.examrace.com/d/pdf/cdf2392c/CLAT-Solved-Paper-2009.pdf",
      "http://www.examrace.com/d/pdf/63a82c6a/CLAT-Solved-Paper-2008.pdf"
]

var ailetLinks = [
      "http://www.nludelhi.ac.in/download/2015/ailet-2015/booklet/Question-Booklet.pdf",
      "http://media.careerlauncher.com.s3.amazonaws.com/acads_download_section/LST/AILET-2014-Question-Booklet.pdf",
      "http://crackclat.com/mycrackclat/AILET-2013-paper.pdf",
      "http://crackclat.com/mycrackclat/AILET-2012_Question_Booklet.pdf",
      "http://clatambition.com/files/AILET_NLU_DELHI_2011.pdf",
      "http://clatambition.com/files/AILET_NLU_DELHI_2010.pdf",
      "http://www.lawgurukul.com/wp-content/uploads/2015/01/AILET-2009.pdf",
      "http://www.lawgurukul.com/wp-content/uploads/2015/01/NLU-Delhi-2008.pdf"
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