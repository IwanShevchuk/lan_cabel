//  Created By Shevchuk Їvan  iwanes1@ukr.net
// Lan cabels calc

class Server {
  div = $("<div/>");
  constructor(x, y, cssClass) {
    this.x = x;
    this.y = y;
    this.cssClass = cssClass;
  }

  draw() {
    this.div.css({ top: this.x, left: this.y }).addClass(this.cssClass);
    this.div.appendTo($("#Wrap"));
  }
}


const server1 = new Server(240, 790, "box1");
server1.draw();

const server2 = new Server(1080, 1540, "box2");
server2.draw();

let cordsArray = [];

// PRINT printMousePos click ( x ,y )

// document.getElementById("layer_red_box2").addEventListener("click", printMousePos_box2, true);
// document.getElementById("layer_blue_box1").addEventListener("click", printMousePos_box1, true);
// document.addEventListener('click', printMousePos_box1, true);


document.addEventListener("click", printMousePos, true);
function printMousePos(e) {
  cursorX = e.pageX;
  cursorY = e.pageY;

  $("#test").text("pageX: " + cursorX + ",pageY: " + cursorY);
  const cords = {
    cursorX,
    cursorY,
  };
  cordsArray.push(cords);
  // console.log(cordsArray);

  // ADD point and calc len_cabel
  let alls = 0; // all len cable meters
  for (i = 0; i < cordsArray.length; i++) {
    x = cordsArray[i].cursorX - 20;
    y = cordsArray[i].cursorY - 60;

    let len_xy;
    if (cursorX > 910) {
      $("body").addClass("day-background");
      len_xy = caclulateDistanceTo(server2, "Dot");
    } else {
      $("body").removeClass("day-background");
      len_xy = caclulateDistanceTo(server1, "Dot");
    }

    alls = alls + len_xy;
    console.log(len_xy + " meters;  all=" + alls);
    $("#len").text(" Len=" + alls + " meters");
	
	$( "#label_len" ).text( "ALL Len=" + alls +" meters " + " # Len_1_PtP=" +  len_xy +" meters" );
	$( "#label_len_1_ptp" ).text( " Len_1_PtP=" +  len_xy +" meters  " + "ALL Len=" + alls +" meters" );
  }

  function caclulateDistanceTo(server, cssClass) {
    len_xy = (Math.abs(server.x - this.x) + Math.abs(server.y - this.y)) * 29.5; //pixels size coeficient(29,5) to mm
    len_xy = len_xy / 1000 + 5; // convert images pixels to --> meters  + 6 meters zapasu
    $div = $("<div/>");
    $div.css({ top: this.y, left: this.x }).addClass(cssClass);
    $div.appendTo($("#Wrap"));

    return len_xy;
  }
}