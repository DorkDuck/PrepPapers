var express = require('express')
var router = express.Router()

var aipmtLinks = [
      "http://www.allen.ac.in/re-aipmt-2015/RE-AIPMT-Paper-2015.pdf",
      "http://www.medicine.careers360.com/sites/default/files/Allen-AIPMT-2014-Paper-Answer-Solution-Physics_0.pdf",
      "http://www.mycollegebag.in/uploads/9/2/0/3/9203182/neet-2013-solutions-code-w.pdf",
      "http://www.mycollegebag.in/uploads/9/2/0/3/9203182/aipmt-2012-pref.pdf",
      "http://www.mycollegebag.in/uploads/9/2/0/3/9203182/aipmt_2011_prelims_solved_paperf.pdf",
      "http://www.mycollegebag.in/uploads/9/2/0/3/9203182/aipmt_2010_prelims_with_solutionf.pdf",
      "http://www.mycollegebag.in/uploads/9/2/0/3/9203182/aipmt_2009_full_paperf.pdf",
      "http://www.mycollegebag.in/uploads/9/2/0/3/9203182/aipmt_2008_full_paperf.pdf",
      "http://www.mycollegebag.in/uploads/9/2/0/3/9203182/aipmt_2007_screeningf.pdf"
]

var aiimsLinks = [
      "http://www.indiaeducation.net/imagesvr_ce/9952/AIIMS_MBBS_2013_Sample%20Paper.pdf",
      "http://admission.aglasem.com/aiims-mbbs-2012-question-paper-answers/",
      "http://admission.aglasem.com/aiims-mbbs-2011-previous-year-question-papers-with-answers/",
      "http://admission.aglasem.com/aiims-mbbs-2010-previous-year-question-papers-with-answers/",
      "http://admission.aglasem.com/aiims-mbbs-2009-previous-year-question-papers-with-answers/",
      "http://admission.aglasem.com/aiims-mbbs-2008-previous-year-question-papers-with-answers/"
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
          "2013",
          "2012",
          "2011",
          "2010",
          "2009",
          "2008"
        ],
    saal : 6,
    links : aiimsLinks
  })
})

module.exports = router