'use strict';
// //grabbing element with class message if id use #
// console.log(document.querySelector('.message').
// //reading the content of the text
// textContent);

// document.querySelector('.message').textContent = 'Correct Number!'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector('.number').textContent = secretNumber;

//adding onClick event to put the value in guess into the console
//before that changing element to number
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //if guess has no number it will change the text to no number because zero is a falsy value
    if (!guess) {
        document.querySelector('.message').textContent = 'No number😥!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number! 🙌';

    } else if (guess > secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Too High 😠';
            score --;
            document.querySelector('.score').textContent =  score;
        } else {
              document.querySelector('.message').textContent = '🤯 You lost the game!';
        }

    } else if (guess < secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Too Low 😠';
            score --;
            document.querySelector('.score').textContent =  score;
         } else {
            document.querySelector('.message').textContent = '🤯 You lost the game!';
         }
        
    }
});

