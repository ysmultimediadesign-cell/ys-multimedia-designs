/* =====================================================
   YS MULTIMEDIA & DESIGNS
   JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


/* Open / Close menu */

menuToggle.addEventListener("click", function(){

    navLinks.classList.toggle("open");


    /* Change hamburger icon */

    if(navLinks.classList.contains("open")){

        menuToggle.innerHTML = "✕";

        menuToggle.setAttribute(
            "aria-label",
            "Close Menu"
        );

    }

    else{

        menuToggle.innerHTML = "☰";

        menuToggle.setAttribute(
            "aria-label",
            "Open Menu"
        );

    }

});


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICK
===================================================== */

const menuItems =
    document.querySelectorAll(
        "#navLinks a"
    );


menuItems.forEach(function(item){

    item.addEventListener("click", function(){

        navLinks.classList.remove("open");

        menuToggle.innerHTML = "☰";

        menuToggle.setAttribute(
            "aria-label",
            "Open Menu"
        );

    });

});


/* =====================================================
   SMOOTH NAVIGATION
===================================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function(link){

    link.addEventListener(
        "click",
        function(event){

            const targetId =
                this.getAttribute("href");

            const target =
                document.querySelector(targetId);


            if(target){

                event.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            }

        }
    );

});


/* =====================================================
   ACTIVE NAVIGATION LINK
===================================================== */

const sections =
    document.querySelectorAll(
        "section"
    );


const desktopNavLinks =
    document.querySelectorAll(
        "#navLinks a"
    );


window.addEventListener(
    "scroll",
    function(){

        let current = "";


        sections.forEach(
            function(section){

                const sectionTop =
                    section.offsetTop - 150;

                const sectionHeight =
                    section.offsetHeight;


                if(
                    window.scrollY >= sectionTop &&
                    window.scrollY <
                    sectionTop + sectionHeight
                ){

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        desktopNavLinks.forEach(
            function(link){

                link.classList.remove(
                    "active"
                );


                if(
                    link.getAttribute("href") ===
                    "#" + current
                ){

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* =====================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener(
    "click",
    function(event){

        const clickedInsideNav =
            event.target.closest("nav");


        if(!clickedInsideNav){

            navLinks.classList.remove(
                "open"
            );


            menuToggle.innerHTML = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open Menu"
            );

        }

    }
);


/* =====================================================
   IMAGE ERROR HANDLING
===================================================== */

document.querySelectorAll("img").forEach(
    function(image){

        image.addEventListener(
            "error",
            function(){

                this.style.display = "none";

                const parent =
                    this.parentElement;

                parent.classList.add(
                    "image-error"
                );

            }
        );

    }
);


/* =====================================================
   VIDEO ERROR HANDLING
===================================================== */

document.querySelectorAll("video").forEach(
    function(video){

        video.addEventListener(
            "error",
            function(){

                const parent =
                    this.parentElement;

                parent.classList.add(
                    "video-error"
                );

            }
        );

    }
);


/* =====================================================
   PAGE LOAD
===================================================== */

window.addEventListener(
    "load",
    function(){

        document.body.classList.add(
            "loaded"
        );

    }
);w
