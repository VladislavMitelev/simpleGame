"use strict";

 function tableCreate(x, y){
    let table = document.createElement('table');
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

    table.rows[y-1].cells[x-1].style.background = 'url("images/finish.jpg" ';
    const field = document.getElementById('field');
    field.append(table);
}