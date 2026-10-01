// Initialise Variables
const fs = require("fs");
const prompt = require("readline-sync");

let players = Array();
let playerName = "";
let end = false;
let highscores = Array();
let playerAmount = 0;

// required csvToArray call, will find more efficient method later //

csvToArray(highscores)

// Function Area

    // Leaderboard Read-In //
function csvToArray(highscores) {
    
    const readFileLines = filename =>
        fs.readFileSync(filename).toString("UTF8")

    let csv = readFileLines("highscores.csv").trim();

    var entry = csv.split("\n");
    console.log(entry);

    for(let i=0; i < (entry.length); i++) {

       let username = entry[i].split(",")[0];
       let score = Number(entry[i].split(",")[1]);

       highscores[i] = new LeaderboardEntry(username, score);
    }
    console.log(highscores);
}

    // Write back to CSV //

function writeToCSV(highscores) {
    let content = ""
    for(let i=0; i < highscores.length; i++){
        content += highscores[i].username+ "," +highscores[i].score+ "\n"
    }
    
    fs.writeFile("highscores.csv", content, err => {
        if(err) {
            console.error(err);
        } else {
            console.log("File written successfully.");
        }
    });
}

    // Create Player function //
function Player (playerName) {
    this.name = playerName;
    this.score = 0;
}

    //Create new LdrBoard entry //
function LeaderboardEntry (username, score) {
    this.username = username;
    this.score = score;
}

    //display leaderboard, can be used at menu, or end of game //
function displayLeaderboard(highscores) {
    console.log("=== LEADERBOARD ===\n",
                "¦Position¦    ¦Name¦    ¦Score¦ \n");
    
    for(let i=0; i < highscores.length; i++){
        console.log(" " +(i+1)+ "      " +highscores[i].username+ "      " +highscores[i].score+ "\r\n");
    };

}

    // Sort Leaderboard, updates before writing back to CSV //
function sortLeaderboard(highscores) {

    for(let i=1; i < highscores.length; i++) {
        let key = highscores[i];
        let j = i-1;

        while (j >= 0 && highscores[j].score < key.score) {
            highscores[j+1] = highscores[j];
            j = j - 1;
        }
        highscores[j+1] = key;
    }
    return highscores;
}

    // Currently adds all scores to leaderboard, will add check for score beaten (keeps file size slim) //
function addToLeaderBoard(highscores, players, playerAmount) {
    for(let i=0; i < playerAmount; i++) {

        highscores.push(new LeaderboardEntry(players[i].name, players[i].score))
    }

}


// Start of game Player creation //

function initialisePlayers() {
    playerAmount = Number(prompt.question("Enter amount of players:  "));
    console.log(playerAmount);
    while(!Number.isInteger(playerAmount) || playerAmount > 6 || playerAmount < 1) {
        playerAmount = Number(prompt.question("Invalid Input. Please enter a number (1-6):  "));
    }
    for(let i=0; i < playerAmount; i++) {
        playerName = prompt.question("Player " +(i+1)+ ", Enter your username:  ");
        while(playerName === "") {
            playerName = prompt.question("No username entered. Please try again:  ");
        };
        players[i] = new Player(playerName);
        
        // dev/debug feature //
        let scoreQ = prompt.question("Add a manual score? (Y/N):  ");
        if(scoreQ == "Y") {
            var userInput = prompt.question("Enter score:  ");
            while(userInput === "" || isNaN(userInput)) {
                userInput = prompt.question("Invalid Input. Please try again:  ");
            }
            players[i].score = Number(userInput);
        }
    }
    return playerAmount;
}


// program flow starts here //

initialisePlayers();

// dev/debug feature, not for FINAL //
let endQ = prompt.question("End the game? (Y/N):  ");

if(endQ == "Y") {end = true};

if(end === true) {
    addToLeaderBoard(highscores, players, playerAmount); // will add dependency checks for 
    sortLeaderboard(highscores); //             ALL
    displayLeaderboard(highscores); //          OF
    writeToCSV(highscores); //                  THESE
    
    console.log(highscores); //dev breakpoint, not for FINAL //
}



