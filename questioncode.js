const prompt = require("readline-sync");
const fs = require("fs");

//Variable Setup//
nameArray = []
let highscores = [];

//Title of Game: Mind Games// 

//Welcome player(s)// 


console.log("Welcome to Mind Games!");
mainMenu();
function mainMenu() {
    let startOption = ""
    console.log("\nPlay (1)\nLeaderboard (2)");
    startOption = prompt.question(": ")
    while(startOption != "1" && startOption != "2"){
        startOption = prompt.question("Please choose a valid option: \nPlay(1)\nLeaderboard(2)\n: ");
    };

    if(startOption === "1"){
        playGame()
    }
    if (startOption === "2") {
        csvToArray(highscores);
        displayLeaderboard(highscores);
        startOption = prompt.question("Back(3)\n: ");
        while(startOption != "3") {
            startOption = prompt.question("Invalid.\nBack(3)\n: ");
        }
        if (startOption == "3") {
            mainMenu();
        }
    }
}

//choose single player or multiplayer//

function playGame() {
    let gameMode = prompt.question("Choose game mode: Single Player or Multiplayer?\n" + "To select please type S for Singleplayer or M for Multiplayer: ");
    console.log("Excellent! Let's get started!");

    if (gameMode.toLowerCase()== "m") {
        let playerAmount = prompt.question("How many people are you playing with?");
        playerAmount = Number(playerAmount);
        nameArray.length = playerAmount;
        for(loop = 0; loop < playerAmount; loop++){
            nameArray[loop] = prompt.question("Please enter player" + (loop+1)  +"'s name ");
        }
        console.log("Hello everyone!\n" + "Let's begin the game!");
        
    }
    else{
        nameArray[0] = prompt.question("What is your name? ")
        console.log("Hello " + nameArray[0] + "! Let's begin the game!");
    }





//Temporary Variables//
    elapsed = 0
    totelapsed = 0

    // Turn Mechanic //
    if (gameMode.toLowerCase() == "s") {
        for(loopQuestion = 0; loopQuestion < questionAmount; loopQuestion++){
            let topic = prompt.question("Choose a topic: The Arts, Space and Astronomy, Cuisine, or Geography? \n" + "Please type the category name as is  ");
            console.log("You chose: " + topic)
        }
    }

    if (gameMode.toLowerCase() == "m"){
        let playerTurn = 0
        for(loopQuestion = 0; loopQuestion < questionAmount; loopQuestion++){
            let start = Date.now();
            let topic = prompt.question("Player " + (playerTurn+1) + " Choose a topic:  The Arts, Space and Astronomy, Cuisine, or Geography? \n" + "Please type the category name as is  ");
            playerTurn = playerTurn + 1
            console.log(playerTurn);
            if (playerTurn == nameArray.length) {
                playerTurn = 0
                console.log(playerTurn)
            }
            let end = Date.now();
            elapsed = end - start;
            elapsed = elapsed / 1000
            totelapsed = elapsed + totelapsed
            console.log(totelapsed);
        }
    }
}

// FUNCTIONS

function csvToArray(highscores) {
    
    const readFileLines = filename =>
        fs.readFileSync(filename).toString("UTF8")

    let csv = readFileLines("highscores.csv").trim();

    var entry = csv.split("\n");

    for(let i=0; i < (entry.length); i++) {

       let username = entry[i].split(",")[0];
       let score = Number(entry[i].split(",")[1]);

       highscores[i] = new LeaderboardEntry(username, score);
    }
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



//topic questions//
const artsQuestions = [
    {
 category: "The Arts" ,
 question: "who painted the  Mona Lisa?",
 options: ["Vincent van Gogh" , "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
    answer: "Leonardo da Vinci"
},
{
 category: "The Arts" ,
 question: "Who painted The Starry night?",
 options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
 answer:"Vincent van Gogh"
},
  {
        category: "The Arts",
        question: "Which artist painted The Persistence of Memory?",
        options: ["Salvador Dalí", "Leonardo da Vinci", "Andy Warhol", "Michelangelo"],
        answer: "Salvador Dalí"
    },
    {
        category: "The Arts",
        question: "Who sculpted the famous statue David?",
        options: ["Michelangelo", "Donatello", "Raphael", "Leonardo da Vinci"],
        answer: "Michelangelo"
    },
    {
        category: "The Arts",
        question: "Which artist is famous for Campbell's Soup Cans?",
        options: ["Andy Warhol", "Pablo Picasso", "Claude Monet", "Jackson Pollock"],
        answer: "Andy Warhol"
    },
    {
        category: "The Arts",
        question: "Who painted Water Lilies?",
        options: ["Claude Monet", "Vincent van Gogh", "Edvard Munch", "Pablo Picasso"],
        answer: "Claude Monet"
    },
    {
        category: "The Arts",
        question: "Which artist painted Guernica?",
        options: ["Pablo Picasso", "Salvador Dalí", "Henri Matisse", "Andy Warhol"],
        answer: "Pablo Picasso"
    }
]
const SpaceAndAstronomyQuestions = [
    {
        category: "Space and Astronomy",
        question: "What is the largest planet in our Solar System?",
        options: ["Earth", "Jupiter", "Saturn", "Neptune"],
        answer: "Jupiter"
    },
    {
        category: "Space and Astronomy",
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Mercury"],
        answer: "Mars"
    },
    {
        category: "Space and Astronomy",
        question: "How many moons does Earth have?",
        options: ["1", "2", "3", "4"],
        answer: "1"
    },
    {
        category: "Space and Astronomy",
        question: "What is the name of the galaxy that contains our Solar System?",
        options: ["Andromeda Galaxy", "Milky Way", "Whirlpool Galaxy", "Sombrero Galaxy"],
        answer: "Milky Way"
    },
    {
        category: "Space and Astronomy",
        question: "What is the closest star to Earth?",
        options: ["Sirius", "The Sun", "Proxima Centauri", "Betelgeuse"],
        answer: "The Sun"
    },
    {
        category: "Space and Astronomy",
        question: "Which planet is famous for its rings?",
        options: ["Mars", "Venus", "Saturn", "Mercury"],
        answer: "Saturn"
    },
    {
        category: "Space and Astronomy",
        question: "What is a black hole?",
        options: [
            "A planet with no atmosphere",
            "A region of space with extremely strong gravity",
            "A dark cloud of gas",
            "A star that has stopped shining"
        ],
        answer: "A region of space with extremely strong gravity"
    },
    {
        category: "Space and Astronomy",
        question: "How long does it take Earth to orbit the Sun?",
        options: ["24 hours", "7 days", "About 365 days", "About 30 days"],
        answer: "About 365 days"
    },
    {
        category: "Space and Astronomy",
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        answer: "Mercury"
    },
    {
        category: "Space and Astronomy",
        question: "Who was the first person to walk on the Moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
        answer: "Neil Armstrong"
    }
];
const CuisineQuestions = [
    {
        category: "Cuisine",
        question: "Which country is famous for inventing pizza?",
        options: ["France", "Italy", "Spain", "Greece"],
        answer: "Italy"
    },
    {
        category: "Cuisine",
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Potato", "Cucumber"],
        answer: "Avocado"
    },
    {
        category: "Cuisine",
        question: "Which country is sushi traditionally associated with?",
        options: ["China", "Thailand", "Japan", "South Korea"],
        answer: "Japan"
    },
    {
        category: "Cuisine",
        question: "What type of pasta is shaped like small tubes?",
        options: ["Spaghetti", "Penne", "Fettuccine", "Ravioli"],
        answer: "Penne"
    },
    {
        category: "Cuisine",
        question: "What is the main ingredient in hummus?",
        options: ["Chickpeas", "Lentils", "Rice", "Potatoes"],
        answer: "Chickpeas"
    },
    {
        category: "Cuisine",
        question: "Which spice gives curry its yellow colour?",
        options: ["Paprika", "Turmeric", "Cinnamon", "Ginger"],
        answer: "Turmeric"
    },
    {
        category: "Cuisine",
        question: "Which country is famous for tacos?",
        options: ["Mexico", "Brazil", "Argentina", "Portugal"],
        answer: "Mexico"
    },
    {
        category: "Cuisine",
        question: "What type of food is Brie?",
        options: ["Bread", "Cheese", "Meat", "Dessert"],
        answer: "Cheese"
    },
    {
        category: "Cuisine",
        question: "What is traditionally used to make French crêpes?",
        options: ["Flour", "Potatoes", "Corn", "Rice"],
        answer: "Flour"
    },
    {
        category: "Cuisine",
        question: "Which country is famous for paella?",
        options: ["Italy", "Spain", "France", "Portugal"],
        answer: "Spain"
    }
];
const GeographyQuestions = [
    {
        category: "Geography",
        question: "What is the largest country in the world by land area?",
        options: ["Canada", "Russia", "China", "United States"],
        answer: "Russia"
    },
    {
        category: "Geography",
        question: "What is the capital city of France?",
        options: ["Madrid", "Rome", "Paris", "Berlin"],
        answer: "Paris"
    },
    {
        category: "Geography",
        question: "Which is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        answer: "Nile River"
    },
    {
        category: "Geography",
        question: "Which continent is the Sahara Desert located in?",
        options: ["Asia", "Africa", "Australia", "South America"],
        answer: "Africa"
    },
    {
        category: "Geography",
        question: "What is the capital city of Japan?",
        options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
        answer: "Tokyo"
    },
    {
        category: "Geography",
        question: "Which ocean is the largest?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean"
    },
    {
        category: "Geography",
        question: "Which country has the most population?",
        options: ["India", "United States", "China", "Brazil"],
        answer: "India"
    },
    {
        category: "Geography",
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        answer: "Vatican City"
    },
    {
        category: "Geography",
        question: "Mount Everest is located in which mountain range?",
        options: ["The Alps", "The Andes", "The Himalayas", "The Rockies"],
        answer: "The Himalayas"
    },
    {
        category: "Geography",
        question: "Which country is shaped like a boot?",
        options: ["Greece", "Italy", "Portugal", "Spain"],
        answer: "Italy"
    }
];