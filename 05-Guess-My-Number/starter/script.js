'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
const message = document.querySelector('.message');
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 0) {
    if (!guess) {
      message.textContent = '😿 No number found';
    } else if (guess === secretNumber) {
      score++;
      message.textContent = '🎉 You guessed it!';
    } else if (guess < secretNumber) {
      score--;
      message.textContent = '📉 too low!';
    } else if (guess > secretNumber) {
      score--;
      message.textContent = '📈 too high!';
    }
  } else {
    message.textContent = '💩 You lost';
  }

  document.querySelector('.score').textContent = score;
});
