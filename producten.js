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
    var navlink3 = document.getElementById('navlink3');
    var lang = document.getElementById('lang')
    var main = document.getElementById('main')
    var werk = document.getElementById('werk')
    var card1 = document.getElementById('card1')
    var card2 = document.getElementById('card2')
    var card3 = document.getElementById('card3')
    var card4 = document.getElementById('card4')
            if (language === 'nederlands') {
                navlink1.textContent = 'Producten';
                navlink2.textContent = 'Over ons';
                lang.lang = 'nl'
                navlink3.innerHTML = '<img class="vlag" src="https://imgur.com/U0JJlm2.png" alt="Belgische vlag">';
                main.innerHTML = '<section> <div class="landing-product"> <h1 id="build" class="text-product-top">Laten we iets bouwen</h1> </div> </section> <section class="packages-section"> <div class="package-column green-column"> <div class="packinfo"> <h3 class="title-pack">Website onderhoud</h3><br> <h2 class="Prijs">€ 150</h2> <p class="disclaimer">Per maand</p><br> <p>Functionele controles</p><br> <p>Veiligheidscontroles</p><br> <p>Inhoudscontroles</p><br> <p>Compatibiliteit</p><br> <p>Consultatie en advies</p><br> </div> </div> <div class="package-column blue-column"> <div class="packinfo"> <h3 class="title-pack">Website</h3><br> <h2 class="Prijs">€ 70</h2> <p class="disclaimer">Per uur</p><br> <p>Basisformulieren </p><br> <p>Basisfunctionaliteiten</p><br> <p>Websiteontwerp en ontwikkeling</p><br> <p>Beveiliging</p><br> <p>Consultatie en advies</p><br> </div> </div> <div class="package-column gray-blue-column"> <div class="packinfo"> <h3 class="title-pack">website paket</h3><br> <h2 class="Prijs">€ 85</h2> <p class="disclaimer">Per uur</p><br> <p>Formulieren </p><br> <p>Functionaliteiten</p><br> <p>Websiteontwerp en ontwikkeling</p><br> <p>Beveiliging</p><br> <p>1 maand onderhoud</p><br> <p>Consultatie en advies</p><br> </div> </div> </section> <h3 class="custom-pack-link">Heb je iets speciaals in gedachten?&nbsp; <a class="custom-pack-link" href="contact.html"> Neem contact met ons op</a></h3>';
                werk.textContent ='Ons Werk'
                card1.innerHTML = '<img src="images/donut-loser.jpg" alt="Donut Frenzy" class="image"> <h3 id class="Onswerk-title">Donut Frenzy</h3> <p class="Onswerk-tekst">is een website die allerlei heerlijke donuts laat zien en verkopen. De site bevat waarschijnlijk visueel aantrekkelijke afbeeldingen, informatie over donutsmaken en -recepten, en een online winkel voor gemakkelijke donutaankopen. Het doel is om een gemeenschap van donutfanaten te creëren door boeiende inhoud over het maken van donuts te bieden. Het ontwerp van de website benadrukt het plezier en de verwennerij van deze zoete lekkernijen.</p>'
                card2.innerHTML = '<img src="images/Levantes.png" alt="Levantes pizza" class="image"> <h3 class="Onswerk-title">Levantes Pizza</h3> <p class="Onswerk-tekst">is een online platform waar pizzaliefhebbers diverse heerlijke pizzas kunnen ontdekken en eenvoudig online kunnen bestellen voor levering of afhalen. De website biedt een overzichtelijk menu, openingstijden, leveringsinformatie en eventuele speciale aanbiedingen. Het ontwerp is gericht op een gebruiksvriendelijke bestelervaring met aantrekkelijke afbeeldingen van de pizzas.</p>'
                card3.innerHTML = '<img src="images/hairlock.jpg" alt="hairlock" class="image"> <h3 class="Onswerk-title">Hairlock</h3> <p class="Onswerk-tekst">is een kapperswebsite die informatie biedt over de diensten, expertise en kappers van de salon. Bezoekers kunnen details verwachten over verschillende haarbehandelingen, stylingopties en wellicht zelfs een portfolio met het werk van de salon. De website kan een afspraaksysteem bevatten voor het gemak van klanten, samen met details over de locatie van de salon, openingstijden en contactinformatie. Het algemene ontwerp zal waarschijnlijk strak en modern zijn, om de toewijding van de salon aan de laatste haartrends te weerspiegelen.</p>'
                card4.innerHTML = '<img src="images/b.png" alt="Red Store" class="image"> <h3 class="Onswerk-title">Red Store</h3> <p class="Onswerk-tekst">is een online webshop gespecialiseerd in sportkleding. Op de website kunnen klanten een breed scala aan hoogwaardige sportkleding ontdekken, variërend van fitnessoutfits tot sportaccessoires. Met een gebruiksvriendelijk ontwerp kunnen bezoekers eenvoudig door het assortiment bladeren, gedetailleerde productinformatie bekijken en veilig online aankopen doen. De website kan ook functies bevatten zoals aanbiedingen, maatgidsen en klantrecensies om de winkelervaring te verbeteren.</p>'
            } else if (language === 'engels') {
                navlink1.textContent = 'Products';
                navlink2.textContent = 'About us';
                lang.lang = 'en'
                navlink3.innerHTML = '<img class="vlag" src="https://imgur.com/v6pv9P6.png" alt="Engelse vlag">';
                main.innerHTML = '<section> <div class="landing-product"> <h1 id="build" class="text-product-top">Let us start building</h1> </div> </section> <section class="packages-section"> <div class="package-column green-column"> <div class="packinfo"> <h3 class="title-pack">Website Maintenance</h3><br> <h2 class="Prijs">€ 150</h2> <p class="disclaimer">Per month</p><br> <p>Functional checks</p><br> <p>Security checks</p><br> <p>Content checks</p><br> <p>Compatibility</p><br> <p>Consultation and advice</p><br> </div> </div> <div class="package-column blue-column"> <div class="packinfo"> <h3 class="title-pack">Website</h3><br> <h2 class="Prijs">€ 70</h2> <p class="disclaimer">Per hour</p><br> <p>Basic forms</p><br> <p>Basic functionalities</p><br> <p>Website design and development</p><br> <p>Security</p><br> <p>Consultation and advice</p><br> </div> </div> <div class="package-column gray-blue-column"> <div class="packinfo"> <h3 class="title-pack">Website Package</h3><br> <h2 class="Prijs">€ 85</h2> <p class="disclaimer">Per hour</p><br> <p>Forms</p><br> <p>Functionalities</p><br> <p>Website design and development</p><br> <p>Security</p><br> <p>1 month maintenance</p><br> <p>Consultation and advice</p><br> </div> </div> </section> <h3 class="custom-pack-link">Have something specific in mind?&nbsp; <a class="custom-pack-link" href="contact.html">Contact us</a></h3>';
                werk.textContent ='Our Work'
                card1.innerHTML = '<img src="images/donut-loser.jpg" alt="Donut Frenzy" class="image"> <h3 id class="Onswerk-title">Donut Frenzy</h3> <p class="Onswerk-tekst">is a website showcasing and selling a variety of delicious donuts. The site likely features visually appealing images, information about donut flavors and recipes, and an online store for easy donut purchases. The goal is to create a community of donut enthusiasts by providing engaging content about making donuts. The website design emphasizes the fun and indulgence of these sweet treats.</p>'
                card2.innerHTML = '<img src="images/Levantes.png" alt="Levantes Pizza" class="image"> <h3 class="Onswerk-title">Levantes Pizza</h3> <p class="Onswerk-tekst">is an online platform where pizza lovers can discover various delicious pizzas and easily order them online for delivery or pickup. The website features a clear menu, opening hours, delivery information, and any special offers. The design is focused on a user-friendly ordering experience with attractive images of the pizzas.</p>'
                card3.innerHTML = '<img src="images/hairlock.jpg" alt="hairlock" class="image"> <h3 class="Onswerk-title">Hairlock</h3> <p class="Onswerk-tekst">is a hair salon website providing information about the services, expertise, and stylists of the salon. Visitors can expect details about various hair treatments, styling options, and possibly a portfolio showcasing the salons work. The website may include an appointment system for customer convenience, along with details about the salons location, opening hours, and contact information. The overall design will likely be sleek and modern, reflecting the salons dedication to the latest hair trends.</p>'
                card4.innerHTML = '<img src="images/b.png" alt="Red Store" class="image"> <h3 class="Onswerk-title">Red Store</h3> <p class="Onswerk-tekst">is an online store specializing in sportswear. On the website, customers can discover a wide range of high-quality sportswear, ranging from fitness outfits to sports accessories. With a user-friendly design, visitors can easily browse through the assortment, view detailed product information, and make secure online purchases. The website may also include features such as special offers, size guides, and customer reviews to enhance the shopping experience.</p>'
            } else if (language === 'frans') {
                navlink1.textContent = 'Produits';
                navlink2.textContent = 'A propos de nous';
                lang.lang = 'fr'
                navlink3.innerHTML = '<img class="vlag" src="https://imgur.com/uuaeee4.png" alt="Franse vlag">';
                main.innerHTML = '<section> <div class="landing-product"> <h1 id="build" class="text-product-top">Construisons quelque chose</h1> </div> </section> <section class="packages-section"> <div class="package-column green-column"> <div class="packinfo"> <h3 class="title-pack">Maintenance de site web</h3><br> <h2 class="Prijs">€ 150</h2> <p class="disclaimer">Par mois</p><br> <p>Contrôles fonctionnels</p><br> <p>Contrôles de sécurité</p><br> <p>Contrôles de contenu</p><br> <p>Compatibilité</p><br> <p>Consultation et conseils</p><br> </div> </div> <div class="package-column blue-column"> <div class="packinfo"> <h3 class="title-pack">Site web</h3><br> <h2 class="Prijs">€ 70</h2> <p class="disclaimer">Par heure</p><br> <p>Formulaires de base</p><br> <p>Fonctionnalités de base</p><br> <p>Conception et développement de site web</p><br> <p>Sécurité</p><br> <p>Consultation et conseils</p><br> </div> </div> <div class="package-column gray-blue-column"> <div class="packinfo"> <h3 class="title-pack">Forfait site web</h3><br> <h2 class="Prijs">€ 85</h2> <p class="disclaimer">Par heure</p><br> <p>Formulaires</p><br> <p>Fonctionnalités</p><br> <p>Conception et développement de site web</p><br> <p>Sécurité</p><br> <p>1 mois de maintenance</p><br> <p>Consultation et conseils</p><br> </div> </div> </section> <h3 class="custom-pack-link">Vous avez quelque chose de spécial en tête ?&nbsp; <a class="custom-pack-link" href="contact.html">Contactez-nous</a></h3>';
                werk.textContent ='Notre Travail'
                card1.innerHTML = '<img src="images/donut-loser.jpg" alt="Donut Frenzy" class="image"> <h3 id class="Onswerk-title">Donut Frenzy</h3> <p class="Onswerk-tekst">est un site web qui présente et vend une variété de délicieux beignets. Le site comprend probablement des images visuellement attrayantes, des informations sur les saveurs et les recettes de beignets, ainsi qu une boutique en ligne pour des achats de beignets faciles. L objectif est de créer une communauté de passionnés de beignets en fournissant un contenu captivant sur la fabrication des beignets. Le design du site met en avant le plaisir et la gourmandise de cette douce friandise.</p>'
                card2.innerHTML = '<img src="images/Levantes.png" alt="Levantes Pizza" class="image"> <h3 class="Onswerk-title">Levantes Pizza</h3> <p class="Onswerk-tekst">est une plateforme en ligne où les amateurs de pizza peuvent découvrir diverses pizzas délicieuses et les commander facilement en ligne pour une livraison ou une récupération en magasin. Le site propose un menu clair, des heures d ouverture, des informations sur la livraison et d éventuelles offres spéciales. Le design vise à offrir une expérience de commande conviviale avec des images attrayantes des pizzas.</p>'
                card3.innerHTML = '<img src="images/hairlock.jpg" alt="hairlock" class="image"> <h3 class="Onswerk-title">Hairlock</h3> <p class="Onswerk-tekst">est un site web de salon de coiffure fournissant des informations sur les services, l expertise et les coiffeurs du salon. Les visiteurs peuvent s attendre à des détails sur différents traitements capillaires, des options de coiffure et peut-être même un portfolio présentant le travail du salon. Le site peut inclure un système de prise de rendez-vous pour la commodité des clients, ainsi que des détails sur l emplacement du salon, les horaires d ouverture et les coordonnées. Le design global sera probablement épuré et moderne, reflétant l engagement du salon envers les dernières tendances capillaires.</p>'
                card4.innerHTML = '<img src="images/b.png" alt="Red Store" class="image"> <h3 class="Onswerk-title">Red Store</h3> <p class="Onswerk-tekst">est une boutique en ligne spécialisée dans les vêtements de sport. Sur le site, les clients peuvent découvrir une large gamme de vêtements de sport de haute qualité, allant des tenues de fitness aux accessoires de sport. Avec un design convivial, les visiteurs peuvent facilement parcourir l assortiment, consulter des informations détaillées sur les produits et effectuer des achats en ligne en toute sécurité. Le site peut également proposer des fonctionnalités telles que des offres spéciales, des guides de tailles et des avis clients pour améliorer l expérience d achat.</p>'
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