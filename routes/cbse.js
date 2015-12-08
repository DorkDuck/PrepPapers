var express = require('express');
var router = express.Router();


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
  res.render('download_pages', {
  	title: "CBSE Class 10 Papers",
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
  				"2006"
  			],
  	branches : 3,
    branchname : [
          "All India",
          "Delhi Region",
          "Foreign"
        ]
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
        ]
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
          "2009",
          "2008",
          "2007",
          "2006"
        ],
    links : linkstwelve[req.params.subject]
  })
})
module.exports = router;