'use strict';

// Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const player0CurrentEl = document.getElementById('current--0');
const player1CurrentEl = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0Panel = document.querySelector('.player--0');
const player1Panel = document.querySelector('.player--1');

let roundScore, activePlayer, playerScores, playing;

const init = () => {
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0CurrentEl.textContent = 0;
  player1CurrentEl.textContent = 0;
  roundScore = 0;
  activePlayer = 0;
  playerScores = [0, 0];

  player0Panel.classList.remove('player--winner');
  player1Panel.classList.remove('player--winner');

  if (!player0Panel.classList.contains('player--active'))
    player0Panel.classList.add('player--active');
  if (player1Panel.classList.contains('player--active'))
    player1Panel.classList.remove('player--active');
};

init();

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
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
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    playerScores[activePlayer] += roundScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      playerScores[activePlayer];

    if (playerScores[activePlayer] >= 100) {
      // player is winner!
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle('.player--active');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playing = false;
    }
    switchPlayer();
  }
});

function switchPlayer() {
  document.querySelector('.player--0').classList.toggle('player--active');

  document.querySelector('.player--1').classList.toggle('player--active');

  // switch player
  activePlayer = activePlayer ? 0 : 1;
  player0CurrentEl.textContent = 0;
  player1CurrentEl.textContent = 0;
  roundScore = 0;
}

btnNew.addEventListener('click', function () {
  init();
});
