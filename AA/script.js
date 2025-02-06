function init() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
  
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    ScrollTrigger.refresh();
  
  }
  
  init()
  
  var timeout;

  function circleChaptaKaro() {
    // define default scale value
    var xscale = 1;
    var yscale = 1;
  
    var xprev = 0;
    var yprev = 0;
  
    window.addEventListener("mousemove", function (dets) {
      clearTimeout(timeout);
  
      xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
      yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
  
      xprev = dets.clientX;
      yprev = dets.clientY;
  
      circleMouseFollower(xscale, yscale);
  
      timeout = setTimeout(function () {
        document.querySelector(
          ".cursor"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      }, 100);
    });
  }
  
  function circleMouseFollower(xscale, yscale) {

    window.addEventListener("mousemove", function (dets) {
      document.querySelector(
        ".cursor"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    
      })
    }



  circleChaptaKaro();
  circleMouseFollower();

  /*transform circle for nav */

  function adjustBehavior() {
    var screenWidth = window.innerWidth;

    if (screenWidth < 768) {
        // Code to execute for small screens (e.g., mobile devices)
        var tl = gsap.timeline();
        var tl2 = gsap.timeline({
          scrollTrigger: {
              trigger: ".page1 h1",
              scroller: ".main",
              // markers:true,
              start: "top -20%",
              end: "top -25%",
              scrub: 3
          }
        })

        tl2.to(".main", {
          backgroundColor: "#fff",
        })

        var tl3 = gsap.timeline({
          scrollTrigger: {
              trigger: ".page1 h1",
              scroller: ".main",
              start: "top -100%",
              end: "top -120%",
              scrub: 3
          }
        })
        
        tl3.to(".main",{
          backgroundColor:"#0F0D0D"
        })
    } else if (screenWidth >= 768 && screenWidth < 1024) {
        // Code to execute for medium-sized screens (e.g., tablets)
        var tl = gsap.timeline();
        var tl2 = gsap.timeline({
          scrollTrigger: {
              trigger: ".page1 h1",
              scroller: ".main",
              // markers:true,
              start: "top -60%",
              end: "top -65%",
              scrub: 3
          }
        })
        tl2.to(".main", {
          backgroundColor: "#fff",
        })
        
        var tl3 = gsap.timeline({
          scrollTrigger: {
              trigger: ".page1 h1",
              scroller: ".main",
              start: "top -150%",
              end: "top -170%",
              scrub: 3
          }
        })
        
        tl3.to(".main",{
          backgroundColor:"#0F0D0D"
        })
  
        console.log("Medium screen");
    } else {
        // Code to execute for large screens (e.g., desktops)
        var tl = gsap.timeline();
        var tl2 = gsap.timeline({
          scrollTrigger: {
              trigger: ".page1 h1",
              scroller: ".main",
              // markers:true,
              start: "top -60%",
              end: "top -65%",
              scrub: 3
          }
        })
        tl2.to(".main", {
          backgroundColor: "#fff",
        })
        
        var tl3 = gsap.timeline({
          scrollTrigger: {
              trigger: ".page1 h1",
              scroller: ".main",
              start: "top -150%",
              end: "top -170%",
              scrub: 3
          }
        })
        
        tl3.to(".main",{
          backgroundColor:"#0F0D0D"
        })
  
        console.log("Large screen");
    }
}

// Call the function initially
adjustBehavior();

// Listen for window resize events
window.addEventListener('resize', adjustBehavior);



  function firstPageAnim() {
    var tl = gsap.timeline();
  
    tl.from("#nav", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
    })
      .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2,
      })
      .from(".exp", {
        y: 30,
        width:0,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
      });
  }

  firstPageAnim();

  var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -280%",
        end: "top -300%",
        scrub: 3
    }
  })
  
  tl4.to(".main",{
    backgroundColor:"#0F0D0D"
  })

  var tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page5",
        scroller: ".main",
        // markers:true,
        start: "top -0%",
        end: "top -5%",
        scrub: 3
    }
  })
  tl5.to(".main", {
    backgroundColor: "#0F0D0D",
  })
  
  var tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page6",
        scroller: ".main",
        // markers:true,
        start: "top 98%",
        end: "top -2%",
        scrub: 3
    }
  })
  tl6.to(".main", {
    backgroundColor: "#0F0D0D",
  })
  
  
  var boxes = document.querySelectorAll(".box")
  boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "470px"
        crsr.style.height = "370px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
  })
  
  var h4 = document.querySelectorAll("#nav a")
  var purple = document.querySelector("#purple")
  h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display = "block"   
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display = "none"   
        purple.style.opacity = "0"
    })
  })

  /*Brand */
  
  document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
    
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });



// scroll to a specific page 



