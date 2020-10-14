let body = document.body;
let fireBtn = document.querySelector('.fireBtn');
let monkeyBtn = document.querySelector('.monkeyBtn');
let textInput = document.querySelector('.textInput');
let box = document.querySelector('div');
let boxImg = document.querySelector('img');

function changeColor() {
  box.classList.toggle('green');
}

function changeBgColor() {
  body.classList.toggle('gray');
}

function showImage() {
  boxImg.classList.toggle('hidden');
}

function logMessage() {
  console.log('Put me down!');
}

function grow() {
  let width = box.offsetWidth;
  let height = box.offsetHeight;
  width += 20;
  height += 20;
  box.style.width = `${width}px`;
  box.style.height = `${height}px`;
}

function shrink() {
  let width = box.offsetWidth;
  let height = box.offsetHeight;
  width -= 40;
  height -= 40;
  box.style.width = `${width}px`;
  box.style.height = `${height}px`;
}

box.addEventListener('click', changeColor);
box.addEventListener('drag', logMessage);
fireBtn.addEventListener('click', showImage);
monkeyBtn.addEventListener('click', changeBgColor);
textInput.addEventListener('keyup', grow);
textInput.addEventListener('keydown', shrink);
