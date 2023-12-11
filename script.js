function changeLanguage(language) {
    // Navbar
    var navlink1 = document.getElementById('navlink1');
    var navlink2 = document.getElementById('navlink2');
    var lang = document.getElementById('lang')
    
    if (language === 'nederlands') {
        navlink1.textContent = 'Producten';
        navlink2.textContent = 'Over ons';
        lang.lang = 'nl'
    } else if (language === 'engels') {
        navlink1.textContent = 'Products';
        navlink2.textContent = 'About us';
        lang.lang = 'en'
    } else if (language === 'frans') {
        navlink1.textContent = 'Produits';
        navlink2.textContent = 'A propos de nous';
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
    if (language === 'nederlands') {
        vertaling.textContent = 'Bij Qual-IT begrijpen we dat de digitale wereld voortdurend evolueert, en dat je als ondernemer op zoek bent naar een webpartner die je visie tot leven kan brengen. Ons team van gepassioneerde experts staat klaar om je te helpen bij elke stap van het proces, van concept tot creatie, en verder naar groei.';
    } else if (language === 'engels') {
        vertaling.textContent = 'Here at Qual-IT we understand that the digital world is constantly evolving at rapid speeds and that as an entrepeneur you need a webpartner to bring vision to your life. Our team of passionate experts who are ready to help you with every step of the process, from concept to creation and working towards growth.';
    } else if (language === 'frans') {
        vertaling.textContent = 'Voici à Qual-IT on comprend que la digitalisation dans la vie évolue à des vitesses rapidement et que vous comme entrepreneur avait de quelqu un pour apporter une vision à votre vie. Notre équipe des experts passionnés qui sont toujours prêtes pour vous aider avec chaque étape du processus, de concept jusqu à création et œuvrer pour la croissance';
    }


    var knop = document.getElementById("knop")
    if (language === 'nederlands') {
        knop.textContent = 'Ontdek';
    } else if (language === 'engels') {
        knop.textContent = 'Discover';
    } else if (language === 'frans') {
        knop.textContent = 'Découvrir';
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