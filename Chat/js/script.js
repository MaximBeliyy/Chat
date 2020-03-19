const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");
const PERSON_IMG = "img/avatar-2.png";
const PERSON_NAME = "Name";

// Связяываем кнопку и форму

msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";

  botResponse();
});


// Добавление нового комментария

function appendMessage(name, img, side, text) {

  const msgHTML = `
    <div class="msg left-msg bgclr">
      
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-text">${text}</div>
      </div>
      <div class="msg-info">
   
      <div class="msg-info-time">сегодня в ${formatDate(new Date())}</div>
    </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse() {
 
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_IMG, "left", msgText);
  }, delay);
}

// Дополнительные настройки

function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}