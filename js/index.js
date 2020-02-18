"use strict";

const form = document.forms.options;

let mediator = {
    finish: finish.end,
    heroMove: game.heroMove,

    newGameOptions: function (){
        if (mediator.table){
            for (let i = 0; i<mediator.timerId.length; i++){
            clearInterval(mediator.timerId[i])
            }
        
            mediator.table.remove();
            form.hidden = false;
            game.newGame();
        }
    },            
    newGameStart: function (){

        let xField = form.elements.x.value;
        mediator.x = fieldCheck(xField);
        if (!mediator.x) return;
        let yField = form.elements.y.value;
        mediator.y = fieldCheck(yField);
        if (!mediator.y) return;
    
        mediator.table = fieldCreate.tableCreate(mediator.x, mediator.y);
        mediator.hero = fieldCreate.heroCreate(0, 0);
        mediator.monster = fieldCreate.monsterCreate;
        mediator.finish = finish.end;
    
        mediator.timerId = game.start(mediator.x, mediator.y, mediator.monster);
    
        form.hidden = true; 
    }  
}

 const start = document.getElementsByName('start')[0];
 start.addEventListener("click", mediator.newGameStart);

 document.addEventListener('keydown', function(event) {
    if (!form.hidden && event.code == 'Enter') {
        mediator.newGameStart();
    }
 }); 

 document.addEventListener('keydown', mediator.heroMove);

 const newGame = document.getElementById('newGame');
 newGame.addEventListener("click", mediator.newGameOptions);

 let fieldCheck = function (field){
    if (field<3){
        alert("Поле слишком маленькое");
        return false;
    }
    if (field%2==0) {
        return ++field;}
    return field;
 };

 

 





