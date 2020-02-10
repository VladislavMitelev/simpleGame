"use strict";

 const form = document.forms.options;
 let x;
 let y;
 let timerId = [];
 let countMonster;

const newGame = document.getElementById('newGame');
newGame.addEventListener("click", newGameOptions);

const start = document.getElementsByName('start')[0];
start.addEventListener("click", newGameStart);

 document.addEventListener('keydown', function(event) {
    if (!form.hidden && event.code == 'Enter') {
        newGameStart();
    }
}); 

function newGameStart(){
    let xField = form.elements.x.value;
    let yField = form.elements.y.value;
    countMonster = form.elements.monster.value;
 
    x = fieldCheck(xField);
    if (!x) return;
       y = fieldCheck(yField);
    if (!y) return;
       tableCreate(x, y);
       heroCreate();

    for (let i = 0; i<countMonster; i++){   
       let m = new Monster(x,y);
       let moveMonster = m.moveMonster.bind(m);
       let timerIdNew = setInterval(moveMonster, 500, i);
       timerId[i] = timerIdNew;
    } 
    form.hidden = true;   
}

//==================================

function newGameOptions(){
    let table = document.getElementById('table');
   if (table){
       for (let i = 0; i<countMonster; i++){
       clearInterval(timerId[i])
       }
      table.remove();
      form.hidden = false;
      xHero = 0;
      yHero = 0;
      dangerX=[];
      dangerY=[];
   }
}

function fieldCheck(field){
    if (field<3){
        alert("Поле слишком маленькое");
        return false;
    }
    if (field%2==0) {
        return ++field;}
    return field;
}

 function showCover(conf) {
    let coverDiv = document.createElement('div');
    coverDiv.id = 'cover-div';
    document.body.style.overflowY = 'hidden';
    document.body.append(coverDiv);

    let answer = confirm(conf);
    if (answer){
        hideCover();
        newGameOptions();
    }else{
     hideCover();
     newGameOptions();
    }
  }

  function hideCover() {
    document.getElementById('cover-div').remove();
    document.body.style.overflowY = '';
  }

  function finish(){
       if (xHero == x-1 && yHero == y-1){
           showCover('Victory!!! Play again?')
       }
        let dY = dangerY.indexOf(yHero);
       if (dY!=(-1) && xHero == dangerX[dY]){
           showCover('You are dead :( Play again?')
        }
    }