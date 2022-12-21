"use strict";
const toggleBtn = document.querySelector(".toggleBtn");
const months = document.querySelectorAll(".month");
const annually = document.querySelectorAll(".annually");

toggleBtn.addEventListener("change", function () {
   months.forEach(function (month) {
      month.classList.toggle("show");
      annually.forEach(function (anual) {
         anual.classList.toggle("hide");
      });
   });
});
