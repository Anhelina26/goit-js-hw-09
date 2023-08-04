// HTML містить кнопки «Start» і «Stop».

// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>

// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону 
// <body> на випадкове значення, використовуючи інлайн стиль. Натисканням на кнопку
//      «Stop» зміна кольору фону повинна зупинятися.

// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так, 
// щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  
  
  const refs = {
      start: document.querySelector('[data-start]'),
      stop:  document.querySelector('[data-stop]')
  };
  
  let intervalId = null;
  
  refs.start.addEventListener('click', () => {
      refs.start.disabled = true;
      refs.stop.disabled = false;
  
      if (!intervalId) {
          intervalId = setInterval(() => {
            document.body.style.backgroundColor = getRandomHexColor();
          }, 1000);
        }
  });
  refs.stop.addEventListener('click', () => {
      refs.start.disabled = false;
      refs.stop.disabled = true;
      clearInterval(intervalId);
      intervalId = null;
    });
  
  
