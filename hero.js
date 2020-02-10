"use strict";

let xHero = 0;
let yHero = 0;

   let hero = document.createElement('div');

function heroCreate(){
    hero.innerHTML = '<img src="images/hero.PNG" alt="Hero" >';
    table.rows[0].cells[0].append(hero);
}

    document.addEventListener('keydown', function(event) {
       let arrowH = event.code; 
       if (arrowH!='ArrowDown'&& arrowH!='ArrowUp'&& arrowH!='ArrowLeft'&& arrowH!='ArrowRight') return;
        if (!form.hidden) return;

       if (checkXY(xHero,yHero,arrowH)){
          ([xHero,yHero] = move (xHero,yHero,arrowH,hero));
          finish();
        }
    });

