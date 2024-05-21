//Calls up prefered Language
storedJsonString = localStorage.getItem("StoredLanguage");
StoredLanguage = JSON.parse(storedJsonString);
//If empty page will be in English
if (StoredLanguage === null) {
  currentlanguage = "nederlands";
  changeLanguage(currentlanguage);
}else {
  currentlanguage = StoredLanguage;
  changeLanguage(currentlanguage);
};
function changeLanguage(language) {

    currentlanguage = language;
    localStorage.setItem("StoredLanguage", JSON.stringify(currentlanguage));
    // Navbar
    var navlink1 = document.getElementById('navlink1');
    var navlink2 = document.getElementById('navlink2');
    var naam = document.getElementById('naam')
    var achternaam = document.getElementById('achternaam')
    var nummer = document.getElementById('nummer')
    var mail = document.getElementById('mail')
    var lang = document.getElementById('lang')
    var contacttitel = document.getElementById('contacttitel')
    var send = document.getElementById('send')
    
    if (language === 'nederlands') {
        navlink1.textContent = 'Producten';
        navlink2.textContent = 'Over ons';
        naam.placeholder='NAAM';
        nummer.placeholder='TELEFOONNUMMER'
        achternaam.placeholder='ACHTERNAAM'
        mail.placeholder='Iets laten weten? Typ het hier.'
        lang.lang = 'nl'
        contacttitel.textContent ='Contacteer ons'
        send.value = 'verstuur'
    } else if (language === 'engels') {
        navlink1.textContent = 'Products';
        navlink2.textContent = 'About us';
        naam.placeholder='NAME';
        nummer.placeholder='NUMBER'
        achternaam.placeholder='SURNAME'
        mail.placeholder='Let us know something? Type it here.'
        lang.lang = 'en'
        contacttitel.textContent ='Contact us'
        send.value = 'send'
    } else if (language === 'frans') {
        navlink1.textContent = 'Produits';
        navlink2.textContent = 'A propos de nous';
        naam.placeholder='PRENOM';
        nummer.placeholder='NUMÉRO DE TÉLÉPHONE'
        achternaam.placeholder='NOM'
        mail.placeholder='Vous souhaitez nous faire part de quelque chose ? Saisissez-le ici.'
        lang.lang = 'fr'
        contacttitel.textContent ='Contactez nous'
        send.value = 'envoyez'
    }
    // Navbar (vlaggen)
    var navlink3 = document.getElementById('navlink3');
    if (language === 'nederlands') {
        navlink3.innerHTML = '<img class="vlag" src="https://imgur.com/U0JJlm2.png" alt="Belgische vlag">';
    } else if (language === 'engels') {
        navlink3.innerHTML = '<img class="vlag" src="https://imgur.com/v6pv9P6.png" alt="Engelse vlag">';
    } else if (language === 'frans') {
        navlink3.innerHTML = '<img class="vlag" src="https://imgur.com/uuaeee4.png" alt="Franse vlag">';
    }
    //vertaling
    var footerTitel = document.getElementById('footerTitel')
    if (language === 'nederlands') {
        footerTitel.innerHTML = 'over ons'
    } else if (language === 'engels') {
        footerTitel.innerHTML = 'about us'
    } else if (language === 'frans') {
        footerTitel.innerHTML = 'à propos de nous'
    }

    //vertaling
    var footerSpeciaal = document.getElementById('footerSpeciaal')
    if (language === 'nederlands') {
        footerSpeciaal.innerHTML = 'Speciaal voor jouw'
    } else if (language === 'engels') {
        footerSpeciaal.innerHTML = 'Especially for your'
    } else if (language === 'frans') {
        footerSpeciaal.innerHTML = 'En particulier pour votre'
    }
    
    //vertaling
    var footerOntdek = document.getElementById('footerOntdek')
    var route = document.getElementById('route')
    if (language === 'nederlands') {
        footerOntdek.innerHTML = 'Speciaal voor jouw'
        route.innerHTML = 'routebeschrijving'
    } else if (language === 'engels') {
        footerOntdek.innerHTML = 'Discover more'
        route.innerHTML = 'travel directions'
    } else if (language === 'frans') {
        footerOntdek.innerHTML = 'Découvrir plus'
        route.innerHTML = 'itinéraires de voyage'
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