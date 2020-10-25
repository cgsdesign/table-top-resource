//nesisary Componants MVP
    //print screen
    //5 componants types w/ 3-5 of each to pull- water, rough terain, building, moster, player
    //Players Monster Terain - needs to be in tabs/ not take up all the space-- can not do with print screen
    //write in componants    
    //for monster and player, need to be color coded, numbered, or have editable text
//Componants to shoot for as have time
    //auto spawning element of the same type when one is dragged--- need TA
    //3 map sizes and hex option based fixed bottom option bar
    // 1-4 prebuilt maps hosted on main page --- priority

//drag
$( function() {
    $( ".mymapdiv" ).draggable({
      containment: "document"
    }
    );
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
    $( ".mymapdiv" ).draggable({
      containment: "document"
    });
    var someArray = [];
  } );
  //end
console.log(style)
console.log(tokenNum)
tokenNum = tokenNum +1
return
}

//spon new boss monster to Drag-----------------------test Icon
var bossTokenNum = 2
var Trial = ""
var createNewBossToken = function(){
console.log(bossTokenNum)
//make parent componant
var parent = $("#newBossMonster");
var style = document.createElement('div');
style.classList.add("mymapdiv")
style.classList.add("charTop")
style.setAttribute("id", `mymapdivB${bossTokenNum}`)
style.innerHTML = `<img src="./assets/images/Tokens/boss.png"><b>${bossTokenNum}</b>`;
parent.append(style);
//make dragable
$( function() {
    $( ".mymapdiv" ).draggable({
      containment: "document"
    });
    
    var someArray = [];
  } );
//end
console.log(style)
console.log(bossTokenNum)
bossTokenNum = bossTokenNum +1
return
}

//  var bossMonster = document.getElementById("newBossMonster")
//  bossMonster.addEventListener("click", createNewBossToken);

//spon new water to Drag---------------------------------------------------
var waterTokenNum = 2
var createNewWaterToken = function(){
//make parent componant
  for (i=0; i<10;i++){
    var parent = document.getElementById("newWater")
    var style = document.createElement('div');
    style.classList.add("mymapdiv")
    style.innerHTML = `<img src="./assets/images/Tokens/water.png">`;
    parent.appendChild(style);
    //make dragable
    $( function() {
        $( ".mymapdiv" ).draggable({
          containment: "document"
        });
        var someArray = [];
      } );
    //end
    waterTrial = document.getElementById(`mymapdivW${waterTokenNum}`)

    console.log(style)
    console.log(waterTokenNum)
    waterTokenNum = waterTokenNum +1
  }
  return
}
var WaterBG = document.getElementById("createNewWaterToken")
WaterBG.addEventListener("click", createNewWaterToken);

//spon new small water to Drag--------------------------------
var waterTokenNumS = 2
var createNewWaterTokenS = function(i){
  //make parent componant
  for (i=0; i<10;i++){
    var parent = document.getElementById("newWaterS")
    var style = document.createElement('div');
    style.classList.add("mymapdiv")
    style.innerHTML = `<img src="./assets/images/Tokens/water.png">`;
    parent.appendChild(style);
    //make dragable
    $( function() {
        $( ".mymapdiv" ).draggable({
          containment: "document"
        });
        var someArray = [];
      } );
    //end
    console.log(style)
    console.log(waterTokenNumS)
    waterTokenNumS = waterTokenNumS +1
  }
  return
}
var WaterS = document.getElementById("createNewWaterTokenS")
WaterS.addEventListener("click", createNewWaterTokenS);

//spon new wrough terain to Drag-----------------------------
var wroughTokenNum = 2
var createNewWroughToken = function(i){
    for (i=0; i<10;i++){
      //make parent componant
      var parent = document.getElementById("newWrough")
      var style = document.createElement('div');
      style.classList.add("mymapdiv")
      style.innerHTML = `<img src="./assets/images/Tokens/wroughTerain.png">`;
      parent.appendChild(style);
      //make dragable
      $( function() {
          $( ".mymapdiv" ).draggable({
            containment: "document"
          });
          var someArray = [];
        } );
      //end
      console.log(style)
      console.log(wroughTokenNum)
      wroughTokenNum = wroughTokenNum +1
    }
  return
}
var WroughBG = document.getElementById("createNewWroughToken")
WroughBG.addEventListener("click", createNewWroughToken);
//spon new wrough terain SM to Drag------------------------
var wroughTokenNumS = 2
var createNewWroughTokenS = function(i){
  for (i=0; i<10;i++){
    //make parent componant
    var parent = document.getElementById("newWroughS")
    var style = document.createElement('div');
    style.classList.add("mymapdiv")
    style.innerHTML = `<img src="./assets/images/Tokens/wroughTerain.png">`;
    parent.appendChild(style);
    //make dragable
    $( function() {
        $( ".mymapdiv" ).draggable({
          containment: "document"
        });
        var someArray = [];
      } );
    //end
    console.log(style)
    console.log(wroughTokenNumS)
    wroughTokenNumS = wroughTokenNumS +1
  }
return
}
var WroughBG = document.getElementById("createNewWroughTokenS")
WroughBG.addEventListener("click", createNewWroughTokenS);
//spon new wall to Drag----------------------------------------------------
var wallTokenNum = 2
var createNewWallToken = function(i){
  for (i=0; i<10;i++){
      //make parent componant
      console.log("spawn")
    var parent = document.getElementById("newWall")
    var style = document.createElement('div');
    style.classList.add("mymapdiv")
    style.innerHTML = `<img src="./assets/images/Tokens/wall.png">`;
    parent.appendChild(style);
    //make dragable
    $( function() {
        $( ".mymapdiv" ).draggable({
          containment: "document"
        });
        var someArray = [];
      } );
    //end
    console.log(style)
    console.log(wallTokenNum)
    wallTokenNum = wallTokenNum +1
  }
  return
}

var WallBG = document.getElementById("createNewWallToken")
WallBG.addEventListener("click", createNewWallToken);
//spon new wall SM to Drag-------------------------------------------------
var wallTokenNumS = 2
var createNewWallTokenS = function(i){
    for (i=0; i<10;i++){
      //make parent componant
      var parent = document.getElementById("newWallS")
      var style = document.createElement('div');
      style.classList.add("mymapdiv")
      style.innerHTML = `<img src="./assets/images/Tokens/wall.png">`;
      parent.appendChild(style);
      //make dragable
      $( function() {
          $( ".mymapdiv" ).draggable({
            containment: "document"
          });
          var someArray = [];
        } );
      //end
      console.log(style)
      console.log(wallTokenNumS)
      wallTokenNumS = wallTokenNumS +1
    }
  return
}
var WallS = document.getElementById("createNewWallTokenS")
WallS.addEventListener("click", createNewWallTokenS);
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
           // localStorage.setItem(canvas, canvas.toDataURL());-unusable with these types of layered graphics or possible just becasue not really live at https
        }) 
    }
        //flash alert map was made
  var clickerFlash = function() {
    $(".map-made-alert").fadeIn(500);
    $(".map-made-alert").fadeOut(600);
};

Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function (key) {
  var value = this.getItem(key);
  return value && JSON.parse(value);
}

/*
* Save all pictures in local storage
*/
var saveMapLocal = function () {
  let div = 
  document.getElementById('makeMap'); 
  console.log("flash1")
  html2canvas(div).then (
      function (canvas) {
          const image = canvas.toDataURL("image/png");
          window.sessionStorage.setObject(new Date().getTime(), image);
          console.log("flash2")
      }
  );
}

var mapMadeAlrt = document.getElementById("save-map")
mapMadeAlrt.addEventListener("click", clickerFlash);
mapMadeAlrt.addEventListener("click", takeshot);
//mapMadeAlrt.addEventListener("click", saveMapLocal);

//NEW TEXT TO TRY
//<a href="https://dl.dropboxusercontent.com/s/deroi5nwm6u7gdf/advice.png" class="dropbox-saver"></a>
// var mapMadeAlrt = document.getElementById("save-map")
// mapMadeAlrt.addEventListener("click", clickerFlash);
// mapMadeAlrt.addEventListener("click", takeshot);


// document.getElementById('download').onclick = function () {
//   // Create new document
//   let doc = new jsPDF('p', 'mm', 'a4');

//   const width = doc.internal.pageSize.getWidth();
//   const height = doc.internal.pageSize.getHeight();

//   // Get all images from local storage and add them to the pdf
//   for (let key in sessionStorage) {
//       if (!isNaN(key)) {
//           const image = window.sessionStorage.getObject(key);
//           doc.addImage(image, 'JPEG', 0, 0, width, height);
//       }
//   }
//var imgurl= canvas.toDataURL( ) ; // This method saves graphics in png
//document.getElementById(‘cimg’).src = imgurl; // This will set img src to dataurl(png)so that it can be saved as image.




//var imgurl= canvas.toDataURL( ) ; // This method saves graphics in png
//document.getElementById(‘cimg’).src = imgurl; // This will set img src to dataurl(png)so that it can be saved as image.




//RELOAD MAP------------------------------------------------------------
//looking at error code, should work when live on https
var ReloadMap = function() {
  $("#reload-map").load(location.href+" #reload-map>*","");
  }

  $( ".selector" ).checkboxradio( "refresh" );
var mapClearAlrt = document.getElementById("clearmap")
mapClearAlrt.addEventListener("click", ReloadMap);
