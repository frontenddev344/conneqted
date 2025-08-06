$(document).ready(function(){
    $(".menu-toggle").click(function(){
      $("body").addClass("toggle");
      $(".closed-menu").click(function(){
        $("body").removeClass("toggle");
      });
    });
    
    $(document).ready(function () {
      $(".smart-sensons-features-list li.active p").show();
    
      $(".smart-sensons-features-list li").click(function () {
        $(this).addClass("active")
          .siblings().removeClass("active")
          .find("p").stop(true, true).slideUp();
    
        $(this).find("p").stop(true, true).slideDown();
      });
    });
    
    
    
    

  });

$(document).ready(function(){
$(".acc-head").click(function(){
  $(this).next().slideToggle().parent().siblings().find(".acc-content").slideUp();
  $(this).toggleClass("active").parent().siblings().find(".acc-head").removeClass("active");
});
});



// Add animations to the timeline
// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".stack-scroll-container",
//     start: "top top",
//     end: "bottom center",
//     scrub: 1,
//     pin: true,
//     pinSpacing: true,
//     // markers: true
//   }
// });

// tl.to(".stack-card", {
//   yPercent: -100,

// })

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".stack-scroll-container").forEach((section) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "bottom center",
      scrub: 1,
      pin: true,
      pinSpacing: true,
      // markers: true
    }
  })
  .to(section.querySelector(".stack-card"), {
    yPercent: -100,
    ease: "none"
  });
});

var typing=new Typed(".reveal-text", {
  strings: ["", "efforless living", "one system", "total control"],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});