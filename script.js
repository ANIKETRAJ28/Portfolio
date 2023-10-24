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
  soctl.from("#articles,#projects, #about, #home", {
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
