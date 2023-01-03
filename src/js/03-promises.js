import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = {
  form: document.querySelector('.form'),
  createBtn: document.querySelector('[type="submit"]'),
};
const options = {
  width: '500px',
  borderRadius: '30px',
  position: 'center-bottom',
  distance: '25px',
  fontSize: '30px',
};

refs.form.addEventListener('submit', onCreateBtn);

function onCreateBtn(event) {
  event.preventDefault();
  refs.createBtn.disabled = true;
  const firstDelay = Number(refs.form.delay.value);
  const delayStep = Number(refs.form.step.value);
  const amount = Number(refs.form.amount.value);

  for (let i = 0; i < amount; i++) {
    const position = i + 1;
    const delay = firstDelay + delayStep * i;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(` Fulfilled promise ${position} in ${delay}ms`, options);
      })
      .catch(({ position, delay }) => {
        Notify.failure(` Rejected promise ${position} in ${delay}ms`, options);
      });
  }
  refs.createBtn.disabled = false;
  refs.form.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      setTimeout(() => resolve({ position, delay }), delay);
    } else {
      setTimeout(() => reject({ position, delay }), delay);
    }
  });
}
