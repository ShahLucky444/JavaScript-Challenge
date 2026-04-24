let colors = [
  "red",
  "green",
  "blue",
  "aqua",
  "purple",
  "orange",
  "gray",
  "black",
  "yellow",
];

let btn1 = document.querySelector(".btn");
btn1.addEventListener("click", () => {
  let ranco = Math.floor(Math.random() * colors.length);
  let box = document.querySelector("#b1");
  box.style.backgroundColor = colors[ranco];
});

let btn2 = document.querySelector(".btn");
btn2.addEventListener("click", () => {
  let ranco = Math.floor(Math.random() * colors.length);
  let box = document.querySelector("#b2");
  box.style.backgroundColor = colors[ranco];
});

let btn3 = document.querySelector(".btn");
btn3.addEventListener("click", () => {
  let ranco = Math.floor(Math.random() * colors.length);
  let box = document.querySelector("#b3");
  box.style.backgroundColor = colors[ranco];
});
