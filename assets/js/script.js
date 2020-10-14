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

var diceDropdownId      = document.querySelector("#dice-dropdown");
var randomNumberDisplay = document.querySelector("#random-number-display");
var rollButton          = document.querySelector("#roll-button");

for (var i = 0; i < diceTypes.length; i++) {
    //iterate through diceTypes array and append to dropdown
    var dropdownOptions = document.createElement("option");
    dropdownOptions.innerHTML = diceTypes[i].type;
    dropdownOptions.value = diceTypes[i].range;
    diceDropdownId.appendChild(dropdownOptions);
    
    //get the value of the range of each die from the dropdown
    var getChoiceValueAndRandomNumber = function() {
        var choiceValue = diceDropdownId.options[diceDropdownId.selectedIndex].value;
    
        //random number generator
        var randomNumber = Math.floor(Math.random() * choiceValue) + 1;
        console.log(randomNumber);

        //remove previous value and append generated random value to page
        randomNumberDisplay.textContent = "Roll Value: " + randomNumber;
    }
};

/*future plans:
-append/remove dropdowns with +/- buttons above all dropdowns
-add clear dice button to remove all appended dropdowns 
    (still keeping one fixed to the page)
-Roll! button will be set up to activate all dropdowns
-seek feedback concerning function structure/layout
*/

rollButton.addEventListener("click", getChoiceValueAndRandomNumber);