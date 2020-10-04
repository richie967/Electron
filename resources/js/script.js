/* Carousel-automation */
var slideIndex = 1;

var myTimer;

var quotesContainer;

window.addEventListener("load", function() {
    showslide(slideIndex);
    myTimer = setInterval(function() {plusSlide(1)}, 6500);

    quotesContainer = document.getElementsByClassName("carousel-wrapper")[0];

    quotesContainer.addEventListener('mouseenter', pause)
    quotesContainer.addEventListener('mouseleave', resume)
});

function plusSlide(n) {
    clearInterval(myTimer);
    if (n < 0) {
        showslide(slideIndex -= 1);
    } else {
        showslide(slideIndex += 1);
    }
    if (n === -1) {
        myTimer = setInterval(function () { plusSlide(n + 2) }, 6500);
    } else {
        myTimer = setInterval(function () { plusSlide(n + 1) }, 6500)
    }
}

/* onClick Dots */
function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function() {
        plusSlide(n + 1)}, 6500);
    showslide(slideIndex = n);
}

function showslide(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-item");
    var dots = document.getElementsByClassName("nav-dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", " ");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}

pause = () => {
    clearInterval(myTimer);
}

resume = () => {
    clearInterval(myTimer);
    myTimer = setInterval(function () { plusSlide(slideIndex) }, 6500);
}