const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
const number = document.querySelector('#count');

let numberOnDisplay = 0;

function initDecrease() {
  number.classList.add('decreaseColor');
  number.classList.remove('resetColor');
  number.classList.remove('increaseColor');
  decrease.classList.add('click');
  increase.classList.remove('click');
  reset.classList.remove('click');
}

function initIncrease() {
  number.classList.add('increaseColor');
  number.classList.remove('decreaseColor');
  number.classList.remove('resetColor');
  increase.classList.add('click');
  decrease.classList.remove('click');
  reset.classList.remove('click');
}

function initReset() {
  number.classList.add('resetColor');
  number.classList.remove('increaseColor');
  number.classList.remove('decreaseColor');
  reset.classList.add('click');
  decrease.classList.remove('click');
  increase.classList.remove('click');
}

decrease.addEventListener('click', function () {
  numberOnDisplay--;
  number.textContent = numberOnDisplay;
  initDecrease();
});

reset.addEventListener('click', function () {
  numberOnDisplay = 0;
  number.textContent = numberOnDisplay;
  initReset();
});

increase.addEventListener('click', function () {
  numberOnDisplay++;
  number.textContent = numberOnDisplay;
  initIncrease();
});
