const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);
let timerId = null;

function onStartBtn(event) {
  if (startBtn.disaibled) {
    return;
  }
  timerId = setInterval(() => {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
  }, 1000);
  startBtn.disaibled = true;
}

function onStopBtn(event) {
  clearInterval(timerId);
  startBtn.disaibled = false;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
