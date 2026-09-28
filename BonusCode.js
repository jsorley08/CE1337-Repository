const prompt = require("readline-sync");


questionArray=["What is a Rambutan ", "What is a carrot ", "What is a squash ", "What is a mushroom ", "What is a root ", "What is a tomato ", "What is a Coconut ", "What is a bell pepper ","What is pepper ", "What is coffee "]
answerArray=["fruit", "vegetable", "gourd", "fungus", "plant", "fruit", "fruit", "fruit", "spice", "drug"]


/*Below assumes bonus is multiple choice and that there are multiple DONT TAKE AS FACT*/
bonus1 = false
bonus2 = true
bonus3 = true
elapsed = 0
totelapsed = 0
score = 0
totalscore = 0
tottotelapsed = 0

for (loop = 0; loop < questionArray.length; loop++){
    let start = Date.now();
    switch (true) { 
        case (totelapsed >= 60 && bonus1 == false):
            bonusAnswer = prompt.question("Its time for the BONUS ROUND\n" + "please pick a bonus question\n" + "1. Bonus1\n" + "2. Bonus2\n" + "3. Charles\n" + "Enter your answer here: ");
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
    userInput = prompt.question(questionArray[loop]);
    if (userInput.toLowerCase() == answerArray[loop]) {
        console.log("Thats correct!");
        score++
    }
    else{
        console.log("That was incorrect!");
    }

    let end = Date.now();
    elapsed = end - start;
    elapsed = elapsed / 1000
    totelapsed = elapsed + totelapsed
    console.log(totelapsed);
}
tottotelapsed = tottotelapsed + totelapsed;
console.log("You got a score of " + score)
console.log("You approximately took " + (tottotelapsed = Math.floor(tottotelapsed)) + " seconds");

