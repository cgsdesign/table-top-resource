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
    "value": "4"
},
{
    "type": "d6",
    "value": "6"
},
{
    "type": "d8",
    "value": "8"
},
{
    "type": "d10",
    "value": "10"
},
{
    "type": "d12",
    "value": "12"
},
{
    "type": "d20",
    "value": "20"
},
{
    "type": "d100",
    "value": "100"
}
];
console.log(diceTypes);

var diceDropdown = document.querySelector(".dice-dropdown");

for (var i = 0; i < diceTypes.length; i++) {
    var options = document.createElement("option");
    options.innerHTML = diceTypes[i].type;
    options.value = diceTypes[i].value;
    diceDropdown.appendChild(options);
};