'use strict';
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
const number = document.querySelector('#count');

let numberOnDisplay = 0;

function colorCondition() {
  if (numberOnDisplay > 0) {
    number.style.color = 'green';
  }
  if (numberOnDisplay < 0) {
    number.style.color = 'red';
  }
  if (numberOnDisplay === 0) {
    number.style.color = 'black';
  }
  number.textContent = numberOnDisplay;
}

function initDecrease() {
  colorCondition();
  decrease.classList.add('click');
  increase.classList.remove('click');
  reset.classList.remove('click');
}

function initIncrease() {
  colorCondition();
  increase.classList.add('click');
  decrease.classList.remove('click');
  reset.classList.remove('click');
}

function initReset() {
  colorCondition();
  reset.classList.add('click');
  decrease.classList.remove('click');
  increase.classList.remove('click');
}

decrease.addEventListener('click', function () {
  numberOnDisplay--;
  initDecrease();
});

increase.addEventListener('click', function () {
  numberOnDisplay++;
  initIncrease();
});

reset.addEventListener('click', function () {
  numberOnDisplay = 0;
  initReset();
});
