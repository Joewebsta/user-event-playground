let body = document.body;
let fireBtn = document.querySelector('.fireBtn');
let monkeyBtn = document.querySelector('.monkeyBtn');
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

box.addEventListener('click', changeColor);
fireBtn.addEventListener('click', showImage);
monkeyBtn.addEventListener('click', changeBgColor);

