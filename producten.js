function changeLanguage(language) {
    // Navbar
    var navlink1 = document.getElementById('navlink1');
    var navlink2 = document.getElementById('navlink2');
    var navlink3 = document.getElementById('navlink3');
    var lang = document.getElementById('lang')
    var main = document.getElementById('main')
            if (language === 'nederlands') {
                navlink1.textContent = 'Producten';
                navlink2.textContent = 'Over ons';
                lang.lang = 'nl'
                navlink3.innerHTML = '<img class="vlag" src="https://imgur.com/U0JJlm2.png" alt="Belgische vlag">';
                main.innerHTML = '<section> <div class="landing-product"> <h1 id="build" class="text-product-top">Laten we iets bouwen</h1> </div> </section> <section class="packages-section"> <div class="package-column green-column"> <div class="packinfo"> <h3 class="title-pack">Website onderhoud</h3><br> <h2 class="Prijs">€ 150</h2> <p class="disclaimer">Per maand</p><br> <p>Functionele controles</p><br> <p>Veiligheidscontroles</p><br> <p>Inhoudscontroles</p><br> <p>Compatibiliteit</p><br> <p>Consultatie en advies</p><br> </div> </div> <div class="package-column blue-column"> <div class="packinfo"> <h3 class="title-pack">Website</h3><br> <h2 class="Prijs">€ 70</h2> <p class="disclaimer">Per uur</p><br> <p>Basisformulieren </p><br> <p>Basisfunctionaliteiten</p><br> <p>Websiteontwerp en ontwikkeling</p><br> <p>Beveiliging</p><br> <p>Consultatie en advies</p><br> </div> </div> <div class="package-column gray-blue-column"> <div class="packinfo"> <h3 class="title-pack">website paket</h3><br> <h2 class="Prijs">€ 85</h2> <p class="disclaimer">Per uur</p><br> <p>Formulieren </p><br> <p>Functionaliteiten</p><br> <p>Websiteontwerp en ontwikkeling</p><br> <p>Beveiliging</p><br> <p>1 maand onderhoud</p><br> <p>Consultatie en advies</p><br> </div> </div> </section> <h3 class="custom-pack-link">Heb je iets speciaals in gedachten?&nbsp; <a class="custom-pack-link" href="contact.html"> Neem contact met ons op</a></h3>';
            } else if (language === 'engels') {
                navlink1.textContent = 'Products';
                navlink2.textContent = 'About us';
                lang.lang = 'en'
                navlink3.innerHTML = '<img class="vlag" src="https://imgur.com/v6pv9P6.png" alt="Engelse vlag">';
                main.innerHTML = '<section> <div class="landing-product"> <h1 id="build" class="text-product-top">Let us start building</h1> </div> </section> <section class="packages-section"> <div class="package-column green-column"> <div class="packinfo"> <h3 class="title-pack">Website Maintenance</h3><br> <h2 class="Prijs">€ 150</h2> <p class="disclaimer">Per month</p><br> <p>Functional checks</p><br> <p>Security checks</p><br> <p>Content checks</p><br> <p>Compatibility</p><br> <p>Consultation and advice</p><br> </div> </div> <div class="package-column blue-column"> <div class="packinfo"> <h3 class="title-pack">Website</h3><br> <h2 class="Prijs">€ 70</h2> <p class="disclaimer">Per hour</p><br> <p>Basic forms</p><br> <p>Basic functionalities</p><br> <p>Website design and development</p><br> <p>Security</p><br> <p>Consultation and advice</p><br> </div> </div> <div class="package-column gray-blue-column"> <div class="packinfo"> <h3 class="title-pack">Website Package</h3><br> <h2 class="Prijs">€ 85</h2> <p class="disclaimer">Per hour</p><br> <p>Forms</p><br> <p>Functionalities</p><br> <p>Website design and development</p><br> <p>Security</p><br> <p>1 month maintenance</p><br> <p>Consultation and advice</p><br> </div> </div> </section> <h3 class="custom-pack-link">Have something specific in mind?&nbsp; <a class="custom-pack-link" href="contact.html">Contact us</a></h3>';
            } else if (language === 'frans') {
                navlink1.textContent = 'Produits';
                navlink2.textContent = 'A propos de nous';
                lang.lang = 'fr'
                navlink3.innerHTML = '<img class="vlag" src="https://imgur.com/uuaeee4.png" alt="Franse vlag">';
                main.innerHTML = '<section> <div class="landing-product"> <h1 id="build" class="text-product-top">Construisons quelque chose</h1> </div> </section> <section class="packages-section"> <div class="package-column green-column"> <div class="packinfo"> <h3 class="title-pack">Maintenance de site web</h3><br> <h2 class="Prijs">€ 150</h2> <p class="disclaimer">Par mois</p><br> <p>Contrôles fonctionnels</p><br> <p>Contrôles de sécurité</p><br> <p>Contrôles de contenu</p><br> <p>Compatibilité</p><br> <p>Consultation et conseils</p><br> </div> </div> <div class="package-column blue-column"> <div class="packinfo"> <h3 class="title-pack">Site web</h3><br> <h2 class="Prijs">€ 70</h2> <p class="disclaimer">Par heure</p><br> <p>Formulaires de base</p><br> <p>Fonctionnalités de base</p><br> <p>Conception et développement de site web</p><br> <p>Sécurité</p><br> <p>Consultation et conseils</p><br> </div> </div> <div class="package-column gray-blue-column"> <div class="packinfo"> <h3 class="title-pack">Forfait site web</h3><br> <h2 class="Prijs">€ 85</h2> <p class="disclaimer">Par heure</p><br> <p>Formulaires</p><br> <p>Fonctionnalités</p><br> <p>Conception et développement de site web</p><br> <p>Sécurité</p><br> <p>1 mois de maintenance</p><br> <p>Consultation et conseils</p><br> </div> </div> </section> <h3 class="custom-pack-link">Vous avez quelque chose de spécial en tête ?&nbsp; <a class="custom-pack-link" href="contact.html">Contactez-nous</a></h3>';
            }
        //vertaling
        var footerTitel = document.getElementById('footerTitel')
        if (language === 'nederlands') {
            footerTitel.textContent = 'over ons';
        } else if (language === 'engels') {
            footerTitel.textContent = 'about us';
        } else if (language === 'frans') {
            footerTitel.textContent = 'à propos de nous';
        }
    
        //vertaling
        var footerSpeciaal = document.getElementById('footerSpeciaal')
        if (language === 'nederlands') {
            footerTitel.textContent = 'over ons';
            footerSpeciaal.textContent = 'Speciaal voor jouw';
        } else if (language === 'engels') {
            footerTitel.textContent = 'about us';
            footerSpeciaal.textContent = 'Especially for your';
        } else if (language === 'frans') {
            footerTitel.textContent = 'à propos de nous';
            footerSpeciaal.textContent = 'En particulier pour votre';
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