const numbers = Array.from(document.querySelectorAll(".number"));
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
let count = 1;

nextButton.addEventListener("click", () => {
  colorLines();
  colorNumbers();
  incrementCount();
});

prevButton.addEventListener("click", () => {
  decrementCount();
  deColorNumbers();
  deColorLines();
});

function incrementCount() {
  if (count < 4) {
    prevButton.disabled = false;
    count++;
  }
  if (count === 4) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

function decrementCount() {
  if (count > 0) {
    count--;
    nextButton.disabled = false;
  }
  if (count === 1) {
    prevButton.disabled = true;
  }
}

function colorNumbers() {
  if (count !== 4) {
    numbers[count].classList.add("active");
  }
}

function colorLines() {
  const blueLine1 = document.querySelector(".blue-line-1");
  const blueLine2 = document.querySelector(".blue-line-2");
  const blueLine3 = document.querySelector(".blue-line-3");

  if (count === 1) {
    blueLine1.classList.add("active");
  }
  if (count === 2) {
    blueLine2.classList.add("active");
  }
  if (count === 3) {
    blueLine3.classList.add("active");
  }
}

function deColorNumbers() {
  if (count > 0) {
    numbers[count].classList.remove("active");
  }
}

function deColorLines() {
  const blueLine1 = document.querySelector(".blue-line-1");
  const blueLine2 = document.querySelector(".blue-line-2");
  const blueLine3 = document.querySelector(".blue-line-3");
  if (count === 3) {
    blueLine3.classList.remove("active");
  }
  if (count === 2) {
    blueLine2.classList.remove("active");
  }
  if (count === 1) {
    blueLine1.classList.remove("active");
  }
}
