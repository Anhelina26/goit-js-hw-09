function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function setButtonsState({ isRunning }) {
  refs.start.disabled = isRunning;
  refs.stop.disabled = !isRunning;
}

const refs = {
  start: document.querySelector('[data-start]'),
  stop:  document.querySelector('[data-stop]')
};

let intervalId = null;

refs.start.addEventListener('click', () => {
  setButtonsState({ isRunning: true });

  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }
});

refs.stop.addEventListener('click', () => {
  setButtonsState({ isRunning: false });
  clearInterval(intervalId);
  intervalId = null;
});