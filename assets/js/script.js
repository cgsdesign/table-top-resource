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
            $("#rowCont").append($statBlock, $levelBlock, $profBonusBlock, $classFeatBlock)
            
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
    fetch("http://www.dnd5eapi.co/api/races/" + raceSearch).then(function(response) {
        response.json().then(function(data) {
            var $mainCont = $("<div class='col-sm-12' id='mainInfoContainer'></div>")
            var $rowCont = $("<div class='row' id='rowCont'></div>")
            var $baseInfo = $("<div class='col-sm-6' id='infoCont'></div>")
            var $sizeCont = $("<div class='col-sm-6' id='sizeCont'></div>")
            var $rowCont2 = $("<div class='row' id='rowSecCont'></div>")
            var $traitCont = $("<div class='col-sm-6' id='traitCont'></div>")
            var $subraceCont = $("<div class='col-sm-6' id='subraceCont'></div>")

            $("#referenceContainer").append($mainCont);
            $("#mainInfoContainer").append($rowCont, $rowCont2);
            $("#rowCont").append($baseInfo, $sizeCont);
            $("#rowSecCont").append($traitCont, $subraceCont);

            $("#infoCont").append("<p>" + data.name + "</p>")
            $("#infoCont").append("<p>Speed: " + data.speed + "</p>")

            var abilityBonus = data.ability_bonuses[0]
            $("#infoCont").append("Ability Bonus: ")
            $("#infoCont").append("<p>" + abilityBonus.name + " +" + abilityBonus.bonus + "</p>")

            var racialprofs = data.starting_proficiencies[0]
            $("#infoCont").append("Proficiencies: ")
            $("#infoCont").append("<p>" + racialprofs.name + "</p>")
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
    racesCategory(selectText)
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


$(document).ready(function(){
    $('#btnSubmit').click(function(){
        var name = $('#name').val();
        var time = $('#time').val();
        var day = $('#days').val();
        console.log('Info', {
            name: name,
            time: time,
            day: day
        })

        if (time == '8to12pm') {
            if(day == 'monday'){
                $('#eightam-mon-list').append("<li>" + name + "</li>");
            }
            else if (day == 'tuesday') {
                $('#eightam-tue-list').append("<li>" + name + "</li>");
            }
            else if (day == 'wednesday') {
                $('#eightam-wed-list').append("<li>" + name + "</li>");
            }
            else if (day == 'thursday') {
                $('#eightam-thur-list').append("<li>" + name + "</li>");
            }
            else if (day == 'friday') {
                $('#eightam-fri-list').append("<li>" + name + "</li>");
            }
            else if (day == 'saturday') {
                $('#eightam-sat-list').append("<li>" + name + "</li>");
            }
            else if (day == 'sunday') {
                $('#eightam-sun-list').append("<li>" + name + "</li>");
            }
        }
        else if(time == '12to4pm'){
            // console.log('nope');
            if(day == 'monday'){
                $('#twelve-mon-list').append("<li>" + name + "</li>");
            }
            else if (day == 'tuesday') {
                $('#twelve-tue-list').append("<li>" + name + "</li>");
            }
            else if (day == 'wednesday') {
                $('#twelve-wed-list').append("<li>" + name + "</li>");
            }
            else if (day == 'thursday') {
                $('#twelve-thur-list').append("<li>" + name + "</li>");
            }
            else if (day == 'friday') {
                $('#twelve-fri-list').append("<li>" + name + "</li>");
            }
            else if (day == 'saturday') {
                $('#twelve-sat-list').append("<li>" + name + "</li>");
            }
            else if (day == 'sunday') {
                $('#twelve-sun-list').append("<li>" + name + "</li>");
            }
        }
        else if(time == '4to8pm'){
            // console.log('nope');
            if(day == 'monday'){
                $('#four-mon-list').append("<li>" + name + "</li>");
            }
            else if (day == 'tuesday') {
                $('#four-tue-list').append("<li>" + name + "</li>");
            }
            else if (day == 'wednesday') {
                $('#four-wed-list').append("<li>" + name + "</li>");
            }
            else if (day == 'thursday') {
                $('#four-thur-list').append("<li>" + name + "</li>");
            }
            else if (day == 'friday') {
                $('#four-fri-list').append("<li>" + name + "</li>");
            }
            else if (day == 'saturday') {
                $('#four-sat-list').append("<li>" + name + "</li>");
            }
            else if (day == 'sunday') {
                $('#four-sun-list').append("<li>" + name + "</li>");
            }
        }
        else if(time == '8to12am'){
            // console.log('nope');
            if(day == 'monday'){
                $('#eightpm-mon-list').append("<li>" + name + "</li>");
            }
            else if (day == 'tuesday') {
                $('#eightpm-tue-list').append("<li>" + name + "</li>");
            }
            else if (day == 'wednesday') {
                $('#eightpm-wed-list').append("<li>" + name + "</li>");
            }
            else if (day == 'thursday') {
                $('#eightpm-thur-list').append("<li>" + name + "</li>");
            }
            else if (day == 'friday') {
                $('#eightpm-fri-list').append("<li>" + name + "</li>");
            }
            else if (day == 'saturday') {
                $('#eightpm-sat-list').append("<li>" + name + "</li>");
            }
            else if (day == 'sunday') {
                $('#eightpm-sun-list').append("<li>" + name + "</li>");
            }
        }
        

    })
})
