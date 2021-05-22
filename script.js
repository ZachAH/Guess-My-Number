'use strict';
// //grabbing element with class message if id use #
// console.log(document.querySelector('.message').
// //reading the content of the text
// textContent);

// document.querySelector('.message').textContent = 'Correct Number!'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

//adding onClick event to put the value in guess into the console
//before that changing element to number
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //if guess has no number it will change the text to no number because zero is a falsy value
    if (!guess) {
        document.querySelector('.message').textContent = 'No number😥!'
    }
});

