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
    "value": ""
},
{
    "type": "d4",
    "value": 4
},
{
    "type": "d6",
    "value": 6
},
{
    "type": "d8",
    "value": 8
},
{
    "type": "d10",
    "value": 10
},
{
    "type": "d12",
    "value": 12
},
{
    "type": "d20",
    "value": 20
},
{
    "type": "d100",
    "value": 100
}
];



var diceDropdownClass = document.querySelector(".dice-dropdown");
var rollButton = document.querySelector("#roll-button");

for (var i = 0; i < diceTypes.length; i++) {
    var dropdownOptions = document.createElement("option");
    dropdownOptions.innerHTML = diceTypes[i].type;
    dropdownOptions.value = diceTypes[i].value;
    diceDropdownClass.appendChild(dropdownOptions);
    var diceDropdownChoice = document.querySelector("#dice-dropdown-id");
    /*I want this to grab the dropdown value, but this is getting the value of the
    length of the array*/
    var choiceValue = diceDropdownChoice.options[diceDropdownChoice.selectedIndex].value;
    //console.log(choiceValue);

    //need to iron out Math, doesn't want to activate on button click
    /*
    var getRandomNumber = function() {
        return Math.floor(Math.random() * Math.floor());
    };
    */    
};

//testing buttons
var ifClicked = function() {
    console.log("button was clicked");
};

rollButton.addEventListener("click", ifClicked);
//rollButton.addEventListener("click", getRandomNumber);