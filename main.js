let box = document.querySelector('div');

function changeColor() {
  box.classList.toggle('green');
}

box.addEventListener('click', changeColor);

