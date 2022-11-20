let menu = document.querySelector(".menu-btn");

function toggleMobileMenu() {
  menu.classList.toggle("open");
  menu.querySelector("img").classList.toggle("close");
}

function hideMobileMenu() {
  toggleMobileMenu(menu);
}
