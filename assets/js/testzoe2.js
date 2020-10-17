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



//spon new monster to Drag
var tokenNum = 2
var createNewMonsterToken = function(){
console.log(tokenNum)
//make parent componant
var parent = document.getElementById("newMonster")
var style = document.createElement('div');
style.classList.add("mymapdiv")
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

//spon new boss monster to Drag
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
var waterTrial = ""
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



//screenshot to save maps
var takeshot = function() { 
    let div = 
        document.getElementById('makeMap'); 

    // Use the html2canvas 
    // function to take a screenshot 
    // and append it 
    // to the output div 
    html2canvas(div).then( 
        function (canvas) { 
            document 
            .getElementById('output') 
            .appendChild(canvas); 
        }) 
    }