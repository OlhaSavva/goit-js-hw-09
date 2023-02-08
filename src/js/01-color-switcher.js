const refs = {
  body: document.body,
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  btnDisabled: document.querySelector('disabled'),
};

function onButton(event) {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
}
function startChangeColor() {
  intervalChange = setInterval(onButton, 1000);
  refs.stopBtn.removeAttribute('disabled');
  refs.startBtn.toggleAttribute('disabled');
}
function stopChangeColor() {
  clearInterval(intervalChange);
  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.toggleAttribute('disabled');
}

refs.startBtn.addEventListener('click', startChangeColor);
refs.stopBtn.addEventListener('click', stopChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
