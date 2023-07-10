const arr = Array.from(document.querySelectorAll('div.reveal'));
arr.forEach(el => {
  document.addEventListener('scroll', () => {
  let top = el.getBoundingClientRect().top; // находим координату верхней позиции элемента
  let height = el.getBoundingClientRect().height; // находим высоту элемента
  const windowHeight = window.innerHeight; // определяем высоту экрана
  ((top > 0 - height) && (top < windowHeight / 2)) ? el.classList.add('reveal_active') : el.classList.remove('reveal_active');  
  }); 
});