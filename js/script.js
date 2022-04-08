var btn = document.getElementById("btn-id");

btn.addEventListener("click", openNav);

function openNav() {
    document.getElementById("mySidenav").classList.add("sidenavOpen");
}
  
function closeNav() {
    document.getElementById("mySidenav").classList.remove("sidenavOpen");
}