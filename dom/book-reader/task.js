let fontSizes = document.querySelector('div.book__control.book__control_font-size');
let colors = document.querySelector('div.book__control.book__control_color');
let backgrounds = document.querySelector('div.book__control.book__control_background');
const book = document.getElementById('book');

function fun(elSearch, classRemove) {
  const el = document.querySelector(elSearch);
  el.classList.remove(classRemove);
}

fontSizes.onclick = function(event) {
  let target = event.target;
  fun('a.font-size_active', 'font-size_active')
  activateFontsize(target);
  return false;
}

colors.onclick = function(event) {
  let target = event.target;
  fun('div.book__control_color', 'color_active');
  activateColor(target);
  return false;
}

backgrounds.onclick = function(event) {
  let target = event.target;
  fun('div.book__control_background', 'color_active');
  activateBG(target);
  return false;
}

function activateFontsize(target) {
  target.classList.add('font-size_active');
  const size = target.getAttribute('data-size');
  book.classList.remove('book_fs-big', 'book_fs-small');
  if (size != null) book.classList.add(`book_fs-${size}`);
}

function activateColor(target) {
  target.classList.add('color_active');
  const color = target.getAttribute('data-text-color');
  book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
  book.classList.add(`book_color-${color}`);
}
  
function activateBG(target) {
  target.classList.add('color_active');
  const color = target.getAttribute('data-bg-color');
  book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
  book.classList.add(`book_bg-${color}`);
}