/* =====================================================
   YS MULTIMEDIA & DESIGNS
   JAVASCRIPT
===================================================== */


/* =====================================================
   SMOOTH NAVIGATION
===================================================== */

document.querySelectorAll('nav a').forEach(function(link){

    link.addEventListener('click', function(event){

        const targetId =
            this.getAttribute('href');

        const target =
            document.querySelector(targetId);

        if(target){

            event.preventDefault();

            target.scrollIntoView({
                behavior:'smooth',
                block:'start'
            });

        }

    });

});


/* =====================================================
   ACTIVE NAVIGATION LINK
===================================================== */

const sections =
    document.querySelectorAll('section');

const navLinks =
    document.querySelectorAll('nav .links a');


window.addEventListener('scroll', function(){

    let current = '';

    sections.forEach(function(section){

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if(
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ){

            current =
                section.getAttribute('id');

        }

    });


    navLinks.forEach(function(link){

        link.classList.remove('active');

        if(
            link.getAttribute('href') ===
            '#' + current
        ){

            link.classList.add('active');

        }

    });

});


/* =====================================================
   IMAGE ERROR HANDLING
===================================================== */

document.querySelectorAll('img').forEach(function(image){

    image.addEventListener('error', function(){

        this.style.display = 'none';

        const parent =
            this.parentElement;

        parent.classList.add('image-error');

        parent.innerHTML +=
            '<span>Image not available</span>';

    });

});


/* =====================================================
   VIDEO ERROR HANDLING
===================================================== */

document.querySelectorAll('video').forEach(function(video){

    video.addEventListener('error', function(){

        const parent =
            this.parentElement;

        parent.classList.add('video-error');

    });

});


/* =====================================================
   PAGE LOAD
===================================================== */

window.addEventListener('load', function(){

    document.body.classList.add('loaded');

});
