let profileSkill = document.querySelector(".profile h2");
let resume = document.querySelector("#resume");

function mousecursor() {
  let cursor = document.querySelector("#cursor");
  document.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 1,
    });
  });
  document.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 0,
    });
  });
  document.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
      left: dets.x,
      top: dets.y,
    });
  });
}

mousecursor();

function profileAnimation() {
  let tl = gsap.timeline();
  let profileName = document.querySelector(".profile h1");
  tl.from(profileName, {
    y: 100,
    duration: 0.5,
    delay: 0.3,
  });
  tl.from(profileSkill, {
    y: 100,
  });
  let navtl = gsap.timeline();
  let tabs = document.querySelectorAll(".nav-tabs span");
  tabs.forEach((tab) => {
    navtl.from(tab, {
      y: -100,
      duration: 0.5,
      opacity: 0,
    });
  });
  let soctl = gsap.timeline();
  let socials = document.querySelectorAll(".nav-socials a");
  socials.forEach((s) => {
    soctl.from(s, {
      y: -100,
      duration: 0.5,
      opacity: 0,
    });
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
