//nesisary Componants MVP
    //print screen
    //5 componants types w/ 3-5 of each to pull- water, rough terain, building, moster, player
    //Players Monster Terain - needs to be in tabs/ not take up all the space
    //write in componants    
    //for monster and player, need to be color coded, numbered, or have editable text
//Componants to shoot for as have time
    //auto spawning element of the same type when one is dragged
    //3 map sizes and hex option based fixed bottom optoin bar
    // 1-4 prebuilt maps hosted on main page

//drag
$( function() {
    $( ".mymapdiv" ).draggable();
    var someArray = [];
  } );

//SPAWNING MONSTERS-----------------------------------------------------

//spon new monster to Drag
var tokenNum = 2
var createNewMonsterToken = function(){
console.log(tokenNum)
//make parent componant
var parent = document.getElementById("newMonster")
var style = document.createElement('div');
style.classList.add("mymapdiv")
style.classList.add("charTop")
style.setAttribute("id", `mymapdivM${tokenNum}`)
style.innerHTML = `<img src="./assets/images/Tokens/monster.png"><b>${tokenNum}</b>`;
parent.appendChild(style);
//make dragable
$( function() {
    $( ".mymapdiv" ).draggable();
    var someArray = [];
  } );
  //end
console.log(style)
console.log(tokenNum)
tokenNum = tokenNum +1
return
}

// var Monster = document.getElementById("newMonster")
// Monster.addEventListener("click", createNewToken);

//spon new boss monster to Drag-----------------------test Icon
var bossTokenNum = 2
var Trial = ""
var createNewBossToken = function(){
    // if (waterTrial != IDINeed){
//     console.log(Trial)
//     console.log(IDIneed)
//      return}
console.log(bossTokenNum)
//make parent componant
var parent = document.getElementById("newBossMonster")
var style = document.createElement('div');
style.classList.add("mymapdiv")
style.classList.add("charTop")
style.setAttribute("id", `mymapdivB${bossTokenNum}`)
style.innerHTML = `<img src="./assets/images/Tokens/boss.png"><b>${bossTokenNum}</b>`;
parent.appendChild(style);
//make dragable
$( function() {
    $( ".mymapdiv" ).draggable();
    var someArray = [];
  } );
//end
console.log(style)
console.log(bossTokenNum)
bossTokenNum = bossTokenNum +1
return
}

 var bossMonster = document.getElementById("newBossMonster")
 bossMonster.addEventListener("click", createNewBossToken);

//spon new water to Drag
var waterTokenNum = 2
var createNewWaterToken = function(i){
//make parent componant
var parent = document.getElementById("newWater")
var style = document.createElement('div');
style.classList.add("mymapdiv")
style.setAttribute("id", `mymapdivW${waterTokenNum}`)
style.innerHTML = `<img src="./assets/images/Tokens/water.png">`;
parent.appendChild(style);
//make dragable
$( function() {
    $( ".mymapdiv" ).draggable();
    var someArray = [];
  } );
//end
waterTrial = document.getElementById(`mymapdivW${waterTokenNum}`)
console.log(style)
console.log(waterTokenNum)
waterTokenNum = waterTokenNum +1
return
}

//spon new small water to Drag
var waterTokenNumS = 2
var createNewWaterTokenS = function(i){
//make parent componant
var parent = document.getElementById("newWaterS")
var style = document.createElement('div');
style.classList.add("mymapdiv")
style.setAttribute("id", `mymapdivW${waterTokenNumS}`)
style.innerHTML = `<img src="./assets/images/Tokens/water.png">`;
parent.appendChild(style);
//make dragable
$( function() {
    $( ".mymapdiv" ).draggable();
    var someArray = [];
  } );
//end
console.log(style)
console.log(waterTokenNumS)
waterTokenNumS = waterTokenNumS +1
return
}

//spon new wrough terain to Drag
var wroughTokenNum = 2
var createNewWroughToken = function(i){
//make parent componant
var parent = document.getElementById("newWrough")
var style = document.createElement('div');
style.classList.add("mymapdiv")
style.setAttribute("id", `mymapdivWr${wroughTokenNum}`)
style.innerHTML = `<img src="./assets/images/Tokens/wroughTerain.png">`;
parent.appendChild(style);
//make dragable
$( function() {
    $( ".mymapdiv" ).draggable();
    var someArray = [];
  } );
//end
wroughTrial = document.getElementById(`mymapdivWr${waterTokenNum}`)
console.log(style)
console.log(wroughTokenNum)
wroughTokenNum = wroughTokenNum +1
return
}

//spon new wrough terain SM to Drag
var wroughTokenNumS = 2
var createNewWroughTokenS = function(i){
//make parent componant
var parent = document.getElementById("newWallS")
var style = document.createElement('div');
style.classList.add("mymapdiv")
style.setAttribute("id", `mymapdivWr${wroughTokenNumS}`)
style.innerHTML = `<img src="./assets/images/Tokens/wall.png">`;
parent.appendChild(style);
//make dragable
$( function() {
    $( ".mymapdiv" ).draggable();
    var someArray = [];
  } );
//end
wroughTrial = document.getElementById(`mymapdivWr${waterTokenNumS}`)
console.log(style)
console.log(wroughTokenNumS)
wroughTokenNumS = wroughTokenNumS +1
return
}

//spon new wall to Drag
var wallTokenNum = 2
var createNewWallToken = function(i){
//make parent componant
var parent = document.getElementById("newWall")
var style = document.createElement('div');
style.classList.add("mymapdiv")
style.setAttribute("id", `mymapdivWa${wallTokenNum}`)
style.innerHTML = `<img src="./assets/images/Tokens/wall.png">`;
parent.appendChild(style);
//make dragable
$( function() {
    $( ".mymapdiv" ).draggable();
    var someArray = [];
  } );
//end
console.log(style)
console.log(wallTokenNum)
wallTokenNum = wallTokenNum +1
return
}

//spon new wall SM to Drag
var wallTokenNumS = 2
var createNewWallTokenS = function(i){
//make parent componant
var parent = document.getElementById("newWallS")
var style = document.createElement('div');
style.classList.add("mymapdiv")
style.setAttribute("id", `mymapdivWa${wallTokenNumS}`)
style.innerHTML = `<img src="./assets/images/Tokens/wall.png">`;
parent.appendChild(style);
//make dragable
$( function() {
    $( ".mymapdiv" ).draggable();
    var someArray = [];
  } );
//end
console.log(style)
console.log(wallTokenNumS)
wallTokenNumS = wallTokenNumS +1
return
}

//SAVE MAP------------------------------------------------------------
var takeshot = function() { 
    let div = 
        document.getElementById('makeMap'); 

    // Use the html2canvas to take a screenshot 
    // and append it* note button must be at top of screen
    html2canvas(div).then( 
        function (canvas) { 
            document 
            .getElementById('output') 
            .appendChild(canvas); 
        }) 
    }