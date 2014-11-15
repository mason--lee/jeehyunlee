$(".sidebar").css({ opacity: 0 });
    
    var open = false;
    $(".x").click(function() {
      if(!open) {
        $(".x").addClass("close-toggle");
        $(".sidebar").addClass("animated fadeIn");
        open = true;
      }
      else {
        $(".x").removeClass("close-toggle");
        // if ($(".sidebar").hasClass("animated fadeIn")) {
        $(".sidebar").removeClass("animated fadeIn");
        $(".sidebar").css({ opacity: 0 });
        // }  
        open = false;
      } 
    });

    $("#main").click(function(e) {
      if ($(e.target).is('.x, .x *')) {
        return;
      }
      if ($(".x").hasClass("close-toggle")) {
        $(".x").removeClass("close-toggle");
        $(".sidebar").removeClass("animated fadeIn");
        $(".sidebar").css({ opacity: 0 });
        open = false;
      }
    });

    $("nav ul li a").click(function() {
      if ($(".x").hasClass("close-toggle")) {
        $(".x").removeClass("close-toggle");
        $(".sidebar").removeClass("animated fadeIn");
        $(".sidebar").css({ opacity: 0 });
        open = false;
      }
    });

    /*
      Add a loading spinner
     */
    $(window).load(function() {
      $(".spinner").fadeOut("slow");
    });

    if($(".spinner").css({ opacity: 0 })) {
      $(".spinner-wrapper").fadeOut("slow");
    }
    else if($(".spinner").css({ opacity: 1 })) {
      $(".spinner-wrapper").fadeIn("slow");
    }

    $(".collection li a img ").on("load", function() {
      $(".spinner").fadeOut("slow");
    });