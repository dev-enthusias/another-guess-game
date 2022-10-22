'use strict';
const formContainer = document.querySelector('.form');
const headerContainer = document.querySelector('header');
const mainContainer = document.querySelector('main');
const nameInput = document.querySelector('.user-name');
const guess = document.querySelector('.guess');
const guessRange = document.querySelector('.number');
const loginBtn = document.querySelector('.enter');
const logoutBtn = document.querySelector('.logout');
const checkBtn = document.querySelector('.check');
const resetBtn = document.querySelector('.reset');
const playerName = document.querySelector('.name');
const totalScoreLabel = document.querySelector('.score');
const rangeNumber = document.querySelector('.number');
const message = document.querySelector('.message');
const levelEl = document.querySelector('.level');

//init conditions
let i = 2;
let tScore = 0;
let level = 1;
let secretNumber = Math.trunc(Math.random() * i) + 1;

//Login Function
function loginPlayer() {
  let nameInputVal = nameInput.value.trim();

  if (nameInputVal === '') {
    //if the error text already exists
    if (!!document.querySelector('.error')) return;

    const html = `<p class="error">Please enter a user name!</p>`;
    formContainer.insertAdjacentHTML('afterbegin', html);
    return;
  }

  nameInputVal =
    nameInputVal.slice(0, 1).toUpperCase() +
    nameInputVal.slice(1).toLowerCase();
  formContainer.classList.add('hide');
  headerContainer.classList.remove('hide');
  mainContainer.classList.remove('hide');
  playerName.textContent = nameInputVal;
}

//Logout function
function logoutPlayer() {
  formContainer.classList.remove('hide');
  headerContainer.classList.add('hide');
  mainContainer.classList.add('hide');
  playerName.textContent = 'Player';
  nameInput.value = '';
}

//Game functionality
function checkGuess() {
  const guessVal = Number(guess.value);
  //if no input
  if (!guessVal) {
    message.textContent = 'No Number';
    //if wrong number
  } else if (guessVal !== secretNumber) {
    message.textContent = `Correct Number is ${secretNumber}. Try again!`;
    message.style.fontSize = '30px';
    guess.style.display = 'none';
    document.querySelector('body').style.backgroundColor = 'red';
    //if correct number
  } else if (guessVal === secretNumber) {
    i++;
    tScore++;
    level++;
    levelEl.textContent = level;
    totalScoreLabel.textContent = tScore;
    rangeNumber.textContent = i;
    guessRange.textContent = i;
    guess.value = '';
    message.textContent = 'Correct Number, Play again';
    secretNumber = Math.trunc(Math.random() * i) + 1;
  }
}

//Reset function
function reset() {
  i = 2;
  tScore = 0;
  level = 1;
  secretNumber = Math.trunc(Math.random() * i) + 1;
  levelEl.textContent = level;
  totalScoreLabel.textContent = tScore;
  rangeNumber.textContent = i;
  guessRange.textContent = i;
  message.textContent = 'Start guessing...';
  guess.style.display = 'inline';
  guess.value = '';
  document.querySelector('body').style.backgroundColor = '#222';
}

loginBtn.addEventListener('click', function (e) {
  e.preventDefault();
  loginPlayer();
});

checkBtn.addEventListener('click', checkGuess);

resetBtn.addEventListener('click', reset);

logoutBtn.addEventListener('click', logoutPlayer);
