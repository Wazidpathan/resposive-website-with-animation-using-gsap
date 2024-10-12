let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0";

function togglemenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "100vh";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

gsap.from("#nav h1", {
  y: 500,
  opacity: 0,
  duration: 3,
  delay: 5,
});
gsap.from("#nav ul", {
  y: 300,
  opacity: 0,
  duration: 3,
  delay: 4,
});
gsap.from(".left", {
  x: 800,
  opacity: 0,
  duration: 3,
  delay: 1,
});
gsap.from(".right img", {
  opacity: 0,
  duration: 3,
  delay: 8,
});
gsap.from("#nav .ri-menu-line", {
  y: 300,
  opacity: 0,
  duration: 3,
  delay: 4,
});
