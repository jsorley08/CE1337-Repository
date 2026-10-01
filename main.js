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
const ArtsQuestions = [
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