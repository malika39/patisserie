$(document).ready(function(){



// fade out title and redirect to accueil.php
$("#video").click(function() {
  $(this).fadeOut(4000);
  $("#skip").fadeOut(2000);
  setTimeout(function() {
       window.location.href = 'http://localhost:8888/accueil.php';
      }, 4000);
  });




$(window).on("scroll", function () {



   /* -----------------------------------
      section 1 appears on window scroll
    -----------------------------------  */

   if ($(this).scrollTop() > 100) {
      $("#presentation-section-1").css({"marginTop":"0px"});
      // $("h2.scroll1").css({"color":"#A7BA7C"});
      $("#presentation-section-1 p").css({"opacity":1});

   } else {
      $("#presentation-section-1").css({"marginTop":"200px"});
      // $("h2.scroll1").css({"opacity":"0"});
      $("#presentation-section-1 p").css({"opacity":0});
   }


  /* -----------------------------------
      section 2 appears on window scroll
    -----------------------------------  */

   if ($(this).scrollTop() > 300) {
      $("#presentation-section-2").css({"marginTop":"2rem"});
      // $("h2.scroll1").css({"color":"#A7BA7C"});
      $("#presentation-section-2 div").css({"opacity":1});

   } else {
      $("#presentation-section-2").css({"marginTop":"350px"});
      // $("h2.scroll1").css({"opacity":"0"});
      $("#presentation-section-2 div").css({"opacity":0});
   }



/* -----------------------------------
      section 3 appears on window scroll
    -----------------------------------  */

   if ($(this).scrollTop() > 500) {
      $("#presentation-section-3").css({"marginTop":"2rem"});
      // $("h2.scroll1").css({"color":"#A7BA7C"});
      $("#presentation-section-3 div").css({"opacity":1});

   } else {
      $("#presentation-section-3").css({"marginTop":"500px"});
      // $("h2.scroll1").css({"opacity":"0"});
      $("#presentation-section-3 div").css({"opacity":0});
   }


   /* -----------------------------------
      section 4 appears on window scroll
    -----------------------------------  */

   if ($(this).scrollTop() > 1200) {
      $("#presentation-section-4").css({"marginTop":"2rem"});
      // $("h2.scroll1").css({"color":"#A7BA7C"});
      $("#presentation-section-4 div").css({"opacity":1});

   } else {
      $("#presentation-section-4").css({"marginTop":"650px"});
      // $("h2.scroll1").css({"opacity":"0"});
      $("#presentation-section-4 div").css({"opacity":0});
   }



   /* -----------------------------------
      section 5 appears on window scroll
    -----------------------------------  */

   if ($(this).scrollTop() > 1800) {
      $("#presentation-section-5").css({"marginLeft":"5rem"});
      // $("h2.scroll1").css({"color":"#A7BA7C"});
      $("#presentation-section-5 div").css({"opacity":1});

   } else {
      $("#presentation-section-5").css({"marginLeft":"-70px"});
      // $("h2.scroll1").css({"opacity":"0"});
      $("#presentation-section-5 div").css({"opacity":0});
   }



  /* -----------------------------------
        section 6 appears on window scroll
      -----------------------------------  */

   if ($(this).scrollTop() > 2350) {
      $("#presentation-section-6").css({"marginTop":"2rem"});
      // $("h2.scroll1").css({"color":"#A7BA7C"});
      $("#presentation-section-6 div").css({"opacity":1});

   } else {
      $("#presentation-section-6").css({"marginTop":"1600px"});
      // $("h2.scroll1").css({"opacity":"0"});
      $("#presentation-section-6 div").css({"opacity":0});
   }


   /* -----------------------------------
        section 7 appears on window scroll
      -----------------------------------  */

   if ($(this).scrollTop() > 3200) {
      $("#presentation-section-7").css({"marginTop":"2rem"});
      // $("h2.scroll1").css({"color":"#A7BA7C"});
      $("#presentation-section-7 div").css({"opacity":1});

   } else {
      $("#presentation-section-7").css({"marginTop":"2200px"});
      // $("h2.scroll1").css({"opacity":"0"});
      $("#presentation-section-7 div").css({"opacity":0});
   }

  
});


});