var RoverDirection = "N";
var RoverPosition = [x, y];
var travelLog = [[0,0]];

var direction = ["N", "E", "S", "W"];

var x = 0;
var y = 0;

var board = [
  ['','Ñ','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','Ñ','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','Ñ','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','Ñ','',''],
  ['','','Ñ','','','','','','',''],
  ['','','','','','','','','',''],
  ];


//  Transformador de dirección a número ======================

function direcciónComoNumero (direct) {
  for (index=0; index<4; index ++){if (direction [index] === direct) return index}
  }

// Girar izquierda ======================

function turnLeft (rover) {
 var index2 = (direcciónComoNumero (RoverDirection) -1);

  var turnleft = direction [index2];

  if(RoverDirection === "N") {console.log("turnLeft was called! New direction is " + "W");
   RoverDirection = "W";}

  else {console.log("turnLeft was called! New direction is " + turnleft);
  RoverDirection = turnleft;}
}

//  Girar derecha ===========================

function turnRight (rover) {
 var index3 = (direcciónComoNumero (RoverDirection) +1);

  var turnright = direction [index3];

  if(RoverDirection === "W") {console.log("turnRight was called! New direction is " + "N");
  RoverDirection = "N"}

  else {console.log("turnRight was called! New direction is " + turnright);
  RoverDirection = turnright;
  }
}

// Mover hacia adelante =============

function moveForward(rover){
    var moveN = y -1;
    var moveS = y + 1;
    var moveE = x + 1;
    var moveW = x - 1;

    if(RoverDirection === "N") {
      if(y===0){console.log("you can´t keep going, grid is over. Try it with other movement")}
      else {
          y = moveN;
          if(board [y] [x] === "Ñ"){console.log("obstacle detected! Try to walk around it");
          y= moveS;}

          else {console.log("moveForward was called!");
          RoverPosition = [x, y];
          travelLog.push(RoverPosition);}}}


    else if(RoverDirection === "S") {
      if(y===10){console.log("you can´t keep going, grid is over. Try it with other movement")}
      else {
            y = moveS;
            if(board [y] [x] === "Ñ"){console.log("obstacle detected! Try to walk around it");
            y= moveN;}

            else {
            console.log("moveForward was called!");
            RoverPosition = [x, y];
            travelLog.push(RoverPosition);}}}

    else if(RoverDirection === "E") {
      if(x===10){console.log("you can´t keep going, grid is over. Try it with other movement")}
      else {
            x = moveE;
            if(board [y] [x] === "Ñ"){console.log("obstacle detected! Try to walk around it");
            x= moveW;}

            else {
            console.log("moveForward was called!");
            RoverPosition = [x, y];
            travelLog.push(RoverPosition);}}}

    else if(RoverDirection === "W") {
      if(x===0){console.log("you can´t keep going, grid is over. Try it with other movement")}
      else {
            x = moveW ;
            if(board [y] [x] === "Ñ"){console.log("obstacle detected! Try to walk around it");
            x= moveE;}

            else {
            console.log("moveForward was called!");
            RoverPosition = [x, y];
            travelLog.push(RoverPosition);}}}
  }

// Mover hacia atrás ===============================

function moveBackward(rover){
    var moveBN = y + 1;
    var moveBS = y - 1;
    var moveBE = x - 1;
    var moveBW = x + 1;

    if(RoverDirection === "N") {
      if(y===10){console.log("you can´t keep going, grid is over. Try it with other movement")}
      else {
            y = moveBN;
            if(board [y] [x] === "Ñ"){console.log("obstacle detected! Try to walk around it");
            y= moveBS;}

            else {
            console.log("moveBackward was called!");
            RoverPosition = [x, y];
            travelLog.push(RoverPosition);}}}

    else if(RoverDirection === "S") {
      if(y===0){console.log("you can´t keep going, grid is over. Try it with other movement")}
      else {
            y = moveBS;
            if(board [y] [x] === "Ñ"){console.log("obstacle detected! Try to walk around it");
            y= moveBN;}

            else {
            console.log("moveBackward was called!");
            RoverPosition = [x, y];
            travelLog.push(RoverPosition);}}}

    else if(RoverDirection === "E") {
       if(x===0){console.log("you can´t keep going, grid is over. Try it with other movement")}
       else {
              x = moveBE;
              if(board [y] [x] === "Ñ"){console.log("obstacle detected! Try to walk around it");
              x= moveBW;}

              else {
              console.log("moveBackward was called!");
              RoverPosition = [x, y];
              travelLog.push(RoverPosition);}}}

    else if(RoverDirection === "W") {
      if(x===10){console.log("you can´t keep going, grid is over. Try it with other movement")}
      else {
            x = moveBW ;
            if(board [y] [x] === "Ñ"){console.log("obstacle detected! Try to walk around it");
            x = moveBE;}

            else {
              console.log("moveBackward was called!");
              RoverPosition = [x, y];
              travelLog.push(RoverPosition);}}}
  }


// Llamada a la función para dirigir al robot ===============================
function dirigeme (lista){
    for(i = 0; i< lista.length; i++){
    var letter = lista[i];
    if (letter === "f"){moveForward(RoverDirection);}
    if (letter === "r"){turnRight(RoverDirection);}
    if (letter === "l"){turnLeft(RoverDirection);}
    if (letter === "b"){moveBackward(RoverDirection);}
    else{}
    }
    console.log (travelLog);}
  
  dirigeme ("rrfbjbffrtlflflflflrflrflbbbbblblffrfff");
