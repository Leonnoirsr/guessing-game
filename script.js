'use strict';

const again = document.querySelector('.again');

const body = document.querySelector('body');

const numSelector = document.querySelector('.number')

const scoreSelector = document.querySelector('.score')

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;


const setMessage = function (message) {
	document.querySelector('.message').textContent = message;
};


document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess, typeof guess);

	//When there is no input or guess is 0
	if (!guess) {
		setMessage('⛔️ No Number Guessed');

		//When Player Guesses Correctly
	} else if (guess === secretNumber) {
		setMessage('🎉 Correct Number!');

		body.style.backgroundColor = '#60b347';
		numSelector.textContent = secretNumber;
		numSelector.style.width = '30rem';

		if (score > highScore) {
			highScore = score;
			document.querySelector('.highscore').textContent = highScore;
		}

		//When guess is wrong
	} else if (guess !== secretNumber && score != 0) {
		setMessage(guess > secretNumber ? '📈 too high!' : '📉 too low!');
		score--;
		scoreSelector.textContent = score;
	} else if (score <= 0) {
		setMessage('Sorry bruh, you lost 💥');
		body.style.backgroundColor = 'red';
	}
});

again.addEventListener('click', function () {
	body.style.backgroundColor = '#222';
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	setMessage('Start guessing...');
	scoreSelector.textContent = score;
	numSelector.style.width = '15rem';
	numSelector.textContent = '?';
	document.querySelector('.guess').value = '';
});
