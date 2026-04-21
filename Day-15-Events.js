let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  document.getElementById("div1").innerText = "box is empty";
});

btn.addEventListener("click", () => {
  alert(" click button");
});

let heading = document.getElementById("head1");

heading.addEventListener("mouseenter", () => {
  document.getElementById("head1").style.backgroundColor = "orange";
});

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
  document.getElementById("div1").style.borderRadius = "50%";
  document.getElementById("div1").style.border = "2px dotted red";
});

let parag = document.getElementById("para");

parag.addEventListener("mouseenter", () => {
  document.getElementById("para").innerHTML = "mouse entered in paragraph";
  document.getElementById("para").style.backgroundColor = "yellow";
  document.getElementById("para").style.borderRadius = "35%";
});

// btn2.addEventListener("keydown", (e) => {
//   console.log(e);
// });
