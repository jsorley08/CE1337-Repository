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


