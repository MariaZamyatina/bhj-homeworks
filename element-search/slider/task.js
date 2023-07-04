const sliders = Array.from(document.querySelectorAll('div.slider__item'));
const dots = Array.from(document.querySelectorAll('div.slider__dot'));
dots[0].classList.add('slider__dot_active');
const next = document.querySelector('div.slider__arrow_next');
const prev = document.querySelector('div.slider__arrow_prev');
let currentIndex;
let nextIndex;

function findIndex() {
  const el = (element) => element.className == 'slider__item slider__item_active';
  return sliders.findIndex(el);
}

next.onclick = () => {
  currentIndex = findIndex();  
  nextIndex = (currentIndex == sliders.length - 1) ? 0 : currentIndex + 1;
  changeSlider(currentIndex, nextIndex);
  };

prev.onclick = () => {
  currentIndex = findIndex();
  nextIndex = (currentIndex == 0) ? sliders.length - 1 : currentIndex - 1;
  changeSlider(currentIndex, nextIndex);
  };

for (let i = 0; i < dots.length; i++) {
  dots[i].onclick = () => {
    currentIndex = findIndex();
    nextIndex = i;
    changeSlider(currentIndex, nextIndex);
  }
};

function changeSlider(currentIndex, nextIndex) {
  sliders[currentIndex].classList.remove('slider__item_active');
  dots[currentIndex].classList.remove('slider__dot_active');

  sliders[nextIndex].classList.add('slider__item_active');
  dots[nextIndex].classList.add('slider__dot_active');
};