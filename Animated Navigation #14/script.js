const toggleBtn = document.querySelector("#toggle");
const nav = document.querySelector("#nav");

toggleBtn.addEventListener("click", function () {
  nav.classList.toggle("active");
});
