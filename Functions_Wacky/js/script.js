//Rajmatie Arjune, December 15, 2013 - Functions_Wacky

//function coldRemedy() {
//    var tea = 60;
//    var coffee = 70;
////var cough = "tea";
//var userInput = prompt("What is the temperature?");
//if (tea > 65) {
//    console.log("Make yourself a cup of tea!...");
//    //code
//}else if (tea > 65) {
//    console.log("Make yourself a cup of coffee!");
//    //code
//}else{
//    console.log("Have orange juice instead!")
//        return("coldRemedy");
//}
//
//}
////confirm("Hope you feel better soon!")
//coldRemedy();

//----------------------------------------------------------------------------
//Calculating price tag from December 1st to December 31st Christmas Gifts if purchase everyday, or some days.

function christmasGift(){
    var gift = 0;
    var day = 0;
    var userPrice = prompt("How much money are you planning to spend per gifts?");
    var userInfo = prompt("How many days will you buy presents?")
    alert(userPrice*userInfo + " is your projected amount to be spent!");

    console.log(userPrice * userInfo + " Dollars is your price tag for the month.");
    return"christmasGift"

}

christmasGift();

var christmasGift = 31;
while (christmasGift > 0){
console.log(christmasGift + " Giving a gift is better than receiving one!");
christmasGift--;

}

confirm("Your gift recipient would be very HAPPY!")


      


