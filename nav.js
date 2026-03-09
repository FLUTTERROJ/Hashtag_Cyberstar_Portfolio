function openNav() {
  document.getElementById("sideNav").style.width = "250px"; // open panel
  document.querySelector(".menu-icon").style.display = "none"; // hide menu icon
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0"; // close panel
  document.querySelector(".menu-icon").style.display = "block"; // show menu icon
}