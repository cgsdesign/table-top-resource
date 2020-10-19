//Getting and appending information to the infobox based on character class
var classesCategory = function(charClass) {
    var charSearch = charClass.toLowerCase();
    fetch("http://www.dnd5eapi.co/api/classes/" + charSearch).then(function(response) {
        response.json().then(function(data) {
            $("#contHeader").append(data.name)

            $("#charContainer").append("Hit Die: " + data.hit_die)

                var skills = data.proficiency_choices[0].from
            
                for(i = 0; i < skills.length; i++) {
                    $("#charContainer").append(skills[i].name)
                }
                
                var proficiencies = data.proficiencies
                $("#charContainer").append("Proficiencies: ")
                
                for(i = 0; i < proficiencies.length; i++) {
                    $("#charContainer").append(proficiencies[i].name)
                }

                var savingThrows = data.saving_throws
                $("#charContainer").append("Saving Throws: ")

                for(i = 0; i < savingThrows.length; i++) {
                    $("#charContainer").append(savingThrows[i].name)
                }

            fetch("http://www.dnd5eapi.co/api/classes/" + charSearch + "/levels").then(function(response) {
                response.json().then(function(data) {
                    
                    var charLevel = 1
                    for(i = 0; i < data.length; i++) {
                        if(data[i].level >= charLevel) {
                            charLevel++
                            $("#levelContainer").append("Character Level: ")
                                .append(data[i].level)
                            $("#levelContainer").append("Proficiency Bonus: ")
                                .append(data[i].prof_bonus)
                            var classFeatures = data[i].features
                            console.log(classFeatures)
                            for(j = 0; j < classFeatures.length; j++) {
                                $("#abilityContainer").append(classFeatures[j].name)
                            }

                        }

                    }
                })
            })
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