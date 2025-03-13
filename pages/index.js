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
