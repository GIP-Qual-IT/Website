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

    // Titel
    var title = document.getElementById('title');
    if (language === 'nederlands') {
        title.textContent = 'Welkom bij Qual-IT';
    } else if (language === 'engels') {
        title.textContent = 'Welcome to Qual-IT';
    } else if (language === 'frans') {
        title.textContent = 'Bienvenue chez Qual-IT';
    }
    
    //vertaling
    var vertaling = document.getElementById("vertaling")
    var Jeftitel = document.getElementById('Jeftitel')
    var Arnetitel = document.getElementById('Arnetitel')
    var Yessintitel = document.getElementById('Yessintitel')
    var tekstjetitel = document.getElementById('tekstje-titel')
    var tekstje = document.getElementById('tekstje')
    if (language === 'nederlands') {
        Jeftitel.textContent = 'webontwikkelaar';
        Arnetitel.textContent = 'server-side ontwikkelaar';
        Yessintitel.textContent = 'CEO';
        tekstje.textContent = 'Qual-IT is jouw partner voor op maat gemaakte websites. Ons team van experts begrijpt jouw behoeften en creëert websites die jouw bedrijf perfect vertegenwoordigen. Van concept tot lancering, we zorgen voor een naadloze samenwerking en klanttevredenheid, wat resulteert in een unieke online aanwezigheid. Kies Qual-IT voor onderscheidend webdesign en hoogwaardige ontwikkeling.';
        tekstjetitel.textContent = 'Qual-IT: Maatwerk Websites voor Jou';
        vertaling.textContent = 'Bij Qual-IT begrijpen we dat de digitale wereld voortdurend evolueert, en dat je als ondernemer op zoek bent naar een webpartner die je visie tot leven kan brengen. Ons team van gepassioneerde experts staat klaar om je te helpen bij elke stap van het proces, van concept tot creatie, en verder naar groei.';
    } else if (language === 'engels') {
        Jeftitel.textContent = 'web developer';
        Arnetitel.textContent = 'server-side developer';
        Yessintitel.textContent = 'CEO';
        tekstje.textContent = 'Qual-IT is your partner for tailor-made websites. Our team of experts understands your needs and creates websites that perfectly represent your business. From concept to launch, we ensure seamless collaboration and customer satisfaction, resulting in a unique online presence. Choose Qual-IT for distinctive web design and high-quality development.';
        tekstjetitel.textContent = 'Qual-IT: Custom Websites for You';
        vertaling.textContent = 'Here at Qual-IT we understand that the digital world is constantly evolving at rapid speeds and that as an entrepeneur you need a webpartner to bring vision to your life. Our team of passionate experts who are ready to help you with every step of the process, from concept to creation and working towards growth.';
    } else if (language === 'frans') {
        Jeftitel.textContent = 'Développeur de site de web';
        Arnetitel.textContent = 'Développeur serveur';
        Yessintitel.textContent = 'PDG';
        tekstje.textContent = "Qual-IT est votre partenaire pour des sites web sur mesure. Notre équipe d'experts comprend vos besoins et crée des sites web qui représentent parfaitement votre entreprise. Du concept au lancement, nous assurons une collaboration transparente et une satisfaction client, aboutissant à une présence en ligne unique. Choisissez Qual-IT pour un design web distinctif et un développement de haute qualité.";
        tekstjetitel.textContent = 'Qual-IT : Sites Web sur mesure pour Vous';
        vertaling.textContent = 'Voici à Qual-IT on comprend que la digitalisation dans la vie évolue à des vitesses rapidement et que vous comme entrepreneur avait de quelqu un pour apporter une vision à votre vie. Notre équipe des experts passionnés qui sont toujours prêtes pour vous aider avec chaque étape du processus, de concept jusqu à création et œuvrer pour la croissance';
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