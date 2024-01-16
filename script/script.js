const menuButton = document.querySelector(".mobile-menu-button");
const sideBar = document.querySelector(".sidebar");

menuButton.addEventListener("click", function () {
  this.classList.toggle("open");
  sideBar.classList.toggle("open");
});
