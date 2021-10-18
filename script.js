'use strict';

// console.log(document.querySelector('.message').
// textContent);

// document.querySelector('.message').textContent = 'COrrect Answer';

// document.querySelector('.number') = 3;
// document.querySelector('.score').textContent = 5;
 
// document.querySelector('.guess').value =23;
// console.log(document.querySelector('.guess').value);

let number = Math.trunc(Math.random()*7 +1);

let score = 10;
let highscore = 0;



document.querySelector('.check') .addEventListener
('click', function() {
    const guess =Number( document.querySelector('.guess').value);
    console.log(guess ,typeof guess);

    if(!guess){
         document.querySelector('.message').textContent = 'GUESS NUMBER FIRST';

    }
    else if (guess === number){
        document.querySelector('.message').textContent  = 'CORRECT  NUMBER';
      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width= '30rem'; 
      document.querySelector('.number').textContent = number; 
      
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
      }


    }
    else if (guess > number ){
        if (score > 1){
            document.querySelector('.message').textContent = "TO HIGH!!!";
        score--;
        document.querySelector('.score').textContent = score; 

        }
        else{
            document.querySelector('.message').textContent = 'You lost the game' ;
            document.querySelector('.score').textContent = 0; 
        }
        
        
       
    }
    else if(guess < number) {
        if (score > 1){
            document.querySelector('.message').textContent = 'TOO LOW !!! ';
            score--;
            document.querySelector('.score').textContent = score;

        }
        else {
            document.querySelector('.message').textContent = 'You lost the game' ;
            document.querySelector('.score').textContent = 0; 

        }
       
  
        
    }
}); 

document.querySelector('.again').addEventListener
('click',function(){
    number = Math.trunc(Math.random()*7 +1);

    score = 10;

     
    document.querySelector('.message').textContent = 'START GUESSING!!! ';
    document.querySelector('.score').textContent = 10; 
    document.querySelector('.number').textContent = '?' ;
    document.querySelector('.guess').value = '' ;

    document.querySelector('body').style.backgroundColor = '#222';

      document.querySelector('.number').style.width= '15rem'; 


});