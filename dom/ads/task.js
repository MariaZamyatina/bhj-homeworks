const arr = Array.from(document.querySelectorAll('span.rotator__case'));

// выставляем активность первому элементу в списке
const elFirst = document.querySelector('span.rotator__case.rotator__case_active');
const colorFirst = elFirst.getAttribute('data-color');
elFirst.style.color = colorFirst;
let timeInterval = elFirst.getAttribute('data-speed');

function changeRotator() {
  const el = document.querySelector('span.rotator__case.rotator__case_active');
  if (!el.style.color) {
  const color = el.getAttribute('data-color');
  el.style.color = color;
  };
  
  el.classList.remove('rotator__case_active');

  if (!el.nextElementSibling) {
    const elNext = document.querySelector('span.rotator__case');
    elNext.classList.add('rotator__case_active');   
    timeInterval = elNext.getAttribute('data-speed');
  }
  else {
    el.nextElementSibling.classList.add('rotator__case_active');
    el.nextElementSibling.style.color = el.nextElementSibling.getAttribute('data-color');
    timeInterval = el.nextElementSibling.getAttribute('data-speed');
  };
  return setTimeout(changeRotator, timeInterval)
};

setTimeout(changeRotator, timeInterval);



    
