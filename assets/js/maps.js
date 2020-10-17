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


dragElement(document.getElementById("mymapdiv1"))
dragElement(document.getElementById("mymapdiv2"))
dragElement(document.getElementById("mymapdiv3"))
dragElement(document.getElementById("demon"))
dragElement(document.getElementById("barbarian"))
dragElement(document.getElementById("mymapdiv4"))
dragElement(document.getElementById("mymapdiv5"))
dragElement(document.getElementById("mymapdiv6"))

// var dragElement = $( function() {
//     $( "#mymapdiv2" ).draggable();
//   } );

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    //element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


//spon new monster to Drag
var tokenNum = 2
//started code to how to add css class to elements to make them be a drag token
var createNewToken = function(){
console.log(tokenNum)
//make parent componant
var parent = document.getElementById("newMonster")
var style = document.createElement('div');
style.classList.add("mymapdiv")
style.setAttribute("id", `mymapdivM${tokenNum}`)
style.innerHTML = `<img src="./assets/images/Tokens/monster.png"><b>${tokenNum}</b>`;
parent.appendChild(style);
dragElement(document.getElementById(`mymapdivM${tokenNum}`))
console.log(style)
console.log(tokenNum)
tokenNum = tokenNum +1
return
}

// var Monster = document.getElementById("newMonster")
// Monster.addEventListener("click", createNewToken);

//spon new boss monster to Drag
var bossTokenNum = 2
var createNewBossToken = function(){
console.log(bossTokenNum)
//make parent componant
var parent = document.getElementById("newBossMonster")
var style = document.createElement('div');
style.classList.add("mymapdiv")
style.setAttribute("id", `mymapdivB${bossTokenNum}`)
style.innerHTML = `<img src="./assets/images/Tokens/boss.png"><b>${bossTokenNum}</b>`;
parent.appendChild(style);
dragElement(document.getElementById(`mymapdivB${bossTokenNum}`))
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
// console.log(waterTokenNum)
// console.log(i)
console.log(this.value + "this is being called")// try to get object key via value
// if (waterTrial != IDINeed){
//     console.log(waterTrial)
//     console.log(IDIneed)
// return}
//make parent componant
var parent = document.getElementById("newWater")
var style = document.createElement('div');
style.classList.add("mymapdiv")
style.setAttribute("id", `mymapdivW${waterTokenNum}`)
style.innerHTML = `<img src="./assets/images/Tokens/water.png">`;
parent.appendChild(style);
dragElement(document.getElementById(`mymapdivW${waterTokenNum}`))
waterTrial = document.getElementById(`mymapdivW${waterTokenNum}`)
// waterTrial.addEventListener("click", createNewWaterToken);
// console.log(waterTrial)
console.log(style)
console.log(waterTokenNum)
waterTokenNum = waterTokenNum +1
return
}

//var water = document.getElementById("mymapdiv6")
//water.addEventListener("click", createNewWaterToken);



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