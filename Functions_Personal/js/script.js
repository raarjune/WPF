//Rajmatie Arjune, December 15, 2013 - Functions_Personal
//Mr Smith wants you to Calculate what he gives his kids in allowance for the year.

alert("This is a pop quiz on Mr.Smith!");

function kidsAllowance(allowance,children){
    //answer = allowance*children;
    //return answer;

    var allowance = 5;
    var children = 5;
    var weekly = 4;
    var month = 12;
    //var allowance = 0;
    //var spent = 0;
    
    var funds = allowance * children;
    var year = weekly * month;

var userInput = prompt("How many children does Mr.Smith have?");
var userResult = prompt("How much does he give each child in allowance?");
confirm("Mr. smith gives his kids a total of $1200 per year in allowance!");

console.log(funds * year);
    return("kidsAllowance");
}

kidsAllowance();

