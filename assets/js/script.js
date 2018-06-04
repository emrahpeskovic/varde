function initMap() {
  var varde = {
    lat: 55.623335,
    lng: 8.481852
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: varde
  });
  var marker = new google.maps.Marker({
    position: varde,
    map: map
  });
}
/* Program Javascript */
// Smider alle med classen "day" ind i en variabel
var acc = document.getElementsByClassName("day");
// Smider alle med classen "panel" ind i en variabel
var panel = document.getElementsByClassName('panel');
// Denne kører for hver gang der er et element der har classen "day"
for (var i = 0; i < acc.length; i++) {
  // Dette er en funktion når man klikker på et element der har classen "day"
  acc[i].onclick = function() {
    // Denne variabel tjekker om den du klikker har på classen "active"
    var setClasses = !this.classList.contains('active');
    // Her fjerner man classen active og show på "day" og "panel"
    setClass(acc, 'active', 'remove');
    setClass(panel, 'show', 'remove');
    // Denne tjekker om variabelen setClasses er sand
    if (setClasses) {
      // Det element du trykker på får classen "active"
      this.classList.toggle("active");
      // Dette tager element lige efter classen "day" som er "panel" og tilføjer classen "show"
      this.nextElementSibling.classList.toggle("show");
    }
  }
}
// Opretter en funktion som placerer de forskellige classes
function setClass(els, className, fnName) {
  // Denne kører hver gang den skal tilføje en class så 2 gange i disse tilfælde
  for (var i = 0; i < els.length; i++) {
    els[i].classList[fnName](className);
  }
}
/* Instituion Javascript */
var acc1 = document.getElementsByClassName("day_insti");
var panel1 = document.getElementsByClassName('panel_insti');
for (var c = 0; c < acc1.length; c++) {
  acc1[c].onclick = function() {
    var setClasses1 = !this.classList.contains('active');
    setClass1(acc1, 'active', 'remove');
    setClass1(panel1, 'show', 'remove');
    if (setClasses1) {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
    }
  }
}
// Opretter en funktioner som placerer de forskellige classes
function setClass1(els1, className1, fnName1) {
  // Denne kører hver gang den skal tilføje en class så 2 gange i disse tilfælde
  for (var c = 0; c < els1.length; c++) {
    els1[c].classList[fnName1](className1);
  }
}
/* Javascript til datoen */
// Opretter en variabel hvor jeg gemmer dato for festivalen
var countDownDate = new Date("August 31, 2019").getTime();
// Denne variabel kører funktionen hvert sekund for at tjekke om der er sket ændringer
var x = setInterval(function() {
  // Skaffer den nuværende dato
  var now = new Date().getTime();
  // Tjekker hvor stor forskel der er på festivals dato og den nuværende dato
  var distance = countDownDate - now;
  // Udregner hvor mange dage der er til festivalen
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // Udregner hvor mange timer der er til eventet
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // Udregner hvor mange minutter der er til eventet
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // Udregner hvor mange sekunder der er til eventet
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Smider de forskellige variabler ind i en div med id countdown og smider et <p> tag rundt om
  document.getElementById("countdown").innerHTML = "<p>" + days + " dage " + hours + " timer " +
    minutes + " minutter " + seconds + "sekunder </p>";
}, 1000);
var listEl = document.querySelector('.carousel');
var btnLeftEl = document.querySelector('#left-btn');
var btnRightEl = document.querySelector('#right-btn');
var count = 0;

function slideImages(dir) {
  var totalChildren = listEl.querySelectorAll(".item").length;
  dir === "left" ? ++count : --count;
  listEl.style.left = count * 286 + 'px';
  btnLeftEl.style.display = count < 0 ? "block" : "none";
  btnRightEl.style.display = count > 4 - totalChildren ? "block" :
    "none";
}
btnLeftEl.addEventListener("click", function(e) {
  slideImages("left");
});
btnRightEl.addEventListener("click", function(e) {
  slideImages("right");
});

//Slideshow billedgalleri
var listEl_billedgalleri = document.querySelector('.carousel-billedgalleri');
var btnLeftEl_billedgalleri = document.querySelector('#left-btn-billedgalleri');
var btnRightEl_billedgalleri = document.querySelector('#right-btn-billedgalleri');
var count_billedgalleri = 0;

function slideImages_billedgalleri(dir) {
  var totalChildren_billedgalleri = listEl_billedgalleri.querySelectorAll(".item-billedgalleri").length;
  dir === "left" ? ++count_billedgalleri : --count_billedgalleri;
  listEl_billedgalleri.style.left = count_billedgalleri * 224 + 'px';
  btnLeftEl_billedgalleri.style.display = count_billedgalleri < 0 ? "block" : "none";
  btnRightEl_billedgalleri.style.display = count_billedgalleri > 3 - totalChildren_billedgalleri ? "block" :
    "none";
}
btnLeftEl_billedgalleri.addEventListener("click", function(e) {
  slideImages_billedgalleri("left");
});
btnRightEl_billedgalleri.addEventListener("click", function(e) {
  slideImages_billedgalleri("right");
});
