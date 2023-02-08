import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const refs = {
  input: document.querySelector('#datetime-picker'),
  button: document.querySelector('button[data-start]'),
  btnDisabled: document.querySelector('disabled'),
  spanDays: document.querySelector('span[data-days]'),
  spanHours: document.querySelector('span[data-hours]'),
  spanMinutes: document.querySelector('span[data-minutes]'),
  spanSeconds: document.querySelector('span[data-seconds]'),
};
let isActive = false;
let selectDate = new Date();

refs.button.setAttribute('disabled', 'disabled');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates);
    if (selectedDates[0] < Date.now()) {
      refs.button.setAttribute('disabled', 'disabled');
      return window.alert('Please choose a date in the future');
    }
    refs.button.removeAttribute('disabled', 'disabled');
    selectDate = selectedDates[0];
  },
};
flatpickr('input#datetime-picker', options);

refs.button.addEventListener('click', countTimeToDate);

// const deltaTime = currentTime - startTime;
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function countTimeToDate() {
  if (isActive === true) {
    return;
  }

  setInterval(() => {
    isActive = true;
    const deltaTime = selectDate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    if (deltaTime < 0) {
      return;
    }
    console.log({ days, hours, minutes, seconds });
    refs.spanDays.textContent = days;
    refs.spanHours.textContent = addZero(hours);
    refs.spanMinutes.textContent = addZero(minutes);
    refs.spanSeconds.textContent = addZero(seconds);
  }, 1000);
}
function addZero(number) {
  return String(number).padStart(2, 0);
}
