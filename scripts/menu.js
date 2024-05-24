function showMenu() {
    document.getElementById("menu").classList = ["open-menu"];
    document.getElementById("nav-btn").style.display = "none";
    document.getElementById("nav-close").style.display = "inline";
}
function closeMenu() {
    document.getElementById("menu").classList = [];
    document.getElementById("nav-btn").style.display = "inline";
    document.getElementById("nav-close").style.display = "none";
}
