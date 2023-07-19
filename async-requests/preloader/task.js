//localStorage.clear();
// если localStorage не пустой//
// получаем из него необходимые данные
(() => {
  if (localStorage.getItem('key')) {
    let dataStorage = JSON.parse(localStorage.getItem("key"));
    addHtml(dataStorage['dict']['key']);
    
    // убираем анимацию
    const id = document.getElementById('loader');
    id.classList.remove('loader_active');
    }
  // если кэш пустой загружаем курс валют
  else {
    const xhr = new XMLHttpRequest();  
    
    let coursesArray = [];
    
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === xhr.DONE) {
    
        const id = document.getElementById('loader');
        id.classList.remove('loader_active');
    
        const courses = xhr.responseText;
        const data = JSON.parse(courses);
        const valute = data['response']['Valute'];
    
      for (let key of Object.keys(valute)) {
        const coursesDict = {"CharCode" : "", "Value": ""};  
        coursesDict['CharCode'] = valute[key]['CharCode'];
        coursesDict['Value'] = valute[key]['Value'];
        coursesArray.push(coursesDict);
        }
          
        // добавление курса в html
        addHtml(coursesArray);
        updateLocalStorage(coursesArray);
        }
        }
      );
    
      xhr.open('GET','https://students.netoservices.ru/nestjs-backend/slow-get-courses');
      xhr.send();
    };

})();

function addHtml(coursesArray) {       // [ {}, {}, {} ]
    coursesArray.forEach(element => {
      const div = document.createElement('div');
      div.classList.add('item__code');
      div.textContent = element['CharCode'];
    
      const div2 = document.createElement('div');
      div2.classList.add('item__value');
      div2.textContent = element["Value"];
    
      const div3 = document.createElement('div');
      div3.classList.add('item__currency');
      div3.textContent = `руб.`;

      const parentDiv = document.createElement('div');
      parentDiv.classList.add('item');
      parentDiv.appendChild(div);
      parentDiv.appendChild(div2);
      parentDiv.appendChild(div3);

      const parent = document.getElementById('items');
      parent.appendChild(parentDiv);
    });  
  };

function updateLocalStorage(coursesArray) {
    let dataDict = {'dict' : []}; // словарь для добавления в localstorage  
    let data = {'key': [...coursesArray]};
    dataDict['dict'] = data;
    localStorage.setItem('key', JSON.stringify(dataDict));
  };
