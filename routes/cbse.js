var express = require('express');
var router = express.Router();

var linksten = {
  "english-comm" : [
      "https://drive.google.com/file/d/0B14M4ID1Z9cQamNDbU5EWTdGclU/view",
      "https://drive.google.com/file/d/0B14M4ID1Z9cQZEJiY2szSVh6eU0/view",
      "http://cbse.nic.in/curric~1/qp2013/QP_MAIN/QP_X/English_Com_set1.pdf",
      "http://cbse.nic.in/curric~1/qp2012/SamplePaperX/Set1/English(Comm)1_X_2012.pdf",
      "http://cbse.nic.in/curric~1/qp2011/RHB/English%20Communicative0001.pdf",
      "http://cbse.nic.in/curric~1/qp2010/delhi10/ENGLISH_COMMUNI_DELHI_X_10.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_X/Eng_Communicative_1_X_Out20091.pdf"
  ],
  "english-lang-lit" : [
      "https://drive.google.com/file/d/0B14M4ID1Z9cQZVNfbnFTbHZGQWs/view",
      "https://drive.google.com/file/d/0B14M4ID1Z9cQREFodWw2OXYzVVU/view",
      "http://cbse.nic.in/curric~1/qp2013/QP_MAIN/QP_X/English_Literature_Set1.pdf",
      "http://cbse.nic.in/curric~1/qp2012/SamplePaperX/Set1/English(Lang&Lite)1_X_2012.pdf",
      "http://cbse.nic.in/curric~1/qp2011/RHB/English%20Language%20and%20Literature0001.pdf",
      "http://cbse.nic.in/curric~1/qp2010/delhi10/ENGLISH_LL_DELHI_X_10.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_X/Eng_Lang&Liter_1_X_Out20091.pdf"
  ],
  "hindi-course-a" : [
      "https://drive.google.com/file/d/0B14M4ID1Z9cQTGtpRG1jdkNQQW8/view",
      "https://drive.google.com/file/d/0B14M4ID1Z9cQeGZMWFlMYVAyTFE/view",
      "http://cbse.nic.in/curric~1/qp2013/QP_MAIN/QP_X/Hindi_CoursA.pdf",
      "http://cbse.nic.in/curric~1/qp2012/SamplePaperX/Set1/Hindi(Course%20A)1_X_2012.pdf",
      "http://cbse.nic.in/curric~1/qp2011/RHB/Hindi%20(Course%20A)0001.pdf",
      "http://cbse.nic.in/curric~1/qp2010/delhi10/HINDI_CO_A_DELHI_X_10.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_X/Hindi_CourseA_1_X_Out20091.pdf"
  ],
  "hindi-course-b" : [
      "https://drive.google.com/file/d/0B14M4ID1Z9cQaFkwOTRaUXN5R3c/view",
      "https://drive.google.com/file/d/0B14M4ID1Z9cQQ2JnbnE4QnJxYUk/view",
      "http://cbse.nic.in/curric~1/qp2013/QP_MAIN/QP_X/Hindi_CoursB.pdf",
      "http://cbse.nic.in/curric~1/qp2012/SamplePaperX/Set1/Hindi(Course%20B)1_X_20120001.pdf",
      "http://cbse.nic.in/curric~1/qp2011/RHB/Hindi%20(Course%20B).pdf",
      "http://cbse.nic.in/curric~1/qp2010/delhi10/HINDI_COUR_B_10.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_X/Hindi_CourseB_1_X_Out20091.pdf"
  ],
  "maths" : [
      "https://drive.google.com/file/d/0B14M4ID1Z9cQZ2dvR3NENWFaRDA/view",
      "https://drive.google.com/file/d/0B14M4ID1Z9cQMVIxT0lHMF9CSjA/view",
      "http://cbse.nic.in/curric~1/qp2013/QP_MAIN/QP_X/Math_Set_No.pdf",
      "http://cbse.nic.in/curric~1/qp2012/SamplePaperX/Set1/Mathematics_1_X_2012.pdf",
      "http://cbse.nic.in/curric~1/qp2011/RHB/Mathematics0001.pdf",
      "http://cbse.nic.in/curric~1/qp2010/delhi10/math10.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_X/Mathematics_1_X_Out20091.pdf"
  ],
  "science" : [
      "https://drive.google.com/file/d/0B14M4ID1Z9cQMGFPdUNIeTRRakk/view",
      "https://drive.google.com/file/d/0B14M4ID1Z9cQZFlINWNuUE5peUE/view",
      "http://cbse.nic.in/curric~1/qp2013/QP_MAIN/QP_X/Science_Set_No_1.pdf",
      "http://cbse.nic.in/curric~1/qp2012/SamplePaperX/Set1/Science1_X_2012.pdf",
      "http://cbse.nic.in/curric~1/qp2011/RHB/Science0001.pdf",
      "http://cbse.nic.in/curric~1/qp2010/delhi10/SCIENCE_THEOR_10.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_X/Science_1_X_Out20091.pdf"
  ],
  "social-science" : [
      "https://drive.google.com/file/d/0B14M4ID1Z9cQbHBQMlZpcXNVcU0/view",
      "https://drive.google.com/file/d/0B14M4ID1Z9cQVW5HdUVucFMxVnM/view",
      "http://cbse.nic.in/curric~1/qp2013/QP_MAIN/QP_X/Social_Science_Set_No_1.pdf",
      "http://cbse.nic.in/curric~1/qp2012/SamplePaperX/Set1/SOCIAL%20SCIENCE_1_X_2012.pdf",
      "http://cbse.nic.in/curric~1/qp2011/RHB/Social%20Science.pdf",
      "http://cbse.nic.in/curric~1/qp2010/delhi10/social_science_DELHI_X_10.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_X/Social_Science_1_X_Out20091.pdf"
  ]
}

var linkstwelve = {
  "accountancy" : [
      "http://media.mycbseguide.com/files/12/accountancy/lyp/2015_12_lyp_accoutancy_set1_outside_qp.pdf?Signature=oDR3TddSDjv30iBO0D1BUAXBXaw%3D&Expires=1452042302&AWSAccessKeyId=AKIAIUU7QLRROL6JEIPA",
      "http://media.mycbseguide.com/files/12/accountancy/lyp/2014_12_lyp_accountancy_04_outside_delhi.pdf?Signature=PD6VX%2FGlI5xuhmPy7K4l%2BK5OqYU%3D&Expires=1452052045&AWSAccessKeyId=AKIAIUU7QLRROL6JEIPA",
      "http://cbse.nic.in/curric~1/qp2013/QP_MAIN/QP_X11/Accountancy_Code_%20No_67.pdf",
      "http://cbse.nic.in/curric~1/qp2012/SamplePaperX11/Set1/ACCOUNTANCY_1_X11_2012.pdf",
      "http://cbse.nic.in/curric~1/qp2011/SOS/Accountancy.pdf",
      "http://cbse.nic.in/curric~1/qp2010/12/ACCOUNTANCY.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_OUTSIDE2009/Accountancy_1_XII_Out20091.pdf"
  ],
  "biology" : [
      "http://media.mycbseguide.com/files/12/biology/lyp/2015_12_lyp_biology_theory_set1_outside_qp.pdf?Signature=z%2Fialic%2B62XsMQMUyD7y3qKRITo%3D&Expires=1452040161&AWSAccessKeyId=AKIAIUU7QLRROL6JEIPA",
      "http://media.mycbseguide.com/files/12/biology/lyp/2014_12_lyp_biology_05_outside_delhi.pdf?Signature=W9NI2Ilpf%2FjeQ2kn%2BZWFz8sDfwE%3D&Expires=1452049067&AWSAccessKeyId=AKIAIUU7QLRROL6JEIPA",
      "http://cbse.nic.in/curric~1/qp2013/QP_MAIN/QP_X11/Biology_Code_No_57.pdf",
      "http://cbse.nic.in/curric~1/qp2012/SamplePaperX11/Set1/BIOLOGY_1_X11_2012.pdf",
      "http://cbse.nic.in/curric~1/qp2011/SOS/Biology(Theory).pdf",
      "http://cbse.nic.in/curric~1/qp2010/12/BIOLOGY_TH_12.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_OUTSIDE2009/Bio_Theory_1_XII_Out20091.pdf"
  ],
  "business-studies" : [
      "http://schools.aglasem.com/64586",
      "http://schools.aglasem.com/48124",
      "http://cbse.nic.in/curric~1/qp2013/QP_MAIN/QP_X11/Business_Studies_code_66.pdf",
      "http://cbse.nic.in/curric~1/qp2012/SamplePaperX11/Set1/BUSINESS_STUDIES_1_X11_2012.pdf",
      "http://cbse.nic.in/curric~1/qp2011/SOS/Business%20studies.pdf",
      "http://cbse.nic.in/curric~1/qp2010/12/BUSINESS%20STUDIES.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_OUTSIDE2009/Business_Stud_1_XII_Out20091.pdf"
  ],
  "chemistry" : [
      "https://docs.google.com/uc?export=download&id=0B7wgH7yuc6glQjRJYkRsV0pFODQ",
      "http://media.mycbseguide.com/files/12/chemistry/lyp/2014_12_lyp_chemistry_04_outside_delhi.pdf?Signature=Wz75f9uQSuUQCfx%2FFPmDpjjNNPM%3D&Expires=1452045723&AWSAccessKeyId=AKIAIUU7QLRROL6JEIPA",
      "http://cbse.nic.in/curric~1/qp2013/QP_MAIN/QP_X11/Chemistry_(Theory)_56_Set_1.pdf",
      "http://cbse.nic.in/curric~1/qp2012/SamplePaperX11/Set1/CHEMISTRY_1_X11_2012.pdf",
      "http://cbse.nic.in/curric~1/qp2011/SOS/Chemistry(Theory).pdf",
      "http://cbse.nic.in/curric~1/qp2010/12/CHEMESTRY2.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_OUTSIDE2009/Chem_Theory_1_XII_Out20091.pdf"
  ],
  "economics" : [
      "http://media.mycbseguide.com/files/12/economics/lyp/2015_12_lyp_economics_set1_outside_qp.pdf?Signature=F6pxyZ3rl2KGyqRHghHBUk9enkg%3D&Expires=1452049594&AWSAccessKeyId=AKIAIUU7QLRROL6JEIPA",
      "http://media.mycbseguide.com/files/12/economics/lyp/2014_12_lyp_economics_04_outside_delhi.pdf?Signature=%2Bo2yVRdQG8dMvYwOw7kav4i%2FsnA%3D&Expires=1452054464&AWSAccessKeyId=AKIAIUU7QLRROL6JEIPA",
      "http://cbse.nic.in/curric~1/qp2013/QP_MAIN/QP_X11/Economics_Code_No_58_Set_No_1.pdf",
      "http://cbse.nic.in/curric~1/qp2012/SamplePaperX11/Set1/ECONOMICS_1_X11_2012.pdf",
      "http://cbse.nic.in/curric~1/qp2011/SOS/Economics.pdf",
      "http://cbse.nic.in/curric~1/qp2010/12/ECONOMICS.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_OUTSIDE2009/Economics_1_XII_Out20091.pdf"
  ],
  "english-core" : [
      "http://media.mycbseguide.com/files/12/engcore/lyp/2015_12_lyp_english_core_01.pdf?Signature=QVusBANI%2FAOlLllKRTX4GbmLLbA%3D&Expires=1452038669&AWSAccessKeyId=AKIAIUU7QLRROL6JEIPA",
      "http://media.mycbseguide.com/files/12/engcore/lyp/2014_12_lyp_english_core_04_outside_delhi.pdf?Signature=EHAY8lxEz82Osy1zcK41RNy4288%3D&Expires=1452039292&AWSAccessKeyId=AKIAIUU7QLRROL6JEIPA",
      "http://cbse.nic.in/curric~1/qp2013/QP_MAIN/QP_X11/English_Core_Code_Set_No_1.pdf",
      "http://cbse.nic.in/curric~1/qp2012/SamplePaperX11/Set1/ENGLISH(CORE)1_X11_2012.pdf",
      "http://cbse.nic.in/curric~1/qp2011/SOS/English%20(Core).pdf",
      "http://cbse.nic.in/curric~1/qp2010/12/ENGLISH%20(CORE)1.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_OUTSIDE2009/Eng_Core_1_XII_Out20091.pdf"
  ],
  "english-elective" : [
      "http://media.mycbseguide.com/files/12/engelective/lyp/2015_12_lyp_english_elective_cbse_allsets_qp.pdf?Signature=LeDbcL7ZoJtsJFD%2BmklUGelhDXE%3D&Expires=1452049788&AWSAccessKeyId=AKIAIUU7QLRROL6JEIPA",
      "http://media.mycbseguide.com/files/12/engelective/lyp/2014_12_lyp_english_elective_01_outside_delhi.pdf?Signature=0%2Bw9n4NNw7An3Xf%2BKglmuVnOZus%3D&Expires=1452056393&AWSAccessKeyId=AKIAIUU7QLRROL6JEIPA",
      "http://cbse.nic.in/curric~1/qp2013/QP_MAIN/QP_X11/English_Elective_28.pdf",
      "http://cbse.nic.in/curric~1/qp2012/SamplePaperX11/Set1/ENGLISH(ELECTIVE)1_X11_2012.pdf",
      "http://cbse.nic.in/curric~1/qp2011/SOS/English%20(Elective).pdf",
      "http://cbse.nic.in/curric~1/qp2010/12/ENGLISH%20(ELECTIVE).pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_OUTSIDE2009/Eng_Elect_1_XII_Out20091.pdf"
  ],
  "func-eng" : [
      "https://drive.google.com/file/d/0B_FA9I2gBCC8R2phZEVYS0hDUXc/edit",
      "http://media.mycbseguide.com/files/12/engfunctional/lyp/2014_12_lyp_functional_english_compt_01_outside_delhi.pdf?Signature=I01VB1LdqbFfeWjyPVr4vTSANK8%3D&Expires=1452053579&AWSAccessKeyId=AKIAIUU7QLRROL6JEIPA",
      "http://cbse.nic.in/curric~1/qp2013/QP_MAIN/QP_X11/Functional_English_212.pdf",
      "http://cbse.nic.in/curric~1/qp2012/SamplePaperX11/Set1/FUNCTIONAL_ENG_X11_2012.pdf",
      "http://cbse.nic.in/curric~1/qp2011/SOS/Functional%20English.pdf",
      "http://cbse.nic.in/curric~1/qp2010/12/FUNCTIONAL%20ENGLISH.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_DELHI2009/Functional_Eng_1_XII_Del20091.pdf"
  ],
  "hindi-core" : [
      "http://media.mycbseguide.com/files/12/hindicore/lyp/2015_12_lyp_hindi_core_set1_outside_qp.pdf?Signature=eyFsZVYv%2FhgzxsNbDTBRCdh97pk%3D&Expires=1452056786&AWSAccessKeyId=AKIAIUU7QLRROL6JEIPA",
      "http://media.mycbseguide.com/files/12/hindicore/lyp/2014_12_lyp_hindi_core_04_outside_delhi.pdf?Signature=PP2i74ETOu0SH%2FbdXcxYcR49K%2Fw%3D&Expires=1452069718&AWSAccessKeyId=AKIAIUU7QLRROL6JEIPA",
      "http://cbse.nic.in/curric~1/qp2013/QP_MAIN/QP_X11/Hindi_Core_1.pdf",
      "http://cbse.nic.in/curric~1/qp2012/SamplePaperX11/Set1/HINDI%20(CORE)1_X11_2012.pdf",
      "http://cbse.nic.in/curric~1/qp2011/SOS/Hindi%20(Core).pdf",
      "http://cbse.nic.in/curric~1/qp2010/12/HINDI_CORE_12.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_OUTSIDE2009/Hindi_Core_1_XII_Out20091.pdf"
  ],
  "hindi-elec" : [
      "http://media.mycbseguide.com/files/12/hindielective/lyp/2015_12_lyp_hindi_elective_set1_outside_qp.pdf?Signature=rwj2ZFIrguPEzO7ak4pXODzEaQk%3D&Expires=1452093773&AWSAccessKeyId=AKIAIUU7QLRROL6JEIPA",
      "http://media.mycbseguide.com/files/12/hindielective/lyp/2014_12_lyp_hindi_elective_04_outside_delhi.pdf?Signature=QlXiGK9iB95qNp04%2Fzs5XIG8WnY%3D&Expires=1452094792&AWSAccessKeyId=AKIAIUU7QLRROL6JEIPA",
      "http://cbse.nic.in/curric~1/qp2013/QP_MAIN/QP_X11/Hindi_(Elective)_29.pdf",
      "http://cbse.nic.in/curric~1/qp2012/SamplePaperX11/Set1/HINDI(ELECTIVE)1_X11_2012.pdf",
      "http://cbse.nic.in/curric~1/qp2011/SOS/Hindi(Elective).pdf",
      "http://cbse.nic.in/curric~1/qp2010/12/HINDI%20(ELECTIVE)1.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_OUTSIDE2009/Hindi_Elect_1_XII_Out20091.pdf"
  ],
  "history" : [
      "http://media.mycbseguide.com/files/12/history/lyp/2015_lyp_class_12_history_set1_delhi_out_side_qp.pdf?Signature=%2FDo92TIv4hFrMy1y9SD%2BRB2rxLg%3D&Expires=1452052771&AWSAccessKeyId=AKIAIUU7QLRROL6JEIPA",
      "http://media.mycbseguide.com/files/12/history/lyp/2014_12_lyp_history_04_outside_delhi.pdf?Signature=HSLSryl3mlw8KC33JtX9iHZf48c%3D&Expires=1452055608&AWSAccessKeyId=AKIAIUU7QLRROL6JEIPA",
      "http://cbse.nic.in/curric~1/qp2013/QP_MAIN/QP_X11/History_61.pdf",
      "http://cbse.nic.in/curric~1/qp2012/SamplePaperX11/Set1/HISTORY_1_X11_2012.pdf",
      "http://cbse.nic.in/curric~1/qp2011/SOS/history.pdf",
      "http://cbse.nic.in/curric~1/qp2010/12/HISTORY.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_OUTSIDE2009/History_1_XII_Out20091.pdf"
  ],
  "maths" : [
      "https://docs.google.com/uc?export=download&id=0B7wgH7yuc6glclNXcV9IaWp6UHc",
      "http://jsuniltutorial.weebly.com/uploads/7/8/7/0/7870542/cbse_board-xii_maths_paper_solution_of_201465.pdf",
      "http://cbse.nic.in/curric~1/qp2013/QP_MAIN/QP_X11/Math_Code_No_1.pdf",
      "http://cbse.nic.in/curric~1/qp2012/SamplePaperX11/Set1/MATHEMATICS_1_X11_2012.pdf",
      "http://cbse.nic.in/curric~1/qp2011/SOS/Mathematics.pdf",
      "http://cbse.nic.in/curric~1/qp2010/12/MATHEMATICS.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_OUTSIDE2009/Mathematics_1_XII_Out20091.pdf"
  ],
  "physics" : [
      "https://docs.google.com/uc?export=download&id=0B7wgH7yuc6glZ2FNX1VTOG5XMFU",
      "https://docs.google.com/uc?export=download&id=0B7wgH7yuc6glWVJ6NnFjNXZsRlk",
      "http://cbse.nic.in/curric~1/qp2013/QP_MAIN/QP_X11/physics_1.pdf",
      "http://cbse.nic.in/curric~1/qp2012/SamplePaperX11/Set1/PHYSICS_1_X11_2012.pdf",
      "http://cbse.nic.in/curric~1/qp2011/SOS/Physics(Theory).pdf",
      "http://cbse.nic.in/curric~1/qp2010/12/PHYSICS2.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_OUTSIDE2009/Phys_Theory_1_XII_Out20091.pdf"
  ],
  "pol-science" : [
      "http://media.mycbseguide.com/files/12/polscience/lyp/2015_lyp_class_12_political_science_set1_delhi_out_side_qp.pdf?Signature=nSq37dJ2KJvJ%2FjnXvYDt92o01PA%3D&Expires=1452043776&AWSAccessKeyId=AKIAIUU7QLRROL6JEIPA",
      "http://media.mycbseguide.com/files/12/polscience/lyp/2014_12_lyp_political_science_04_outside_delhi.pdf?Signature=YQEiICnmpY1ra397KquDyexJu0s%3D&Expires=1452066024&AWSAccessKeyId=AKIAIUU7QLRROL6JEIPA",
      "http://cbse.nic.in/curric~1/qp2013/QP_MAIN/QP_X11/Political_Science_59.pdf",
      "http://cbse.nic.in/curric~1/qp2012/SamplePaperX11/Set1/POLITICAL_%20SCIENCE_1_X11_2012.pdf",
      "http://cbse.nic.in/curric~1/qp2011/SOS/Political%20Science.pdf",
      "http://cbse.nic.in/curric~1/qp2010/12/POLITICAL%20SCIENCE2.pdf",
      "http://cbse.nic.in/curric~1/qp2009/Ques_Paper/Ques_Paper_OUTSIDE2009/Political_Sci_1_XII_Out20091.pdf"
  ]
}

router.get('/10-standard', function(req, res, next) {
  res.render('cbse_subjects', {
    title: "CBSE Class 10 Papers",
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
  				"Economics",
  				"English (core)",
  				"English (elective)",
          "Functional English",
          "Hindi (core)",
          "Hindi (elective)",
          "History",
          "Mathematics",
          "Physics",
          "Political Science"
  			],
    subjectLinks : [
          "/cbse/12-standard/accountancy",
          "/cbse/12-standard/biology",
          "/cbse/12-standard/business-studies",
          "/cbse/12-standard/chemistry",
          "/cbse/12-standard/economics",
          "/cbse/12-standard/english-core",
          "/cbse/12-standard/english-elective",
          "/cbse/12-standard/func-eng",
          "/cbse/12-standard/hindi-core",
          "/cbse/12-standard/hindi-elec",
          "/cbse/12-standard/history",
          "/cbse/12-standard/maths",
          "/cbse/12-standard/physics",
          "/cbse/12-standard/pol-science"
        ],
    no_subjects : 14
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