// nav toggle js

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

document.addEventListener('keydown', (e) => {
    if(e.keyCode == 27) {
        document.body.classList.remove('nav-open');
    }
});

// scroll to top js

const toTop = document.querySelector('.scroll-to-top');
const topAnchor = document.querySelector('#top-anchor');
let topOffset = document.body.scrollTop;

//window.onscroll = ;

window.addEventListener('scroll', () => {
    console.log(topOffset);
    if(document.body.scrollTop > 300) {
        toTop.classList.add('to-top-visible');
    } else {
        toTop.classList.remove('to-top-visible');
    }
});
