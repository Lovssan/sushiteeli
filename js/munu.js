//dropdown меню для узких экранов
document.getElementById("dropmenu").addEventListener("click", () => {
    document.getElementsByClassName("swipe-menu")[0].classList.add("m");
    document.getElementsByClassName("overlay")[0].classList.add("activmenu");
  });
  document.getElementById("closer").addEventListener("click", () => {
    document.getElementsByClassName("swipe-menu")[0].classList.remove("m");
    document.getElementsByClassName("overlay")[0].classList.remove("activmenu");
  });