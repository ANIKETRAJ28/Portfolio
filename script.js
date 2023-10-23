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
    delay: 0.5,
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

let themeSwitch = document.querySelector("#mode");
let flag;
themeSwitch.addEventListener("click", () => {
  if (!flag) {
    document.querySelector(".profile-container").style.backgroundColor =
      "#000000";
    document.querySelector(".profile-container").style.color = "#ffffff";
    resume.style.color = "#000000";
    resume.style.backgroundColor = "#ffffff";
    profileSkill.style.color = "#000000";
    profileSkill.style.backgroundColor = "#ffffff";
    document.querySelector(".nav-container").style.backgroundColor = "#000000";
    document.querySelector(".nav-tabs").style.color = "#ffffff";
    themeSwitch.style.color = "#ffffff";
    flag = true;
  } else {
    document.querySelector(".profile-container").style.color = "#000000";
    document.querySelector(".profile-container").style.backgroundColor =
      "#ffffff";
    resume.style.color = "#ffffff";
    resume.style.backgroundColor = "#000000";
    profileSkill.style.color = "#ffffff";
    profileSkill.style.backgroundColor = "#000000";
    document.querySelector(".nav-container").style.backgroundColor = "#ffffff";
    document.querySelector(".nav-tabs").style.color = "#000000";
    themeSwitch.style.color = "#000000";
    flag = false;
  }
});
