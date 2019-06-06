const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
//Images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let circlesnippet = document.querySelector('#cta-img');
circlesnippet.setAttribute('src', siteContent.cta["img-src"]);

let horizontalsnippet = document.getElementById("middle-img");
horizontalsnippet.setAttribute("src", siteContent["main-content"]["middle-img-src"]);


//nav
let anchors = document.querySelectorAll('a');
anchors[0].textContent = siteContent.nav["nav-item-1"];
anchors[0].style.color = 'green';
anchors[1].textContent = siteContent.nav["nav-item-2"];
anchors[1].style.color = 'green';
anchors[2].textContent = siteContent.nav["nav-item-3"];
anchors[2].style.color = 'green';
anchors[3].textContent = siteContent.nav["nav-item-4"];
anchors[3].style.color = 'green';
anchors[4].textContent = siteContent.nav["nav-item-5"];
anchors[4].style.color = 'green';
anchors[5].textContent = siteContent.nav["nav-item-6"];
anchors[5].style.color = 'green';

let nav = document.querySelector('nav');

let prependedNav = document.createElement('a');
prependedNav.textContent = 'PREPENDED';
prependedNav.style.color = 'green';

let appendedNav = document.createElement('a');
appendedNav.textContent = 'APPENDED';
appendedNav.style.color = 'green';

nav.appendChild(appendedNav);
nav.prepend(prependedNav);




//cta
let headingText = document.querySelector('h1');
headingText.innerHTML = 'DOM <br>IS<br> AWESOME';

let button = document.querySelector('button');
button.textContent = siteContent.cta.button;

//main content
let h4Text = document.querySelectorAll('h4');
h4Text[0].textContent = siteContent["main-content"]["features-h4"];
h4Text[1].textContent = siteContent["main-content"]["about-h4"];
h4Text[2].textContent = siteContent["main-content"]["services-h4"];
h4Text[3].textContent = siteContent["main-content"]["product-h4"];
h4Text[4].textContent = siteContent["main-content"]["vision-h4"];

let mainText = document.querySelectorAll('p');
mainText[0].textContent = siteContent["main-content"]["features-content"];
mainText[1].textContent = siteContent["main-content"]["about-content"];
mainText[2].textContent = siteContent["main-content"]["services-content"];
mainText[3].textContent = siteContent["main-content"]["product-content"];
mainText[4].textContent = siteContent["main-content"]["vision-content"];

//contact

h4Text[5].textContent = siteContent.contact["contact-h4"];

let contact = document.querySelector('.contact');

contact.children[1].textContent = siteContent.contact.address;
contact.children[2].textContent = siteContent.contact.phone;
contact.children[3].textContent = siteContent.contact.email;

//footer 

let footer = document.querySelector('footer');

footer.children[0].textContent = siteContent.footer.copyright;

