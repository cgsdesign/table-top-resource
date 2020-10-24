var abilityScores = function() {
    $("#mainInfoContainer").remove();
    
    var $mainCont = $("<div class='col-sm-12' id='mainInfoContainer'></div>")
    var $rowCont = $("<div class='row' id='rowCont'></div>")
    var $statsCol = $("<div class='col-sm-2' id='statsCol'></div>")
    var $infoBlockCol = $("<div class='col-sm-10' id='infoBlockCol'></div>")

    $("#referenceContainer").append($mainCont)
    $("#mainInfoContainer").append($rowCont)
    $("#rowCont").append($statsCol)
    $("#rowCont").append($infoBlockCol)

    $("#statsCol").append("<p id='strCont'>Strength (STR): </p>")
    $("#statsCol").append("<p id='dexCont'>Dexterity (DEX): </p>")
    $("#statsCol").append("<p id='conCont'>Constitution (CON): </p>")
    $("#statsCol").append("<p id='intCont'>Intelligence (INT): </p>")
    $("#statsCol").append("<p id='wisCont'>Wisdom (WIS): </p>")
    $("#statsCol").append("<p id='chaCont'>Charisma (CHA): </p>")

    $("#strCont").on("click", function() {
        
        var selectText = "str"

        abilityDescriptions(selectText);
    })
    $("#dexCont").on("click", function() {
        
        var selectText = "dex"

        abilityDescriptions(selectText);
    })
    $("#conCont").on("click", function() {
        
        var selectText = "con"

        abilityDescriptions(selectText);
    })
    $("#intCont").on("click", function() {
        
        var selectText = "int"

        abilityDescriptions(selectText);
    })
    $("#wisCont").on("click", function() {
        
        var selectText = "wis"

        abilityDescriptions(selectText);
    })
    $("#chaCont").on("click", function() {
        
        var selectText = "cha"

        abilityDescriptions(selectText);
    })
};

var abilityDescriptions = function(ability) {
    $("#infoBlockCol").remove();
    var $infoBlockCol = $("<div class='col-sm-10' id='infoBlockCol'></div>")
    $("#rowCont").append($infoBlockCol)

    fetch("https://www.dnd5eapi.co/api/ability-scores/" + ability).then(function(response) {
        response.json().then(function(data) {

            $("#infoBlockCol").append("<p>" + data.full_name + ": </p>")
            $("#infoBlockCol").append("<p>" + data.desc + "</p>")

            var skillArr = data.skills
            $("#infoBlockCol").append("<p>Skills: </p>")
            for(i = 0; i < skillArr.length; i++) {
                $("#infoBlockCol").append("<p>" + skillArr[i].name + "</p>")
            } 
        })
    })
    
}

var skillsList = function() {
    $("#mainInfoContainer").remove();
    fetch("https://www.dnd5eapi.co/api/skills").then(function(response) {
        response.json().then(function(data) {
            var $mainCont = $("<div class='col-sm-12' id='mainInfoContainer'></div>")
            var $rowCont = $("<div class='row' id='rowCont'></div>")
            var $statsCol = $("<div class='col-sm-2' id='statsCol'></div>")
            var $infoBlockCol = $("<div class='col-sm-10' id='infoBlockCol'></div>")
        
            $("#referenceContainer").append($mainCont)
            $("#mainInfoContainer").append($rowCont)
            $("#rowCont").append($statsCol)
            $("#rowCont").append($infoBlockCol)

            var skills = data.results

            for(i = 0; i < skills.length; i++) {
                $("#statsCol").append("<p id='" + [i] + "'>" + skills[i].name + "</p>")
            }

            $("#statsCol").on("click", "p", function() {
                var getId = $(this)
                    .attr("id")
                var skillSelect = data.results[getId].index
                skillDescriptions(skillSelect)
            })
        })
    })
};

var skillDescriptions = function(skillname) {
    $("#infoBlockCol").remove();

    var $infoBlockCol = $("<div class='col-sm-10' id='infoBlockCol'></div>")
    $("#rowCont").append($infoBlockCol)

    fetch("https://www.dnd5eapi.co/api/skills/" + skillname).then(function(response) {
        response.json().then(function(data) {
            $("#infoBlockCol").append("<p>" + data.name + "</p>")
                .append("<p>" + data.desc + "</p>")
                .append("<p>Ability Score Bonus: " + data.ability_score.name + "</p>")
            
        })
    })
};

var languagesList = function () {
    $("#mainInfoContainer").remove();
    
    var $mainCont = $("<div class='col-sm-12' id='mainInfoContainer'></div>")
    var $rowCont = $("<div class='row' id='rowCont'></div>")
    var $statsCol = $("<div class='col-sm-2' id='statsCol'></div>")

    $("#referenceContainer").append($mainCont)
    $("#mainInfoContainer").append($rowCont)
    $("#rowCont").append($statsCol)

    fetch("https://www.dnd5eapi.co/api/languages").then(function(response) {
        response.json().then(function(data) {

            var languages = data.results

            for(i = 0; i < languages.length; i++) {
                $("#statsCol").append("<p>" + languages[i].name + "</p>")
            }
        })
    })
}

//Logic for appending all class information to the information box
var classesCategory = function(charClass) {
    $("#mainInfoContainer").remove();
    var charSearch = charClass.toLowerCase();
    fetch("https://www.dnd5eapi.co/api/classes/" + charSearch).then(function(response) {
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

                // checking that each line is an actual increase to the class level to keep the 1-20 format
            fetch("https://www.dnd5eapi.co/api/classes/" + charSearch + "/levels").then(function(response) {
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

// handler for creating and appending race information to the main info box
var racesCategory = function(raceSelect) {
    $("#mainInfoContainer").remove();
    var raceSearch = raceSelect.toLowerCase();
    fetch("https://www.dnd5eapi.co/api/races/" + raceSearch).then(function(response) {
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

            var racialprofs = data.starting_proficiencies
            $("#infoCont").append("Starting Proficiencies: ")

            for(i = 0; i < racialprofs.length; i++) {
                $("#infoCont").append("<p>" + racialprofs[i].name + "</p>")
            }

            var languagesSpoken = data.languages
            $("#infoCont").append("Languages: ")
            for(i = 0; i < languagesSpoken.length; i++) {
                $("#infoCont").append("<p>" + languagesSpoken[i].name + "</p>")
            }

            $("#sizeCont").append("<p>Age: " + data.age + "</p>")
            $("#sizeCont").append("Alignment: " + data.alignment + "</p>")
            $("#sizeCont").append("Size: " + data.size + "</p>")
            $("#sizeCont").append(data.size_description)

            var traitsList = data.traits
            $("#traitCont").append("<p>Racial Traits: </p>")
            for(i = 0; i < traitsList.length; i++) {
                $("#traitCont").append("<p>" + traitsList[i].name + "</p>")
            }

            var subraces = data.subraces
            $("#subraceCont").append("<p>Subraces: </p>")
            for(i = 0; i < subraces.length; i++) {
                $("#subraceCont").append("<p>" + subraces[i].name + "</p>")
            }
        })
    })
}

var weaponCategory = function() {
    $("#mainInfoContainer").remove();

    var $mainCont = $("<div class='col-sm-12' id='mainInfoContainer'></div>")
    var $rowCont = $("<div class='row' id='rowCont'></div>")
    var $equipResults = $("<div class='col-sm-2' id='equipResults'></div>")
    var $equipInfo = $("<div class='col-sm-10' id='equipInfo'></div>")
    
    $("#referenceContainer").append($mainCont);
    $("#mainInfoContainer").append($rowCont)
    $("#rowCont").append($equipResults);
    $("#rowCont").append($equipInfo);

    fetch("https://www.dnd5eapi.co/api/equipment-categories/weapon").then(function(response) {
        response.json().then(function(data) {

            var equipmentList = data.equipment

            for (i = 0; i < 37; i++) {
                $("#equipResults").append("<p id='" + [i] + "'>" + equipmentList[i].name + "</p>")
            }

            $("#equipResults").on("click", "p", function() {
                var getId = $(this)
                    .attr("id")
                var weaponSelect = data.equipment[getId].index
                showWeapon(weaponSelect)
            });
        })
    })        
};

var showWeapon = function(weapon) {
    $("#equipInfo").remove();

    var $equipInfo = $("<div class='col-sm-10' id='equipInfo'></div>")
    $("#rowCont").append($equipInfo);

    fetch("https://www.dnd5eapi.co/api/equipment/" + weapon).then(function(response) {
        response.json().then(function(data) {
            $("#equipInfo").append("<p>" + data.name + "</p>")
                .append("<p>Weapon Category: " + data.weapon_category + "</p>")
                .append("<p>Range: " + data.weapon_range + "</p>")
                .append("<p>Damge Dice: " + data.damage.damage_dice + "</p>")
                .append("<p>Damage Type: " + data.damage.damage_type.name + "</p>")
            
            var properties = data.properties

            $("#equipInfo").append("<p>Properties: </p>")
            for(i = 0; i < properties.length; i++) {
                $("#equipInfo").append("<p>" + properties[i].name + "</p>")
            }

        })
    })
}

var armorCategory = function() {
    $("#mainInfoContainer").remove();

    var $mainCont = $("<div class='col-sm-12' id='mainInfoContainer'></div>")
    var $rowCont = $("<div class='row' id='rowCont'></div>")
    var $equipResults = $("<div class='col-sm-2' id='equipResults'></div>")
    var $equipInfo = $("<div class='col-sm-10' id='equipInfo'></div>")
    
    $("#referenceContainer").append($mainCont);
    $("#mainInfoContainer").append($rowCont)
    $("#rowCont").append($equipResults);
    $("#rowCont").append($equipInfo);

    fetch("https://www.dnd5eapi.co/api/equipment-categories/armor").then(function(response) {
        response.json().then(function(data) {

            var equipmentList = data.equipment

            for (i = 0; i < 13; i++) {
                $("#equipResults").append("<p id='" + [i] + "'>" + equipmentList[i].name + "</p>")
            }

            $("#equipResults").on("click", "p", function() {
                var getId = $(this)
                    .attr("id")
                var armorSelect = data.equipment[getId].index
                showArmor(armorSelect)
            });
        })
    })        
};

var showArmor = function(armor) {
    $("#equipInfo").remove();

    var $equipInfo = $("<div class='col-sm-10' id='equipInfo'></div>")
    $("#rowCont").append($equipInfo);

    fetch("https://www.dnd5eapi.co/api/equipment/" + armor).then(function(response) {
        response.json().then(function(data) {
            $("#equipInfo").append("<p>" + data.name + "</p>")
                .append("<p>Armor Category: " + data.armor_category + "</p>")
                .append("<p>AC : " + data.armor_class.base + "</p>")
                .append("<p>Dex Bonus: " + data.armor_class.dex_bonus + "</p>")
                .append("<p>Strength Minimum: " + data.str_minimum + "</p>")
                .append("<p>Weight: " + data.weight + "</p>")

        })
    })
};

var advGearCategory = function() {
    $("#mainInfoContainer").remove();

    var $mainCont = $("<div class='col-sm-12' id='mainInfoContainer'></div>")
    var $rowCont = $("<div class='row' id='rowCont'></div>")
    var $equipResults = $("<div class='col-sm-12' id='equipResults'></div>")
    
    $("#referenceContainer").append($mainCont);
    $("#mainInfoContainer").append($rowCont)
    $("#rowCont").append($equipResults);

    fetch("https://www.dnd5eapi.co/api/equipment-categories/adventuring-gear").then(function(response) {
        response.json().then(function(data) {

            var gear = data.equipment

            for(i = 0; i < gear.length; i++) {
                $("#equipResults").append("<p id='" + [i] + "'>" + gear[i].name + "</p>")
            }
        })
    })
};

var spellsCategory = function(spells) {
    $("#mainInfoContainer").remove();
    fetch("https://www.dnd5eapi.co/api/spells?school=" + spells).then(function(response) {
        response.json().then(function(data) {

            var listSpells = data.results

            var $mainCont = $("<div class='col-sm-12' id='mainInfoContainer'></div>")
            var $rowCont = $("<div class='row' id='rowCont'></div>")
            var $spellResults = $("<div class='col-sm-2' id='spellResults'></div>")
            var $spellInfo = $("<div class='col-sm-10' id='spellInfo'></div>")
            
            $("#referenceContainer").append($mainCont);
            $("#mainInfoContainer").append($rowCont)
            $("#rowCont").append($spellResults);
            $("#rowCont").append($spellInfo);

            for(i = 0; i < listSpells.length; i++) {
            $("#spellResults").append("<p id='" + [i] + "'>" + listSpells[i].name + "</p>")
            }

            $("#spellResults").on("click", "p", function() {
                var getId = $(this)
                    .attr("id")
                var spellSelect = data.results[getId].index
                showSpell(spellSelect)
            });
        })
    })
};

var spellLevelCat = function(spells) {
    $("#mainInfoContainer").remove();
    fetch("https://www.dnd5eapi.co/api/spells?level=" + spells).then(function(response) {
        response.json().then(function(data) {

            var listSpells = data.results

            var $mainCont = $("<div class='col-sm-12' id='mainInfoContainer'></div>")
            var $rowCont = $("<div class='row' id='rowCont'></div>")
            var $spellResults = $("<div class='col-sm-2' id='spellResults'></div>")
            var $spellInfo = $("<div class='col-sm-10' id='spellInfo'></div>")
            
            $("#referenceContainer").append($mainCont);
            $("#mainInfoContainer").append($rowCont)
            $("#rowCont").append($spellResults);
            $("#rowCont").append($spellInfo);

            for(i = 0; i < listSpells.length; i++) {
            $("#spellResults").append("<p id='" + [i] + "'>" + listSpells[i].name + "</p>")
            }

            $("#spellResults").on("click", "p", function() {
                var getId = $(this)
                    .attr("id")
                var spellSelect = data.results[getId].index
                showSpell(spellSelect)
            });
        })
    })
};

var showSpell = function(spellInfo) {
    $("#spellInfo").remove();

    var $spellInfo = $("<div class='col-sm-10' id='spellInfo'></div>")
    $("#rowCont").append($spellInfo);

    fetch("https://www.dnd5eapi.co/api/spells/" + spellInfo).then(function(response) {
        response.json().then(function(data) {
            $("#spellInfo").append("<p>" + data.name + "</p>")
            $("#spellInfo").append("<p>" + data.desc[0] + "</p>")
            if(data.higher_level) {
            $("#spellInfo").append("<p>At Higher Levels: " + data.higher_level[0] + "</p>")
            }
            $("#spellInfo").append("<p>Range: " + data.range + "</p>")
            $("#spellInfo").append("<p>Duration: " + data.duration + "</p>")
            $("#spellInfo").append("<p>Casting Time: " + data.casting_time + "</p>")
            $("#spellInfo").append("<p>Spell Level: " + data.level + "</p>")
        })
    })
};

var monsterList = function(cr) {
    $("#mainInfoContainer").remove();

    var $mainCont = $("<div class='col-sm-12' id='mainInfoContainer'></div>")
    var $rowCont = $("<div class='row' id='rowCont'></div>")
    var $monsterResults = $("<div class='col-sm-2' id='monsterResults'></div>")
    var $monsterInfo = $("<div class='col-sm-10' id='monsterInfo'></div>")
    
    $("#referenceContainer").append($mainCont);
    $("#mainInfoContainer").append($rowCont)
    $("#rowCont").append($monsterResults);
    $("#rowCont").append($monsterInfo);

    fetch("https://www.dnd5eapi.co/api/monsters?challenge_rating=" + cr).then(function(response) {
        response.json().then(function(data) {

            var monList = data.results

            for(i = 0; i < monList.length; i++) {
                $("#monsterResults").append("<p id='" + [i] + "'>" + monList[i].name + "</p>")
            }
            $("#monsterResults").on("click", "p", function() {
                var getId = $(this)
                    .attr("id")
                var monsterSelect = data.results[getId].index
                showMonster(monsterSelect)
            });
        })
    })
};

var showMonster = function(monster) {
    $("#monsterInfo").remove();

    var $monsterInfo = $("<div class='col-sm-10' id='monsterInfo'></div>")
    $("#rowCont").append($monsterInfo);

    fetch("https://www.dnd5eapi.co/api/monsters/" + monster).then(function(response) {
        response.json().then(function(data) {
            $("#monsterInfo").append("<p>Name: " + data.name + "</p>")
                .append("<p>Size: " + data.size + "</p>")
                .append("<p>Type: " + data.type + "</p>")
                .append("<p>AC: " + data.armor_class + "</p>")
                .append("<p>HP:  " + data.hit_points + "</p>")
                .append("<p>Speed: " + data.speed.walk + "</p>")
                .append("<p>Size: " + data.size + "</p>")
                .append("<p>Core Stats: </p>")
                .append("<p>STR: " + data.strength + "</p>")
                .append("<p>DEX: " + data.dexterity + "</p>")
                .append("<p>CON: " + data.constitution + "</p>")
                .append("<p>INT: " + data.intelligence + "</p>")
                .append("<p>WIS: " + data.wisdom + "</p>")
                .append("<p>CHA: " + data.charisma + "</p>")
                .append("<p>Damage Vulnerabilities: " + data.damage_vulnerabilities + "</p>")
                .append("<p>Damage Resistances: " + data.damage_resistances + "</p>")
                .append("<p>Damage Immunities: " + data.damage_immunities + "</p>")
                .append("<p>Experience Points: " + data.xp + "</p>")
                .append("<p>Actions: </p>")

                var abilities = data.actions

                for(i = 0; i < abilities.length; i++) {
                    $("#monsterInfo").append("<p>" + abilities[i].name + "</p>")
                        .append("<p>" + abilities[i].desc + "</p>")
                }


        })
    })
}

// Selecting the click option and feeding it into the call
$("#abilitiesInfo").on("click", function() {
    abilityScores()
});

$("#skillsInfo").on("click", function() {
    skillsList()
});

$("#languagesInfo").on("click", function() {
    languagesList()
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

$("#weapons").on("click", function() {
    weaponCategory()
});

$("#armor").on("click", function() {
    armorCategory()
});

$("#advGear").on("click", function() {
    advGearCategory()
});

$("#spellSchool").on("click", "p", function() {
    var selectText = $(this)
        .text()
        .trim();
        console.log(selectText)
    spellsCategory(selectText)
});

$("#spellLevel").on("click", "p", function() {
    var selectText = $(this)
        .text()
        .trim();
    spellLevelCat(selectText)
});

$("#monsters").on("click", "p", function() {
    var selectText = $(this)
        .text()
        .trim();
    var passThrough = selectText.split(" ")
    monsterList(passThrough[2])
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
         // var storageId = time + day;
        // var getStoredText = JSON.parse(localStorage.getItem(storageId));
        // console.log(storageId);

        // $('tr').find(name)(getStoredText);


        locationId = time + ", " + day;
        localStorage.setItem(locationId, JSON.stringify(name));
        console.log(locationId);


    })
})
