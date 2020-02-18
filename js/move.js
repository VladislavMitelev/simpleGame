
let game = (function(){

    let xHero = 0;
    let yHero = 0;
 
    let dangerX = [];
    let dangerY = [];
    let timerId = [];

    function checkXY(xAny,yAny,arrow){
            if (arrow == 'ArrowUp'&&yAny==0||arrow == 'ArrowDown'&&yAny==mediator.y-1) {
               return false;}
            if (arrow == 'ArrowLeft'&&xAny==0||arrow == 'ArrowRight'&&xAny==mediator.x-1) {
               return false;}
            if (arrow == 'ArrowUp'&&xAny%2!=0||arrow == 'ArrowDown'&&xAny%2!=0) {
               return false;}
            if (arrow == 'ArrowLeft'&&yAny%2!=0||arrow == 'ArrowRight'&&yAny%2!=0) {
               return false;}
         return true;
         };
 
      class Monster {
            constructor(x, y, monster) {
                
            let yMonster = random(2, y-1);
            let xMonster = random(2, x-1);
                 
            this.yMonster = yMonster;
             this.xMonster = xMonster;
            this.monster= monster(yMonster, xMonster);
                    
            }
            moveMonster (i){
                  let rd = randomInteger(1, 4);
                  let arrowM;
                  if (rd==1) arrowM ='ArrowUp';
                  if (rd==2) arrowM ='ArrowDown';
                  if (rd==3) arrowM ='ArrowLeft';
                  if (rd==4) arrowM ='ArrowRight';
        
                  if (checkXY(this.xMonster,this.yMonster,arrowM)){
        
                    ([this.xMonster,this.yMonster] = step (this.xMonster,this.yMonster,arrowM, this.monster))
                     dangerX[i] =this.xMonster;
                     dangerY[i] =this.yMonster;
            
                     mediator.finish(yHero, xHero, dangerY, dangerX);
                  }  
            }
      }

      function heroMove(event) {
            let arrow = event.code; 
            if (arrow!='ArrowDown'&& arrow!='ArrowUp'&& arrow!='ArrowLeft'&& arrow!='ArrowRight') return;
             if (!form.hidden) return;
             hero(arrow);
      }

      function hero(arrowH){
         if (checkXY(xHero, yHero, arrowH)){
         ([xHero, yHero] = step (xHero, yHero, arrowH, mediator.hero));
         mediator.finish(yHero, xHero, dangerY, dangerX);
         }
      }

      function start(x, y, monster){
         let countMonster = form.elements.monster.value;
          
         for (let i = 0; i<countMonster; i++){   
               let m = new Monster(x, y, monster);
               let moveMonster = m.moveMonster.bind(m);
               let timerIdNew = setInterval(moveMonster, 500, i);
               timerId[i] = timerIdNew;
         } 
               
         return timerId
      }
         
   return {

      heroMove: heroMove,
      start: start,

      newGame: function (){
         xHero = 0;
         yHero = 0;
         dangerX=[];
         dangerY=[];
      },
   }
})();

    function step(xAny, yAny, arrow, who)  { 
        if (arrow == 'ArrowUp'){
         mediator.table.rows[yAny].cells[xAny].innerHTML ='';
           yAny--;
           mediator.table.rows[yAny].cells[xAny].append(who);
           return [xAny,yAny];
        }
        if (arrow == 'ArrowDown'){
         mediator.table.rows[yAny].cells[xAny].innerHTML ='';
           yAny++;
           mediator.table.rows[yAny].cells[xAny].append(who);
           return [xAny,yAny];
        }
        if (arrow == 'ArrowLeft'){
         mediator.table.rows[yAny].cells[xAny].innerHTML ='';
           xAny--;
           mediator.table.rows[yAny].cells[xAny].append(who);
           return [xAny,yAny];
        }
        if (arrow == 'ArrowRight'){
         mediator.table.rows[yAny].cells[xAny].innerHTML ='';
           xAny++;
           mediator.table.rows[yAny].cells[xAny].append(who);
           return [xAny,yAny];
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