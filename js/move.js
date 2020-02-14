"use strict";

 let move = (function(){
 return {
   checkXY:function (xAny,yAny,arrow){
            if (arrow == 'ArrowUp'&&yAny==0||arrow == 'ArrowDown'&&yAny==y-1) {
               return false;}
            if (arrow == 'ArrowLeft'&&xAny==0||arrow == 'ArrowRight'&&xAny==x-1) {
               return false;}
            if (arrow == 'ArrowUp'&&xAny%2!=0||arrow == 'ArrowDown'&&xAny%2!=0) {
               return false;}
            if (arrow == 'ArrowLeft'&&yAny%2!=0||arrow == 'ArrowRight'&&yAny%2!=0) {
               return false;}
         return true;
         },

      step:function (xAny,yAny,arrow,who)  { 
         if (arrow == 'ArrowUp'){
            fieldCreate.table.rows[yAny].cells[xAny].innerHTML ='';
            yAny--;
            fieldCreate.table.rows[yAny].cells[xAny].append(who);
            return [xAny,yAny];
         }
         if (arrow == 'ArrowDown'){
            fieldCreate.table.rows[yAny].cells[xAny].innerHTML ='';
            yAny++;
            fieldCreate.table.rows[yAny].cells[xAny].append(who);
            return [xAny,yAny];
         }
         if (arrow == 'ArrowLeft'){
            fieldCreate.table.rows[yAny].cells[xAny].innerHTML ='';
            xAny--;
            fieldCreate.table.rows[yAny].cells[xAny].append(who);
            return [xAny,yAny];
         }
         if (arrow == 'ArrowRight'){
            fieldCreate.table.rows[yAny].cells[xAny].innerHTML ='';
            xAny++;
            fieldCreate.table.rows[yAny].cells[xAny].append(who);
            return [xAny,yAny];
         }
      }
   }

 })();


 let game = (function(){

   const form = document.forms.options;

   let xHero = 0;
   let yHero = 0;

   let dangerX=[];
   let dangerY=[];

   let finish = function (){
      if (xHero == x-1 && yHero == y-1){
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
          newGameOptions();
      }else{
       hideCover();
       newGameOptions();
      }
    };
  //===================================================
   let hideCover = function () {
      document.getElementById('cover-div').remove();
      document.body.style.overflowY = '';
    };
  //====================================================
  let fieldCheck = function (field){
   if (field<3){
       alert("Поле слишком маленькое");
       return false;
   }
   if (field%2==0) {
       return ++field;}
   return field;
};
//===============================================

      class Monster {
         constructor(x, y) {
             
               let yMonster = random(2, y-1);
              let xMonster = random(2, x-1);
              
              this.yMonster = yMonster;
              this.xMonster = xMonster;
              this.monster= fieldCreate.monsterCreate(yMonster, xMonster);
                 
         }
         moveMonster (i){
               let rd = randomInteger(1, 4);
               let arrowM;
               if (rd==1) arrowM ='ArrowUp';
               if (rd==2) arrowM ='ArrowDown';
               if (rd==3) arrowM ='ArrowLeft';
               if (rd==4) arrowM ='ArrowRight';
     
               if (move.checkXY(this.xMonster,this.yMonster,arrowM)){
     
                 ([this.xMonster,this.yMonster] = move.step (this.xMonster,this.yMonster,arrowM, this.monster))
                  dangerX[i] =this.xMonster;
                  dangerY[i] =this.yMonster;
         
                 finish();
               }  
         }
       }

return {

   x: function (){
      let xField = form.elements.x.value;
      return fieldCheck(xField);
   },
   y: function (){
      let yField = form.elements.y.value;
      return fieldCheck(yField);
   },

   timerId:[],

   hero: function (arrowH){
      let hero = fieldCreate.hero;
      if (move.checkXY(xHero,yHero,arrowH)){
         ([xHero,yHero] = move.step (xHero,yHero,arrowH,hero));
         finish();
       }
   },

   monster: function (){
     this.countMonster = form.elements.monster.value;
   
      for (let i = 0; i<this.countMonster; i++){   
         let m = new Monster(x,y);
         let moveMonster = m.moveMonster.bind(m);
         let timerIdNew = setInterval(moveMonster, 500, i);
            this.timerId[i] = timerIdNew;
       } 
   },
   newGame: function (){
      xHero = 0;
      yHero = 0;
      dangerX=[];
      dangerY=[];
   }

}
   
})();