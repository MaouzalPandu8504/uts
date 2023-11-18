let prevScrollPos = window.pageYOffset;
const nav = document.querySelector('.nav');
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        nav.style.top = '0';
    } else {
        nav.style.top = '-75px';
    }
    prevScrollPos = currentScrollPos;
};
function toggleDarkMode() {
    let element = document.body;
    element.classList.toggle("dark");
    let button = document.getElementById("btnDarkMode");

    if (element.classList.contains("dark")) {
        button.innerHTML = "Dark Mode: <span style='color: green;'>On</span>";
    } else {
        button.innerHTML = "Dark Mode: <span style='color: red;'>Off</span>";
    }
}