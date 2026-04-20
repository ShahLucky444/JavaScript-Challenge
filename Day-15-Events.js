let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  document.getElementById("div1").innerText = "box is empty";
});

let heading = document.getElementById("head1");

heading.addEventListener("mouseenter", () => {
  document.getElementById("head1").style.backgroundColor = "orange";
});

let btn2 = document.getElementById("btn2");
btn2.addEventListener("dblclick", () => {
  document.getElementById("head1").style.backgroundColor = "gray";
});
