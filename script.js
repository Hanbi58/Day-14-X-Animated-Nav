const ctn = document.querySelector(".container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  ctn.classList.toggle("open");
});
