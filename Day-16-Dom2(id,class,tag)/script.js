// let boxes = document.getElementsByClassName("box");
// boxes[1].style.backgroundColor = "black";
// boxes[1].style.color = "white";

// let box4 = document.getElementById("box4");
// box4.style.color = "purple";

document.getElementsByTagName("span").backgroundColor = "yellow";

// document.querySelector(".box").style.backgroundColor = "aqua"; // for single element or first .box class element

//for all or multiple element selector

document.querySelectorAll(".box").forEach((e) => {
  e.style.backgroundColor = "aqua";
});
