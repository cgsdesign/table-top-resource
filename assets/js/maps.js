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



dragElement(document.getElementById("mymapdiv"));
dragElement(document.getElementById("mymapdiv2"));
dragElement(document.getElementById("mymapdiv3"));
dragElement(document.getElementById("mymapdiv4"));
dragElement(document.getElementById("mymapdiv5"));
console.log("argggggg")
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var thing=document.getElementById(elmnt.id + "item")
  if (thing) {
    /* if present, the header is where you move the DIV from:*/
    thing.onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

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
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}