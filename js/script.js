let navBox = document.querySelector(".box")
let navButton = document.querySelector(".buttonone");


navButton.addEventListener("click", () => {

if (navBox.style.display == "none"){

  navBox.style.display = "flex"
}
else {
navBox.style.display = "none"
}
});