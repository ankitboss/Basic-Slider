// Selecting element
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const slides = document.querySelectorAll(".slide");
let curSlide = 0;
const maxSlide = slides.length;
console.log(maxSlide);
// moving left or right
const goToSlide = function (slide) {
  // visiting every slide
  slides.forEach(
    (s, index) => (s.style.transform = `translateX(${100 * (index - slide)}%)`)
    // 0%, 100%,  ..... -100% , 0% ...
  );
};
goToSlide(0);

// previous slide
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

// next slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

// Event listener
btnLeft.addEventListener("click", prevSlide);
btnRight.addEventListener("click", nextSlide);

document.addEventListener("keydown", function (e) {
  e.key === "ArrowLeft" && prevSlide();
  e.key === "ArrowRight" && nextSlide();
});
