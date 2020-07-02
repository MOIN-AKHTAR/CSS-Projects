const menuBtn = document.querySelector(".menu_btn");
let isMenuOpen = false;
menuBtn.addEventListener("click", function () {
    if (!isMenuOpen) {
        menuBtn.classList.add("open");
        isMenuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        isMenuOpen = false;
    }
})