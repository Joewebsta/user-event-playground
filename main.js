let fireBtn = document.querySelector('button');
let box = document.querySelector('div');
let boxImg = document.querySelector('img');

function changeColor() {
  box.classList.toggle('green');
}

function showImage() {
  boxImg.classList.toggle('hidden');
}

box.addEventListener('click', changeColor);
fireBtn.addEventListener('click', showImage);

