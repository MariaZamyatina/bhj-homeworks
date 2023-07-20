const xhr = new XMLHttpRequest();  
const xhr2 = new XMLHttpRequest();  

loadPoll();
sendAnswers();

// функция загрузки опроса
function loadPoll() {
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
      const poll = xhr.responseText;
      const json = JSON.parse(poll);

      // добавляем полученные данные в html
      addHtml(json);

    };  
});

xhr.open('GET','https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
}

// функция получения результатов опроса
function answerPoll() {

  return new Promise(function(resolve, reject) {
    const buttons = document.getElementById('poll__answers');

    buttons.addEventListener('click', (e) => {

      alert('Спасибо, ваш голос засчитан!');
      resolve(e.target);  
    });
  });
};

async function sendAnswers() {
  const element = await answerPoll();

  xhr2.addEventListener('readystatechange', () => {
    if (xhr2.readyState === xhr.DONE) {
        
        const json = JSON.parse(xhr2.responseText);
        console.log('результаты опроса', json);
        showResult(json);
      };    
    });

  xhr2.open('POST','https://students.netoservices.ru/nestjs-backend/poll');
  xhr2.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
  xhr2.send( `vote=${id}&answer=${element.textContent}` );

};

let id = '';
function addHtml(json) {
  const data = json['data'];
  const title = data['title'];
  id = json['id'];
  
  const answersArray = data['answers'];
    // добавляем текст вопроса
  const poolTitle = document.getElementById('poll__title'); 
  poolTitle.textContent = title;
    
  const answers = document.getElementById('poll__answers'); // элемент для добавления кнопок ответов

  answersArray.forEach(element => {
    const newAnswer = document.createElement('button');
    newAnswer.classList.add('poll__answer');
    newAnswer.textContent = element; 
    answers.appendChild(newAnswer); 
  })
};

function showResult(json) {


  const stat = json['stat'];

  // убираем варианты ответа
  const buttons = Array.from(document.querySelectorAll('button'));
  buttons.forEach((e) => {
   e.parentNode.removeChild(e);
  });

  // публикуем на странице результаты
  results(stat);

};

function results(arr) {

  let initialValue = 0;
  // подсчет всего голосов
  let sumVotes = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.votes;
  }, initialValue);

  // публикуем на странице
  const parent = document.getElementById('poll__answers');
  arr.forEach((element) => {
    const div = document.createElement('div');
    const votes = String(((element['votes'] / sumVotes ) * 100).toFixed(2));
    div.innerHTML +=  `${element['answer']} :  ${votes.bold()} ${'%'.bold()} ` 

    //добавляем к родителю
    parent.appendChild(div);
  })
};