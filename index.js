let menu = document.getElementById("menu");

function toggleMobileMenu() {
  menu.classList.toggle("open");
  menu.querySelector("img").classList.toggle("close");
}

function hideMobileMenu() {
  toggleMobileMenu(menu);
}
