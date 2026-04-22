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
