//next steps
//find way to save images Node JS etc.??
//change grid from image based to bg image change on click via class change via JS- 3 option clickable squares - taerrain options
    //NOTES- keep player/monster pieces as dragable - 
    //may try to make them possible via dropdown & sortable - snap to sortable each box? - NOTE boxes MUST be fixed height
    //spawn map boxes on page load
      //chose yor map size ^>^- give 5 options inc cell phone play
//drag
$( function() {
    $( ".mymapdiv" ).draggable({
      containment: "document"
    }
    );
    var someArray = [];
  } )

//color change random---------------------
var randomColorize = function(){
  var colorsArray = [ "colorM1", "colorM2", "colorM3", "colorM4", "colorM5", 'colorM6', 'colorM7']
  console.log("running randomColorize")
  return  colorsArray[Math.floor(Math.random()*6+.2)]
}

//SPAWNING MONSTERS-----------------------------------------------------

//spon new monster to Drag
var tokenNum = 2
var createNewMonsterToken = function(){
//console.log(tokenNum)
var monsterColor = randomColorize()
//make parent componant
var parent = document.getElementById("newMonster")
var style = document.createElement('div');
style.classList.add("mymapdiv")
style.classList.add("charTop")
style.setAttribute("id", `mymapdivM${tokenNum}`)
style.innerHTML = `<img class="${monsterColor}" src="./assets/images/Tokens/monster.png"><b>${tokenNum}</b>`;
parent.appendChild(style);
//make dragable
$( function() {
    $( ".mymapdiv" ).draggable({
      containment: "document"
    });
    var someArray = [];
  } );
  //end
//console.log(style)
//console.log(tokenNum)
tokenNum = tokenNum +1
return
}


//spon new boss monster to Drag----------
var bossTokenNum = 2
var Trial = ""
var createNewBossToken = function(){
//console.log(bossTokenNum)
monsterColor = randomColorize()
//make parent componant
var parent = $("#newBossMonster");
var style = document.createElement('div');
style.classList.add("mymapdiv")
style.classList.add("charTop")
style.setAttribute("id", `mymapdivB${bossTokenNum}`)
style.innerHTML = `<img class="${monsterColor}" src="./assets/images/Tokens/boss.png"><b>${bossTokenNum}</b>`;
parent.append(style);
//make dragable
$( function() {
    $( ".mymapdiv" ).draggable({
      containment: "document"
    });  
    var someArray = [];
  } );
//end
//console.log(bossTokenNum)
bossTokenNum = bossTokenNum +1
return
}

//  var bossMonster = document.getElementById("newBossMonster") //saving code in case need old spawn on click ability
//  bossMonster.addEventListener("click", createNewBossToken);
//Block Color Change-----------------------------------------------------------
var blockColorChange = function(){
  $('.block').click(function() {
    if ( $(this).hasClass('origin') ) {
      $(this).addClass('water').removeClass('origin');
      return
    }
    else if ( $(this).hasClass('water') ) {
      $(this).addClass('terrain')
      $(this).removeClass('water');
      return
    }
    else if ( $(this).hasClass('terrain') ) {
      $(this).addClass('wall');
      $(this).removeClass('terrain');
      return
    }
    else
      $(this).addClass('origin');
      $(this).removeClass('wall');
      return
  })
}
//SPAWN BLOCKS with Class Change Ability---------------------------------------

//Desktop
var blockTokenNum = 0
var createBlocks = function(){
  //Spawn block numbers based on page width
  var widthPage = Math.floor((window.innerWidth-40)/50)*13
  console.log(window.innerWidth)
  console.log(widthPage)
  for (i=0; i<widthPage;i++){
    var parent = $("#mapZone");
    var style = document.createElement('div');
    style.classList.add("origin")
    style.classList.add("block")
    style.setAttribute("id", `mymapdivBlock${blockTokenNum}`)
    style.innerHTML = `<ul></ul>`;
    parent.append(style);
    //curently on this is and ID are only in place in case want to later add sortable to pieces to snap to map
    blockTokenNum = blockTokenNum +1
  }
  //make color click change - NOTE- only add this once not in 4 loop,only after!!!!!
  blockColorChange()
  //end
}

  createBlocks()

//SAVE MAP------------------------------------------------------------
var takeshot = function() { 
    let div = document.getElementById('makeMap'); 

    // Use the html2canvas to take a screenshot 
    // and append it* note button must be at top of screen
    html2canvas(div).then( 
        function (canvas) { 
            document 
            .getElementById('output') 
            .appendChild(canvas); 
           // localStorage.setItem(canvas, canvas.toDataURL());-unusable with these types of layered graphics or possible just becasue not really live at https
        }) 
    }
        //flash alert map was made
  var clickerFlash = function() {
    $(".map-made-alert").fadeIn(500);
    $(".map-made-alert").fadeOut(800);
};

var mapMadeAlrt = document.getElementById("save-map")
mapMadeAlrt.addEventListener("click", clickerFlash);
mapMadeAlrt.addEventListener("click", takeshot);


//RELOAD MAP------------------------------------------------------------
//looking at error code, should work when live on https
var ReloadMap = function() {

  var ReplacableMapZone = document.getElementById('mapZone')
  ReplacableMapZone.innerHTML = '';

  console.log( "hit")
    createBlocks()

}
var mapClearAlrt = document.getElementById("clearmap")
mapClearAlrt.addEventListener("click", ReloadMap);

//HIDE TOKEN BAR----------------------------------------------------------
function hideBar() {
  var tokenBar = document.getElementById("tokenbar");
  tokenBar.classList.toggle("hidebar");



  var tokenButton = document.getElementById("hidetokenbar");
  var tokenButtonText = tokenButton.innerHTML
  console.log(tokenButtonText)
  if (tokenButtonText=="OPEN TOKEN BAR") {
    tokenButton.innerHTML = "HIDE TOKENS & BAR"
    $("#hidetokenbar").removeClass("secondary-button");
    $("#hidetokenbar").addClass("primary-button");
  }
  else {tokenButton.innerHTML = "OPEN TOKEN BAR"
  $("#hidetokenbar").removeClass("primary-button");
  $("#hidetokenbar").addClass("secondary-button");
}


}
var hideTokenBar = document.getElementById("hidetokenbar")
hideTokenBar.addEventListener("click", hideBar);
