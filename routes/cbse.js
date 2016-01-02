var express = require('express');
var router = express.Router();

var linksten = {
  "english-comm" : [
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://cbse.nic.in/curric~1/qp2010/delhi10/ENGLISH_COMMUNI_DELHI_X_10.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_X/Eng_Communicative_1_X_Out20091.pdf"
  ],
  "english-lang-lit" : [
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://cbse.nic.in/curric~1/qp2010/delhi10/ENGLISH_LL_DELHI_X_10.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_X/Eng_Lang&Liter_1_X_Out20091.pdf"
  ]
  "hindi-course-a" : [
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://cbse.nic.in/curric~1/qp2010/delhi10/HINDI_CO_A_DELHI_X_10.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_X/Hindi_CourseA_1_X_Out20091.pdf"
  ],
  "hindi-course-b" : [
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://cbse.nic.in/curric~1/qp2010/delhi10/HINDI_COUR_B_10.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_X/Hindi_CourseB_1_X_Out20091.pdf"
  ],
  "maths" : [
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://cbse.nic.in/curric~1/qp2010/delhi10/math10.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_X/Mathematics_1_X_Out20091.pdf"
  ],
  "science" : [
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://cbse.nic.in/curric~1/qp2010/delhi10/SCIENCE_THEOR_10.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_X/Science_1_X_Out20091.pdf"
  ],
  "social-science" : [
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://www.google.com",
      "http://cbse.nic.in/curric~1/qp2010/delhi10/social_science_DELHI_X_10.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_X/Social_Science_1_X_Out20091.pdf"
  ]
}

var linkstwelve = {
  "accountancy" : [
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
  ],
  "biology" : [
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
  ],
  "business-studies" : [
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
  ],
  "chemistry" : [
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
  ],
  "comp-science" : [
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
  ],
  "economics" : [
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
  ],
  "eng-graphics" : [
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
  ],
  "english-core" : [
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
  ],
  "english-elective" : [
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
  ],
  "enterpreneurship" : [
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
  ],
  "func-eng" : [
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
  ],
  "hindi-core" : [
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
  ],
  "hindi-elec" : [
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
  ],
  "history" : [
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
  ],
  "maths" : [
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
  ],
  "physics" : [
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
  ],
  "pol-science" : [
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
  ],
  "psychology" : [
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
}

router.get('/10-standard', function(req, res, next) {
  res.render('cbse_subjects', {
    title: "CBSE Class 12 Papers",
    subjects : [ 
          "English Communicative",
          "English Language and Literature",
          "Hindi Course A",
          "Hindi Course B",
          "Mathematics",
          "Science",
          "Social Science"
        ],
    subjectLinks : [
          "/cbse/10-standard/english-comm",
          "/cbse/10-standard/english-lang-lit",
          "/cbse/10-standard/hindi-course-a",
          "/cbse/10-standard/hindi-course-b",
          "/cbse/10-standard/maths",
          "/cbse/10-standard/science",
          "/cbse/10-standard/social-science"
        ],
    no_subjects : 7
  })
})

router.get('/10-standard/:subject', function(req, res, next) {
  var subject_title = "CBSE Class 10 Papers - " + (req.params.subject).toUpperCase()
  res.render('download_pages', {
    title : subject_title,
    years : [ 
          "2015",
          "2014",
          "2013",
          "2012",
          "2011",
          "2010",
          "2009"
        ],
    links : linksten[req.params.subject],
    saal : 7
  })
})

router.get('/12-standard', function(req, res, next) {
  res.render('cbse_subjects', {
  	title: "CBSE Class 12 Papers",
  	subjects : [ 
  				"Accountancy",
  				"Biology",
  				"Business Studies",
  				"Chemistry",
  				"Computer Science",
  				"Economics",
  				"Engineering Graphics",
  				"English (core)",
  				"English (elective)",
  				"Enterpreneurship" ,
          "Functional English",
          "Hindi (core)",
          "Hindi (elective)",
          "History",
          "Mathematics",
          "Physics",
          "Political Science",
          "Psychology"
  			],
    subjectLinks : [
          "/cbse/12-standard/accountancy",
          "/cbse/12-standard/biology",
          "/cbse/12-standard/business-studies",
          "/cbse/12-standard/chemistry",
          "/cbse/12-standard/comp-science",
          "/cbse/12-standard/economics",
          "/cbse/12-standard/eng-graphics",
          "/cbse/12-standard/english-core",
          "/cbse/12-standard/english-elective",
          "/cbse/12-standard/enterpreneurship",
          "/cbse/12-standard/func-eng",
          "/cbse/12-standard/hindi-core",
          "/cbse/12-standard/hindi-elec",
          "/cbse/12-standard/history",
          "/cbse/12-standard/maths",
          "/cbse/12-standard/physics",
          "/cbse/12-standard/pol-science",
          "/cbse/12-standard/psychology"
        ],
    no_subjects : 18
  })
})

router.get('/12-standard/:subject', function(req, res, next) {
  var subject_title = "CBSE Class 12 Papers - " + (req.params.subject).toUpperCase()
  res.render('download_pages', {
    title : subject_title,
    years : [ 
          "2015",
          "2014",
          "2013",
          "2012",
          "2011",
          "2010",
          "2009"
        ],
    links : linkstwelve[req.params.subject],
    saal: 7
  })
})

module.exports = router;