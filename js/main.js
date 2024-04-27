console.log("File Loaded");

const nav = document.querySelector(".navbar");

window.addEventListener('scroll', () => {
    if (window.scrollY >= 150) {
        nav.classList.add('navbar-scrolled');
    } else if (window.scrollY < 150) {
        nav.classList.remove('navbar-scrolled')
    }
});