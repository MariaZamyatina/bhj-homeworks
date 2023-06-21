let sliders = Array.from(document.querySelectorAll('div.slider__item'));
const next = document.querySelector('div.slider__arrow_next'),
prev = document.querySelector('div.slider__arrow_prev');

function slidersNext() {
    for (i=0;i<=sliders.length-1;i++) {
        if (sliders[i].className == 'slider__item slider__item_active') {

            sliders[i].classList.remove('slider__item_active');

            if (i === sliders.length-1) {
                i = 0;
                sliders[i].classList.add('slider__item_active')}
            else {
                sliders[i+1].classList.add('slider__item_active')}
            return;
        }
    }
};

function slidersPrev() {
    for (i=sliders.length-1;i>=0;i--) {
        if (sliders[i].className == 'slider__item slider__item_active') {

            sliders[i].classList.remove('slider__item_active');

            if (i === 0) {
                i = 4;
                sliders[i].classList.add('slider__item_active')}
            else {
                sliders[i-1].classList.add('slider__item_active')}
            return;
        }
    }
};

next.onclick = () => {
    slidersNext();
};

prev.onclick = () => {
    slidersPrev();
};
