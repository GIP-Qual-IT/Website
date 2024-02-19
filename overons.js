window.onload = changeLanguage;
function changeLanguage(language) {
    // Navbar
    var navlink1 = document.getElementById('navlink1');
    var navlink2 = document.getElementById('navlink2');
    
    if (language === 'nederlands') {
        navlink1.textContent = 'Producten';
        navlink2.textContent = 'Over ons';
    } else if (language === 'engels') {
        navlink1.textContent = 'Products';
        navlink2.textContent = 'About us';
    } else if (language === 'frans') {
        navlink1.textContent = 'Produits';
        navlink2.textContent = 'A propos de nous';
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
    
    //vertaling
    var Jeftekst = document.getElementById('Jeftekst')
    var Arnetekst = document.getElementById('Arnetekst')
    var Yessintekst = document.getElementById('Yessintekst')
    if (language === 'nederlands') {
        Jeftekst.textContent = 'Als top webontwikkelaar in ons ICT-bedrijf, mixt Jef zijn technische skills en creativiteit om websites te maken die de standaard in de business omhoog krikken. Met een scherp oog voor de laatste trends en een passie voor vernieuwing, brengt Jef unieke en gebruiksvriendelijke online ervaringen tot leven, waardoor onze klanten zich onderscheiden in de digitale wereld.';
        Arnetekst.textContent = 'Als server-side ontwikkelaar in ons ICT-team, gooit Arne alle coole back-end trucjes in de mix om stevige en flexibele systemen te bouwen die de digitale wereld van onze klanten echt een boost geven. Met zijn enthousiasme en hands-on aanpak zorgt Arne ervoor dat onze klanten altijd een solide digitale basis hebben.';
        Yessintekst.textContent = 'Yessin, CEO bij Qual-IT, leidt het bedrijf, geeft een flinke boost aan innovatie, en is altijd bezig met wat er in de tech-wereld te gebeuren staat, vooral met dingen als kunstmatige intelligentie en blockchain. Met zijn relaxte aanpak zorgt Yessin ervoor dat Qual-IT altijd een stapje voor is.';
    } else if (language === 'engels') {
        Jeftekst.textContent = 'As a top web developer in our IT company, Jef combines his technical skills and creativity to create websites that elevate the standard in the business. With a keen eye for the latest trends and a passion for innovation, Jef brings unique and user-friendly online experiences to life, allowing our clients to stand out in the digital world.';
        Yessintekst.textContent = 'Yessin, CEO at Qual-IT, leads the company, gives a significant boost to innovation, and is always engaged with what is happening in the tech world, especially with things like artificial intelligence and blockchain. With his relaxed approach, Yessin ensures that Qual-IT is always one step ahead.';
        Arnetekst.textContent = 'As a server-side developer in our IT team, Arne blends all the cool back-end tricks to build robust and flexible systems that truly enhance the digital world of our clients. With his enthusiasm and hands-on approach, Arne ensures that our clients always have a solid digital foundation.';
    } else if (language === 'frans') {
        Jeftekst.textContent = "En tant que meilleur développeur web dans notre entreprise informatique, Jef allie ses compétences techniques et sa créativité pour créer des sites web qui élèvent la norme dans le secteur. Avec un regard attentif sur les dernières tendances et une passion pour l'innovation, Jef donne vie à des expériences en ligne uniques et conviviales, permettant à nos clients de se démarquer dans le monde numérique.";
        Yessintekst.textContent = "Yessin, PDG de Qual-IT, dirige l'entreprise, donne un coup de fouet significatif à l'innovation et est toujours au courant de ce qui se passe dans le monde de la technologie, en particulier en ce qui concerne l'intelligence artificielle et la blockchain. Avec son approche détendue, Yessin veille à ce que Qual-IT soit toujours un pas en avant.";
        Arnetekst.textContent = 'En tant que développeur côté serveur dans notre équipe informatique, Arne combine toutes les astuces intéressantes du back-end pour construire des systèmes robustes et flexibles qui améliorent vraiment le monde numérique de nos clients. Avec son enthousiasme et son approche pratique, Arne veille à ce que nos clients aient toujours une base numérique solide';
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