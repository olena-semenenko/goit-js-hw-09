import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const timer = document.querySelector('.timer');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const startBtn = document.querySelector('[data-start]');

let targetDate = null;
let timerId = null;
let deltaTime = null;

const optionsFlatpickr = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    targetDate = selectedDates[0].getTime();
  },
  onChange(selectedDates) {
    if (selectedDates[0].getTime() < new Date().getTime()) {
      startBtn.disabled = true;

      Notify.failure('Please, pick  the date in the future', {
        width: '360px',
        borderRadius: '10px',
        position: 'center-top',
      });
    } else {
      startBtn.disabled = false;
    }
  },
};
flatpickr('#datetime-picker', optionsFlatpickr);

timer.style.display = 'flex';
timer.style.gap = '10px';
timer.style.color = 'red';
timer.style.fontSize = '40px';

startBtn.addEventListener('click', onDataTimer);

function onDataTimer(event) {
  if (startBtn.disabled) {
    return;
  }
  timerId = setInterval(() => {
    const currentDate = Date.now();

    deltaTime = targetDate - currentDate;

    if (deltaTime < 0) {
      timer.innerHTML = ' TIME IS UP!';
      clearInterval(timerId);
      return;
    }

    const countTime = convertMs(deltaTime);

    updateTextContent(countTime);
  }, 1000);
}

function updateTextContent(time) {
  days.textContent = time.days;
  hours.textContent = time.hours;
  minutes.textContent = time.minutes;
  seconds.textContent = time.seconds;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
