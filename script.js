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

function teamAnimation(){
  document.querySelectorAll(".listelm").forEach(function(el){
    el.addEventListener("mouseenter", function(dets){
      gsap.to(this.querySelector(".bluelayer"), {
        height: "100%",
        duration: 0.2
      });

      gsap.to(this.querySelectorAll(".list-left h3, .list-left h1, .listelm > div > h3"), {
        color: "#fff",
        ease: Power4,
        duration: 0.2
      });

      gsap.to(this.querySelector(".picture"), {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    el.addEventListener("mousemove", function(dets){
      gsap.to(this.querySelector(".picture"), {
        x: gsap.utils.mapRange(0, window.innerWidth, -300, 300, dets.clientX),
        duration: 0.2,
        ease: "power2.out"
      });
    });

    el.addEventListener("mouseleave", function(dets){
      gsap.to(this.querySelector(".bluelayer"), {
        height: "0%",
        duration: 0.2
      });
      
      gsap.to(this.querySelectorAll(".list-left h3, .list-left h1, .listelm > div > h3"), {
        color: "#000",
        ease: Power4,
        duration: 0.2
      });

      gsap.to(this.querySelector(".picture"), {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      });
    });
  });
}

function paraAnimation(){
  let paras = document.querySelectorAll(".para");
  paras.forEach(para => {
    let textEl = para.querySelector(".para-text");
    let clutter = "";
    
    textEl.textContent.split("").forEach(function(char){
      if (char === ""){
        clutter += `<span>&nbsp;</span>`;
      } else{
        clutter += `<span class="opacity-10 ">${char}</span>`;
      }
    });

    textEl.innerHTML = clutter
  });

  gsap.set(".para-text span",{
    opacity: .1
  })

  gsap.to(".para-text span", {
    scrollTrigger:{
      trigger: ".paras",
      start: "top 50%",
      end: "bottom 80%",
      scrub: .2
    },
    color: "#0000ffd8",
    opacity: 1,
    stagger: .3,
    ease: Power4
  })
}

function capsuleAnnimation(){
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger:{
      trigger: ".capsules",
      start: "top 70%",
      end: "bottom bottom",
      scrub: 2
    },
    y: 0,
    ease: Power4
  });
  gsap.to(".capsule:nth-child(1)", {
    scrollTrigger:{
      trigger: ".capsules",
      start: "top 70%",
      end: "bottom bottom",
      scrub: 2
    },
    y: 0,
    ease: Power4
  });
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