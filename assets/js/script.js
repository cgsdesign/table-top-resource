// fetch api

var catagoryInfo = ""
var entrySelect = ""

var dndInfoCall = function() {
    fetch("https://www.dnd5eapi.co/api/" + catagory + "/" + entry).then(function(response) {
        response.json().then(function(data) {
            console.log(data)
        })
    })
}

var createContextDrop = function() {
    
}

$("#spellDrop").on("click", createContextDrop)