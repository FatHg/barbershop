let menuBtn = document.getElementById("menuBtn");
let sideBar = document.getElementById("sidebar");
let menu = document.getElementById("menu");

sideNav.style.right = "-250px";

menuBtn.onclick = () => {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0";
    menu.src = "img/close.png";
  } else {
    sideNav.style.right = "-250px";
    menu.src = "img/menu.png";
  }
};
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
