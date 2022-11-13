function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = 1000;

const body = document.querySelector('body');
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
let timeout = null;
buttonStop.disabled = true;

buttonStart.addEventListener('click', startChangeColor);
buttonStop.addEventListener('click', stopChangeColor);

function startChangeColor() {
  timeout = setInterval(() => {
    onStart();
  }, changeColor);
  buttonStart.disabled = true;
  buttonStop.disabled = false;
}

function onStart() {
  body.style.backgroundColor = getRandomHexColor();
}

function stopChangeColor() {
  clearInterval(timeout);
  buttonStart.disabled = false;
  buttonStop.disabled = true;
}