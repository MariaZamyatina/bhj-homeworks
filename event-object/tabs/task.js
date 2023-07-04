let arr = Array.from(document.querySelectorAll('div.tab'));
let arr2 = Array.from(document.querySelectorAll('div.tab__content'));

let selectedEl;
let selectedEl2;

arr.forEach(element => {
  element.onclick = () => { 
    document.querySelector('div.tab_active').classList.remove('tab_active');
    document.querySelector('div.tab__content_active').classList.remove('tab__content_active');
    let target = element; // где был клик?
    index = arr.indexOf(element);
    changeClass(target, 'tab_active'); // меняем вкладку
    changeClass(arr2[index], 'tab__content_active'); // меняем содержимое вкладки
    }
});

function changeClass(target, className) {
  if (selectedEl) { // убрать существующий класс, если есть
    selectedEl.classList.remove(className);
  }
  selectedEl = target;
  selectedEl.classList.add(className); // добавляем новый класс 
};


