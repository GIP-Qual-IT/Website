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
        navlink3.innerHTML = '<img class="vlag" src="https://imgur.com/U0JJlm2.png" alt="Belgische vlag">';
    } else if (language === 'engels') {
        navlink3.innerHTML = '<img class="vlag" src="https://imgur.com/v6pv9P6.png" alt="Engelse vlag">';
    } else if (language === 'frans') {
        navlink3.innerHTML = '<img class="vlag" src="https://imgur.com/uuaeee4.png" alt="Franse vlag">';
    }
    
    //vertaling
    var Jeftekst = document.getElementById('Jeftekst')
    var Arnetekst = document.getElementById('Arnetekst')
    var Yessintekst = document.getElementById('Yessintekst')
    var modal1 = document.getElementById('modal1')
    var modal2 = document.getElementById('modal2')
    var modal3 = document.getElementById('modal3')
    var modal4 = document.getElementById('modal4')
    var modal5 = document.getElementById('modal5')
    if (language === 'nederlands') {
        modal1.innerHTML = '<div class="modal-content"> <span class="close" onclick="closeModal(1)">&times;</span> <h1>JavaScript (JS)</h1><br> <p>JavaScript is een programmeertaal die veel gebruikt wordt in webontwikkeling om interactiviteit en dynamische functies aan websites toe te voegen. Het wordt hoofdzakelijk uitgevoerd in webbrowsers, waardoor ontwikkelaars de inhoud, structuur en het gedrag van webpaginas kunnen manipuleren.</p> </div>'
        modal2.innerHTML = '<div class="modal-content"> <span class="close" onclick="closeModal(2)">&times;</span> <h1>CSS (Cascading Style Sheets)</h1><br> <p>CSS is een opmaaktaal die wordt gebruikt in webontwikkeling om de presentatie en opmaak van een website te beheren. Het stelt ontwikkelaars in staat om de visuele stijl van HTML-elementen aan te passen en zo de lay-out, kleuren, lettertypen en andere visuele aspecten van een webpagina te definiëren.</p> </div>'
        modal3.innerHTML = '<div class="modal-content"> <span class="close" onclick="closeModal(3)">&times;</span> <h1>HTML (HyperText Markup Language)</h1><br> <p>HTML is de standaard opmaaktaal die wordt gebruikt om de structuur en inhoud van webpaginas te definiëren. Het staat voor HyperText Markup Language en fungeert als de bouwsteen van het web. In plaats van zich bezig te houden met de visuele presentatie, concentreert HTML zich op het aanduiden van de betekenis en hiërarchie van de informatie op een pagina.</p> </div>'
        modal4.innerHTML = '<div class="modal-content"> <span class="close" onclick="closeModal(4)">&times;</span> <h1>PHP: Server-side Scripting voor Dynamische Webpaginas</h1><br> <p>PHP, wat staat voor Hypertext Preprocessor, is een populaire server-side scriptingtaal die speciaal is ontworpen voor de ontwikkeling van dynamische webpaginas. In tegenstelling tot HTML, dat zich richt op de structuur van webpaginas, stelt PHP ontwikkelaars in staat om interactieve en dynamische functies aan websites toe te voegen.</p> </div>'
        modal5.innerHTML = '<div class="modal-content"> <span class="close" onclick="closeModal(5)">&times;</span> <h1>SQL (Structured Query Language)</h1><br> <p>SQL is een specifieke programmeertaal die wordt gebruikt voor het beheren en manipuleren van relationele databases. Het is ontworpen om op een gestandaardiseerde manier te communiceren met databases en wordt veel gebruikt in softwaretoepassingen die gegevensopslag en -beheer vereisen.</p> </div>'
        Jeftekst.textContent = 'Als top webontwikkelaar in ons ICT-bedrijf, mixt Jef zijn technische skills en creativiteit om websites te maken die de standaard in de business omhoog krikken. Met een scherp oog voor de laatste trends en een passie voor vernieuwing, brengt Jef unieke en gebruiksvriendelijke online ervaringen tot leven, waardoor onze klanten zich onderscheiden in de digitale wereld.';
        Arnetekst.textContent = 'Als server-side ontwikkelaar in ons ICT-team, gooit Arne alle coole back-end trucjes in de mix om stevige en flexibele systemen te bouwen die de digitale wereld van onze klanten echt een boost geven. Met zijn enthousiasme en hands-on aanpak zorgt Arne ervoor dat onze klanten altijd een solide digitale basis hebben.';
        lang.lang = 'nl'
        Yessintekst.textContent = 'Yessin, CEO bij Qual-IT, leidt het bedrijf, geeft een flinke boost aan innovatie, en is altijd bezig met wat er in de tech-wereld te gebeuren staat, vooral met dingen als kunstmatige intelligentie en blockchain. Met zijn relaxte aanpak zorgt Yessin ervoor dat Qual-IT altijd een stapje voor is.';
    } else if (language === 'engels') {
        modal1.innerHTML = '<div class="modal-content"> <span class="close" onclick="closeModal(1)">&times;</span> <h1>JavaScript (JS)</h1><br> <p>JavaScript is a programming language widely used in web development to add interactivity and dynamic features to websites. It is primarily executed in web browsers, allowing developers to manipulate the content, structure, and behavior of web pages.</p> </div>'
        modal2.innerHTML = '<div class="modal-content"> <span class="close" onclick="closeModal(2)">&times;</span> <h1>CSS (Cascading Style Sheets)</h1><br> <p>CSS is a styling language used in web development to manage the presentation and layout of a website. It enables developers to customize the visual style of HTML elements, defining the layout, colors, fonts, and other visual aspects of a web page.</p> </div>'
        modal3.innerHTML = '<div class="modal-content"> <span class="close" onclick="closeModal(3)">&times;</span> <h1>HTML (HyperText Markup Language)</h1><br> <p>HTML is the standard markup language used to define the structure and content of web pages. It stands for HyperText Markup Language and serves as the building block of the web. Instead of dealing with visual presentation, HTML focuses on indicating the meaning and hierarchy of information on a page.</p> </div>'
        modal4.innerHTML = '<div class="modal-content"> <span class="close" onclick="closeModal(4)">&times;</span> <h1>PHP: Server-side Scripting for Dynamic Web Pages</h1><br> <p>PHP, which stands for Hypertext Preprocessor, is a popular server-side scripting language specially designed for the development of dynamic web pages. Unlike HTML, which focuses on the structure of web pages, PHP enables developers to add interactive and dynamic features to websites.</p> </div>'
        modal5.innerHTML = '<div class="modal-content"> <span class="close" onclick="closeModal(5)">&times;</span> <h1>SQL (Structured Query Language)</h1><br> <p>SQL is a specific programming language used for managing and manipulating relational databases. It is designed to communicate with databases in a standardized way and is widely used in software applications that require data storage and management.</p> </div>'
        Jeftekst.textContent = 'As a top web developer in our IT company, Jef combines his technical skills and creativity to create websites that elevate the standard in the business. With a keen eye for the latest trends and a passion for innovation, Jef brings unique and user-friendly online experiences to life, allowing our clients to stand out in the digital world.';
        Yessintekst.textContent = 'Yessin, CEO at Qual-IT, leads the company, gives a significant boost to innovation, and is always engaged with what is happening in the tech world, especially with things like artificial intelligence and blockchain. With his relaxed approach, Yessin ensures that Qual-IT is always one step ahead.';
        Arnetekst.textContent = 'As a server-side developer in our IT team, Arne blends all the cool back-end tricks to build robust and flexible systems that truly enhance the digital world of our clients. With his enthusiasm and hands-on approach, Arne ensures that our clients always have a solid digital foundation.';
        lang.lang = 'en'
    } else if (language === 'frans') {
        modal1.innerHTML = '<div class="modal-content"> <span class="close" onclick="closeModal(1)">&times;</span> <h1>JavaScript (JS)</h1><br> <p>JavaScript est un langage de programmation largement utilisé dans le développement web pour ajouter de l interactivité et des fonctionnalités dynamiques aux sites web. Il est principalement exécuté dans les navigateurs web, permettant aux développeurs de manipuler le contenu, la structure et le comportement des pages web.</p> </div>'
        modal2.innerHTML = '<div class="modal-content"> <span class="close" onclick="closeModal(2)">&times;</span> <h1>CSS (Cascading Style Sheets)</h1><br> <p>Le CSS est un langage de style utilisé dans le développement web pour gérer la présentation et la mise en page d un site web. Il permet aux développeurs de personnaliser le style visuel des éléments HTML, définissant la mise en page, les couleurs, les polices et d autres aspects visuels d une page web.</p> </div>'
        modal3.innerHTML = '<div class="modal-content"> <span class="close" onclick="closeModal(3)">&times;</span> <h1>HTML (HyperText Markup Language)</h1><br> <p>HTML est le langage de balisage standard utilisé pour définir la structure et le contenu des pages web. Il signifie HyperText Markup Language et sert de pierre angulaire du web. Au lieu de traiter la présentation visuelle, HTML se concentre sur l"indication de la signification et de la hiérarchie de l information sur une page.</p> </div>'
        modal4.innerHTML = '<div class="modal-content"> <span class="close" onclick="closeModal(4)">&times;</span> <h1>PHP : Script côté serveur pour des pages web dynamiques</h1><br> <p>PHP, qui signifie Hypertext Preprocessor, est un langage de script côté serveur populaire spécialement conçu pour le développement de pages web dynamiques. Contrairement à HTML, qui se concentre sur la structure des pages web, PHP permet aux développeurs d ajouter des fonctionnalités interactives et dynamiques aux sites web.</p> </div>'
        modal5.innerHTML = '<div class="modal-content"> <span class="close" onclick="closeModal(5)">&times;</span> <h1>SQL (Structured Query Language)</h1><br> <p>SQL est un langage de programmation spécifique utilisé pour gérer et manipuler des bases de données relationnelles. Il est conçu pour communiquer avec des bases de données de manière standardisée et est largement utilisé dans des applications logicielles nécessitant le stockage et la gestion de données.</p> </div>'




        Jeftekst.textContent = "En tant que meilleur développeur web dans notre entreprise informatique, Jef allie ses compétences techniques et sa créativité pour créer des sites web qui élèvent la norme dans le secteur. Avec un regard attentif sur les dernières tendances et une passion pour l'innovation, Jef donne vie à des expériences en ligne uniques et conviviales, permettant à nos clients de se démarquer dans le monde numérique.";
        Yessintekst.textContent = "Yessin, PDG de Qual-IT, dirige l'entreprise, donne un coup de fouet significatif à l'innovation et est toujours au courant de ce qui se passe dans le monde de la technologie, en particulier en ce qui concerne l'intelligence artificielle et la blockchain. Avec son approche détendue, Yessin veille à ce que Qual-IT soit toujours un pas en avant.";
        Arnetekst.textContent = 'En tant que développeur côté serveur dans notre équipe informatique, Arne combine toutes les astuces intéressantes du back-end pour construire des systèmes robustes et flexibles qui améliorent vraiment le monde numérique de nos clients. Avec son enthousiasme et son approche pratique, Arne veille à ce que nos clients aient toujours une base numérique solide';
        lang.lang = 'fr'
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
function openModal(number) {
    var modal = document.getElementById(`modal${number}`);
    modal.style.display = "block";
  }
  
  function closeModal(number) {
    var modal = document.getElementById(`modal${number}`);
    modal.style.display = "none";
  }
  
  // Sluit modals als er buiten de modal wordt geklikt
  window.onclick = function(event) {
    if (event.target.className === 'modal') {
      event.target.style.display = "none";
    }
  };
  