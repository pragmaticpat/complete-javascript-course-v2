'use strict';

// Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let roundScore = 0;
let activePlayer = 0;
const playerScores = [0, 0];

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // Generate a random dice value
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // Check for a roll of 1 (if so, switch player)
  if (dice !== 1) {
    roundScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = roundScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  playerScores[activePlayer] += roundScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    playerScores[activePlayer];
  switchPlayer();
});

const player0CurrentEl = document.getElementById('current--0');
const player1CurrentEl = document.getElementById('current--1');
function switchPlayer() {
  document.querySelector('.player--0').classList.toggle('player--active');

  document.querySelector('.player--1').classList.toggle('player--active');

  // switch player
  activePlayer = activePlayer ? 0 : 1;
  player0CurrentEl.textContent = 0;
  player1CurrentEl.textContent = 0;
  roundScore = 0;
}
