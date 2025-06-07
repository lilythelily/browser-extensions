"use strict";
const toggleBtn = document.querySelectorAll(".toggle-btn");
const inactiveToggleBtn = document.querySelectorAll(".inactive-toggle-btn");
const card = document.querySelectorAll(".card");

toggleBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.classList.contains("toggle-btn")) {
      btn.classList.remove("toggle-btn");
      btn.classList.add("inactive-toggle-btn");
    } else {
      btn.classList.remove("inactive-toggle-btn");
      btn.classList.add("toggle-btn");
    }
  });
});

inactiveToggleBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.classList.contains("inactive-toggle-btn")) {
      btn.classList.remove("inactive-toggle-btn");
      btn.classList.add("toggle-btn");
    } else {
      btn.classList.remove("toggle-btn");
      btn.classList.add("inactive-toggle-btn");
    }
  });
});

card.forEach((card, index) => {
  const removeBtn = card.querySelectorAll("remove-btn");

  removeBtn[index].addEventListener("clicked", (e) => {
      card[index].classList.add('hidden');
    console.log("hidden");
  });
});
