console.log("File Loaded");

// hier haal ik alle html  op met queryselector
const navbar = document.querySelector(".navbar");
const btnInspo = document.querySelector(".btn-inspo");
const btnColor = document.querySelector(".btn-color");
const btnSitemap = document.querySelector(".btn-sitemap");

//nu zorg ik ervoor dat de navbar een bg kleur krijgt wanneer je scrollt
window.addEventListener('scroll', () => {
    //wanneer de gebruiker 120px naar beneden scrollt, wordt de bg toegevoegd
    if (window.scrollY >= 120) {
        navbar.classList.add('navbar-scrolled');
        //wanneer de gebruiker op height: 0 zit gaat de bg weer weg :)
    } else if (window.scrollY < 120) {
        navbar.classList.remove('navbar-scrolled')
    }
});

btnInspo.addEventListener('click',inspoFunction);

function inspoFunction() {
    
}