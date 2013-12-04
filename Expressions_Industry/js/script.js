//Rajmatie Arjune, December 1, 2013. Expressions_Industry
//Income-Expenditure spreadsheet

var column = 0;
var row = 0;
var area = column*row;

//console.log(column * row);

var column = prompt ("Please enter number of columns needed");
var row = prompt ("Please enter number of rows needed");

//collecting information from user to create spreadsheet. The information calculated would print the total cells for spreadsheet.

console.log(column*row);
//console.log("Thank you! Your requested total is listed above");

alert("Thank you, the total cells needed for your spreadsheet is"  + column*row);
