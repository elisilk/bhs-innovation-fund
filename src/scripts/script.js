/* Sticky header */

const header = document.getElementById("header");

document.addEventListener("scroll", (e) => {
  if (window.scrollY > 0) {
    if (!header.classList.contains("shadow")) header.classList.add("shadow");
    if (!header.classList.contains("header--small"))
      header.classList.add("header--small");
  } else {
    if (header.classList.contains("shadow")) header.classList.remove("shadow");
    if (header.classList.contains("header--small"))
      header.classList.remove("header--small");
  }
});

/* Mobile navigation menu */

const navToggle = document.querySelector('[aria-controls="primary-nav"]');

navToggle.addEventListener("click", () => {
  const navOpened = navToggle.getAttribute("aria-expanded");
  if (navOpened === "false") {
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    navToggle.setAttribute("aria-expanded", "false");
  }
  console.log("button pressed", navOpened);
});

/* Card (Inclsuive Components) - https://inclusive-components.design/cards/ */

const cards = document.querySelectorAll(".card");

Array.prototype.forEach.call(cards, (card) => {
  let down,
    up,
    link = card.querySelector(".card__title a");
  card.onmousedown = () => {
    down = +new Date();
    console.log(down);
  };
  card.onmouseup = () => {
    up = +new Date();
    console.log(down);
    if (up - down < 200) {
      link.click();
    }
  };
});
