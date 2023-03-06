
// Farkle Game, simplified, using arrays and objects in Javascript. 

// This game creates 6 dice, scores them, and displays the score to the user. 
// The user can press a button to start the game by rolling dice, 
// and another button to continue the game by rolling again. 

// I used objects and arrays as well as DOM manipulation in this project. 

// first, calc 1s and 5s in scoring. Then let the user choose to keep or roll them (ONLY IF NOT ALL DICE USED IN SCORING (ex. scoredDiceIndexes = less than 6 in array) before calculating 1/5s).
// (Therefore, calc 1s and 5s in scoring AFTER done setting the variable scoredDiceIndexes. May have to complicate that variable in order to track indexes of 1/5s as well.)
// Then (1) take all that info, and (2) set up a way to add the score as we go (USE lastRolled global var) to (3) add old roll score to new roll score AS LONG AS new roll score != 0. And display. 
// Somewhere in there, add functions and buttons for user to choose which sets of dice to keep and which to roll and make them work. 


const sixDice = document.querySelector(".six-dice");

// Each of these creates a new die and returns their int value 

function create1Die() {
    // Creates an element and assigns it a class and a value (random 1-6)
    // and appends it to HTML div .six-dice 
    const die1Element = document.createElement("div");
    const die1Number = Math.floor(Math.random() * 6) + 1;
    die1Element.innerHTML = die1Number;
    die1Element.classList.add("dice");
    sixDice.appendChild(die1Element);

    // Takes the element and number and puts in js object 
    const die1Object = {
        element: die1Element,
        number: die1Number
    };

    return die1Object;
}

function create2Die() {
    // Creates an element and assigns it a class and a value (random 1-6)
    // and appends it to HTML div .six-dice 
    const die2Element = document.createElement("div");
    const die2Number = Math.floor(Math.random() * 6) + 1;
    die2Element.innerHTML = die2Number;
    die2Element.classList.add("dice");
    sixDice.appendChild(die2Element);
    
    // Takes the element and number and puts in js object 
    const die2Object = {
        element: die2Element,
        number: die2Number
    };

    return die2Object;
}

function create3Die() {
    // Creates an element and assigns it a class and a value (random 1-6)
    // and appends it to HTML div .six-dice 
    const die3Element = document.createElement("div");
    const die3Number = Math.floor(Math.random() * 6) + 1;
    die3Element.innerHTML = die3Number;
    die3Element.classList.add("dice");
    sixDice.appendChild(die3Element);
    
    // Takes the element and number and puts in js object 
    const die3Object = {
        element: die3Element,
        number: die3Number
    };

    return die3Object;
}

function create4Die() {
    // Creates an element and assigns it a class and a value (random 1-6)
    // and appends it to HTML div .six-dice 
    const die4Element = document.createElement("div");
    const die4Number = Math.floor(Math.random() * 6) + 1;
    die4Element.innerHTML = die4Number;
    die4Element.classList.add("dice");
    sixDice.appendChild(die4Element);
    
    // Takes the element and number and puts in js object 
    const die4Object = {
        element: die4Element,
        number: die4Number
    };

    return die4Object;
}

function create5Die() {
    // Creates an element and assigns it a class and a value (random 1-6)
    // and appends it to HTML div .six-dice 
    const die5Element = document.createElement("div");
    const die5Number = Math.floor(Math.random() * 6) + 1;
    die5Element.innerHTML = die5Number;
    die5Element.classList.add("dice");
    sixDice.appendChild(die5Element);
    
    // Takes the element and number and puts in js object 
    const die5Object = {
        element: die5Element,
        number: die5Number
    };

    return die5Object;
}

function create6Die() {
    // Creates an element and assigns it a class and a value (random 1-6)
    // and appends it to HTML div .six-dice 
    const die6Element = document.createElement("div");
    const die6Number = Math.floor(Math.random() * 6) + 1;
    die6Element.innerHTML = die6Number;
    die6Element.classList.add("dice");
    sixDice.appendChild(die6Element);
    
    // Takes the element and number and puts in js object 
    const die6Object = {
        element: die6Element,
        number: die6Number
    };

    return die6Object;
}


// Takes the 6 dice created as objects, puts elements and numbers in arrays for 
// the createAllDice, scoring and dice management functions to use 
// And returns the two arrays in one object 
function diceArraysObject(obj1, obj2, obj3, obj4, obj5, obj6) {
    const diceArrayElements = [obj1.element, obj2.element, obj3.element, obj4.element, obj5.element, obj6.element];
    const diceArrayNumbers = [obj1.number, obj2.number, obj3.number, obj4.number, obj5.number, obj6.number];

    const allDiceObject = {
        elements: diceArrayElements,
        numbers: diceArrayNumbers
    };

    // Returns both element and number arrays 
    return allDiceObject;
}

// Runs all 6 functions that create dice, takes return values to local variables 
// Takes dice object local variables, converts to arrays of numbers / elements using function diceArraysObject 
// and has same return value as that function. Returns two arrays in one object 
function createAllDice() {
    // Removes previous dice before creating new ones 
    while (sixDice.firstChild) {
        sixDice.removeChild(sixDice.firstChild);
    }
    const die1Object = create1Die();
    const die2Object = create2Die();
    const die3Object = create3Die();
    const die4Object = create4Die();
    const die5Object = create5Die();
    const die6Object = create6Die();
    const allDiceObject = diceArraysObject(die1Object, die2Object, die3Object, die4Object, die5Object, die6Object);
    return allDiceObject;
}

// Creates the HTML button with class .button, type button, text 'Roll Dice', and runs createAllDice() onclick, within the div .roll 
// And runs createRollScoreTxt() that shows possible score from roll
// THIS FUNCTION IS CALLED 
function createRollDiceBtn() {
    const rollElement = document.querySelector(".roll");
    const rollDiceButton = document.createElement("button");
    rollDiceButton.classList.add("button");
    rollDiceButton.type = "button";
    rollDiceButton.textContent = "Roll Dice";

    
    rollDiceButton.addEventListener("click", function() {
        delRollDiceTxt()
        }, {once : true});

    rollDiceButton.onclick = function() {createAllDice(), createRollScoreTxt(), createAcceptScoreBtn(), createStopRollingBtn(), clearRollDiceBtn()};
    rollElement.appendChild(rollDiceButton);
}

// Creates a 'p' text instructions within HTML div .roll 
// THIS FUNCTION IS CALLED 
function createRollDiceTxt() {
    const rollElement = document.querySelector(".roll");
    const rollDiceText = document.createElement("p");
    rollDiceText.textContent = "Push button to start game and roll the dice!";
    rollElement.appendChild(rollDiceText);
}

// Delete 'p' text instructions within HTML div .roll 
function delRollDiceTxt() {
    const rollElement = document.querySelector(".roll");
    const rollDiceText = document.querySelector(".roll p");
    rollElement.removeChild(rollDiceText);
}

function clearRollDiceBtn() {
    const rollDiceButton = document.querySelector(".roll button");
    rollDiceButton.onclick = function() {clearRollDiceBtn()};
}

// This will calculate the possible roll score as an object, given the dice from createAllDice() 
function calcRollScore() {
    
    const allDiceObject = createAllDice();

    // Variable should be diceArrayNumbers, but is dice for purpose of this function's if statements.
    const dice = allDiceObject.numbers;
    dice.sort();
    dice.reverse();

    let rollScore = {
        result: "",
        score: 0
    };

    let scoredDiceIndexes = [];

    let scoredDice1s5s = {
        ones: [],
        fives: []
    };

    // 4 of a kind 
    if (((dice[0] == dice[1]) && (dice[1] == dice[2]) && (dice[2] == dice[3]))  ||  ((dice[1] == dice[2]) && (dice[2] == dice[3]) && (dice[3] == dice[4]))  ||  ((dice[2] == dice[3]) && (dice[3] == dice[4]) && (dice[4] == dice[5]))) {
        rollScore.result = "4 of a kind";
        rollScore.score = 1000;

        if ((dice[0] == dice[1]) && (dice[1] == dice[2]) && (dice[2] == dice[3])) {
            scoredDiceIndexes = [0, 1, 2, 3];
            if (dice[4] == 1) {
                scoredDice1s5s.ones.append(4);
            }
            if (dice[5] == 1) {
                scoredDice1s5s.ones.append(5);
            }
            if (dice[4] == 5) {
                scoredDice1s5s.fives.append(4);
            }
            if (dice[5] == 5) {
                scoredDice1s5s.fives.append(5);
        }

        else if ((dice[1] == dice[2]) && (dice[2] == dice[3]) && (dice[3] == dice[4])) {
            scoredDiceIndexes = [1, 2, 3, 4];
        }

        else if ((dice[2] == dice[3]) && (dice[3] == dice[4]) && (dice[4] == dice[5])) {
            scoredDiceIndexes = [2, 3, 4, 5];
        }
    }

    // Three pairs 
    else if ((dice[0] == dice[1]) && (dice[2] == dice[3]) && (dice[4] == dice[5]) && (dice[0] != dice[2]) && (dice[2] != dice[4])) {
        rollScore.result = "three pairs";
        rollScore.score = 1500; 
        scoredDiceIndexes = [0, 1, 2, 3, 4, 5];
    }
    
    // 6 of a kind 
    else if (((dice[0] == dice[1]) && (dice[1] == dice[2]) && (dice[2] == dice[3]) && (dice[3] == dice[4]) && (dice[4] == dice[5]))) {
        rollScore.result = "6 of a kind";
        rollScore.score = 3000;
        scoredDiceIndexes = [0, 1, 2, 3, 4, 5];
    }

    // 5 of a kind 
    else if (((dice[0] == dice[1]) && (dice[1] == dice[2]) && (dice[2] == dice[3]) && (dice[3] == dice[4]))  ||  ((dice[1] == dice[2]) && (dice[2] == dice[3]) && (dice[3] == dice[4]) && (dice[4] == dice[5]))) {
        rollScore.result = "5 of a kind";
        rollScore.score = 2000;

        if ((dice[0] == dice[1]) && (dice[1] == dice[2]) && (dice[2] == dice[3]) && (dice[3] == dice[4])) {
            scoredDiceIndexes = [0, 1, 2, 3, 4];
        }

        else if ((dice[1] == dice[2]) && (dice[2] == dice[3]) && (dice[3] == dice[4]) && (dice[4] == dice[5])) {
            scoredDiceIndexes = [1, 2, 3, 4, 5];
        }
    }

    // Straight 1-6 
    else if ((dice[0] == 6) &&  (dice[1] == 5) && (dice[2] == 4) && (dice[3] == 3) && (dice[4] == 2) && (dice[5] == 1)) {
        rollScore.result = "straight 1-6";
        rollScore.score = 1500;
        scoredDiceIndexes = [0, 1, 2, 3, 4, 5];
    }

    // Two triplets 
    else if ((dice[0] == dice[1] == dice[2]) && (dice[3] == dice[4] == dice[5])) {
        rollScore.result = "two triplets";
        rollScore.score = 2500;
        scoredDiceIndexes = [0, 1, 2, 3, 4, 5];
    }

    // Three 6s 
    else if ((dice[0] == 6 && dice[1] == 6 && dice[2] == 6) || (dice[1] == 6 && dice[2] == 6 && dice[3] == 6) || (dice[2] == 6 && dice[3] == 6 && dice[4] == 6) || (dice[3] == 6 && dice[4] == 6 && dice[5] == 6)) {
        rollScore.result = "three 6s";
        rollScore.score = 600;

        if (dice[0] == 6 && dice[1] == 6 && dice[2] == 6) {
            scoredDiceIndexes = [0, 1, 2];
        }

        else if (dice[1] == 6 && dice[2] == 6 && dice[3] == 6) {
            scoredDiceIndexes = [1, 2, 3];
        }

        else if (dice[2] == 6 && dice[3] == 6 && dice[4] == 6) {
            scoredDiceIndexes = [2, 3, 4];
        }

        else if (dice[3] == 6 && dice[4] == 6 && dice[5] == 6) {
            scoredDiceIndexes = [3, 4, 5];
        }
    }
    
    // Three 5s
    else if ((dice[0] == 5 && dice[1] == 5 && dice[2] == 5) || (dice[1] == 5 && dice[2] == 5 && dice[3] == 5) || (dice[2] == 5 && dice[3] == 5 && dice[4] == 5) || (dice[3] == 5 && dice[4] == 5 && dice[5] == 5)) {
        rollScore.result = "three 5s";
        rollScore.score = 500;

        if (dice[0] == 5 && dice[1] == 5 && dice[2] == 5) {
            scoredDiceIndexes = [0, 1, 2];
        }

        else if (dice[1] == 5 && dice[2] == 5 && dice[3] == 5) {
            scoredDiceIndexes = [1, 2, 3];
        }

        else if (dice[2] == 5 && dice[3] == 5 && dice[4] == 5) {
            scoredDiceIndexes = [2, 3, 4];
        }

        else if (dice[3] == 5 && dice[4] == 5 && dice[5] == 5) {
            scoredDiceIndexes = [3, 4, 5];
        }
    }

    // Three 4s 
    else if ((dice[0] == 4 && dice[1] == 4 && dice[2] == 4) || (dice[1] == 4 && dice[2] == 4 && dice[3] == 4) || (dice[2] == 4 && dice[3] == 4 && dice[4] == 4) || (dice[3] == 4 && dice[4] == 4 && dice[5] == 4)) {
        rollScore.result = "three 4s";
        rollScore.score = 400;

        if (dice[0] == 4 && dice[1] == 4 && dice[2] == 4) {
            scoredDiceIndexes = [0, 1, 2];
        }

        else if (dice[1] == 4 && dice[2] == 4 && dice[3] == 4) {
            scoredDiceIndexes = [1, 2, 3];
        }

        else if (dice[2] == 4 && dice[3] == 4 && dice[4] == 4) {
            scoredDiceIndexes = [2, 3, 4];
        }

        else if (dice[3] == 4 && dice[4] == 4 && dice[5] == 4) {
            scoredDiceIndexes = [3, 4, 5];
        }
    }

    //Three 3s
    else if ((dice[0] == 3 && dice[1] == 3 && dice[2] == 3) || (dice[1] == 3 && dice[2] == 3 && dice[3] == 3) || (dice[2] == 3 && dice[3] == 3 && dice[4] == 3) || (dice[3] == 3 && dice[4] == 3 && dice[5] == 3)) {
        rollScore.result = "three 3s";
        rollScore.score = 300;

        if (dice[0] == 3 && dice[1] == 3 && dice[2] == 3) {
            scoredDiceIndexes = [0, 1, 2];
        }

        else if (dice[1] == 3 && dice[2] == 3 && dice[3] == 3) {
            scoredDiceIndexes = [1, 2, 3];
        }

        else if (dice[2] == 3 && dice[3] == 3 && dice[4] == 3) {
            scoredDiceIndexes = [2, 3, 4];
        }

        else if (dice[3] == 3 && dice[4] == 3 && dice[5] == 3) {
            scoredDiceIndexes = [3, 4, 5];
        }
    }

    // Three 1s
    else if ((dice[0] == 1 && dice[1] == 1 && dice[2] == 1) || (dice[1] == 1 && dice[2] == 1 && dice[3] == 1) || (dice[2] == 1 && dice[3] == 1 && dice[4] == 1) || (dice[3] == 1 && dice[4] == 1 && dice[5] == 1)) {
        rollScore.result = "three 1s";
        rollScore.score = 300;

        if (dice[0] == 1 && dice[1] == 1 && dice[2] == 1) {
            scoredDiceIndexes = [0, 1, 2];
        }

        else if (dice[1] == 1 && dice[2] == 1 && dice[3] == 1) {
            scoredDiceIndexes = [1, 2, 3];
        }

        else if (dice[2] == 1 && dice[3] == 1 && dice[4] == 1) {
            scoredDiceIndexes = [2, 3, 4];
        }

        else if (dice[3] == 1 && dice[4] == 1 && dice[5] == 1) {
            scoredDiceIndexes = [3, 4, 5];
        }
    }

    // Three 2s
    else if ((dice[0] == 2 && dice[1] == 2 && dice[2] == 2) || (dice[1] == 2 && dice[2] == 2 && dice[3] == 2) || (dice[2] == 2 && dice[3] == 2 && dice[4] == 2) || (dice[3] == 2 && dice[4] == 2 && dice[5] == 2)) {
        rollScore.result = "three 2s";
        rollScore.score = 200;

        if (dice[0] == 2 && dice[1] == 2 && dice[2] == 2) {
            scoredDiceIndexes = [0, 1, 2];
        }

        else if (dice[1] == 2 && dice[2] == 2 && dice[3] == 2) {
            scoredDiceIndexes = [1, 2, 3];
        }

        else if (dice[2] == 2 && dice[3] == 2 && dice[4] == 2) {
            scoredDiceIndexes = [2, 3, 4];
        }

        else if (dice[3] == 2 && dice[4] == 2 && dice[5] == 2) {
            scoredDiceIndexes = [3, 4, 5];
        }
    }

    // Else: scored nothing 
    else {
        rollScore.result = "none";
        rollScore.score = 0;
    }

    const scoreAndIndexes = {
        scoreObject: rollScore,
        scoreIndexes: scoredDiceIndexes, scoredDice1s5s
    };

    return scoreAndIndexes; // An object {scoreObject: rollScore {result: score: }, scoreIndexes: scoredDiceIndexes [], scoredDice1s5s {ones: [], fives: []}} 
}

const scoreAndIndexes = calcRollScore();
let lastRolled = scoreAndIndexes.scoreObject;

// Create an HTML p and put rollScore object in it from lastRolled variable
// In HTML div .score 
function createRollScoreTxt() {
    const scoreElement = document.querySelector(".score");
    while (scoreElement.p) {
        scoreElement.removeChild(scoreElement.p);
    }
    const rollScoreTxt = document.createElement("p");
    
    // Take object rollScore and separate it into .result and .score
    const rollScore = lastRolled;
    const result = rollScore.result;
    const score = rollScore.score;
    
    rollScoreTxt.textContent = `Your roll score is ${score}. You rolled ${result}.`;
    if (score == 0) {
        rollScoreTxt.textContent = `Sorry, your score is 0. You rolled none.`;
    }
    scoreElement.appendChild(rollScoreTxt);
}

// Creates button acceptScore and puts in HTML .score 
// Called in createRollDiceBtn() 
function createAcceptScoreBtn() {
    const scoreElement = document.querySelector(".score");
    const acceptScoreBtn = document.createElement("button");
    acceptScoreBtn.classList.add("button");
    acceptScoreBtn.type = "button";
    acceptScoreBtn.textContent = "Accept Score and Roll Again";
    acceptScoreBtn.onclick = function() {addToRollScore()};
    scoreElement.appendChild(acceptScoreBtn);
}

// Creates button stopRolling and puts in HTML .score
// Called in createRollDiceBtn()
function createStopRollingBtn() {
    const scoreElement = document.querySelector(".score");
    const stopRollingBtn = document.createElement("button");
    stopRollingBtn.classList.add("button");
    stopRollingBtn.type = "button";
    stopRollingBtn.textContent = "Finalize Score and Stop Rolling";
    stopRollingBtn.onclick = function() {finalizeRollScore()};
    scoreElement.appendChild(stopRollingBtn);
}

// Calculate current rollScore and display 
// Called in createAcceptScoreBtn() 
function addToRollScore() {
    const scoreAndIndexes = calcRollScore();
    const rollScore = scoreAndIndexes.scoreObject;
    lastRolled = rollScore;
    const result = rollScore.result;
    const score = rollScore.score;
    
    const rollScoreTxt = document.querySelector(".score p");
    const displayRollScore = `Your roll score is ${score}. The last thing you rolled was ${result}.`;
    rollScoreTxt.textContent = displayRollScore;
    
    if (score == 0) {
        const displayRollScore = `Sorry, your score is 0. You rolled none.`;
        rollScoreTxt.textContent = displayRollScore;
    }
}

// Display final roll score to user, and 
// Called in createStopRollingBtn()
function finalizeRollScore() {
    const rollScore = lastRolled;
    const score = rollScore.score;

    const rollScoreTxt = document.querySelector(".score p");
    const displayRollScore = `Your final roll score is ${score}.`;//make this totalScore or whatever
    rollScoreTxt.textContent = displayRollScore;


}




createRollDiceTxt();
createRollDiceBtn();

