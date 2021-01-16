
/*===== MENU SHOW =====*/
const showMenu = (toggleId,navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click',() => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle','nav-menu');

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click',linkAction));

/*===== tab menu =====*/

const skillsParent = document.querySelector('.skills__container'),
    menuList = skillsParent.querySelectorAll('.skills__list'),
    trigger = skillsParent.querySelectorAll('.skills__data');


trigger.forEach((item,i) => {
    item.addEventListener('click',() => {

        menuList.forEach((item) => {
            trigger[i].nextElementSibling.classList.toggle('show');
            item.classList.toggle('hide');

            item.classList.add('fade');

        });
    });
});


//  СЛАЙДЕР
$('.news__slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.news__slider-text',
    prevArrow: '<button class="slick-btn slick-prev"><img src="img/left.svg" alt="prev"></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="img/right.svg" alt="next"></button>',
    dots: true,
    // responsive: [
    //     {
    //         breakpoint: 769,
    //         settings: {
    //             arrows: false
    //         }
    //     }
    // ]

});
$('.news__slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.news__slider-img',
    fade: true,
    arrows: false
});

/*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '80px',
//     duration: 2000,
//     reset: true
// });

/*SCROLL HOME*/
// sr.reveal('.home__title',{});
// sr.reveal('.button',{ delay: 200 });
// sr.reveal('.home__img',{ delay: 400 });
// sr.reveal('.home__social-icon',{ interval: 200 });


/*SCROLL ABOUT*/
// sr.reveal('.about__img',{});
// sr.reveal('.about__subtitle',{ delay: 400 });
// sr.reveal('.about__alltext',{ delay: 400 });

/*SCROLL SKILLS*/
// sr.reveal('.skills__subtitle',{});
// sr.reveal('.skills__text',{});
// sr.reveal('.skills__data',{ interval: 200 });
// sr.reveal('.skills__img',{ delay: 600 });
// sr.reveal('.skills__list',{ delay: 600 });


/*SCROLL WORK*/
// sr.reveal('.work__img',{ interval: 200 });
// sr.reveal('.ers-img',{ interval: 200 });

/*SCROLL CONTACT*/
// sr.reveal('.contact__input',{ interval: 200 });
// sr.reveal('.contact2',{ interval: 200 });




