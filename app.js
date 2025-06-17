// -----Navbar-----

document.getElementById("view_menu").addEventListener("click", function () {
  document.getElementById("hide_menu").classList.remove("hide");
  document.getElementById("view_menu").classList.add("hide");
  document.getElementById("sm_navbar").classList.remove("hide");
});

document.getElementById("hide_menu").addEventListener("click", function () {
  document.getElementById("hide_menu").classList.add("hide");
  document.getElementById("view_menu").classList.remove("hide");
  document.getElementById("sm_navbar").classList.add("hide");
});

// ----- Hero Section -----

const sliders = document.querySelector(".sliders");
const totalSliders = document.querySelectorAll(".slider").length;
const radioButtons = document.querySelectorAll(".radio-button");
let currentSlide = 0;

const moveToSlide = (index) => {
  sliders.style.transform = `translate(-${index * 100}vw)`;
  radioButtons.forEach((button) => {
    button.classList.remove("active-radio-button");
  });
  radioButtons[index].classList.add("active-radio-button");
};

const autoSlide = () => {
  currentSlide = ++currentSlide % totalSliders;
  moveToSlide(currentSlide);
};

setInterval(autoSlide, 4000);

radioButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    currentSlide = index;
    moveToSlide(index);
  });
});

// ----- Success Section -----

const successSliders = document.querySelector(".success-sliders");
const totalSuccessSliders = document.querySelectorAll(".success-slider").length;
const successRadioButtons = document.querySelectorAll(".success-radio-button");

successRadioButtons[0].classList.add("active-success-radio-button");

let currentSuccessSlide = 0;

const moveToNextSlide = (index) => {
  successSliders.style.transform = `translate(-${index * 80}vw)`;
  successRadioButtons.forEach((button) => {
    button.classList.remove("active-success-radio-button");
  });
  successRadioButtons[index].classList.add("active-success-radio-button");
};

const autoSuccessSlide = () => {
  currentSuccessSlide = ++currentSuccessSlide % totalSuccessSliders;
  moveToNextSlide(currentSuccessSlide);
};

setInterval(autoSuccessSlide, 4000);

successRadioButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    currentSuccessSlide = index;
    moveToNextSlide(index);
  });
});

let allCounts = document.querySelectorAll(".count");

allCounts.forEach((counter) => {
  let target = parseInt(counter.innerText);
  let current = 0;
  let duration = 3000;
  let stepTime = 30;
  let steps = duration / stepTime;
  let increment = Math.ceil(target / steps);

  counter.innerText = "0";

  let interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    counter.innerText = current;
  }, stepTime);
});
