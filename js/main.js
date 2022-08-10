let scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300
});

const sliderItem = document.querySelectorAll('.instructors__slider-item');
const prevSlideBtn = document.querySelector('.instructors__controls-left');
const nextSlideBtn = document.querySelector('.instructors__controls-right');
const currentSlide = document.getElementById('current-slide');
const instructorBtn = document.querySelectorAll('.instructors__min-item');
let i=0;

const subLink = document.querySelectorAll('.subscription__duration-link');
const subPrice = document.querySelectorAll('.subscription__price-item--price');

const burgerBtn = document.querySelector('.burger-box');
const burgerIcon = document.querySelector('.burger-menu');
const menuList = document.querySelector('.header__menu-list');

burgerBtn.addEventListener('click', function(){
    burgerIcon.classList.toggle('active');
    menuList.classList.toggle('active');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100 && window.scrollY < 150) {
            burgerIcon.classList.remove('active');
            menuList.classList.remove('active');
        }
    })
})

for (let l=0; l<subLink.length; l++) {
    subLink[l].addEventListener('click', function (e) {
        e.preventDefault();
        for (let y=0; y<subLink.length; y++) {
            subLink[y].classList.remove('active')
        }
        subLink[l].classList.add('active');
        if(l==0) {
            subPrice[0].textContent='1 300 ₽';
            subPrice[1].textContent='2 000 ₽';
            subPrice[2].textContent='2 800 ₽';
        } else if(l==1) {
            subPrice[0].textContent='6 240 ₽';
            subPrice[1].textContent='9 600 ₽';
            subPrice[2].textContent='13 440 ₽';
        } else {
            subPrice[0].textContent='11 700 ₽';
            subPrice[1].textContent='18 000 ₽';
            subPrice[2].textContent='25 200 ₽';
        }
    })
}

$(function(){
    $('.reviews__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: '<div class="reviews__controls-right"></div>',
        prevArrow: '<div class="reviews__controls-left"></div>',
        autoplay: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

prevSlideBtn.addEventListener('click', function(){
    if (i>0) {
        sliderItem[i].classList.remove('active');
        sliderItem[i-1].classList.add('active');
        i--;
        currentSlide.textContent = i+1;
    }
});

nextSlideBtn.addEventListener('click', function(){
    if (i<=1) {
        sliderItem[i].classList.remove('active');
        sliderItem[i+1].classList.add('active');
        i++;
        currentSlide.textContent = i+1;
    }
});

for (let n=0; n<instructorBtn.length; n++) {
    instructorBtn[n].addEventListener('click', function(){
        for (let x=0; x<sliderItem.length; x++) {
            sliderItem[x].classList.remove('active')
        }
        sliderItem[n].classList.add('active');
    })
}