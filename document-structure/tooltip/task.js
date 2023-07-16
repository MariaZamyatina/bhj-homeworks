document.addEventListener('click', (e) => {       
  const el = e.target;
  if (el.className === 'has-tooltip') {
    e.preventDefault();
    const attr = el.getAttribute('title');

    // чтобы была только одна подсказка
    const tooltips = Array.from(document.querySelectorAll('.tooltip.tooltip_active'));

    const tip = [...el.parentElement.children].filter(c => c.className =='tooltip tooltip_active' && c.textContent == attr); 

    // ограничение на вторую подсказку
    if (tooltips.length > 0 && tooltips.indexOf(tip[0])<0) return; // выходим если уже есть открытая подсказка

    // смотрим есть ли активная подсказка на нажатом элементе
    (tip.length == 0) ? createElement(el) : tip[0].remove(); 
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
