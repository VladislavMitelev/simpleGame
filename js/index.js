"use strict";

 const form = document.forms.options;
 let timerId;
 const obj ={};

const start = document.getElementsByName('start')[0];
start.addEventListener("click", newGameStart);

 document.addEventListener('keydown', function(event) {
    if (!form.hidden && event.code == 'Enter') {
        newGameStart();
    }
 }); 

function newGameStart(){

    let xField = form.elements.x.value;
  obj.x =fieldCheck(xField);
    if (!obj.x) return;
    let yField = form.elements.y.value;
  obj.y = fieldCheck(yField);
    if (!obj.y) return;

  obj.table = fieldCreate.tableCreate(obj.x, obj.y);
  obj.hero = fieldCreate.heroCreate(0, 0);
  obj.monster = fieldCreate.monsterCreate;
  obj.finish = finish.end;

  timerId = game.start();

 form.hidden = true; 
}

document.addEventListener('keydown', game.heroMove);

let fieldCheck = function (field){
    if (field<3){
        alert("Поле слишком маленькое");
        return false;
    }
    if (field%2==0) {
        return ++field;}
    return field;
 };

 const newGame = document.getElementById('newGame');
 newGame.addEventListener("click", newGameOptions);

 function newGameOptions(){
     if (obj.table){
         for (let i = 0; i<timerId.length; i++){
         clearInterval(timerId[i])
         }
     
         obj.table.remove();
         form.hidden = false;
         game.newGame();
     }
 }            

 function random(min, max) {
     let rand = Math.round(min - 0.5 + Math.random() * (max - min + 1));
     if (rand%2 == 0) { return rand
     }else return random(min, max);
 }

 function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
 }





