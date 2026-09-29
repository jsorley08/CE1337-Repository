const prompt = require("readline-sync");

//Title of Game: Mind Games// 

//Welcome player(s)// 


console.log("Welcome to Mind Games!");

//choose single player or multiplayer//
let gameMode = prompt.question("Choose game mode: Single Player or Multiplayer? ");

console.log("Excellent! Let's get started!");

let name = prompt.question("Please enter your name(s):");
console.log("Hello " + name(S) + "! Let's begin the game!");

//choose topic//
let topic = prompt.question("Choose a topic: The Arts, Space and Astronomy, Cuisine, or Geography? ");
console.log("You chose: " + topic)
//choose topic//
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