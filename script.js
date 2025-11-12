function homeAnimation(){
  gsap.set(".slidesm", { scale: 6 });
  gsap.set(".rgt", { xPercent: -50 });
  gsap.set(".lft", { xPercent: -40 });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: .2
    }
  });

  tl
  .to(".vdodiv", {
    '--clip': "0%",
    ease: "power4.inOut",
    duration: 3
  }, 'a')
  .to(".slidesm", {
    scale: 1,
    ease: "power3.inOut",
    duration: 3
  }, 'a')
  .to(".lft", {
    stagger: 0.25,
    xPercent: -60,
    ease: "power1.inOut",
    duration: 4
  }, 'a += 1')
  .to(".rgt", {
    stagger: 0.25,
    xPercent: -45,
    ease: "power1.inOut",
    duration: 4
  }, 'a += 1');
}

function realAnimation(){
  gsap.to('.slide', {
    scrollTrigger: {
      trigger: '.real',
      start: "top top",
      end: "bottom bottom",
      scrub: 2.5
    },
    xPercent: -200,
    ease: Power4
  })
}

function themeChange(){
  document.querySelectorAll(".section").forEach(function(e){
    ScrollTrigger.create({
      trigger: e,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: function(){
        document.body.setAttribute("theme", e.dataset.color);
      },
      onEnterBack: function(){
        document.body.setAttribute("theme", e.dataset.color);
      }
    })
  })
}

(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();

themeChange();
homeAnimation();