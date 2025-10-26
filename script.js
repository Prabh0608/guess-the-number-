'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
// console.log(number);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = "No number!";
    } else if (guess === number) {
        document.querySelector('.message').textContent = "🎉 Correct Number";

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.number').textContent = number;

        let highScore = document.querySelector('.highscore').textContent;

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (guess !== number) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > number ? "📈 Too High!" : "📉 Too Low!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "😆 you lost the game!";
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    console.log(number);
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = null;
})