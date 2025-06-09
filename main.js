"use strict";
const lightModeBtn = document.querySelector(".mode-btn");
const darkModeBtn = document.querySelector(".darkmode-btn");
const darkNav = document.querySelector("nav");
const lightNav = document.querySelector(".light-nav");
const darkThreeBtns = document.querySelector(".three-btns");
const lightBg = document.querySelector(".light-bg");
const h1 = document.querySelector("h1");
const allBtn = document.querySelector("#all");
const activeBtn = document.querySelector("#active");
const inactiveBtn = document.querySelector("#inactive");

// json data

async function fetchJson() {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();

    const container = document.querySelector(".container");
    data.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card");

      if (item.isActive === true) {
        card.innerHTML = `
            <div class="img-desc">
              <img
                src="${item.logo}"
                alt="icon"
                class="icon"
              />
              <div class="name-desc">
                <p class="name">${item.name}</p>
                <p class="description">
                 ${item.description}
                </p>
              </div>
            </div>
            <div class="remove-toggle">
              <button class="remove-btn">Remove</button>
             
          <div class="toggle-btn"><div class="circle"></div></div>
        
            </div>
      `;
        card.setAttribute("data-active", "data-active");
      } else {
        card.innerHTML = `
            <div class="img-desc">
              <img
                src="${item.logo}"
                alt="icon"
                class="icon"
              />
              <div class="name-desc">
                <p class="name">${item.name}</p>
                <p class="description">
                 ${item.description}
                </p>
              </div>
            </div>
            <div class="remove-toggle">
              <button class="remove-btn">Remove</button>
             
          <div class="inactive-toggle-btn"><div class="circle"></div></div>
        
            </div>
      `;
        card.setAttribute("data-inactive", "data-inactive");
      }

      container.appendChild(card);

      // switch mode
      const newName = card.querySelectorAll(".name");
      const newDesc = card.querySelectorAll(".description");
      const newRemoveBtn = card.querySelectorAll(".remove-btn");
      let toggleBtn = card.querySelectorAll(".toggle-btn");
      let inactiveToggleBtn = card.querySelectorAll(".inactive-toggle-btn");

      lightModeBtn.addEventListener("click", (e) => {
        card.classList.add("light-card");
        newName.forEach((item) => {
          item.classList.add("light-name");
        });
        newDesc.forEach((item) => {
          item.classList.add("light-description");
        });
        newRemoveBtn.forEach((btn) => {
          btn.style.backgroundColor = "none";
          btn.style.borderColor = "hsla(226, 11%, 37%, 0.5)";
          btn.style.color = "hsl(226, 11%, 37%)";
        });

        darkNav.style.display = "none";
        lightNav.style.display = "flex";
        lightBg.style.display = "block";
        h1.style.color = "hsl(227, 75%, 14%)";

        allBtn.classList.remove("active-btn");
        allBtn.classList.add("light-active-btn");
        activeBtn.classList.remove("inactive-btn");
        activeBtn.classList.add("light-inactive-btn");
        inactiveBtn.classList.remove("inactive-btn");
        inactiveBtn.classList.add("light-inactive-btn");

        allBtn.addEventListener("click", (e) => {
          allBtn.classList.remove("light-inactive-btn");
          allBtn.classList.add("light-active-btn");
          activeBtn.classList.remove("light-active-btn");
          activeBtn.classList.add("light-inactive-btn");
          inactiveBtn.classList.remove("light-active-btn");
          inactiveBtn.classList.add("light-inactive-btn");
        });

        activeBtn.addEventListener("click", (e) => {
          activeBtn.classList.remove("light-inactive-btn");
          activeBtn.classList.add("light-active-btn");
          allBtn.classList.remove("light-active-btn");
          allBtn.classList.add("light-inactive-btn");
          inactiveBtn.classList.remove("light-active-btn");
          inactiveBtn.classList.add("light-inactive-btn");
        });

        inactiveBtn.addEventListener("click", (e) => {
          inactiveBtn.classList.remove("light-inactive-btn");
          inactiveBtn.classList.add("light-active-btn");
          activeBtn.classList.remove("light-active-btn");
          activeBtn.classList.add("light-inactive-btn");
          allBtn.classList.remove("light-active-btn");
          allBtn.classList.add("light-inactive-btn");
        });
      });

      darkModeBtn.addEventListener("click", (e) => {
        card.classList.remove("light-card");
        card.classList.add("card");
        newName.forEach((item) => {
          item.classList.remove("light-name");
          item.classList.add("name");
        });
        newDesc.forEach((item) => {
          item.classList.remove("light-description");
          item.classList.add("description");
        });
        newRemoveBtn.forEach((btn) => {
          btn.style.borderColor = "hsl(226, 11%, 37%)";
          btn.style.color = "hsl(0, 0%, 93%)";
        });
        darkNav.style.display = "flex";
        lightNav.style.display = "none";
        lightBg.style.display = "none";
        h1.style.color = "hsl(200, 60%, 99%)";
        allBtn.classList.add("active-btn");
        allBtn.classList.remove("light-active-btn");
        activeBtn.classList.add("inactive-btn");
        activeBtn.classList.remove("light-inactive-btn");
        inactiveBtn.classList.add("inactive-btn");
        inactiveBtn.classList.remove("light-inactive-btn");
      });

      toggleBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const card = e.target.closest(".card");
          if (card.dataset.active) {
            btn.classList.remove("toggle-btn");
            btn.classList.add("inactive-toggle-btn");
            card.dataset.inactive = "data-inactive";
            delete card.dataset.active;
          } else {
            btn.classList.remove("inactive-toggle-btn");
            btn.classList.add("toggle-btn");
            card.dataset.active = "data-active";
            delete card.dataset.inactive;
          }
        });
      });

      inactiveToggleBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const card = e.target.closest(".card");
          if (card.dataset.inactive) {
            btn.classList.remove("inactive-toggle-btn");
            btn.classList.add("toggle-btn");
            card.dataset.active = "data-active";
            delete card.dataset.inactive;
          } else {
            btn.classList.remove("toggle-btn");
            btn.classList.add("inactive-toggle-btn");
            card.dataset.inactive = "data-inactive";
            delete card.dataset.active;
          }
        });
      });

      // all/active/inactive lists

      allBtn.addEventListener("click", (e) => {
        allBtn.classList.remove("inactive-btn");
        allBtn.classList.add("active-btn");
        activeBtn.classList.remove("active-btn");
        activeBtn.classList.add("inactive-btn");
        inactiveBtn.classList.remove("active-btn");
        inactiveBtn.classList.add("inactive-btn");
        const cards = document.querySelectorAll(".card");
        cards.forEach((card) => {
          card.classList.remove("hidden");
        });
      });

      activeBtn.addEventListener("click", (e) => {
        activeBtn.classList.remove("inactive-btn");
        activeBtn.classList.add("active-btn");
        allBtn.classList.remove("active-btn");
        allBtn.classList.add("inactive-btn");
        inactiveBtn.classList.remove("active-btn");
        inactiveBtn.classList.add("inactive-btn");
        console.log(card);
        const cards = document.querySelectorAll(".card");
        cards.forEach((card) => {
          if (card.dataset.active) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        });
      });

      inactiveBtn.addEventListener("click", (e) => {
        inactiveBtn.classList.remove("inactive-btn");
        inactiveBtn.classList.add("active-btn");
        activeBtn.classList.remove("active-btn");
        activeBtn.classList.add("inactive-btn");
        allBtn.classList.remove("active-btn");
        allBtn.classList.add("inactive-btn");
        const cards = document.querySelectorAll(".card");
        cards.forEach((card) => {
          if (card.dataset.inactive) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        });
      });
      newRemoveBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          let removedCard = e.target.parentNode.parentNode;
          removedCard.classList.add("hidden");
        });
      });
    });
  } catch (err) {
    console.error("failed to fetch data");
  }
}

fetchJson();
