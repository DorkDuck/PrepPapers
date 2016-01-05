var express = require('express')
var router = express.Router()

var catLinks = [
      "http://mba.hitbullseye.com/pdf/cat-2015-analysis.pdf",
      "https://drive.google.com/file/d/0B5SdM6PJadyEMnB6NHNveFBndk0/edit",
      "http://www.indiaeducation.net/management/CAT/download/CAT-Sample-Paper-1.pdf",
      "https://drive.google.com/file/d/0B45Zt7UZ_h2ocFNhR0FyakxabXM/edit",
      "http://admission.aglasem.com/cat-2011-previous-year-question-paper-answers/",
      "http://www.mywbut.com/cat/Papers/CAT%202010%20Paper%20with%20Answer%20Keys.pdf",
      "http://www.mywbut.com/cat/Papers/CAT%202009%20Paper%20with%20Answer%20Keys.pdf",
      "https://drive.google.com/file/d/0B7KCO87PWJ1PSUltR1AyUFdRVzQ/edit",
      "https://drive.google.com/file/d/0B7KCO87PWJ1PTmJ3SWZCTUVTNWs/edit",
      "https://drive.google.com/file/d/0B1MNt6pxsDvIdDNVVWJoMEZJb3c/edit",
      "https://drive.google.com/file/d/0B7KCO87PWJ1PTEZOanhnNlAwYWc/edit",
      "https://drive.google.com/file/d/0B7KCO87PWJ1PQ082ejZTSHRBQjg/edit",
      "https://drive.google.com/file/d/0B7KCO87PWJ1PU3g2X0lTWnBIb0k/edit",
      "https://drive.google.com/file/d/0B7KCO87PWJ1PbVNPRTVmeW5oNkU/edit",
      "https://drive.google.com/file/d/0B7KCO87PWJ1PMEduZVQ1VG9vZVU/edit",
      "https://drive.google.com/file/d/0B7KCO87PWJ1PSTRpbE5wcDA0X3M/edit"
]

var xatLinks = [
      "http://admission.aglasem.com/xat-2015-question-paper-with-solutions/",
      "http://admission.aglasem.com/xat-2014-question-paper-with-solutions/",
      "http://admission.aglasem.com/xat-2013-question-paper-with-solutions/",
      "http://admission.aglasem.com/xat-2012-question-paper-with-solutions/",
      "http://admission.aglasem.com/xat-2011-question-paper-with-solutions/",
      "http://admission.aglasem.com/xat-2010-question-paper-with-solutions/",
      "http://testfunda.com/DownloadHandler.AssessDwd?strFilePath=/Content/PastTestPapers/XAT/XAT_2009_Question_Paper_and_Ans_Key.pdf",
      "http://testfunda.com/DownloadHandler.AssessDwd?strFilePath=/Content/PastTestPapers/XAT/XAT_2008_Question_Paper_and_Ans_Key.pdf"
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
          "2000"
        ],
    saal : 16,
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