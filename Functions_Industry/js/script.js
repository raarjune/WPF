//Rajmatie Arjune, December 15, 2013 - Functions_Industry

//Preparing budget for monthly expense multiply by 12 months. 

function budget(){
    var pettyCash = 0;
    var month = 12;

    var annualBudget = pettyCash * month;
    var username = prompt("Please enter your Company Name.")
    var pettyCash = prompt("What's your monthly expense?");
    
    console.log(pettyCash * month + " Dollars in the form of a check would be mailed to your office.");
    //console.log(annualBudget);
    return("budget");
}
budget();

alert("Friendly reminder from Corporate: Please do not exceed your Annual Budget!")




