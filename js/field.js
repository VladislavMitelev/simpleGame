"use strict";


let fieldCreate = (function(){

    function tableCreate(x, y){
         const table = document.createElement('table');
        table.setAttribute('id', 'table');
              for (let i =0; i<y; i++){
                  let tr = document.createElement('tr');
                 for (let j =0; j<x; j++){
                     let td = document.createElement('td');
                 if (i%2 != 0 && j%2 != 0) { 
                    td.classList.add('stone');
                 }
                    tr.append(td)
                 }   
                 table.append(tr)
              }
              table.rows[y-1].cells[x-1].style.background = 'url("styles/images/finish.jpg" ';
           const field = document.getElementById('field');
           field.append(table);
           return table;
        };

   return {

   tableCreate: tableCreate,

      monsterCreate: function(yMonster, xMonster, table){
         let monster = document.createElement('div');
         monster.innerHTML = '<img src="styles/images/monster.PNG" alt="Monster" >';
         mediator.table.rows[yMonster].cells[xMonster].append(monster);
           return monster;
      },
       
      heroCreate: function (yHero, xHero, table){
         let hero = document.createElement('div');
         hero.innerHTML = '<img src="styles/images/hero.PNG" alt="Hero" >';
         mediator.table.rows[yHero].cells[xHero].append(hero);
        return hero;
      }
   }
})();


let finish = (function(){

let finishGame = function (yHero, xHero, dangerY, dangerX ){
    if (xHero ==  mediator.x-1 && yHero ==  mediator.y-1){
        showCover('Victory!!! Play again?')
    }
     let dY = dangerY.indexOf(yHero);
    if (dY!=(-1) && xHero == dangerX[dY]){
        showCover('You are dead :( Play again?')
     }
 };
//==================================================
let showCover = function (conf) {
    let coverDiv = document.createElement('div');
    coverDiv.id = 'cover-div';
    document.body.style.overflowY = 'hidden';
    document.body.append(coverDiv);

    let answer = confirm(conf);
    if (answer){
        hideCover();
        mediator.newGameOptions();
    }else{
     hideCover();
     mediator.newGameOptions();
    }
  };
//===================================================
 let hideCover = function () {
    document.getElementById('cover-div').remove();
    document.body.style.overflowY = '';
  };
return {
    end: finishGame
}
})();
