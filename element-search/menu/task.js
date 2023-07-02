const elements = Array.from(document.querySelectorAll('.menu__link'));

elements.forEach((elem) => {
  elem.onclick = () => {
    if (elem.nextElementSibling) {  // если есть сщэлемент с классом menu_sub
      elem.nextElementSibling.classList.toggle('menu_active');  // добавление/удаление menu_active в classList
      return false; 
    }
  }
});
