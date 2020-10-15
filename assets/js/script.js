// fetch api

var catagory = ""
var entry = ""

// var dndInfoCall = function() {
//     fetch("https://www.dnd5eapi.co/api/" + catagory + "/" + entry).then(function(response) {
//         response.json().then(function(data) {
//             console.log(data)
//         })
//     })
// }

var createContextDrop = function() {
    var rulesDropdownSelect = $("#rulesDropDown")
    catagory = rulesDropdownSelect

    fetch("https://www.dnd5eapi.co/api/" + catagory).then(function(response) {
        response.json().then(function(data) {
           console.log(data) 
        })
    })
}

$("#spellDrop").on("change", createContextDrop())