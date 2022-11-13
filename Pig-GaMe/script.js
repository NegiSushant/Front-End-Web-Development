'use strict';

// Selecting ELEMENTS
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');


const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const initial = function() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active')
};
initial();


const switchPlayer = function() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling Dice Functionality
btnRoll.addEventListener('click', function() {
  if (playing) {
    // 1. Generating  random dice
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);

    // 2. display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true,
    if (dice != 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
      // current0El.textContent = currentScore; // Change Later

    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function() {
  if (playing) {
    //1. Add current score to the active player's scores
    scores[activePlayer] += currentScore;
    // console.log(scores[activePlayer]);
    //scores[1] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    // 2. Check if the player's score is == 100
    if (scores[activePlayer] >= 100) {
      // finish the Game
      playing = false;
      diceEl.classList.add('hidden');

      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    } else {
      // switch to the next player
      switchPlayer();
    }
  }

});

btnNew.addEventListener('click', initial);
