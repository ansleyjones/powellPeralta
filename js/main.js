$(document).ready(function(){
  home.init();



});


var home = {
  init: function(){
    this.initStyling();
    this.initEvents();
  },
  initStyling: function(){

  },
  initEvents: function(){

// LOADS RSS FEED
  google.load("feeds", "1");
  function initialize(){
    var feed = new google.feeds.Feed("http://powell-peralta.com/blog/rss");
    feed.setNumEntries(3);
    feed.load(function(result){
      console.log(result.feed.entries);
      var entry = window.entry = result.feed.entries;
      var target = $(".news");
      var postTmpl = _.template(rssTmpl);
      console.log(postTmpl(entry));
      target.html(postTmpl(entry));
    });
    }
    google.setOnLoadCallback(initialize);


// FIXES NAV BAR ON SCROLL
      var navPosition = $(".navBar").offset();
      console.log(navPosition.top);
      $(window).bind("scroll", function() {
      if ($(window).scrollTop() >= navPosition.top) {
        $(".navBar").addClass("fixedNav").addClass("fadeBkg");

       }
       else {
         $(".navBar").removeClass("fixedNav").removeClass("fadeBkg");
       }
      });

// CONTROLLED SCROLL FUNCTIONALITY ON TOP NAV
      $('.nwz').click(function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
      });

      $('.sk8brdrz').click(function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
      });

      $('.brdz').click(function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
      });

      $('.cntct').click(function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
      });

      $('.item').click(function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
      });




// TRYING TO SCROLL RIGHT AND LEFT ON BOARDS...
      // $('.rightScroll').click(function(event){
      //   console.log('here');
      //   $('.skateboards ul').css("float", "left");
      //   return false;
      // });

// SCROLL ARROW [NOT WORKING]
    // $(window).on("scroll", function() {
    // var positionY = window.pageYOffset + 70;
    // var newsPosition = $(".news").position();
    // var skatersPosition = $("#sk8brdrz").position();
    // var boardzPosition = $(".skateboards").position();
    // var bcPosition = $(".bottomContact").position();
    //   if (positionY > newsPosition.top && positionY < skatersPosition.top) {
    //     $(".slideArrow").removeClass("hide");
    //     $(".arrow p").html("SK8 NEWS");
    //   }if (positionY > skatersPosition.top && positionY < boardzPosition.top) {
    //     $(".slideArrow").removeClass("hide");
    //     $(".arrow p").html("SKATERS");
    //   }if (positionY > boardzPosition.top && positionY < bcPosition.top) {
    //     $(".slideArrow").removeClass("hide");
    //     $(".arrow p").html("BOARDS");
    //   }if (positionY > bcPosition.top) {
    //     $(".slideArrow").removeClass("hide");
    //     $(".arrow p").html("CONTACT");
    //   }if (positionY < newsPosition.top) {
    //     $(".slideArrow").addClass("hide");
    //   }
    // });

// TOGGLES TEXT ON SKATER IMAGES
      $(".sk8image").on("click", function(event){
        console.log('here');
        $(this).find(".name").fadeToggle("slow");
      });

// EMAIL VALIDATION ON CONTACT FORM
      $(".contactForm").on("submit", function(event){
        console.log("here again");
        console.log($(".emailAddy").val());
        event.preventDefault();
        var em = ($(".emailAddy").val());
        var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRegex.test(em) === false){
          $("small").removeClass("hide");
        }
        
      });

// TIMED CAROUSEL FUNCTIONALITY
      var timer = setInterval(carouselTime, 4000);
      function carouselTime(){
        if($(".active").hasClass("one")) {
          $(".one").removeClass("active");
          $(".two").addClass("active");
          $("#one").parent("li").find(".slideImage").addClass("moveOutImage").removeClass("moveInImage");
          $("#two").parent("li").find(".slideImage").addClass("moveOutImage").removeClass("moveInImage");
          $("#three").parent("li").find(".slideImage").addClass("moveOutImage").removeClass("moveInImage");
        }else if ($(".active").hasClass("two")) {
          $(".two").removeClass("active");
          $(".three").addClass("active");
          $("#one").parent("li").find(".slideImage").addClass("moveInImage");
          $("#two").parent("li").find(".slideImage").addClass("moveInImage");
          $("#three").parent("li").find(".slideImage").addClass("moveInImage");
        }else if($(".active").hasClass("three")) {
          $(".three").removeClass("active");
          $(".one").addClass("active");
          $("#one").parent("li").find(".slideImage").removeClass("moveOutImage moveInImage");
          $("#two").parent("li").find(".slideImage").removeClass("moveOutImage moveInImage");
          $("#three").parent("li").find(".slideImage").removeClass("moveOutImage moveInImage");
        }
      };
    ///CLICK CAROUSEL FUNCTIONALITY///
    $(".carouselBullets").on("click", "li", function(e){
      e.preventDefault();
      $(this).addClass("active");
      $(this).parent("a").siblings().children().removeClass("active");
      if($(this).hasClass("one")) {
        $("#one").parent("li").find(".slideImage").removeClass("moveOutImage moveInImage");
        $("#two").parent("li").find(".slideImage").removeClass("moveOutImage moveInImage");
        $("#three").parent("li").find(".slideImage").removeClass("moveOutImage moveInImage");
      }else if ($(this).hasClass("two")) {
        $("#one").parent("li").find(".slideImage").addClass("moveOutImage").removeClass("moveInImage");
        $("#two").parent("li").find(".slideImage").addClass("moveOutImage").removeClass("moveInImage");
        $("#three").parent("li").find(".slideImage").addClass("moveOutImage").removeClass("moveInImage");
      }else if($(this).hasClass("three")) {
        $("#one").parent("li").find(".slideImage").addClass("moveInImage");
        $("#two").parent("li").find(".slideImage").addClass("moveInImage");
        $("#three").parent("li").find(".slideImage").addClass("moveInImage");
      }

    });

   }


}
