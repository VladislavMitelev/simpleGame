
let game = (function(){

    let xHero = 0;
    let yHero = 0;
 
    let dangerX = [];
    let dangerY = [];
    let timerId = [];

    function checkXY(xAny,yAny,arrow){
            if (arrow == 'ArrowUp'&&yAny==0||arrow == 'ArrowDown'&&yAny==obj.y-1) {
               return false;}
            if (arrow == 'ArrowLeft'&&xAny==0||arrow == 'ArrowRight'&&xAny==obj.x-1) {
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
            moveMonster (i, finish){
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
            
                    finish(yHero, xHero, dangerY, dangerX);
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
         ([xHero, yHero] = step (xHero, yHero, arrowH,obj.hero));
          obj.finish(yHero, xHero, dangerY, dangerX);
         }
      }

      function start(){
         let countMonster = form.elements.monster.value;
          
         for (let i = 0; i<countMonster; i++){   
               let m = new Monster(obj.x,obj.y, obj.monster);
               let moveMonster = m.moveMonster.bind(m);
               let timerIdNew = setInterval(moveMonster, 500, i, obj.finish);
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

    function step(xAny,yAny,arrow,who)  { 
        if (arrow == 'ArrowUp'){
            obj.table.rows[yAny].cells[xAny].innerHTML ='';
           yAny--;
           obj.table.rows[yAny].cells[xAny].append(who);
           return [xAny,yAny];
        }
        if (arrow == 'ArrowDown'){
            obj.table.rows[yAny].cells[xAny].innerHTML ='';
           yAny++;
           obj.table.rows[yAny].cells[xAny].append(who);
           return [xAny,yAny];
        }
        if (arrow == 'ArrowLeft'){
            obj.table.rows[yAny].cells[xAny].innerHTML ='';
           xAny--;
           obj.table.rows[yAny].cells[xAny].append(who);
           return [xAny,yAny];
        }
        if (arrow == 'ArrowRight'){
            obj.table.rows[yAny].cells[xAny].innerHTML ='';
           xAny++;
           obj.table.rows[yAny].cells[xAny].append(who);
           return [xAny,yAny];
        }
     }