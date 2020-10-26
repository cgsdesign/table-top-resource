//next steps
//find way to save images Node JS etc.??
//change grid from image based to bg image change on click via class change via JS- 3 option clickable squares - taerrain options
    //NOTES- keep player/monster pieces as dragable - 
    //may try to make them possible via dropdown & sortable - snap to sortable each box? - NOTE boxes MUST be fixed height
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

//spon new boss monster to Drag----------
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
//Convert blocks------------------------------------------------------------







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
    $(".map-made-alert").fadeOut(800);
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
  var div = document.getElementById('makeMap'); 
  console.log("flash1")

  html2canvas($("#makeMap")[0], {
    useCORS : true,
    allowTaint : true
  }).then(    
    function (canvas) {
      const image = canvas.toDataURL("image/png");
      window.sessionStorage.setObject(new Date().getTime(), image);
      console.log("flash2")
  });
}

var mapMadeAlrt = document.getElementById("save-map")
mapMadeAlrt.addEventListener("click", clickerFlash);
mapMadeAlrt.addEventListener("click", takeshot);
mapMadeAlrt.addEventListener("click", saveMapLocal);//may work when live site

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
