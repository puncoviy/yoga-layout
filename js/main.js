const sliderItem = document.querySelectorAll('.instructors__slider-item');
const prevSlideBtn = document.querySelector('.instructors__controls-left');
const nextSlideBtn = document.querySelector('.instructors__controls-right');
const currentSlide = document.getElementById('current-slide');
const instructorBtn = document.querySelectorAll('.instructors__min-item');
let i=0;

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
    console.log('penis'+n)
    instructorBtn[n].addEventListener('click', function(){
        console.log(n)
        // sliderItem[n].classList.add('active');
    })
}