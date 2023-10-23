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
    duration: 1,
    delay: 0.2,
    opacity: 0,
    stagger: 0.3,
  });
}
profileAnimation();
