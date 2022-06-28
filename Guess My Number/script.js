'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';
document.querySelector('.number').textContent = 19;
document.querySelector('.score').textContent = 5;

document.querySelector('.guess').value = 2;




*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
//  when we click the button check the following operation take place
document.querySelector('.check').addEventListener('click', function () {
  // storing the value inside the box
  const guess = Number(document.querySelector('.guess').value);
  //when their is no guess

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No guess';
  }

  //when the guess is correct
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct guess';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // code for highScore
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNumber) {
    document.querySelector('.message').textContent =
      guess > secretNumber ? ' Guess is Too High' : ' Guess is Too low';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You failed 😓';
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
