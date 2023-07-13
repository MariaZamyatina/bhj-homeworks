const chat = document.querySelector('.chat-widget');

chat.addEventListener('click', () => {
  chat.classList.add('chat-widget_active');
});

const answers = ['До свидания', ' Никого нет дома', 
'Все на обеде, напишите после дождика в четверг', 'Просьба не беспокоить порядочных людей'];
const input = document.getElementById('chat-widget__input');

function getTime() {
  const time = new Date();
  const hours = (time.getHours().length == 1) ? '0' + time.getHours() : time.getHours();
  const minutes = (time.getMinutes().length == 1) ? '0' + time.getMinutes() : time.getMinutes();
  const timeMessage = hours + ':' + minutes;
  return timeMessage;
};

// сообщение от клиента
function messageClient(messages, value, timeMessage) {
  messages.innerHTML += `
  <div class="message message_client">
     <div class="message__text">${value}</div>
    <div class="message__time">${timeMessage}</div>
    </div>`; 
  input.value = ''; // очищаем поле ввода
};

//  сообщение от робота
function messageRobot(messages, timeMessage) {
  const min = 0;
  const max = answers.length - 1;
  const answerIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  const answer = answers[answerIndex]; 
  messages.innerHTML += `
 
  <div class="message">
        <div class="message__time">${timeMessage}</div>
          <div class="message__text">${answer}</div>
      </div>`;
};

function scrollMessage() {
  const elClient = Array.from(document.querySelectorAll('.message'));
  const elRobot = Array.from(document.querySelectorAll('.message_client'));
  const lastMessage = elClient[elClient.length - 1]; // берем последнее сообщение от клиента
  const lastMessageHeight = lastMessage.getBoundingClientRect().height; // высота последнего сообщения
  const lastMessageRobot = elRobot[elRobot.length - 1]; // последнее сообщение от робота
  const lastMessageRobotHeight = lastMessageRobot.getBoundingClientRect().height; // высота сообщени от робота
  const bottom = document.querySelector('.chat-widget__messages-container');
  // сдвигаем по высоте последних сообщений плюс высота пробела
  bottom.scrollBy({top: lastMessageRobotHeight + lastMessageHeight + 40, behavior: 'smooth'}); 
};

let messagesHeight = 0;
// высота виджета с сообщениями
const box = document.querySelector('.chat-widget__messages-container').getBoundingClientRect().height;

input.addEventListener('keyup', (e) => {
  if (e.key == 'Enter') {
    const messages = document.querySelector( '.chat-widget__messages' );
    const timeMessage = getTime();
    const value = input.value;
    
    if (value == '') return;
    // сообщение от клиента
    messageClient(messages, value, timeMessage);
    // сообщение от робота
    messageRobot(messages, timeMessage);
  
    if (messagesHeight <= box) {
      messagesHeight = messages.getBoundingClientRect().height; // высота блока с сообщениями
      return;
      }
    if (messagesHeight >=box) {
      scrollMessage();    
    }
  }; 
});


