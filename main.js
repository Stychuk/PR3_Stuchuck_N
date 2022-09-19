// Завдання 1
var firstRow = prompt('Введіть перший рядок:')
var secondRow = prompt('Введіть другий рядок:')
var litera = prompt('Введіть літеру:');

var f = 0, s = 0;

function getRow(fr,sr){

    for (let i=0; i < fr.length; i++){
        if (fr.charAt(i) == litera ){
            f++;
        }
    }

    for (let i=0; i < sr.length; i++){
        if (sr.charAt(i) == litera){
            s++;
        }
    }

    alert(" У першому рядку '"+ litera+"' зустрічається " + f + " разів." + " У другому рядку '"+ litera+"' зустрічається " + s + " разів.");
    
    if (f > s){
        alert(firstRow)
    }
    else{
        alert(secondRow)
    }

}

getRow(firstRow,secondRow);

// Завдання 2
var phone = prompt('Введіть номер телефону у форматі: +70000000000 або 70000000000 або 80000000000 або 90000000000');
var format ='';
var newF ='';

function formattedPhone(p){

    format = p;

    if (format.length == 11){
        if (format.charAt(0) == '7' || format.charAt(0) == '8' || format.charAt(0) == '9'){
            format = format.substring(1);
            format = '+7'+format;
        }
        else{
            alert('Невірний номер');
            return;
        }
    }
    else if (format.length != 12 || format.charAt(0) != '+' || format.charAt(1) != '7'){
        alert('Невірний номер');
        return;
    }

    p = format;

    for (let i=0; i < p.length; i++){
        newF+=p.charAt(i);

        if (p.charAt(i) == '7'){
            if (p.charAt(i-1) == '+'){
                newF+=' (';
            }
        }

        if (i == '4'){
            newF+=') ';
        }

        if (i =='7'){
            newF+='-';
        } 
        
        if (i =='9'){
            newF+='-';
        }  
    }

    alert('Номер телефона ' + newF);   
}

formattedPhone(phone);