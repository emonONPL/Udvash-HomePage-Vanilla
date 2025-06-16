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
