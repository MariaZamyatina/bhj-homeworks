document.addEventListener('click', (e) => {       
  const el = e.target;
  if (el.className.includes( 'has-tooltip' )) {
    e.preventDefault();
    // ищем если ли у нажатого элемента активная подсказка - убираем ее
    const tip = [...el.parentElement.children].filter(elem => elem.className =='tooltip tooltip_active'); 
    const attr = el.getAttribute('title');
    
    if (tip[0] && tip[0].textContent == attr) {
      tip[0].remove();
      
    }
    // если нет активной подсказки
    else {
      // находим элемент с активной подсказкой
      activeTip = document.querySelector('.tooltip_active');
      console.log('activeTip',activeTip)
      // если есть подсказка у другого элемента - удаляем активную подсказку 
      if (activeTip) {
        activeTip.remove();
      };
      // создаем подсказку у нажатого элементв
      createElement(el);
      }
    }
});

document.addEventListener('scroll', () => {
  const tip = document.querySelector('.tooltip.tooltip_active');
  if (tip != null) {
    const attr = tip.textContent;
    const el = [...tip.parentElement.children].filter(c => c.className =='has-tooltip' && c.getAttribute('title') == attr); 
    const top = el[0].getBoundingClientRect().top;
    //let tipTop = tip.style.top; // подсказка
    //const win = window.innerHeight;
    tip.style.top = `${top}px`;
  }
})

function createElement(el) {
  const newEl = document.createElement('div');
  newEl.classList.add('tooltip','tooltip_active');            
  const top = el.getBoundingClientRect().top;
  const left = el.getBoundingClientRect().right;
  newEl.style.top = `${top}px`;
  newEl.style.left = `${left}px`;
  newEl.behavior = 'smooth';
  const attr = el.getAttribute('title');
  newEl.textContent = attr;      
  el.insertAdjacentElement('afterEnd', newEl);
};
