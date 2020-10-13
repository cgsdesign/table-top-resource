// fetch api

var catagoryInfo = ""
var entrySelect = ""

fetch("https://www.dnd5eapi.co/api/" + catagory + "/" + entry).then(function(response) {
    response.json().then(function(data) {
        console.log(data)
    })
})

$(".catagory").on("click", )