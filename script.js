function profileAnimation() {
  let tl = gsap.timeline();
  tl.from(".profile h1", {
    y: 100,
    duration: 1,
    delay: 0.5,
  });
  gsap.from("#profileSkill h2", {
    y: 100,
    duration: 1,
    delay: 1,
    opacity: 0,
    duration: 1.5,
  });
  gsap.from(".profile-img img", {
    opacity: 0,
    delay: 0.5,
  });
  let navtl = gsap.timeline();
  navtl.from(" .nav-socials a", {
    y: -100,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    stagger: 0.3,
  });

  let soctl = gsap.timeline();
  soctl.from("#contact,#projects, #skills, #home", {
    y: -100,
    duration: 0.6,
    delay: -0.8,
    opacity: 0,
    stagger: 0.2,
  });
}
profileAnimation();

function cross_animation() {
  let flag = true;
  let cross = document.querySelector(".crossanimation");
  let idx = 0;
  let newidx;
  cross.addEventListener("click", () => {
    cross.classList.toggle("cross-animation");
    let nav_tabs_spans = document.querySelector(".nav-tabs-spans");
    nav_tabs_spans.classList.toggle("active");
  });
}

cross_animation();

function cursoranim() {
  let projects = document.querySelectorAll(".projects");
  let cursor = document.querySelector(".cursor");
  let xval = 0;
  let yval = 0;
  projects.forEach((task) => {
    let newtl = gsap.timeline();
    task.addEventListener("mouseenter", () => {
      newtl.to(cursor, {
        opacity: 1,
        scale: 1,
      });
    });
    task.addEventListener("mouseleave", () => {
      newtl.to(cursor, {
        opacity: 0,
        scale: 0,
      });
    });
    task.addEventListener("mousemove", (dets) => {
      xval = dets.x - 30;
      yval = dets.y + 40;
      gsap.to(cursor, {
        left: xval + "px",
        top: yval + "px",
      });
    });
  });
}

cursoranim();

function imageScroll() {
  let imgContainer = document.querySelector(".skill-container");
  let prevBtn = document.querySelector("#btn1");
  let nextBtn = document.querySelector("#btn2");

  // imgContainer.addEventListener("wheel", (dets) => {
  //   dets.preventDefault();
  //   imgContainer.scrollLeft += dets.deltaY;
  // });

  prevBtn.addEventListener("click", () => {
    imgContainer.style.scrollBehavior = "smooth";
    imgContainer.scrollLeft -= 70;
    console.log("hello");
  });

  nextBtn.addEventListener("click", () => {
    imgContainer.style.scrollBehavior = "smooth";
    imgContainer.scrollLeft += 70;
  });
}

imageScroll();

function skill_anim() {
  let circle = document.querySelectorAll("circle");
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: circle,
      start: "top 70%",
      end: "top 40%",
      // markers: true,
      scrub: 1,
    },
  });

  tl.to("#html circle, #css circle", {
    strokeDashoffset: 100,
  });
  tl.to("#js circle", {
    strokeDashoffset: 120,
    delay: -0.5,
  });
  tl.to("#github circle", {
    strokeDashoffset: 110,
    delay: -0.5,
  });
  tl.to("#cpp circle", {
    strokeDashoffset: 80,
    delay: -0.5,
  });
}

skill_anim();
