"use strict";
let dangerX=[];
let dangerY=[];

class Monster {

    constructor(x, y) {
        let monster = document.createElement('div');
        monster.innerHTML = '<img src="images/monster.PNG" alt="Monster" >';
        this.monster = monster;
        
          let yMonster = random(2, y-1);
         let xMonster = random(2, x-1);
         
         this.yMonster = yMonster;
         this.xMonster = xMonster;
            table.rows[yMonster].cells[xMonster].append(monster);
    }
  
    moveMonster (i){
          let rd = randomInteger(1, 4);
          let arrowM;
          if (rd==1) arrowM ='ArrowUp';
          if (rd==2) arrowM ='ArrowDown';
          if (rd==3) arrowM ='ArrowLeft';
          if (rd==4) arrowM ='ArrowRight';

          if (checkXY(this.xMonster,this.yMonster,arrowM)){

            ([this.xMonster,this.yMonster] = move (this.xMonster,this.yMonster,arrowM, this.monster))
             dangerX[i] =this.xMonster;
             dangerY[i] =this.yMonster;
    
            finish();
          }  
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