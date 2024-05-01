"use strict";
// --------NavBar-----------//
function openNav() {
  document.querySelector(".mobile-view").classList.toggle("start-0");
  document.querySelector("body").classList.toggle("overflow-hide");
  document.querySelector(".menu").classList.toggle("cross");
}
function closeNav() {
  document.querySelector(".mobile-view").classList.remove("start-0");
  document.querySelector("body").classList.remove("overflow-hide");
  document.querySelector(".menu").classList.remove("cross");
}
// ------ preLoader ------- //
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    setTimeout(function () {
      let loadingOverlay = document.getElementById("loadingOverlay");
      loadingOverlay.style.display = "none";
      document.querySelector("body").classList.remove("overflow_hidden");
    }, 1000);
  });
});
// --------- accordion --------- //
const activeAccordion = document.querySelectorAll(".accordion-Item");
activeAccordion.forEach((item) => {
  item.addEventListener("click", () => {
    const activeAcc = document.querySelector(".active-acc");
    item.classList.toggle("active-acc");
    activeAcc && activeAcc.classList.remove("active-acc");
  });
});
// -------- back to top button ------------ //
const mybutton = document.getElementById("myBtn");

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  const shouldDisplayButton =
    (window.innerWidth < 992 && window.scrollY > 1050) ||
    (window.innerWidth >= 992 && window.scrollY > 400);

  mybutton.style.display = shouldDisplayButton ? "flex" : "none";
});

//
const timeData = document.getElementById("times");
function countdownTimer(timeString) {
  let [days, hours, minutes, seconds] = timeString.split(":").map(Number);
  let totalSeconds =
    days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
  const interval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(interval);
      alert("Timer has ended");
      return;
    }
    days = Math.floor(totalSeconds / (24 * 60 * 60));
    hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    seconds = totalSeconds % 60;
    const timeLeft = `<span class="crl-blue">${days}d</span> : ${hours}hr : ${minutes}min : ${seconds}sec`;
    timeData.innerHTML = timeLeft;
    totalSeconds--;
  }, 1000);
}
countdownTimer("19:10:2:55");
