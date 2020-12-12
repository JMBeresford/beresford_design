const el_1 = document.querySelector("#illustration");
const el_2 = document.querySelector("#cta-text");
const domain = document.querySelector("body");

domain.addEventListener("mousemove", (e) => {
  el_1.style.transform = "translate(" + -e.clientX / 1000 + "px," + -e.clientY / 1000 + "px)";
  // el_2.style.transform = "translate(" + (-e.clientX) / 100 + "px," + (-e.clientY) / 100 + "px)";
  console.log(e.offsetX + ", " + e.offsetY);
});