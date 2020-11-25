// dropdown for characters/ability score
var abilityScores = function() {
    $("#mainInfoContainer").remove();
    
    // creating and appending all areas
    var $mainCont = $("<div class='col-sm-12' id='mainInfoContainer'></div>")
    var $rowCont = $("<div class='row' id='rowCont'></div>")
    var $statsCol = $("<div class='col-sm-2' id='statsCol'></div>")
    var $infoBlockCol = $("<div class='col-sm-10' id='infoBlockCol'></div>")

    $("#referenceContainer").append($mainCont)
    $("#mainInfoContainer").append($rowCont)
    $("#rowCont").append($statsCol)
    $("#rowCont").append($infoBlockCol)

    $("#statsCol").append("<p class='hover-ef' id='strCont'>Strength (STR): </p>")
    $("#statsCol").append("<p class='hover-ef' id='dexCont'>Dexterity (DEX): </p>")
    $("#statsCol").append("<p class='hover-ef' id='conCont'>Constitution (CON): </p>")
    $("#statsCol").append("<p class='hover-ef' id='intCont'>Intelligence (INT): </p>")
    $("#statsCol").append("<p class='hover-ef' id='wisCont'>Wisdom (WIS): </p>")
    $("#statsCol").append("<p class='hover-ef' id='chaCont'>Charisma (CHA): </p>")

    // listeners for the list options
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

// the descriptions for the abilities based on what's selected
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
};

// logic for skills selected pulled from API to display and append
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
                $("#statsCol").append("<p class='hover-ef' id='" + [i] + "'>" + skills[i].name + "</p>")
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

// description of the skills based on selection from skillsList and appending to screen
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

// API call for the list of languages and appending them to screen
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

//Logic for appending all class information and appending to the information box
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
};1

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
};

// API call for weapon informatio and appending list to info box
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
                $("#equipResults").append("<p class='hover-ef' id='" + [i] + "'>" + equipmentList[i].name + "</p>")
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

//showing weapon data based on selection from weaponCategory
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
};

// API call get and append armor list
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
                $("#equipResults").append("<p class='hover-ef' id='" + [i] + "'>" + equipmentList[i].name + "</p>")
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

// getting and appending information about the armor selection from previous menu
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

// API call to get and append a list of adventuring gear
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

// API call to get and append information based on spell school selection
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

// API call to get and append information based on spell level selection
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
            $("#spellResults").append("<p class='hover-ef' id='" + [i] + "'>" + listSpells[i].name + "</p>")
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

// displaying information based on the selection from either spellLevelCat or spellsCategory
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

// API call to get and append a list of monsters based on their challenge rating
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
                $("#monsterResults").append("<p class='hover-ef' id='" + [i] + "'>" + monList[i].name + "</p>")
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

// pulling all monster information based on the selection from monsterList and appending the information
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
};

// Listeners for all of the drop down menus to begin call to the API
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

//CALENDAR

//when the document loads, this function runs

var scheduleData = JSON.parse(localStorage.getItem("scheduleCache")) || [];

$(document).ready(function () {

    //pull data from local if it exists
    console.log(scheduleData);

    //if someone got scheduled for specific day and time this happens
    //adds number and removes class that hides it from start
    scheduleData.forEach(function (item) {
        if (item.time == '8to12pm') {
            if (item.day == 'monday') {
                $('.eightam-mon-text').removeClass('nothing')
                $('#eightam-mon-list').removeClass('nothing')
                $('#eightam-mon-list')[0].textContent = parseInt($('#eightam-mon-list')[0].textContent) + 1
            }
            else if (item.day == 'tuesday') {
                $('.eightam-tue-text').removeClass('nothing')
                $('#eightam-tue-list').removeClass('nothing')
                $('#eightam-tue-list')[0].textContent = parseInt($('#eightam-tue-list')[0].textContent) + 1

            }
            else if (item.day == 'wednesday') {
                $('.eightam-wed-text').removeClass('nothing')
                $('#eightam-wed-list').removeClass('nothing')
                $('#eightam-wed-list')[0].textContent = parseInt($('#eightam-wed-list')[0].textContent) + 1
            }
            else if (item.day == 'thursday') {
                $('.eightam-thur-text').removeClass('nothing')
                $('#eightam-thur-list').removeClass('nothing')
                $('#eightam-thur-list')[0].textContent = parseInt($('#eightam-thur-list')[0].textContent) + 1
            }
            else if (item.day == 'friday') {
                $('.eightam-fri-text').removeClass('nothing')
                $('#eightam-fri-list').removeClass('nothing')
                $('#eightam-fri-list')[0].textContent = parseInt($('#eightam-fri-list')[0].textContent) + 1
            }
            else if (item.day == 'saturday') {
                $('.eightam-sat-text').removeClass('nothing')
                $('#eightam-sat-list').removeClass('nothing')
                $('#eightam-sat-list')[0].textContent = parseInt($('#eightam-sat-list')[0].textContent) + 1
            }
            else if (item.day == 'sunday') {
                $('.eightam-sun-text').removeClass('nothing')
                $('#eightam-sun-list').removeClass('nothing')
                $('#eightam-sun-list')[0].textContent = parseInt($('#eightam-sun-list')[0].textContent) + 1
            }
        }
        else if (item.time == '12to4pm') {
            if (item.day == 'monday') {
                $('.twelve-mon-text').removeClass('nothing')
                $('#twelve-mon-list').removeClass('nothing')
                $('#twelve-mon-list')[0].textContent = parseInt($('#twelve-mon-list')[0].textContent) + 1
            }
            else if (item.day == 'tuesday') {
                $('.twelve-tue-text').removeClass('nothing')
                $('#twelve-tue-list').removeClass('nothing')
                $('#twelve-tue-list')[0].textContent = parseInt($('#twelve-tue-list')[0].textContent) + 1
            }
            else if (item.day == 'wednesday') {
                $('.twelve-wed-text').removeClass('nothing')
                $('#twelve-wed-list').removeClass('nothing')
                $('#twelve-wed-list')[0].textContent = parseInt($('#twelve-wed-list')[0].textContent) + 1
            }
            else if (item.day == 'thursday') {
                $('.twelve-thur-text').removeClass('nothing')
                $('#twelve-thur-list').removeClass('nothing')
                $('#twelve-thur-list')[0].textContent = parseInt($('#twelve-thur-list')[0].textContent) + 1
            }
            else if (item.day == 'friday') {
                $('.twelve-fri-text').removeClass('nothing')
                $('#twelve-fri-list').removeClass('nothing')
                $('#twelve-fri-list')[0].textContent = parseInt($('#twelve-fri-list')[0].textContent) + 1
            }
            else if (item.day == 'saturday') {
                $('.twelve-sat-text').removeClass('nothing')
                $('#twelve-sat-list').removeClass('nothing')
                $('#twelve-sat-list')[0].textContent = parseInt($('#twelve-sat-list')[0].textContent) + 1
            }
            else if (item.day == 'sunday') {
                $('.twelve-sun-text').removeClass('nothing')
                $('#twelve-sun-list').removeClass('nothing')
                $('#twelve-sun-list')[0].textContent = parseInt($('#twelve-sun-list')[0].textContent) + 1
            }
        }
        else if (item.time == '4to8pm') {
            if (item.day == 'monday') {
                $('.four-mon-text').removeClass('nothing')
                $('#four-mon-list').removeClass('nothing')
                $('#four-mon-list')[0].textContent = parseInt($('#four-mon-list')[0].textContent) + 1
            }
            else if (item.day == 'tuesday') {
                $('.four-tue-text').removeClass('nothing')
                $('#four-tue-list').removeClass('nothing')
                $('#four-tue-list')[0].textContent = parseInt($('#four-tue-list')[0].textContent) + 1
            }
            else if (item.day == 'wednesday') {
                $('.four-wed-text').removeClass('nothing')
                $('#four-wed-list').removeClass('nothing')
                $('#four-wed-list')[0].textContent = parseInt($('#four-wed-list')[0].textContent) + 1
            }
            else if (item.day == 'thursday') {
                $('.four-thur-text').removeClass('nothing')
                $('#four-thur-list').removeClass('nothing')
                $('#four-thur-list')[0].textContent = parseInt($('#four-thur-list')[0].textContent) + 1
            }
            else if (item.day == 'friday') {
                $('.four-fri-text').removeClass('nothing')
                $('#four-fri-list').removeClass('nothing')
                $('#four-fri-list')[0].textContent = parseInt($('#four-fri-list')[0].textContent) + 1
            }
            else if (item.day == 'saturday') {
                $('.four-sat-text').removeClass('nothing')
                $('#four-sat-list').removeClass('nothing')
                $('#four-sat-list')[0].textContent = parseInt($('#four-sat-list')[0].textContent) + 1
            }
            else if (item.day == 'sunday') {
                $('.four-sun-text').removeClass('nothing')
                $('#four-sun-list').removeClass('nothing')
                $('#four-sun-list')[0].textContent = parseInt($('#four-sun-list')[0].textContent) + 1
            }
        }
        else if (item.time == '8to12am') {
            // console.log('nope');
            if (item.day == 'monday') {
                $('.eightpm-mon-text').removeClass('nothing')
                $('#eightpm-mon-list').removeClass('nothing')
                $('#eightpm-mon-list')[0].textContent = parseInt($('#eightpm-mon-list')[0].textContent) + 1
            }
            else if (item.day == 'tuesday') {
                $('.eightpm-tue-text').removeClass('nothing')
                $('#eightpm-tue-list').removeClass('nothing')
                $('#eightpm-tue-list')[0].textContent = parseInt($('#eightpm-tue-list')[0].textContent) + 1
            }
            else if (item.day == 'wednesday') {
                $('.eightpm-wed-text').removeClass('nothing')
                $('#eightpm-wed-list').removeClass('nothing')
                $('#eightpm-wed-list')[0].textContent = parseInt($('#eightpm-wed-list')[0].textContent) + 1
            }
            else if (item.day == 'thursday') {
                $('.eightpm-thur-text').removeClass('nothing')
                $('#eightpm-thur-list').removeClass('nothing')
                $('#eightpm-thur-list')[0].textContent = parseInt($('#eightpm-thur-list')[0].textContent) + 1
            }
            else if (item.day == 'friday') {
                $('.eightpm-fri-text').removeClass('nothing')
                $('#eightpm-fri-list').removeClass('nothing')
                $('#eightpm-fri-list')[0].textContent = parseInt($('#eightpm-fri-list')[0].textContent) + 1
            }
            else if (item.day == 'saturday') {
                $('.eightpm-sat-text').removeClass('nothing')
                $('#eightpm-sat-list').removeClass('nothing')
                $('#eightpm-sat-list')[0].textContent = parseInt($('#eightpm-sat-list')[0].textContent) + 1
            }
            else if (item.day == 'sunday') {
                $('.eightpm-sun-text').removeClass('nothing')
                $('#eightpm-sun-list').removeClass('nothing')
                $('#eightpm-sun-list')[0].textContent = parseInt($('#eightpm-sun-list')[0].textContent) + 1
            }
        }
    });

    //on click of 'book' this function runs
    $('#btnSubmit').click(function () {
        var name = $('#name').val();
        var time = $('#time').val();
        var day = $('#days').val();

        location.reload();

        console.log('Info', {
            name: name,
            time: time,
            day: day
        })

        //if you select a certain time and day you will be added to corresponding day
        if (time == '8to12pm') {
            if (day == 'monday') {
                $('.eightam-mon-text').removeClass('nothing')
                $('#eightam-mon-list').removeClass('nothing')
                $('#eightam-mon-list')[0].textContent = parseInt($('#eightam-mon-list')[0].textContent) + 1
            }
            else if (day == 'tuesday') {
                $('.eightam-tue-text').removeClass('nothing')
                $('#eightam-tue-list').removeClass('nothing')
                $('#eightam-tue-list')[0].textContent = parseInt($('#eightam-tue-list')[0].textContent) + 1
            }
            else if (day == 'wednesday') {
                $('.eightam-wed-text').removeClass('nothing')
                $('#eightam-wed-list').removeClass('nothing')
                $('#eightam-wed-list')[0].textContent = parseInt($('#eightam-wed-list')[0].textContent) + 1
            }
            else if (day == 'thursday') {
                $('.eightam-thur-text').removeClass('nothing')
                $('#eightam-thur-list').removeClass('nothing')
                $('#eightam-thur-list')[0].textContent = parseInt($('#eightam-thur-list')[0].textContent) + 1
            }
            else if (day == 'friday') {
                $('.eightam-fri-text').removeClass('nothing')
                $('#eightam-fri-list').removeClass('nothing')
                $('#eightam-fri-list')[0].textContent = parseInt($('#eightam-fri-list')[0].textContent) + 1
            }
            else if (day == 'saturday') {
                $('.eightam-sat-text').removeClass('nothing')
                $('#eightam-sat-list').removeClass('nothing')
                $('#eightam-sat-list')[0].textContent = parseInt($('#eightam-sat-list')[0].textContent) + 1
            }
            else if (day == 'sunday') {
                $('.eightam-sun-text').removeClass('nothing')
                $('#eightam-sun-list').removeClass('nothing')
                $('#eightam-sun-list')[0].textContent = parseInt($('#eightam-sun-list')[0].textContent) + 1
            }
        }
        else if (time == '12to4pm') {
            if (day == 'monday') {
                $('.twelve-mon-text').removeClass('nothing')
                $('#twelve-mon-list').removeClass('nothing')
                $('#twelve-mon-list')[0].textContent = parseInt($('#twelve-mon-list')[0].textContent) + 1
            }
            else if (day == 'tuesday') {
                $('.twelve-tue-text').removeClass('nothing')
                $('#twelve-tue-list').removeClass('nothing')
                $('#twelve-tue-list')[0].textContent = parseInt($('#twelve-tue-list')[0].textContent) + 1
            }
            else if (day == 'wednesday') {
                $('.twelve-wed-text').removeClass('nothing')
                $('#twelve-wed-list').removeClass('nothing')
                $('#twelve-wed-list')[0].textContent = parseInt($('#twelve-wed-list')[0].textContent) + 1
            }
            else if (day == 'thursday') {
                $('.twelve-thur-text').removeClass('nothing')
                $('#twelve-thur-list').removeClass('nothing')
                $('#twelve-thur-list')[0].textContent = parseInt($('#twelve-thur-list')[0].textContent) + 1
            }
            else if (day == 'friday') {
                $('.twelve-fri-text').removeClass('nothing')
                $('#twelve-fri-list').removeClass('nothing')
                $('#twelve-fri-list')[0].textContent = parseInt($('#twelve-fri-list')[0].textContent) + 1
            }
            else if (day == 'saturday') {
                $('.twelve-sat-text').removeClass('nothing')
                $('#twelve-sat-list').removeClass('nothing')
                $('#twelve-sat-list')[0].textContent = parseInt($('#twelve-sat-list')[0].textContent) + 1
            }
            else if (day == 'sunday') {
                $('.twelve-sun-text').removeClass('nothing')
                $('#twelve-sun-list').removeClass('nothing')
                $('#twelve-sun-list')[0].textContent = parseInt($('#twelve-sun-list')[0].textContent) + 1
            }
        }
        else if (time == '4to8pm') {
            if (day == 'monday') {
                $('.four-mon-text').removeClass('nothing')
                $('#four-mon-list').removeClass('nothing')
                $('#four-mon-list')[0].textContent = parseInt($('#four-mon-list')[0].textContent) + 1
            }
            else if (day == 'tuesday') {
                $('.four-tue-text').removeClass('nothing')
                $('#four-tue-list').removeClass('nothing')
                $('#four-tue-list')[0].textContent = parseInt($('#four-tue-list')[0].textContent) + 1
            }
            else if (day == 'wednesday') {
                $('.four-wed-text').removeClass('nothing')
                $('#four-wed-list').removeClass('nothing')
                $('#four-wed-list')[0].textContent = parseInt($('#four-wed-list')[0].textContent) + 1
            }
            else if (day == 'thursday') {
                $('.four-thur-text').removeClass('nothing')
                $('#four-thur-list').removeClass('nothing')
                $('#four-thur-list')[0].textContent = parseInt($('#four-thur-list')[0].textContent) + 1
            }
            else if (day == 'friday') {
                $('.four-fri-text').removeClass('nothing')
                $('#four-fri-list').removeClass('nothing')
                $('#four-fri-list')[0].textContent = parseInt($('#four-fri-list')[0].textContent) + 1
            }
            else if (day == 'saturday') {
                $('.four-sat-text').removeClass('nothing')
                $('#four-sat-list').removeClass('nothing')
                $('#four-sat-list')[0].textContent = parseInt($('#four-sat-list')[0].textContent) + 1
            }
            else if (day == 'sunday') {
                $('.four-sun-text').removeClass('nothing')
                $('#four-sun-list').removeClass('nothing')
                $('#four-sun-list')[0].textContent = parseInt($('#four-sun-list')[0].textContent) + 1
            }
        }
        else if (time == '8to12am') {
            if (day == 'monday') {
                $('.eightpm-mon-text').removeClass('nothing')
                $('#eightpm-mon-list').removeClass('nothing')
                $('#eightpm-mon-list')[0].textContent = parseInt($('#eightpm-mon-list')[0].textContent) + 1
            }
            else if (day == 'tuesday') {
                $('.eightpm-tue-text').removeClass('nothing')
                $('#eightpm-tue-list').removeClass('nothing')
                $('#eightpm-tue-list')[0].textContent = parseInt($('#eightpm-tue-list')[0].textContent) + 1
            }
            else if (day == 'wednesday') {
                $('.eightpm-wed-text').removeClass('nothing')
                $('#eightpm-wed-list').removeClass('nothing')
                $('#eightpm-wed-list')[0].textContent = parseInt($('#eightpm-wed-list')[0].textContent) + 1
            }
            else if (day == 'thursday') {
                $('.eightpm-thur-text').removeClass('nothing')
                $('#eightpm-thur-list').removeClass('nothing')
                $('#eightpm-thur-list')[0].textContent = parseInt($('#eightpm-thur-list')[0].textContent) + 1
            }
            else if (day == 'friday') {
                $('.eightpm-fri-text').removeClass('nothing')
                $('#eightpm-fri-list').removeClass('nothing')
                $('#eightpm-fri-list')[0].textContent = parseInt($('#eightpm-fri-list')[0].textContent) + 1
            }
            else if (day == 'saturday') {
                $('.eightpm-sat-text').removeClass('nothing')
                $('#eightpm-sat-list').removeClass('nothing')
                $('#eightpm-sat-list')[0].textContent = parseInt($('#eightpm-sat-list')[0].textContent) + 1
            }
            else if (day == 'sunday') {
                $('.eightpm-sun-text').removeClass('nothing')
                $('#eightpm-sun-list').removeClass('nothing')
                $('#eightpm-sun-list')[0].textContent = parseInt($('#eightpm-sun-list')[0].textContent) + 1
            }
        }

        //shorthand for (if true) = ? (else) = :
        var scheduleList = localStorage.getItem('scheduleCache') ? localStorage.getItem('scheduleCache') : []
        var scheduleVal = {}

        scheduleVal.name = name;
        scheduleVal.time = time;
        scheduleVal.day = day;

        if (scheduleList.length > 1) {
            //If theres alerady data we need to grab it, modify it, and restore it

            //grab it
            var personInfo = scheduleList.toString();
            var tempInfo = JSON.parse(personInfo);

            //Modify it
            tempInfo.push(scheduleVal);
            scheduleList = tempInfo;

        } else {
            //If theres nothing currently we add our first Item
            scheduleList.push(scheduleVal)
        }
        //Store it
        localStorage.setItem('scheduleCache', JSON.stringify(scheduleList));
        console.log(scheduleList);
        console.log(personInfo);
    })
})

//on click of the "clear all" btn clears all data from the calendar and local storage
$('#btnClear').click(function () {
    localStorage.removeItem('scheduleCache');
    $('.schedule-info').addClass('nothing')
    $('.schedule-text').addClass('nothing')
})

var modal = document.getElementById("myModal");
//when you click a specific section on the table this happens
$('td').click(function (event) {
    //display modal for people scheduled
    modal.style.display = "block";

    //clear the data when clicked on a different date
    $('.modal-people').html('');
    console.log(event.target.id);

    var cellInfo = event.target.id.split('-');

    var dataForHourDay = scheduleData.filter(function (item) {
        return item.time === cellInfo[0] && item.day === cellInfo[1];
    })
    //console.log(cellInfo);
    //console.log(dataForHourDay);

    //for each item in a specific day create a list item for each of the names scheduled
    dataForHourDay.forEach(function (item) {
        //create a list item and append it to the ul
        var li = document.createElement("li");
        li.textContent = item.name;
        $('.modal-people').append(li);
        $(li).attr('id', 'people-on-day');
    })
})

//when you click on anything other than the modal it closes
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";

    }
}