"use strict";


function checkXY(xAny,yAny,arrow){
    if (arrow == 'ArrowUp'&&yAny==0||arrow == 'ArrowDown'&&yAny==y-1) {
        return false;}
    if (arrow == 'ArrowLeft'&&xAny==0||arrow == 'ArrowRight'&&xAny==x-1) {
        return false;}
    if (arrow == 'ArrowUp'&&xAny%2!=0||arrow == 'ArrowDown'&&xAny%2!=0) {
        return false;}
    if (arrow == 'ArrowLeft'&&yAny%2!=0||arrow == 'ArrowRight'&&yAny%2!=0) {
        return false;}
return true;
}
//========================================================================

 function move(xAny,yAny,arrow,who)  { 
    if (arrow == 'ArrowUp'){
       table.rows[yAny].cells[xAny].innerHTML ='';
       yAny--;
       table.rows[yAny].cells[xAny].append(who);
       return [xAny,yAny];
    }
    if (arrow == 'ArrowDown'){
       table.rows[yAny].cells[xAny].innerHTML ='';
       yAny++;
       table.rows[yAny].cells[xAny].append(who);
       return [xAny,yAny];
    }
    if (arrow == 'ArrowLeft'){
       table.rows[yAny].cells[xAny].innerHTML ='';
       xAny--;
       table.rows[yAny].cells[xAny].append(who);
       return [xAny,yAny];
    }
    if (arrow == 'ArrowRight'){
       table.rows[yAny].cells[xAny].innerHTML ='';
       xAny++;
       table.rows[yAny].cells[xAny].append(who);
       return [xAny,yAny];
    }
 }