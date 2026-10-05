const prompt = require("readline-sync");
const fs = require("fs");

//Variable Setup//
let players = [];
let highscores = [];


//topic questions//
const astronomyQuestions = [
  {
    question: "How many planets are in our solar system?",
    options: ["A) 7", "B) 9", "C) 8", "D) 10"],
    answer: "c"
  },
  {
    question: "What is a black hole?",
    options: [
      "A) A giant empty void in space",
      "B) A very dim, cooled-down star",
      "C) A region where gravity is so strong that nothing, not even light, can escape",
      "D) A planet with no atmosphere"
    ],
    answer: "c"
  },
  {
    question: "What causes the seasons on Earth?",
    options: [
      "A) Earth's axial tilt of about 23.5 degrees",
      "B) Earth's changing distance from the Sun",
      "C) Changes in the Sun's brightness",
      "D) The Moon's gravitational pull"
    ],
    answer: "a"
  },
  {
    question: "What is the Big Bang theory?",
    options: [
      "A) The Sun exploded and formed the planets",
      "B) The universe has always existed in a static state",
      "C) Two giant galaxies collided to create the universe",
      "D) The universe began in a hot, dense state about 13.8 billion years ago and has been expanding since"
    ],
    answer: "d"
  },
  {
    question: "What is a supernova?",
    options: [
      "A) A small, dim star that has burned out",
      "B) A massive explosion of a star at the end of its life cycle",
      "C) A type of comet that passes close to the Sun",
      "D) A planet that has been ejected from its solar system"
    ],
    answer: "b"
  },
  {
    question: "What is a lunar eclipse?",
    options: [
      "A) The Moon passes between the Sun and Earth",
      "B) The Moon moves closer to the Sun",
      "C) Earth's shadow falls on the Moon",
      "D) The Moon runs out of reflected light"
    ],
    answer: "c"
  },
  {
    question: "What is a nebula?",
    options: [
      "A) A small rocky body orbiting a star",
      "B) A dead star that no longer emits light",
      "C) A giant cloud of gas and dust in space",
      "D) A group of planets orbiting together"
    ],
    answer: "c"
  },
  {
    question: "What is dark matter?",
    options: [
      "A) An invisible form of matter that exerts gravity but doesn't emit or absorb light",
      "B) Matter found only inside black holes",
      "C) Ordinary matter that is too cold to see",
      "D) Light that has been absorbed by dust clouds"
    ],
    answer: "a"
  },
  {
    question: "What is dark energy?",
    options: [
      "A) Energy released by black holes",
      "B) The heat left over from stars",
      "C) Energy stored in dark matter",
      "D) A mysterious force driving the accelerating expansion of the universe"
    ],
    answer: "d"
  },
  {
    question: "What is the James Webb Space Telescope (JWST)?",
    options: [
      "A) A telescope that observes only visible light from Earth's surface",
      "B) A telescope that orbits Earth at low altitude",
      "C) A radio telescope built in the desert",
      "D) A large space telescope that observes mainly in infrared light"
    ],
    answer: "d"
  }
];

const artQuestions = [
  {
    question: "Who painted the Mona Lisa?",
    options: ["A) Michelangelo", "B) Leonardo da Vinci", "C) Raphael", "D) Vincent van Gogh"],
    answer: "b"
  },
  {
    question: "Which art movement is Claude Monet most associated with?",
    options: ["A) Cubism", "B) Surrealism", "C) Impressionism", "D) Baroque"],
    answer: "c"
  },
  {
    question: "Who composed the Four Seasons, a set of violin concertos?",
    options: ["A) Antonio Vivaldi", "B) Johann Sebastian Bach", "C) Wolfgang Amadeus Mozart", "D) Ludwig van Beethoven"],
    answer: "a"
  },
  {
    question: "Which playwright wrote Hamlet and Macbeth?",
    options: ["A) Christopher Marlowe", "B) Oscar Wilde", "C) William Shakespeare", "D) George Bernard Shaw"],
    answer: "c"
  },
  {
    question: "What is the term for a painting technique that uses water-soluble pigments on paper?",
    options: ["A) Fresco", "B) Watercolor", "C) Encaustic", "D) Tempera"],
    answer: "b"
  },
  {
    question: "Who sculpted David, the famous marble statue in Florence?",
    options: ["A) Donatello", "B) Auguste Rodin", "C) Gian Lorenzo Bernini", "D) Michelangelo"],
    answer: "d"
  },
  {
    question: "Which artist is known for co-founding Cubism alongside Georges Braque?",
    options: ["A) Pablo Picasso", "B) Salvador Dalí", "C) Henri Matisse", "D) Paul Cézanne"],
    answer: "a"
  },
  {
    question: "In music, what does the term 'forte' mean?",
    options: ["A) Slowly", "B) Loudly", "C) Softly", "D) Quickly"],
    answer: "b"
  },
  {
    question: "Which style of dance originated in the courts of Renaissance Italy and France and is known for its precise technique and pointe work?",
    options: ["A) Tango", "B) Flamenco", "C) Ballet", "D) Hip-hop"],
    answer: "c"
  },
  {
    question: "Which painting by Vincent van Gogh features a swirling night sky over a village?",
    options: ["A) Sunflowers", "B) The Starry Night", "C) The Potato Eaters", "D) Café Terrace at Night"],
    answer: "b"
  }
];
const CuisineQuestions = [
    {
        category: "Cuisine",
        question: "Which country is famous for inventing pizza?",
        options: ["A) France", "B) Italy", "C) Spain", "D)Greece"],
        answer: "b"
    },
    {
        category: "Cuisine",
        question: "What is the main ingredient in guacamole?",
        options: ["A) Tomato", "B) Avocado", "C) Potato", "D) Cucumber"],
        answer: "b"
    },
    {
        category: "Cuisine",
        question: "Which country is sushi traditionally associated with?",
        options: ["A) China", "B) Thailand", "C) Japan", "D) South Korea"],
        answer: "c"
    },
    {
        category: "Cuisine",
        question: "What type of pasta is shaped like small tubes?",
        options: ["A) Spaghetti", "B) Penne", "C) Fettuccine", "D) Ravioli"],
        answer: "b"
    },
    {
        category: "Cuisine",
        question: "What is the main ingredient in hummus?",
        options: ["A) Chickpeas", "B) Lentils", "C) Rice", "D) Potatoes"],
        answer: "a"
    },
    {
        category: "Cuisine",
        question: "Which spice gives curry its yellow colour?",
        options: ["A) Paprika", "B) Turmeric", "C) Cinnamon", "D) Ginger"],
        answer: "b"
    },
    {
        category: "Cuisine",
        question: "Which country is famous for tacos?",
        options: ["A) Mexico", "B) Brazil", "C) Argentina", "D) Portugal"],
        answer: "a"
    },
    {
        category: "Cuisine",
        question: "What type of food is Brie?",
        options: ["A) Bread", "B) Cheese", "C) Meat", "D) Dessert"],
        answer: "b"
    },
    {
        category: "Cuisine",
        question: "What is traditionally used to make French crêpes?",
        options: ["A) Flour", "B) Potatoes", "C) Corn", "D) Rice"],
        answer: "a"
    },
    {
        category: "Cuisine",
        question: "Which country is famous for paella?",
        options: ["A) Italy", "B) Spain", "C) France", "D) Portugal"],
        answer: "b"
    }
];
const GeographyQuestions = [
    {
        category: "Geography",
        question: "What is the largest country in the world by land area?",
        options: ["A) Canada", "B) Russia", "C) China", "D) United States"],
        answer: "b"
    },
    {
        category: "Geography",
        question: "What is the capital city of France?",
        options: ["A) Madrid", "B) Rome", "C) Paris", "D) Berlin"],
        answer: "c"
    },
    {
        category: "Geography",
        question: "Which is the longest river in the world?",
        options: ["A) Amazon River", "B) Nile River", "C) Yangtze River", "D) Mississippi River"],
        answer: "b"
    },
    {
        category: "Geography",
        question: "Which continent is the Sahara Desert located in?",
        options: ["A) Asia", "B) Africa", "C) Australia", "D) South America"],
        answer: "b"
    },
    {
        category: "Geography",
        question: "What is the capital city of Japan?",
        options: ["A) Seoul", "B) Beijing", "C) Tokyo", "D) Bangkok"],
        answer: "c"
    },
    {
        category: "Geography",
        question: "Which ocean is the largest?",
        options: ["A) Atlantic Ocean", "B) Indian Ocean", "C) Pacific Ocean", "D) Arctic Ocean"],
        answer: "c"
    },
    {
        category: "Geography",
        question: "Which country has the most population?",
        options: ["A) India", "B) United States", "C) China", "D) Brazil"],
        answer: "a"
    },
    {
        category: "Geography",
        question: "What is the smallest country in the world?",
        options: ["A) Monaco", "B) Vatican City", "C) San Marino", "D) Liechtenstein"],
        answer: "b"
    },
    {
        category: "Geography",
        question: "Mount Everest is located in which mountain range?",
        options: ["A) The Alps", "B) The Andes", "C) The Himalayas", "D) The Rockies"],
        answer: "c"
    },
    {
        category: "Geography",
        question: "Which country is shaped like a boot?",
        options: ["A) Greece", "B) Italy", "C) Portugal", "D) Spain"],
        answer: "b"
    }
];

const bonusQuestions = [
    {

    }
]

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
    let gameMode = prompt.question("----------\nChoose game mode: Single Player or Multiplayer?\n" + "To select please type S for Singleplayer or M for Multiplayer:  ");
    console.log("----------\nExcellent! Let's get started!");

    if (gameMode.toLowerCase()== "m") {
        let playerAmount = prompt.question("How many people are you playing with?:  ");
        playerAmount = Number(playerAmount);
        console.log("----------")
        for(loop = 0; loop < playerAmount; loop++){
            let playerName = prompt.question("Please enter player" + (loop+1)  +"'s name:  ");
            players[loop] = new Player(playerName);
        }
        console.log("----------\nHello everyone!\n" + "Let's begin the game!");
        
    }
    else{
        let playerName = prompt.question("What is your name?:  ")
        players[0] = new Player(playerName);
        console.log("----------\nHello " + players[0].name + "! Let's begin the game!");
    }

//Temporary Variables//
    elapsed = 0
    totelapsed = 0

    // Turn Mechanic //
    if (gameMode.toLowerCase() == "s") {
        bonus1 = false
        bonus2 = true
        bonus3 = true

        let questionAmount = prompt.question("How many questions do you want to answer?:  ");
        questionAmount = Math.floor(questionAmount);

        while(isNaN(questionAmount) || (questionAmount < 1 || questionAmount > 40)) {
            questionAmount = prompt.question("----------\nInvalid Input. Please enter a number between 1-40:  ");
            questionAmount = Math.floor(questionAmount)
        }
        for(let loopQuestion = 0; loopQuestion < questionAmount; loopQuestion++){
            let start = Date.now();
            switch (true) { 
                case (totelapsed >= 60 && bonus1 == false):
                    bonusAnswer = prompt.question("----------\nIts time for the BONUS ROUND\n" + "please pick a bonus question\n" + "1. Bonus1\n" + "2. Bonus2\n" + "3. Charles\n" + "Enter your answer here: ");
                    bonus1 = true;
                    bonus2 = false;
                    tottotelapsed = totelapsed;
                    totelapsed = 0
                    break;
                case (totelapsed >= 120 && bonus2 == false):
                    bonus2 = true;
                    bonus3 = false;
                    console.log("Hi1");
                    tottotelapsed = tottotelapsed + totelapsed;
                    totelapsed = 0
                    break;
                case (totelapsed >= 60 && bonus3 == false):
                    bonus3 = true;
                    console.log("Hi2");
                    break;
                }
            let topic = prompt.question("----------\nChoose a topic: The Arts, Space and Astronomy, Cuisine, or Geography? \n" + "Please type the category name as is:  ");

            while(topic !== "astronomy" && topic !== "the arts" && topic !== "arts" && topic !== "cuisine" && topic !== "geography") {
                topic = prompt.question("----------\nInvalid Input. Please select from either: 'The Arts', 'Astronomy', 'Cuisine', 'Geography':  ");
            }
            console.log("----------\n(You chose " +topic+")\n")
            let questionChoice = prompt.question("What question from 1-10 do you want?:  ");
            questionChoice = Math.floor(questionChoice);
            while((questionChoice < 1 || questionChoice > 10) || isNaN(questionChoice)) {
                questionChoice = prompt.question("----------\nInvalid Input. Please choose a number between 1-10:  ");
                questionChoice = Math.floor(questionChoice);
            }
            console.log("----------\n(You chose question " + questionChoice+")\n");
            questionPicker(astronomyQuestions, artQuestions, CuisineQuestions, GeographyQuestions, topic, questionChoice);
            console.log(specificSelect.question);
            for(let i=0; i < specificSelect.options.length; i++) {
                console.log(specificSelect.options[i]);
            }
            userAnswer = prompt.question(":  ");
            if(userAnswer.toLowerCase() === specificSelect.answer ) {
                players[0].points += 10;
            }
            else {
                console.log("----------\nIncorrect. The answer was " +specificSelect.answer.toUpperCase()+".");
            }

            let end = Date.now();
            elapsed = end - start;
            elapsed = elapsed / 1000
            totelapsed = elapsed + totelapsed
        }
        console.log("----------\n"+players[0].name+"..."+players[0].points+" points");
        console.log("\nYou scored "+players[0].points+" points!");

        csvToArray(highscores);
        addToLeaderBoard(highscores, players);
        sortLeaderboard(highscores);
        writeToCSV(highscores);

        let cursor = ""
        console.log("\nView Leaderboard? (1)\nEnd (2)");
        cursor = prompt.question(": ")
        while(cursor != "1" && cursor != "2"){
            cursor = prompt.question("Please choose a valid option: \nView Leaderboard (1)\nEnd (2):  ");
        };

    
        if(cursor === "1"){
            displayLeaderboard(highscores);
        }

        if(cursor === "2") {
            return;
        }
    }
    if (gameMode.toLowerCase() == "m"){
        let questionAmount = prompt.question("----------\nHow many questions do you want?:  ");
        questionAmount = Math.floor(questionAmount);

        while(isNaN(questionAmount) || (questionAmount < 1 || questionAmount > 40)) {
            questionAmount = prompt.question("----------\nInvalid Input. Please enter a number between 1-40:  ");
            questionAmount = Math.floor(questionAmount)
        }

        for(let loopQuestion = 0; loopQuestion < questionAmount; loopQuestion++){
            let start = Date.now();
            switch (true) { 
                case (totelapsed >= 45 && bonus1 == false):
                    bonusAnswer = prompt.question("Its time for the BONUS ROUND\n" + bonusQuestions[0].question + "\n" + bonusQuestions[0].options[0]  + "\n" + bonusQuestions[0].options[1] + "\n" + bonusQuestions[0].options[2] + "\n" + bonusQuestions[0].options[3] + " ");
                    bonus1 = true;
                    bonus2 = false;
                    tottotelapsed = totelapsed;
                    totelapsed = 0
                    break;
                case (totelapsed >= 60 && bonus2 == false):
                    bonus2 = true;
                    bonus3 = false;
                    bonusAnswer = prompt.question("Its time for the BONUS ROUND\n" + bonusQuestions[1].question + "\n" + bonusQuestions[1].options[0] + "\n" + bonusQuestions[1].options[1] + "\n" + bonusQuestions[1].options[2] + "\n" + bonusQuestions[1].options[3] + " ");
                    tottotelapsed = tottotelapsed + totelapsed;
                    totelapsed = 0
                    break;
                case (totelapsed >= 30 && bonus3 == false):
                    bonus3 = true;
                    bonus4 = false;
                    bonusAnswer = prompt.question("Its time for the BONUS ROUND\n" + bonusQuestions[2].question + "\n" + bonusQuestions[2].options[0] + "\n" + bonusQuestions[2].options[1] + "\n" + bonusQuestions[2].options[2] + "\n" + bonusQuestions[2].options[3] + " ");
                    break;
                case (totelapsed >= 40 && bonus4 == false):
                    bonus4 = true;
                    bonusAnswer = prompt.question("Its time for the BONUS ROUND\n" + bonusQuestions[3].question + "\n" + bonusQuestions[3].options[0] + "\n" + bonusQuestions[3].options[1] + "\n" + bonusQuestions[3].options[2] + "\n" + bonusQuestions[3].options[3] + " ");
                    break;
                }

            for(let i=0; i < players.length; i++) {
                let topic = prompt.question("----------\nPlayer " + (i+1) + " Choose a topic:  The Arts, Space and Astronomy, Cuisine, or Geography? \n" + "Please type the category name as is:  ");


                while(topic !== "astronomy" && topic !== "the arts" && topic !== "arts" && topic !== "cuisine" && topic !== "geography") {
                    topic = prompt.question("----------\nInvalid Input. Please select from either: 'The Arts', 'Astronomy', 'Cuisine', 'Geography':  ");
                }

                console.log("----------\n(You chose " +topic+")\n")

                let questionChoice = prompt.question("What question from 1-10 do you want?:  ");
                questionChoice = Math.floor(questionChoice);

                while((questionChoice < 1 || questionChoice > 10) || isNaN(questionChoice)) {
                    questionChoice = prompt.question("----------\nInvalid Input. Please choose a number between 1-10:  ");
                    questionChoice = Math.floor(questionChoice);
                }

                console.log("(You chose question " + questionChoice+")\n");

                questionPicker(astronomyQuestions, artQuestions, CuisineQuestions, GeographyQuestions, topic, questionChoice);
                console.log(specificSelect.question);
                for(let i=0; i < specificSelect.options.length; i++) {
                    console.log(specificSelect.options[i]);
                }

                userAnswer = prompt.question(":  ");
                if(userAnswer.toLowerCase() === specificSelect.answer ) {
                    console.log("\nCorrect!");
                    players[i].points = players[i].points + 10;
                }
                else {
                    console.log("----------\nIncorrect. The answer was " +specificSelect.answer.toUpperCase()+".");
                }
            }

            let end = Date.now();
            elapsed = end - start;
            elapsed = elapsed / 1000
            totelapsed = elapsed + totelapsed
        }
        max = players[0]
        console.log("----------\n");
        for(let i=0; i < players.length; i++) {
            console.log(players[i].name+"..."+players[i].points+" points");
            if(players[i].points > max.score) {
                max = players[i]
            }
        }
        console.log("\nThe winner is... "+max.name+"! You scored "+max.points+" points!");

        csvToArray(highscores);
        addToLeaderBoard(highscores, players);
        sortLeaderboard(highscores);
        writeToCSV(highscores);

        let cursor = ""
        console.log("\nView Leaderboard? (1)\nEnd (2)");
        cursor = prompt.question(": ")
        while(cursor != "1" && cursor != "2"){
            cursor = prompt.question("Please choose a valid option: \nView Leaderboard (1)\nEnd (2):  ");
        };

    
        if(cursor === "1"){
            displayLeaderboard(highscores);
        }

        if(cursor === "2") {
            return;
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
    
    fs.writeFileSync("highscores.csv", content, err => {
        if(err) {
            console.error(err);
        } else {
            console.log("File written successfully.");
        }
    });
}

function Player (playerName) {
    this.name = playerName;
    this.points = 0;
}

    //Create new LdrBoard entry //
function LeaderboardEntry (username, score) {
    this.username = username;
    this.score = score;
}

    //display leaderboard, can be used at menu, or end of game //
function displayLeaderboard(highscores) {
    console.log("=== LEADERBOARD ===\n",
                "¦Position¦ ¦Name¦ ¦Score¦\n");
    
    for(let i=0; i < Math.min(10, highscores.length); i++){
        console.log((i+1)+ ". " +highscores[i].username+ " (" +highscores[i].score+ " points)\n");
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
function addToLeaderBoard(highscores, players) {
    for(let i=0; i < players.length; i++) {
        highscores.push(new LeaderboardEntry(players[i].name, players[i].points))
    }

}


//To select the question//
function questionPicker(space, art, food, world, userTopic, userSpecific){ 
    selectedQuestions = []
    specificSelect = []

    
    if (userTopic.toLowerCase() === "astronomy") {
    selectedQuestions = space;
    specificSelect = selectedQuestions[(userSpecific-1)]
    } else if (userTopic.toLowerCase() === "the arts" || userTopic.toLowerCase() === "arts") {
    selectedQuestions = art;
    specificSelect = selectedQuestions[(userSpecific-1)]
    } else if (userTopic.toLowerCase() === "cuisine") {
    selectedQuestions = food;
    specificSelect = selectedQuestions[(userSpecific-1)]
    } else if (userTopic.toLowerCase() === "geography") {
    selectedQuestions = world;
    specificSelect = selectedQuestions[(userSpecific-1)]
    } else {
    console.log("Topic not recognized. Defaulting to Astronomy.");
    selectedQuestions = space;
    specificSelect = selectedQuestions[userSpecific]
    }
    return specificSelect;
}