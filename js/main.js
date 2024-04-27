console.log("File Loaded");

// hier haal ik de navbar op met queryselector
const navbar = document.querySelector(".navbar");

//nu zorg ik ervoor dat de navbar een bg kleur krijgt wanneer je scrollt
window.addEventListener('scroll', () => {
    //wanneer de gebruiker 150px naar beneden scrollt, wordt de bg toegevoegd
    if (window.scrollY >= 150) {
        navbar.classList.add('navbar-scrolled');
        //wanneer de gebruiker op height: 0 zit gaat de bg weer weg :)
    } else if (window.scrollY < 150) {
        navbar.classList.remove('navbar-scrolled')
    }
});