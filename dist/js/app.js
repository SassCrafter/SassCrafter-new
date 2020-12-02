const selectEl = (el) => document.querySelector(el);

// Mobile menu toggle
const mobileToggler = selectEl('.mobile-toggler');
const nav = selectEl('.nav');
mobileToggler.addEventListener('click', function() {
    mobileToggler.classList.toggle('active');
    nav.classList.toggle('active');
})



// Change nav overlay img on hover
const navLinks = document.querySelectorAll('.nav a');
const navOverlay = document.querySelectorAll('.nav-overlay');
const active1 = selectEl('.active-1');
const linkActive = selectEl('.link-active');

navLinks.forEach(el => {
    el.addEventListener('mouseover', function() {
        let linkData = el.getAttribute('data-overlay');
        navLinks.forEach(el => {
            el.classList.remove('active');
        })
        el.classList.add('active');
        navOverlay.forEach(el => {
            if (el.getAttribute('data-overlay') == linkData) {
                navOverlay.forEach(el => {
                    el.classList.remove('active');
                })
                el.classList.add('active');
            }
        })
    });

    el.addEventListener('mouseleave', function() {
        navLinks.forEach(el => {
            el.classList.remove('active')
        });
        linkActive.classList.add('active');
        navOverlay.forEach(el => {
            el.classList.remove('active');
        });
        active1.classList.add('active');
    })
})


// Parallax
const parallax = selectEl('.bg-parallax');
window.addEventListener('scroll', function(e) {
    let scrolled = window.pageYOffset;
    parallax.style.transform = 'translateY(' + scrolled * 0.045 + '%)';
})


function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: 'smooth'
    })
}


// Smooth scroll
const smoothLinks = document.querySelectorAll('a');
smoothLinks.forEach(link => {
    link.addEventListener('click', clickHandler)
})
