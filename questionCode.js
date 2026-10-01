const prompt = require("readline-sync");

//Title of Game: Mind Games// 

//Welcome player(s)// 


console.log("Welcome to Mind Games!");

//choose single player or multiplayer//
let gameMode = prompt.question("Choose game mode: Single Player or Multiplayer? ");

console.log("Excelnodlent! Let's get started!");

const name = prompt.question("Please enter your name(s): ");
console.log("Hello " + name + "! Let's begin the game!");

const topic = prompt.question("Choose a topic: The Arts, Astronomy, Cuisine, or Geography? ").trim().toLowerCase();


const astronomyQuestions = [
  {
    question: "How many planets are in our solar system?",
    options: ["A) 7", "B) 9", "C) 8", "D) 10"],
    answer: "C"
  },
  {
    question: "What is a black hole?",
    options: [
      "A) A giant empty void in space",
      "B) A very dim, cooled-down star",
      "C) A region where gravity is so strong that nothing, not even light, can escape",
      "D) A planet with no atmosphere"
    ],
    answer: "C"
  },
  {
    question: "What causes the seasons on Earth?",
    options: [
      "A) Earth's axial tilt of about 23.5 degrees",
      "B) Earth's changing distance from the Sun",
      "C) Changes in the Sun's brightness",
      "D) The Moon's gravitational pull"
    ],
    answer: "A"
  },
  {
    question: "What is the Big Bang theory?",
    options: [
      "A) The Sun exploded and formed the planets",
      "B) The universe has always existed in a static state",
      "C) Two giant galaxies collided to create the universe",
      "D) The universe began in a hot, dense state about 13.8 billion years ago and has been expanding since"
    ],
    answer: "D"
  },
  {
    question: "What is a supernova?",
    options: [
      "A) A small, dim star that has burned out",
      "B) A massive explosion of a star at the end of its life cycle",
      "C) A type of comet that passes close to the Sun",
      "D) A planet that has been ejected from its solar system"
    ],
    answer: "B"
  },
  {
    question: "What is a lunar eclipse?",
    options: [
      "A) The Moon passes between the Sun and Earth",
      "B) The Moon moves closer to the Sun",
      "C) Earth's shadow falls on the Moon",
      "D) The Moon runs out of reflected light"
    ],
    answer: "C"
  },
  {
    question: "What is a nebula?",
    options: [
      "A) A small rocky body orbiting a star",
      "B) A dead star that no longer emits light",
      "C) A giant cloud of gas and dust in space",
      "D) A group of planets orbiting together"
    ],
    answer: "C"
  },
  {
    question: "What is dark matter?",
    options: [
      "A) An invisible form of matter that exerts gravity but doesn't emit or absorb light",
      "B) Matter found only inside black holes",
      "C) Ordinary matter that is too cold to see",
      "D) Light that has been absorbed by dust clouds"
    ],
    answer: "A"
  },
  {
    question: "What is dark energy?",
    options: [
      "A) Energy released by black holes",
      "B) The heat left over from stars",
      "C) Energy stored in dark matter",
      "D) A mysterious force driving the accelerating expansion of the universe"
    ],
    answer: "D"
  },
  {
    question: "What is the James Webb Space Telescope (JWST)?",
    options: [
      "A) A telescope that observes only visible light from Earth's surface",
      "B) A telescope that orbits Earth at low altitude",
      "C) A radio telescope built in the desert",
      "D) A large space telescope that observes mainly in infrared light"
    ],
    answer: "D"
  }
];

const artQuestions = [
  {
    question: "Who painted the Mona Lisa?",
    options: ["A) Michelangelo", "B) Leonardo da Vinci", "C) Raphael", "D) Vincent van Gogh"],
    answer: "B"
  },
  {
    question: "Which art movement is Claude Monet most associated with?",
    options: ["A) Cubism", "B) Surrealism", "C) Impressionism", "D) Baroque"],
    answer: "C"
  },
  {
    question: "Who composed the Four Seasons, a set of violin concertos?",
    options: ["A) Antonio Vivaldi", "B) Johann Sebastian Bach", "C) Wolfgang Amadeus Mozart", "D) Ludwig van Beethoven"],
    answer: "A"
  },
  {
    question: "Which playwright wrote Hamlet and Macbeth?",
    options: ["A) Christopher Marlowe", "B) Oscar Wilde", "C) William Shakespeare", "D) George Bernard Shaw"],
    answer: "C"
  },
  {
    question: "What is the term for a painting technique that uses water-soluble pigments on paper?",
    options: ["A) Fresco", "B) Watercolor", "C) Encaustic", "D) Tempera"],
    answer: "B"
  },
  {
    question: "Who sculpted David, the famous marble statue in Florence?",
    options: ["A) Donatello", "B) Auguste Rodin", "C) Gian Lorenzo Bernini", "D) Michelangelo"],
    answer: "D"
  },
  {
    question: "Which artist is known for co-founding Cubism alongside Georges Braque?",
    options: ["A) Pablo Picasso", "B) Salvador Dalí", "C) Henri Matisse", "D) Paul Cézanne"],
    answer: "A"
  },
  {
    question: "In music, what does the term 'forte' mean?",
    options: ["A) Slowly", "B) Loudly", "C) Softly", "D) Quickly"],
    answer: "B"
  },
  {
    question: "Which style of dance originated in the courts of Renaissance Italy and France and is known for its precise technique and pointe work?",
    options: ["A) Tango", "B) Flamenco", "C) Ballet", "D) Hip-hop"],
    answer: "C"
  },
  {
    question: "Which painting by Vincent van Gogh features a swirling night sky over a village?",
    options: ["A) Sunflowers", "B) The Starry Night", "C) The Potato Eaters", "D) Café Terrace at Night"],
    answer: "B"
  }
];

const cuisineQuestions = [
  {
    question: "Which cuisine is known for dishes like paella and tapas?",
    options: ["A) Italian", "B) Japanese", "C) Spanish", "D) Mexican"],
    answer: "C"
  },
  {
    question: "What is the main ingredient in traditional hummus?",
    options: ["A) Chickpeas", "B) Black beans", "C) Lentils", "D) Soybeans"],
    answer: "A"
  }
];

const geographyQuestions = [
  {
    question: "What is the longest river in the world?",
    options: ["A) Amazon River", "B) Nile River", "C) Yangtze River", "D) Mississippi River"],
    answer: "A"
  },
  {
    question: "Which desert is the largest hot desert on Earth?",
    options: ["A) Gobi Desert", "B) Sahara Desert", "C) Arabian Desert", "D) Kalahari Desert"],
    answer: "B"
  }
];

let selectedQuestions = [];

if (topic === "astronomy") {
  selectedQuestions = astronomyQuestions;
} else if (topic === "the arts" || topic === "arts") {
  selectedQuestions = artQuestions;
} else if (topic === "cuisine") {
  selectedQuestions = cuisineQuestions;
} else if (topic === "geography") {
  selectedQuestions = geographyQuestions;
} else {
  console.log("Topic not recognized. Defaulting to Astronomy.");
  selectedQuestions = astronomyQuestions;
}

selectedQuestions.forEach(({ question, options, answer }) => {
  askQuestion(question, options, answer);
});

console.log("Thanks for playing Mind Games!");
   
