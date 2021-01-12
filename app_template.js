//your code here!
let idstudent = 620612148;
let row;
let col;


document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#button-compute').disable = true;
    

    document.querySelector('#button-compute').onclick = function(){
        let num = document.querySelector('#input-number').value;
        idstudent = idstudent + parseInt(num);
        document.querySelector('#idstudent').innerHTML = idstudent;
    }

    document.querySelector('#button-create-table').onclick = function(){
        let row = document.querySelector('#input-row').value;
        let col = document.querySelector('#input-col').value;

        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");

        
    }
    
});
