$("document").ready(function(){
  $("#menuBtns").hide();

  var navBtns = $("a.navBtn"),
      navLines = navBtns.find("div.navLine");

    navBtns.click(function(){
      navLines.toggleClass("active");
      $("#menuBtns").toggle();

    });

    $("body").click(function(){
    //  var audio = $("#flick")[0];
      //audio.play();
    var flicker = $("span.flickering-1");
    flicker.animate({opacity: '1'}, 150);
    flicker.animate({opacity: '0'}, 80);
    flicker.animate({opacity: '1'}, 300);
    flicker.animate({opacity: '0'}, 80);
    flicker.animate({opacity: '1'}, 120);
    flicker.animate({opacity: '0'}, 80);
    flicker.animate({opacity: '1'}, 100);
    });


    setTimeout(function(){
      $('body').addClass('loaded');

    }, 3000);


  $.scrollify({
    section : ".cd-section",
    before: function (section) {
      console.log(section);
      if (section===1){
        $(".leftSideT").addClass("fadeInLeftBig");
        $(".rightSideT").addClass("fadeInRightBig");
      }
      else {
        $(".leftSideT").removeClass("fadeInLeftBig");
        $(".rightSideT").removeClass("fadeInRightBig");
      }
    }
  });
});
