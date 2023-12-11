function changeLanguage(language) {
    // Navbar
    var navlink1 = document.getElementById('navlink1');
    var navlink2 = document.getElementById('navlink2');
    var naam = document.getElementById('naam')
    var achternaam = document.getElementById('achternaam')
    var nummer = document.getElementById('nummer')
    var mail = document.getElementById('mail')
    var lang = document.getElementById('lang')
    
    if (language === 'nederlands') {
        navlink1.textContent = 'Producten';
        navlink2.textContent = 'Over ons';
        naam.placeholder='NAAM';
        nummer.placeholder='TELEFOONNUMMER'
        achternaam.placeholder='ACHTERNAAM'
        mail.placeholder='Iets laten weten? Typ het hier.'
        lang.lang = 'nl'
    } else if (language === 'engels') {
        navlink1.textContent = 'Products';
        navlink2.textContent = 'About us';
        naam.placeholder='NAME';
        nummer.placeholder='NUMBER'
        achternaam.placeholder='SURNAME'
        mail.placeholder='Let us know something? Type it here.'
        lang.lang = 'en'
    } else if (language === 'frans') {
        navlink1.textContent = 'Produits';
        navlink2.textContent = 'A propos de nous';
        naam.placeholder='PRENOM';
        nummer.placeholder='NUMÉRO DE TÉLÉPHONE'
        achternaam.placeholder='NOM'
        mail.placeholder='Vous souhaitez nous faire part de quelque chose ? Saisissez-le ici.'
        lang.lang = 'fr'
    }
    // Navbar (vlaggen)
    var navlink3 = document.getElementById('navlink3');
    if (language === 'nederlands') {
        navlink3.innerHTML = '<img class="vlag" src="images/image-removebg-preview.png" alt="Belgische vlag">';
    } else if (language === 'engels') {
        navlink3.innerHTML = '<img class="vlag" src="images/v6pv9P6.png" alt="Engelse vlag">';
    } else if (language === 'frans') {
        navlink3.innerHTML = '<img class="vlag" src="images/uuaeee4.png" alt="Franse vlag">';
    }

}

//scrol animaties
window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

//hamburger-menu
document.addEventListener("DOMContentLoaded", function () {
    let links = document.getElementById("links");
    links.style.maxHeight = "0px";

    function menutoggle() {
        if (links.style.maxHeight === "0px") {
            links.style.maxHeight = "200px";
        } else {
            links.style.maxHeight = "0px";
        }
    }

    let menuIcon = document.querySelector(".menu-logo");
    menuIcon.addEventListener("click", menutoggle);
});