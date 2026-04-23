document.querySelector(".child").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("child clicked");
});

document.querySelector(".childcontainer").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("childconatiner clicked");
});

document.querySelector(".container").addEventListener("click", () => {
  alert("container clicked");
});

// let a = setInterval(() => {
//   document.querySelector(".container").style.backgroundColor = "yellow";
// }, 2000);

// clearInterval(a);

let a = setTimeout(() => {
  document.querySelector(".container").style.backgroundColor = "purple";
}, 2000);

clearTimeout(a);

let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  document.querySelector(".child").innerHTML = "your name is lucky!!";
});

let btn1 = document.querySelector(".btn1");

btn1.addEventListener("click", () => {
  document.querySelector(".child").innerHTML = "your name is andra!!";
});

let btn2 = document.querySelector(".btn2");

btn2.addEventListener("click", () => {
  document.querySelector(".child").innerHTML = "your name is bunny!!";
});
