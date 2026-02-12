let fixdesktop = document.getElementById("fixdesktop");
window.addEventListener("scroll", function () {
  if (window.scrollY > 90) {
    fixdesktop.classList.add("fixdesktop");
  } else {
    fixdesktop.classList.remove("fixdesktop");
  }
});

function menuOpen() {
  let menubar = document.getElementById("menubar");
  if (menubar.style.top === "-100%") {
    menubar.style.top = 0;
    menubar.classList.add("menuOpen");
  } else {
    menubar.style.top = "-100%";
  }
}
