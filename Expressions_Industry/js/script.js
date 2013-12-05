//Rajmatie Arjune, December 1, 2013. Expressions_Industry
//Income-Expenditure spreadsheet

var column = 0;
var row = 0;
var area = column*row;

//console.log(column * row);

var column = prompt ("Please enter number of columns needed");
var row = prompt ("Please enter number of rows needed");

//Collecting information from user to create spreadsheet.
//The information would calculate the total cells needed for spreadsheet.

console.log(column*row);
//console.log("Thank you! Your requested total is listed above");

alert("Your spreadsheet will result in "  + column*row + " cells." + " If you wish to change this, please re-enter data.");
