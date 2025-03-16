//CALEBS SECTION BELOW
const counter = document.querySelector(".header__countdown-timer");
var countDownDate = new Date("Mar 22, 2025 20:30:00").getTime();

var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the daysUntil between now and the count down date
  var daysUntil = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(daysUntil / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (daysUntil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((daysUntil % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((daysUntil % (1000 * 60)) / 1000);

  counter.innerHTML =
    days +
    " days " +
    hours +
    " hours " +
    minutes +
    " mins " +
    seconds +
    " secs ";

  // If the count down is finished
  if (daysUntil < 0) {
    clearInterval(x);
    counter.innerHTML = "Earth Hour for 2025 has passed!";
  }
}, 1000);

const waterForm = document.forms["water"];
const waterFormFeedback = waterForm.querySelector(".form__submission-feedback");
const waterInput = waterForm.querySelector(".form__text-input");
const handleWaterFormSubmit = (e) => {
  e.preventDefault();
  const showerMins = waterInput.value;
  waterFormFeedback.classList.add("form__submission-feedback_visible");
  if (showerMins >= 99) {
    waterFormFeedback.innerHTML =
      "You wasted 210 gallons of water, which could wash 15 elephants!";
  } else if (showerMins >= 90) {
    waterFormFeedback.innerHTML =
      "You wasted 189 gallons of water, enough to brew 3,024 cups of tea.";
  } else if (showerMins >= 80) {
    waterFormFeedback.innerHTML =
      "You wasted 168 gallons of water, which could water a garden for 5 hours.";
  } else if (showerMins >= 70) {
    waterFormFeedback.innerHTML =
      "You wasted 147 gallons of water, enough to cook 588 cups of rice.";
  } else if (showerMins >= 60) {
    waterFormFeedback.innerHTML =
      "You wasted 126 gallons of water, enough to fill an entire kiddie pool.";
  } else if (showerMins >= 50) {
    waterFormFeedback.innerHTML =
      "You wasted 105 gallons of water, enough to wash 5 cars.";
  } else if (showerMins >= 40) {
    waterFormFeedback.innerHTML =
      "You wasted 84 gallons of water, which could flush a toilet 168 times.";
  } else if (showerMins >= 30) {
    waterFormFeedback.innerHTML =
      "You wasted 63 gallons of water, enough to fill a medium-sized bathtub.";
  } else if (showerMins >= 20) {
    waterFormFeedback.innerHTML =
      "You wasted 42 gallons of water, which could brew 672 cups of coffee.";
  } else if (showerMins >= 10) {
    waterFormFeedback.innerHTML =
      " You wasted 21 gallons of water, which is enough to fill a small fish tank.";
  } else if (showerMins < 10) {
    waterFormFeedback.innerHTML =
      "GOOD JOB! Less than 10 minutes is a good habit to save water.";
  }
  waterForm.reset();
};

const deforestationForm = document.forms["deforestation"];
const deforestationFormFeedback = deforestationForm.querySelector(
  ".form__submission-feedback"
);
const deforestationInput = deforestationForm.querySelector(".form__text-input");
const handleDeforestationFormSubmit = (e) => {
  e.preventDefault();
  deforestationFormFeedback.classList.add("form__submission-feedback_visible");

  const value = deforestationInput.value;
  if (value === "rarely") {
    deforestationFormFeedback.innerHTML =
      "Great job! If everyone used as little paper as you, we could save millions of trees each year.";
  } else if (value === "sometimes") {
    deforestationFormFeedback.innerHTML =
      "Not bad! Did you know that recycling just one ton of paper can save 17 trees and 7,000 gallons of water?";
  } else if (value === "often") {
    deforestationFormFeedback.innerHTML =
      "Consider going digital! The U.S. alone uses about 68 million trees’ worth of paper products each year.";
  }
  deforestationForm.reset();
};

waterForm.addEventListener("submit", handleWaterFormSubmit);
deforestationForm.addEventListener("submit", handleDeforestationFormSubmit);

//PUJAS SECTION BELOW

//CHAIMS SECTION BELOW

//ALEXS SECTION BELOW
const switchImage = document.getElementById("lightSwitch");
const electricitySection = document.querySelector(".section_electricity");
const onImage = "./images/light-switch-on.png";
const offImage = "./images/light-switch-off.png";
const overlay = document.querySelectorAll(".section__overlay");

let lightsOff = false;

const toggleLights = () => {
  lightsOff = !lightsOff;

  switchImage.src = lightsOff ? offImage : onImage;
  overlay.forEach((ovl) => {
    ovl.style.display = lightsOff ? "block" : "none";
  });
};

switchImage.addEventListener("click", toggleLights);
