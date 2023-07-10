const sliders = Array.from(document.querySelectorAll('div.slider__item'));
const dots = Array.from(document.querySelectorAll('div.slider__dot'));
dots[0].classList.add('slider__dot_active');
const next = document.querySelector('div.slider__arrow_next');
const prev = document.querySelector('div.slider__arrow_prev');

next.onclick = () => {
  const idx = (element) => element.className == 'slider__item slider__item_active';
  let currentIndex = sliders.findIndex(idx); 
  console.log(currentIndex);
  let nextIndex;
  nextIndex = currentIndex + 1;
  if (nextIndex == sliders.length) {
    nextIndex = 0;
  }
  changeSlider(currentIndex, nextIndex);
  }

prev.onclick = () => {
  const idx = (element) => element.className == 'slider__item slider__item_active';
  let currentIndex = sliders.findIndex(idx); 
  let nextIndex = currentIndex - 1;
  if (currentIndex == 0) {
    nextIndex = sliders.length - 1;
  }
  changeSlider(currentIndex, nextIndex);
  }

 for (let i = 0; i < dots.length; i++) {
  dots[i].onclick = () => {
    let idx = (element) => element.className == 'slider__dot slider__dot_active';
    let currentIndex = dots.findIndex(idx); 
    let nextIndex = i;
    changeSlider(currentIndex, nextIndex);
  }
}

function changeSlider(currentIndex, nextIndex) {
  sliders[currentIndex].classList.remove('slider__item_active');
  dots[currentIndex].classList.remove('slider__dot_active');


  sliders[nextIndex].classList.add('slider__item_active');
  dots[nextIndex].classList.add('slider__dot_active');
}


// const dots = Array.from(document.querySelectorAll('div.slider__dot'));
// dots[0].classList.add('slider__dot_active');

// function slidersNext() {
//   const fun = (element) => element.className == 'slider__item slider__item_active';
//   const index = sliders.findIndex(fun); 
  
//   dots[index].classList.remove('slider__dot_active');
//   sliders[index].classList.remove('slider__item_active');

//   (index == sliders.length - 1) ? 
//     (sliders[0].classList.add('slider__item_active'), dots[0].classList.add('slider__dot_active')) : 
//     (sliders[index + 1].classList.add('slider__item_active'), dots[index + 1].classList.add('slider__dot_active'));   
// };

// function slidersPrev() {
//   const fun = (element) => element.className == 'slider__item slider__item_active';
//   const index = sliders.findIndex(fun);  

//   sliders[index].classList.remove('slider__item_active');
//   dots[index].classList.remove('slider__dot_active');

//   (index == 0) ? 
//     (sliders[sliders.length-1].classList.add('slider__item_active'),dots[sliders.length-1].classList.add('slider__dot_active')) :
//      (sliders[index - 1].classList.add('slider__item_active'), dots[index - 1].classList.add('slider__dot_active'));      
// };

// function сhangeDot() {
//   for (let i = 0; i < dots.length; i++) {
//     dots[i].onclick = () => {
//       const fun = (el) => el.className == 'slider__dot slider__dot_active';
//       const index = dots.findIndex(fun);
//       const indexNew = i;

//       dots[index].classList.remove('slider__dot_active');
//       sliders[index].classList.remove('slider__item_active');

//       dots[indexNew].classList.add('slider__dot_active');
//       sliders[indexNew].classList.add('slider__item_active');
//     }
//   }
// };

// сhangeDot();

// next.onclick = () => {
//   slidersNext();
// };

// prev.onclick = () => {
//   slidersPrev();
// };
