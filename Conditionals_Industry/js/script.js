//Rajmatie Arjune, December 10 2013. Conditionals_Industry
//Office supplies for employees
var supplies = 6;
//Employees are allowed to have a total of 6 items only.
//If more than 6 items are ordered, no supplies would be authorized.

var username = name;
var password = password;
var username = prompt("Please enter your user name.");
var password = prompt("Please enter your password.");

var pen = 2;
var handsanitizer = 2;
var facialtissue = 2;

//office supplies would be multiply by the quantity needed
var price = 2;

var supplies = prompt("How many items do you need?");

if(supplies > 6){
    
    console.log("Sorry, no supplies at this time.");
    
}else{
   
    console.log(price * supplies + " dollars is the total charge for this transaction.");
}

alert("Thank you! If you are eligible for supplies your items will be shipped via UPS.")