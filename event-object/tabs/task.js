let arrTab = Array.from(document.querySelectorAll('div.tab'));
let arrContent = Array.from(document.querySelectorAll('div.tab__content'));

arrTab.forEach(element => {
  element.onclick = () => { 
    document.querySelector('div.tab_active').classList.remove('tab_active');
    document.querySelector('div.tab__content_active').classList.remove('tab__content_active');
    let index = arrTab.indexOf(element);
    changeClass(element, 'tab_active'); // меняем вкладку
    changeClass(arrContent[index], 'tab__content_active'); // меняем содержимое вкладки
    }
});

function changeClass(target, className) {
  target.classList.toggle(className);
};


