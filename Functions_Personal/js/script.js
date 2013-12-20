//Rajmatie Arjune, December 19, 2013 - Functions_Personal
//Mr Smith wants you to Calculate what he gives his kids in allowance for the year.
//He has five kids and he gave each $15 allowance each week. 

alert("This is a pop quiz from Mr.Smith your good friend!");

function kidsAllowance(allowance,children){
    //answer = allowance*children;
    //return answer;

    var allowance = 15;
    
    var children = 5;
    
    var weekly = 4;
    var month = 12;
    //var allowance = 0;
    //var spent = 0;
    
    var funds = allowance * children;
    var year = weekly * month;

var userInput = prompt("How many children does Mr.Smith have?");
var userResult = prompt("How much does he give each child in allowance?");
confirm("Mr. smith gives his kids a total of $3600. per year in allowance!");

console.log(funds * year);
    return("kidsAllowance");
}

kidsAllowance();

var allowance = 15;
var children = 5;

if (allowance > 10) {
    
console.log(children);
    
}

