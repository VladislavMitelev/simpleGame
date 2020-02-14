"use strict";


let fieldCreate = (function(){
  
   return {
   
   tableCreate: function(x, y){
      this.table = document.createElement('table');
      this.table.setAttribute('id', 'table');
            for (let i =0; i<y; i++){
                let tr = document.createElement('tr');
               for (let j =0; j<x; j++){
                   let td = document.createElement('td');
               if (i%2 != 0 && j%2 != 0) { 
                  td.classList.add('stone');
               }
                  tr.append(td)
               }   
               this.table.append(tr)
            }
            this.table.rows[y-1].cells[x-1].style.background = 'url("styles/images/finish.jpg" ';
         const field = document.getElementById('field');
         field.append(this.table);
      },

      monsterCreate: function(yMonster, xMonster){
         let monster = document.createElement('div');
         monster.innerHTML = '<img src="styles/images/monster.PNG" alt="Monster" >';
         this.table.rows[yMonster].cells[xMonster].append(monster);
           return monster;
      },
       
      heroCreate: function (yHero,xHero){
         let hero = document.createElement('div');
         hero.innerHTML = '<img src="styles/images/hero.PNG" alt="Hero" >';
         this.table.rows[yHero].cells[xHero].append(hero);
         this.hero = hero;
      }
   }
})();




