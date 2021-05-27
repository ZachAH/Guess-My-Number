'use strict';
// //grabbing element with class message if id use #
// console.log(document.querySelector('.message').
// //reading the content of the text
// textContent);

// document.querySelector('.message').textContent = 'Correct Number!'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;


//adding onClick event to put the value in guess into the console
//before that changing element to number
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //if guess has no number it will change the text to no number because zero is a falsy value
    if (!guess) {
        document.querySelector('.message').textContent = 'No number😥!';
    //if player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number! 🙌';
        document.querySelector('.number').textContent = secretNumber;
        //manipulating css for correct answer
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    // if players guess is to high
    } else if (guess > secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Too High 😠';
            score --;
            document.querySelector('.score').textContent =  score;
        } else {
              document.querySelector('.message').textContent = '🤯 You lost the game!';
        }
    //if players guess is to low
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


//Again button resetting the game
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);

    document.querySelector('.message').textContent = 'Start Guessing....';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';
    
});

