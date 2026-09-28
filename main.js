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