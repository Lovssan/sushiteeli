//dropdown меню для узких экранов
document.getElementById("dropmenu").addEventListener("click", () => {
  document.getElementsByClassName("swipe-menu")[0].classList.add("m");
  document.getElementsByClassName("overlay")[0].classList.add("activmenu");
});
document.getElementById("closer").addEventListener("click", () => {
  document.getElementsByClassName("swipe-menu")[0].classList.remove("m");
  document.getElementsByClassName("overlay")[0].classList.remove("activmenu");
});
//Slider
let sliderImages = document.querySelectorAll(".slider-img");
let sliderLine = document.querySelector(".swipe-images");
let btnPrev = document.querySelector(".prevarr");
let btnNext = document.querySelector(".nextarr");
let sliderCount = 0,
  sliderWidth = null;

// Кнопки листания слайдов вперед и назад
btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);
let interval;
interval = setInterval(nextSlide, 5000);

// Перелистывает слайд вперед
function nextSlide() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 5000);
  sliderCount++;
  if (sliderCount >= sliderImages.length) sliderCount = 0;

  rollSlider();
}

// Перелистывает слайд назад
function prevSlide() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 5000);

  sliderCount--;
  if (sliderCount < 0) sliderCount = sliderImages.length - 1;

  rollSlider();
}

// Задает шаг перемещения слайдов
function rollSlider() {
  sliderWidth = document.querySelector(".main").offsetWidth;
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

//скролл меню до карточек
document.getElementById("menu").addEventListener("click", function () {
  document.getElementById("nav-main").scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".menu-m").addEventListener("click", function () {
  document.getElementById("nav-main").scrollIntoView({ behavior: "smooth" });
});
// иконка добавления в корзину
let bags = document.querySelectorAll(".inbag");
for (let i = 0; i < bags.length; i++) {
  bags[i].addEventListener("click", () => {
    bags[i].src = "./Photos/logo/корзина добавление.png";
    setTimeout(() => {
      bags[i].src = "./Photos/logo/корзина.png";
    }, 500);
  });
}

//меню с других страниц
// let meni123=['menu1','menu2','menu3'];
// console.log('')
// for (let i = 0; i < meni123.length; i++) {
//   console.log(document.getElementById(meni123[i]).innerHtml)
//   document.getElementById(meni123[i]).addEventListener("click", function () {
//     debugger;
//     alert('234e')
//     document.getElementById("nav-main").scrollIntoView({ behavior: "smooth" });
//   });

//переключение между едами
document.getElementById("roll").addEventListener("click", () => {
  document.getElementsByClassName("container-cards")[0].classList.add("roll");
  document
    .getElementsByClassName("container-cards")[1]
    .classList.remove("pizza");
  document.getElementsByClassName("container-cards")[2].classList.remove("wok");
  document
    .getElementsByClassName("container-cards")[3]
    .classList.remove("nabor");
  document
    .getElementsByClassName("container-cards")[4]
    .classList.remove("dobavki");
});
document.getElementById("pizza").addEventListener("click", () => {
  document
    .getElementsByClassName("container-cards")[0]
    .classList.remove("roll");
  document.getElementsByClassName("container-cards")[1].classList.add("pizza");
  document.getElementsByClassName("container-cards")[2].classList.remove("wok");
  document
    .getElementsByClassName("container-cards")[3]
    .classList.remove("nabor");
  document
    .getElementsByClassName("container-cards")[4]
    .classList.remove("dobavki");
});
document.getElementById("wok").addEventListener("click", () => {
  document
    .getElementsByClassName("container-cards")[0]
    .classList.remove("roll");
  document
    .getElementsByClassName("container-cards")[1]
    .classList.remove("pizza");
  document.getElementsByClassName("container-cards")[2].classList.add("wok");
  document
    .getElementsByClassName("container-cards")[3]
    .classList.remove("nabor");
  document
    .getElementsByClassName("container-cards")[4]
    .classList.remove("dobavki");
});

document.getElementById("nabor").addEventListener("click", () => {
  document
    .getElementsByClassName("container-cards")[0]
    .classList.remove("roll");
  document
    .getElementsByClassName("container-cards")[1]
    .classList.remove("pizza");
  document.getElementsByClassName("container-cards")[2].classList.remove("wok");
  document.getElementsByClassName("container-cards")[3].classList.add("nabor");
  document
    .getElementsByClassName("container-cards")[4]
    .classList.remove("dobavki");
});
document.getElementById("dobavki").addEventListener("click", () => {
  document
    .getElementsByClassName("container-cards")[0]
    .classList.remove("roll");
  document
    .getElementsByClassName("container-cards")[1]
    .classList.remove("pizza");
  document.getElementsByClassName("container-cards")[2].classList.remove("wok");
  document
    .getElementsByClassName("container-cards")[3]
    .classList.remove("nabor");
  document
    .getElementsByClassName("container-cards")[4]
    .classList.add("dobavki");
});
let menu = document.getElementsByClassName("nava");
let currentMenu = menu[0];
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", () => {
    currentMenu.classList.remove("nava-current");
  });
}
// выбор диаметра пиццы
let diamter = document.querySelectorAll(".diametrs");
diamter.forEach((but) => {
  but.addEventListener("click", (e) => {
    for (let i = 0; i < but.children.length; i++) {
      but.children[i].classList.remove("current-diametr");
    }
    if (e.target != but) {
      e.target.classList.add("current-diametr");
    }
    if (e.target.innerHTML === "25см") {
      diamter.querySelector(".thisprice").innerHTML = "<span>25см </span>450Р";
    } else if (e.target.innerHTML === "31см") {
      diamter.querySelector(".thisprice").innerHTML = "<span>31см </span>550Р";
    } else if (e.target.innerHTML === "36см") {
      diamter.querySelector(".thisprice").innerHTML = "<span>36см </span>650Р";
    }
  });
});
