const sliders = Array.from(document.querySelectorAll('div.slider__item'));
const next = document.querySelector('div.slider__arrow_next');
const prev = document.querySelector('div.slider__arrow_prev');
const dots = Array.from(document.querySelectorAll('div.slider__dot'));
dots[0].classList.add('slider__dot_active');

function slidersNext() {
  const fun = (element) => element.className == 'slider__item slider__item_active';
  const index = sliders.findIndex(fun); 
  
  dots[index].classList.remove('slider__dot_active');
  sliders[index].classList.remove('slider__item_active');

  (index == sliders.length - 1) ? 
    (sliders[0].classList.add('slider__item_active'), dots[0].classList.add('slider__dot_active')) : 
    (sliders[index + 1].classList.add('slider__item_active'), dots[index + 1].classList.add('slider__dot_active'));   
};

function slidersPrev() {
  const fun = (element) => element.className == 'slider__item slider__item_active';
  const index = sliders.findIndex(fun);  

  sliders[index].classList.remove('slider__item_active');
  dots[index].classList.remove('slider__dot_active');

  (index == 0) ? 
    (sliders[sliders.length-1].classList.add('slider__item_active'),dots[sliders.length-1].classList.add('slider__dot_active')) :
     (sliders[index - 1].classList.add('slider__item_active'), dots[index - 1].classList.add('slider__dot_active'));      
};

function ChangeDot() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = () => {
      const fun = (el) => el.className == 'slider__dot slider__dot_active';
      const index = dots.findIndex(fun);
      const indexNew = i;

      dots[index].classList.remove('slider__dot_active');
      sliders[index].classList.remove('slider__item_active');

      dots[indexNew].classList.add('slider__dot_active');
      sliders[indexNew].classList.add('slider__item_active');
    }
  }
};

ChangeDot();

next.onclick = () => {
  slidersNext();
};

prev.onclick = () => {
  slidersPrev();
};
