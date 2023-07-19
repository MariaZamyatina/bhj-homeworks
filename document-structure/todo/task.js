const form = document.querySelector('form');

//localStorage.clear();
// если localStorage не пустой//
// получаем из него необходимые данные
if (localStorage.getItem('key')) {
  let dataStorage = localStorage.getItem('key').split(',');
  for (let i = 0; i <= dataStorage.length - 1; i ++) {
    addHtml(dataStorage[i]); 
  }  
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = form.querySelector('input').value;
  if (value.trim() == '') return;
  addHtml(value); // добавление нового html 
});

// добавление нового html 
function addHtml(value) {
  
  const newElement = document.createElement('div');
  newElement.classList.add('task');

  const child1 = document.createElement('div');
  child1.classList.add('task__title');
  child1.textContent = value;

  const child2 = document.createElement('a');
  child2.href = "#";
  child2.classList.add('task__remove');
  child2.innerHTML += `&times;`

  const parent = document.querySelector('.tasks__list'); 
  newElement.appendChild(child1);
  newElement.appendChild(child2);
  parent.appendChild(newElement); 

  form.reset(); // очистка формы
  
  // удаление заметки
  newElement.addEventListener('click', (e) => {
    newElement.remove();
    // изменение в localStorage после удаления заметки
    updateLocalStorage();

  });
  // обновление в localStorage
  updateLocalStorage();
};

function updateLocalStorage() {
  let data = [];
  let text = Array.from(document.querySelectorAll('.task__title'));
  text.forEach((element) => {
    if (!data.includes(element.textContent)) {
      data.push(element.textContent);
    }
  });
  localStorage.setItem('key', data);
};