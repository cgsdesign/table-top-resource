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

var diceIdCounter        = 0;
var rollIdCounter        = 100;
var dropdownOptionsArr   = [];
var diceIdCounterArr     = [];
var rollIdCounterArr     = [];
var diceDropdownClass    = document.querySelector(".dice-dropdown");
var randomNumberDisplay  = document.querySelector(".random-number-display");
var newDropdownContainer = document.querySelector(".new-dropdown-container");
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

var clearDropdowns = function() {
    newDropdownContainer.textContent = "";
    randomNumberDisplay.textContent = "Roll Value:";
    //reset the dice types dropdown?
}

//do they actually have to have unique IDs?
var addDropdown = function() {
    var newDropdown  = document.createElement("select");
    newDropdown.setAttribute("class", "dice-dropdown");
    newDropdown.setAttribute("name", "dice-dropdown");
    newDropdown.setAttribute("id", diceIdCounter);
    diceIdCounter++
    diceIdCounterArr.push(newDropdown);
    var newRollValue = document.createElement("div");
    newRollValue.setAttribute("id", rollIdCounter);
    rollIdCounter++
    rollIdCounterArr.push(newRollValue);
    newRollValue.textContent = "Roll Value:"
    //changing diceTypes.length to a number breaks diceTypes[i].type
    for (var i = 0; i < diceTypes.length; i++) {
        //iterate through diceTypes array and append to dropdown
        var dropdownOptions = document.createElement("option");
        dropdownOptions.innerHTML = diceTypes[i].type;
        dropdownOptions.value = diceTypes[i].range;
        newDropdown.appendChild(dropdownOptions);
        dropdownOptionsArr.push(dropdownOptions);
    }

    //append dropdown and roll value output
    newDropdownContainer.appendChild(newDropdown);
    newDropdownContainer.appendChild(newRollValue);
}


//array.pop mdn?
//creating counter arrays, subtract by id?
//populate
var subtractDropdown = function() {
    diceIdCounterArr.pop();
    rollIdCounterArr.pop();
};

//get the value of the range of each die from the dropdown
//assign another for loop here?
var getChoiceValueAndRandomNumber = function() {
    //.value is undefined

    var choiceValue = diceDropdownClass.options[diceDropdownClass.selectedIndex].value;

    //temporary, I know we can't use alerts
    if (choiceValue < 4) {
        alert("Pick a die value");
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
        
        if (choiceValueCounter < 4) {
            alert("Pick a die value");
        }
        else {
            var appendedRandomNumber = Math.floor(Math.random() * choiceValueCounter) + 1;
            rollIdCounterArr[i].textContent = "Roll Value: " + appendedRandomNumber;
        }
    }
}

/*future plans:
-append/remove dropdowns with +/- buttons above all dropdowns
-add clear dice button to remove all appended dropdowns 
    (still keeping one fixed to the page)
-Roll! button will be set up to activate all dropdowns
-seek feedback concerning function structure/layout
-clone function?
-javascript value this?
-kanban board taskinator
*/

rollButton.addEventListener("click", getChoiceValueAndRandomNumber);
addButton.addEventListener("click", addDropdown);
subtractButton.addEventListener("click", subtractDropdown);
clearButton.addEventListener("click", clearDropdowns);