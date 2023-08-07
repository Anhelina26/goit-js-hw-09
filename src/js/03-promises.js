import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

formEl.lastElementChild.classList.add('btn');

let timeoutId = null;

formEl.addEventListener('submit', formSubmitHandler);

function formSubmitHandler (event) {
  event.preventDefault();

  formValuesPicker(event);

  let { delay, step, amount } = formValuesPicker(event);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
       Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);      
      }) 

      delay += step;

      event.currentTarget.reset()
  }     
}

function formValuesPicker (event) {
  const promiseObj = {
    delay: Number(event.currentTarget.elements.delay.value),
    step: Number(event.currentTarget.elements.step.value),
    amount: Number(event.currentTarget.elements.amount.value)
  };

  return promiseObj;
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;

  timeoutId = setTimeout(() => {
      if (shouldResolve) {
      resolve ({ position, delay });
      } else {
      reject ({ position, delay });
      }}, delay)        
  }) 
}

