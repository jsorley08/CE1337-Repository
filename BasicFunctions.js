// BasicFunctions Guide

/* = Categories */
// // = Sub sections like examples

/*Initialising Player Count*/
playerAmount = prompt.question("How many people are playing?");
playerAmount = Number(playerAmount)
playerArray = []
playerArray.length = playerAmount

/*Initialising Player Names and Objects*/
for (loop = 0; loop < playerAmount; loop++) {
    playerName = prompt.question("What is this players name?");
    createPlayers(playerName);
    playerArray[loop] = playerRecord
}

/*Creating Objects In a Function*/
function createPlayers(names) {
    playerRecord = { username: "", total: 0 }
    playerRecord.username = names;
    return playerRecord;
}

/*Calling an object from an array*/
playerArray[0].username /*This will call any variable labled under username within the first part of the array*/

//Practical Example//
if(userAnswer != answerSheet[3].quid500){
    console.log("You got that wrong")
}

/*Starting, Ending and counting an Elapsed Timer*/
let start = Date.now();   /* These use the real world date to calculate time taken*/
let end = Date.now();

let elapsed = end - start;
elapsed = elapsed / 1000 /*<---- Converts to seconds*/

/* Basic Quiz Stuff */

// Arrays //
questionArray["Where is Denpasar?", "What is a Rambutan?", "What continent is Australia in?"] //Create seperate arrays for questions as all the text will get cluttered in one array//

answerArray[["bali", "fruit", "oceania"]["", "", 0]]  //You dont have to make an array for answers as this may cause the code to be less robust but if you do put answers together as they are typically short//

// Ifs and Switches //
if (userInput.toLowerCase() == "bali" || userInput.toLowerCase() == "indonesia"){} //Make the answers lowercase as using the toLowerCase process will make all answers lowercase which means bali, Bali, BALI, and BaLi, are all valid answers//

switch (userChoice) {
    case 1:
        
        break;
    case 2:
        
        break;
    case 3:                //Use switches for multiple choice questions or anything similar//
        
        break;
    case 4:
        
        break;
    default:
        console.log("Invalid input")
        break;      
}

while (userChoice != 1 || userChoice != 2 ||
    userChoice != 3 || userChoice != 4) {  //Use this if you want to make the code let you try again if they input an invalid option for multiple choice//
        userChoice = prompt.question("Invalid Input please try again"); 
}