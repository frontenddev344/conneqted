$(document).ready(function(){
    $(".menu-toggle").click(function(){
      $("body").addClass("toggle");
      $(".closed-menu").click(function(){
        $("body").removeClass("toggle");
      });
    });
    
    $(document).ready(function () {
      // Show the active one on page load
      $(".smart-sensons-features-list li.active p").show();
    
      $(".smart-sensons-features-list li").click(function () {
        $(this).addClass("active")
          .siblings().removeClass("active")
          .find("p").stop(true, true).slideUp();
    
        $(this).find("p").stop(true, true).slideDown();
      });
    });
    
    
    
    

  });
