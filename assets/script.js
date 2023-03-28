/*-----VARIABLES-----*/
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
const banner = document.querySelector("#banner");
let activeSlideImg = document.querySelector(".banner-img");
let activeSlideTxt = banner.getElementsByTagName("p");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsArea = document.querySelector(".dots");
const dot = `<span class="dot"></span>`;
let dotList;
let slideIndex = 0;

/*-----FONCTIONS-----*/
//Affichage des points
function dotsDisplay() {
  for (let element of slides) {
    let dotsAreaTemp = dotsArea.innerHTML;
    dotsArea.innerHTML = dotsAreaTemp + dot;
  }
  dotList = document.getElementsByClassName("dot");
  dotList[slideIndex].setAttribute("class", "dot dot_selected");
}
//Selection du Point Actif
function selectDot() {
  for (dotElement of dotList) {
    dotElement.setAttribute("class", "dot");
  }
  dotList[slideIndex].setAttribute("class", "dot dot_selected");
}
//Gestion des Flèches
arrowLeft.addEventListener("click", function () {
  previousSlide();
});
arrowRight.addEventListener("click", function () {
  nextSlide();
});
//Selection du Slide
function nextSlide() {
  if (slideIndex < 3) {
    slideIndex++;
    slideUpdate();
  } else {
    slideIndex = 0;
    slideUpdate();
  }
}
function previousSlide() {
  if (slideIndex < 1) {
    slideIndex = slides.length - 1;
    slideUpdate();
  } else {
    slideIndex--;
    slideUpdate();
  }
}
//Affichage du Slide
function slideUpdate() {
  activeSlideImg.setAttribute(
    "src",
    `./assets/images/slideshow/${slides[slideIndex].image}`
  );
  activeSlideTxt[0].innerHTML = `${slides[slideIndex].tagLine}`;
  selectDot();
}
//START
dotsDisplay();