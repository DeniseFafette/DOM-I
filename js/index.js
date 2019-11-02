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

let container = document.querySelector('div');
let header = document.querySelector('div');

let links = document.getElementsByTagName('a');
    links[0].textContent = siteContent.nav["nav-item-1"];
    links[1].textContent = siteContent.nav["nav-item-2"];
    links[2].textContent = siteContent.nav["nav-item-3"];
    links[3].textContent = siteContent.nav["nav-item-4"];
    links[4].textContent = siteContent.nav["nav-item-5"];
    links[5].textContent = siteContent.nav["nav-item-6"];

let logo = document.getElementById("logo-img");
    logo.setAttribute('src', siteContent["nav"]["img-src"])

let Heading1 = document.querySelector('h1');
    Heading1.textContent = 'DOM IS AWESOME';

let ctaImage = document.getElementById("cta-img");
    ctaImage.setAttribute('src', siteContent["cta"]["img-src"])

let ctaButton = document.querySelector('button');
    ctaButton.textContent = 'Get Started';

let topContentH4 = document.querySelectorAll('.top-content .text-content h4');
let topContentP = document.querySelectorAll('.top-content .text-content p');
    topContentH4[0].textContent = siteContent['main-content']['features-h4'];
    topContentH4[1].textContent = siteContent['main-content']['about-h4'];
    topContentP[0].textContent = siteContent['main-content']['features-content'];
    topContentP[1].textContent = siteContent['main-content']['about-content'];

let middleImg = document.querySelector('#middle-img');
    middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

let bottomContentH4 = document.querySelectorAll('.bottom-content .text-content h4');
let bottomContentP = document.querySelectorAll('.bottom-content .text-content p');
    bottomContentH4[0].textContent = siteContent['main-content']['services-h4'];
    bottomContentH4[1].textContent = siteContent['main-content']['product-h4'];
    bottomContentH4[2].textContent = siteContent['main-content']['vision-h4'];
    bottomContentP[0].textContent = siteContent['main-content']['services-content'];
    bottomContentP[1].textContent = siteContent['main-content']['product-content'];
    bottomContentP[2].textContent = siteContent['main-content']['vision-content'];

// console.log(topContentH4, 'h4');
// console.log(topContentP, 'p');

let info = document.querySelector('.contact h4');
    info.textContent = siteContent.contact["contact-h4"];

let infop = document.querySelectorAll('.contact p');
    infop[0].textContent = siteContent.contact["address"];
    infop[1].textContent = siteContent.contact["phone"];
    infop[2].textContent = siteContent.contact["email"];

let footer = document.querySelector('footer');
    footer.textContent = 'Copyright Great Idea! 2018';  
    











