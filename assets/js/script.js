//Getting and appending information to the infobox based on character class
var classesCategory = function(charClass) {
    $("#mainInfoContainer").remove();
    var charSearch = charClass.toLowerCase();
    fetch("http://www.dnd5eapi.co/api/classes/" + charSearch).then(function(response) {
        response.json().then(function(data) {
            
            var $mainCont = $("<div class='col-sm-12' id='mainInfoContainer'></div>")
            var $rowCont = $("<div class='row' id='rowCont'></div>")
            var $statBlock = $("<div class='col-sm-4' id='statBlock'></div>")
            var $levelBlock = $("<div class='col-sm-2' id='levelBlock'></div>")
            var $profBonusBlock = $("<div class='col-sm-2' id='profBonusBlock'></div>")
            var $classFeatBlock = $("<div class='col-sm-4' id='classFeatBlock'></div>")
            
            $("#referenceContainer").append($mainCont)
            $("#mainInfoContainer").append($rowCont)
            $("#rowCont").append($statBlock)
            $("#rowCont").append($levelBlock)
            $("#rowCont").append($profBonusBlock)
            $("#rowCont").append($classFeatBlock)
            
            $("#statBlock").append(data.name)

            $("#statBlock").append($statBlock, "<p>Hit Die: " + data.hit_die + "</p>")
            
            var savingThrows = data.saving_throws
            $("#statBlock").append("Saving Throws: ")

            for(i = 0; i < savingThrows.length; i++) {
                $("#statBlock").append("<p>" + savingThrows[i].name + "</p>")
                
            }
            
            var skills = data.proficiency_choices[0].from

            for(i = 0; i < skills.length; i++) {
                $("#statBlock").append("<p>" + skills[i].name + "</p>")
            }
                
            var proficiencies = data.proficiencies
                $("#statBlock").append("Proficiencies: ")
                
            for(i = 0; i < proficiencies.length; i++) {
                    $("#statBlock").append("<p>" + proficiencies[i].name + "</p>")
                }   
            
            $("#levelBlock").append("Level")
            $("#profBonusBlock").append("Proficiency")
            $("#classFeatBlock").append("Class Features")

            fetch("http://www.dnd5eapi.co/api/classes/" + charSearch + "/levels").then(function(response) {
                response.json().then(function(data) {
                    
                    var charLevel = 1
                    for(i = 0; i < data.length; i++) {
                        if(data[i].level >= charLevel) {
                            charLevel++
                            $("#levelBlock").append("<p>" + data[i].level + "</p>")
                            $("#profBonusBlock").append("<p>" + data[i].prof_bonus + "</p>")
                            var classFeatures = data[i].features
                            console.log(classFeatures)
                            for(j = 0; j < classFeatures.length; j++) {
                                if(classFeatures.length === 0) {
                                    $("#classFeatBlock").append("<p>-</p>")
                                }
                                $("#classFeatBlock").append("<p>" + classFeatures[j].name + "</p>")
                            }

                        }

                    }
                })
            })
        })
    })
}

var racesCategory = function(raceSelect) {
    $("#mainInfoContainer").remove();
    var raceSearch = raceSelect.toLowerCase();
    fetch("http://www.dnd5eapi.co/api/classes/" + raceSearch).then(function(response) {
        response.json().then(function(data) {
            var $mainCont = $("<div class='col-sm-12' id='mainInfoContainer'></div>")
            var $rowCont = $("<div class='row' id='rowCont'></div>")
            var $baseInfo = $("<div class='col-sm-6' id='infoCont'></div>")
            var $sizeCont = $("<div class='col-sm-6' id='sizeCont'></div>")
            var $rowCont2 = $("<div class='row' id='rowCont'></div>")
            var $traitCont = $("<div class='col-sm-6' id='traitCont'></div>")
            var $subraceCont = $("<div class='col-sm-6' id='subraceCont'></div>")
        })
    })
}

var equipmentCategory = function(category) {
    if (category === "Weapons") {
        var category = "weapon"
    }
    fetch("https://www.dnd5eapi.co/api/equipment-categories/" + category).then(function(response) {
        response.json().then(function(data) {
            for (i = 0; i < data.length; i++) {

            }
        })
    })        
};

// Selecting the click option and feeding it into the call
$("#character").on("click", "p", function() {
    var selectText = $(this)
        .text()
        .trim();
    
});

$("#classes").on("click", "p", function() {
    var selectText = $(this)
        .text()
        .trim();
        classesCategory(selectText)
});

$("#races").on("click", "p", function() {
    var selectText = $(this)
        .text()
        .trim();
    console.log(selectText)
});

$("#equipment").on("click", "p", function() {
    var selectText = $(this)
        .text()
        .trim();
    equipmentCategory(selectText)
});

$("#spells").on("click", "p", function() {
    var selectText = $(this)
        .text()
        .trim();
    console.log(selectText)
});

$("#monsters").on("click", "p", function() {
    var selectText = $(this)
        .text()
        .trim();
    console.log(selectText)
});