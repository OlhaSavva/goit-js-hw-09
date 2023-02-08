import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = {
  form: document.querySelector('.form'),
  inputDelay: document.querySelectorAll('input[name$="delay"]'),
  inputStep: document.querySelectorAll('input[name$="step"]'),
  inputAmount: document.querySelectorAll('input[name$="amount"]'),
  button: document.querySelector('button'),
};
refs.button.addEventListener('click', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const amount = refs.inputAmount[0].value;
  const delayInp = refs.inputDelay[0].value;
  const step = refs.inputStep[0].value;
  let delay = 0;
  for (let i = 1; i <= amount; i += 1) {
    let position = i;
    delay = +delayInp + +step * (position - 1);
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
  refs.form.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
