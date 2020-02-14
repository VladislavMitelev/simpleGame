"use strict";

 let x;
 let y;
 const form = document.forms.options;
 

const start = document.getElementsByName('start')[0];
start.addEventListener("click", newGameStart);

 document.addEventListener('keydown', function(event) {
    if (!form.hidden && event.code == 'Enter') {
        newGameStart();
    }
}); 


function newGameStart(){
   
  x = game.x();
    if (!x) return;
  y = game.y();
    if (!y) return;

    fieldCreate.tableCreate(x, y);
    fieldCreate.heroCreate(0,0);
    game.monster();

    form.hidden = true;   
}

    const newGame = document.getElementById('newGame');
    newGame.addEventListener("click", newGameOptions);

    function newGameOptions(){
        if (fieldCreate.table){
            for (let i = 0; i<game.countMonster; i++){
            clearInterval(game.timerId[i])
            }
        
            fieldCreate.table.remove();
            form.hidden = false;
            game.newGame();
        }
    }            

    document.addEventListener('keydown', function(event) {
        let arrowH = event.code; 
        if (arrowH!='ArrowDown'&& arrowH!='ArrowUp'&& arrowH!='ArrowLeft'&& arrowH!='ArrowRight') return;
         if (!form.hidden) return;
         game.hero(arrowH);
 
     });

     function random(min, max) {
        let rand = Math.round(min - 0.5 + Math.random() * (max - min + 1));
        if (rand%2 == 0) { return rand
        }else return random(min, max);
    }
  
         function randomInteger(min, max) {
              let rand = min - 0.5 + Math.random() * (max - min + 1);
              return Math.round(rand);
          }