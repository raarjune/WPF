//Rajmatie Arjune, December 10 2013. Conditionals_Industry
//Office supplies for employees
var supplies = 6;
//Employees are allowed to have a total of 6 items only.
//If more than 6 items are ordered, no supplies would be authorized.

var pen = 2;
var handsanitizer = 2;
var facialtissue = 2;

//office supplies would be multiply by the quantity needed
var price = 2;

var supplies = prompt("How many items do you need?");

if(supplies > 6){
    
    console.log("Sorry, no supplies at this time.");
    