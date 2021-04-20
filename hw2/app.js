// set ate
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// close links
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
// listener
navToggle.addEventListener('click', function() {
    //linksContainer.classList.toggle("show-links");
    const containerHeight = linksContainer.getBoundingClientRect().height;
    //console.log(containerHeight);
    const linksHeight = links.getBoundingClientRect().height;
    //console.log(linksHeight);

    if(containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0;
    }
})
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
// fixed navbar
window.addEventListener('scroll',function () {
    //console.log(window.pageYOffset);
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }

    if(scrollHeight > navHeight + 200) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
});

// smooth scroll & select links
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e)  {
        // prevent Default
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        //console.log(id);
        const element = document.getElementById(id);
        // calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height; 
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;
        
        //console.log(position);
        if(!fixedNav) {
            position = position - navHeight;
        }
        if(navHeight > 82) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left:0,top: position
        }); 
        linksContainer.style.heigh = 0;
    });
});
