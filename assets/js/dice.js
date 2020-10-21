/*creating a random number generator to create individual roll values 
based on the values of each die type used and the total number of dice used

thoughts: going to want to use math.floor and math.random

vision: create dropdown for die type: d4, d6, d8, d10, d12, d20, d100
have +/- (and clear button to delete all) and number to display current 
value at the top to request more or less dice, append dropdowns with 
die values/remove dropdowns*/

var diceTypes = [
    {
        "type": "",
        "range": ""
    },
    {
        "type": "d4",
        "range": 4
    },
    {
        "type": "d6",
        "range": 6
    },
    {
        "type": "d8",
        "range": 8
    },
    {
        "type": "d10",
        "range": 10
    },
    {
        "type": "d12",
        "range": 12
    },
    {
        "type": "d20",
        "range": 20
    },
    {
        "type": "d100",
        "range": 100
    }
];

var insultsArr = [
    "When wizards cast detect thoughts on you do they wonder why it didn't work?",
    "Your stupidity would give an illithid indigestion.",
    "You couldn't pour water out of a boot with instructions on the heel.",
    "Do you work hard to be such a mungy moron?",
    "It's pointless to insult you because you'll die before you figure it out.",
    "Everyone makes mistakes but you're really abusing the privilege.",
    "You're as dumb as a troll and half as charming.",
    "If being a dullard was a crime you'd have already been sentenced to death.",
    "I don't usually engage in mental combat with the unarmed, but I'll make an exception for you.",
    "You aren't nearly pretty enough to be this stupid.",
    "If ignorance is bliss, then why aren't you happier?",
    "If I wanted to hear something from a mouth like yours, I'd fart.",
    "You rancid dim-witted whelp.",
    "I'd say you think like a baboon, but that's an insult to baboons!",
    "I'd give you a helmet, but nothing that gets through your thick skull will be stopped by metal, and there's nothing to damage anyway.",
    "At first I thought you're brave, but then I realized you're just stupid.",
    "Why don’t you give me your weapon so I can hit myself with it, that'd be more effective than you trying.",
    "You clueless plague-sored worm.",
    "I've heard more witty banter from zombies.",
    "You're not a complete idiot, some parts are clearly missing."
];

var diceIdCounter        = 0;
var totalDiceCounter     = 2;
var rollIdCounter        = 100;
var dropdownOptionsArr   = [];
var diceIdCounterArr     = [];
var rollIdCounterArr     = [];
var diceDropdownClass    = document.querySelector(".dice-dropdown");
var randomNumberDisplay  = document.querySelector(".random-number-display");
var newDropdownContainer = document.querySelector(".new-dropdown-container");
var totalDice            = document.querySelector("#total-dice");
var rollButton           = document.querySelector("#roll-button");
var addButton            = document.querySelector("#add-button");
var subtractButton       = document.querySelector("#subtract-button");
var clearButton          = document.querySelector("#clear-button");

for (var i = 0; i < diceTypes.length; i++) {
    //iterate through diceTypes array and append to dropdown
    var dropdownOptions = document.createElement("option");
    dropdownOptions.innerHTML = diceTypes[i].type;
    dropdownOptions.value = diceTypes[i].range;
    diceDropdownClass.appendChild(dropdownOptions);
}

//remove appended dice and reset values
var clearDropdowns = function() {
    newDropdownContainer.textContent = "";
    randomNumberDisplay.textContent = "Roll Value:";
    totalDice.textContent = "Total Dice: " + 1;
    totalDiceCounter = 2;
}

//function to add select elements to represent dice values
var addDropdown = function() {
    var newDropdown  = document.createElement("select");
    newDropdown.setAttribute("class", "dice-dropdown");
    newDropdown.setAttribute("name", "dice-dropdown");
    newDropdown.setAttribute("id", diceIdCounter);
    diceIdCounter++
    diceIdCounterArr.push(newDropdown);
    var newRollValue = document.createElement("div");
    newRollValue.setAttribute("id", rollIdCounter);
    newRollValue.setAttribute("class", "random-number-display");
    rollIdCounter++
    rollIdCounterArr.push(newRollValue);
    newRollValue.textContent = "Roll Value:";
    //changing diceTypes.length to a number breaks diceTypes[i].type
    for (var i = 0; i < diceTypes.length; i++) {
        //iterate through diceTypes array and append to dropdown
        var dropdownOptions = document.createElement("option");
        dropdownOptions.innerHTML = diceTypes[i].type;
        dropdownOptions.value = diceTypes[i].range;
        newDropdown.appendChild(dropdownOptions);
        dropdownOptionsArr.push(dropdownOptions);
    }
    
    //increase total dice count
    totalDice.textContent = "Total Dice: " + totalDiceCounter++;

    //append dropdown and roll value output
    newDropdownContainer.appendChild(newDropdown);
    newDropdownContainer.appendChild(newRollValue);
}

//array.pop mdn?
//creating counter arrays, subtract by id?
//populate
//revisit possible info that is selected, may want the select element
var subtractDropdown = function() {
    diceIdCounterArr.pop();
    rollIdCounterArr.pop();
};

/*get the value of the range of each die from the dropdown and
plug each corresponding value into the random number generator
and append the randomly generated number to the page, or insult
anyone who fails to select a die value*/
var getChoiceValueAndRandomNumber = function() {
    var randomInsult = insultsArr[Math.floor(Math.random() * insultsArr.length)];

    var choiceValue = diceDropdownClass.options[diceDropdownClass.selectedIndex].value;

    if (choiceValue < 1) {
        randomNumberDisplay.textContent = "Pick a die value - " + randomInsult;
    }
    else {
        //random number generator
        var randomNumber = Math.floor(Math.random() * choiceValue) + 1;

        //remove previous value and add generated random value to page
        randomNumberDisplay.textContent = "Roll Value: " + randomNumber;
    }

    /*random number generation and appending to page for 
    dynamically created select elements*/
    for (var i = 0; i < diceIdCounterArr.length; i++) {        
        var choiceValueCounter = diceIdCounterArr[i].options
        [diceIdCounterArr[i].selectedIndex].value;
        
        if (choiceValueCounter < 1) {
            rollIdCounterArr[i].textContent = "Pick a die value - " + randomInsult;
        }
        else {
            var appendedRandomNumber = Math.floor(Math.random() * choiceValueCounter) + 1;
            rollIdCounterArr[i].textContent = "Roll Value: " + appendedRandomNumber;
        }
    }
}

rollButton.addEventListener("click", getChoiceValueAndRandomNumber);
addButton.addEventListener("click", addDropdown);
//subtractButton.addEventListener("click", subtractDropdown);
clearButton.addEventListener("click", clearDropdowns);