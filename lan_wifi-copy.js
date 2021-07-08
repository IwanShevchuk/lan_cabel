/* Created By Joseph Shenton @TeamiHackify 

Please feel free to use this toggle if you like. But I request that you give credit to me thank you */

// $('body').toggleClass('day-background');

// $('#cb1').on('click', function () { $('body').toggleClass('day-background'); });

/*
for(i=0;i<900;i++){
	var radius = 100;
	x = Math.random() * 2 * radius - radius;
	ylim = Math.sqrt(radius * radius - x * x);
	y = Math.random() * 2 * ylim - ylim;
  
  $div = $('<div/>')
  $div.css({top: radius+y, left: radius+x}).addClass('Dot');
  $div.appendTo( $('#Wrap') )
 }
 */
 
// server1 (x,y) = box1
  server1_x = 240;	
  server1_y = 790;
  $div = $('<div/>')
  $div.css({top: server1_y, left: server1_x}).addClass('box1');
  $div.appendTo( $('#Wrap') )
  
// server2 (x,y) = box2
  server2_x = 1540;	
  server2_y = 1080;
  $div = $('<div/>')
  $div.css({top: server2_y, left: server2_x}).addClass('box2');
  $div.appendTo( $('#Wrap') )
   
  
  let cordsArray = [];
	//var alls = 0;  // all len cable meters 



// Cntrl + Z 
//document.addEventListener('keydown', undo_last_point, true);
  document.addEventListener('keydown', function(event)  
  {
	if (event.ctrlKey && event.key === 'z'){
		 alert('Undo  is duing , Pleas wait!');
		document.getElementById("Wrap").lastElementChild.remove(); // remove last <div> Dot2
		var lastElement = cordsArray.pop(); // remove last element form my array
//		var len_xy = 0;
/*		if(lastElement.cursorX > 910 ){   
		len_xy = ( Math.abs(server2_x - x)+Math.abs(server2_y - y) ) * 29,5;  //pixels size coeficient(29,5) to mm 
		len_xy = (len_xy /1000) + 5;  // convert images pixels to --> meters  + 6 meters zapasu		
		}
		else {  
		len_xy = ( Math.abs(server1_x - x)+Math.abs(server1_y - y) ) * 29,5;  //pixels size coeficient(29,5) to mm 
		len_xy = (len_xy /1000) + 5;  // convert images pixels to --> meters  + 6 meters zapasu
		}
*/		
		 alls -= len_xy;   // unexpected ???
		
		$( "#len" ).text( " ALL Len=" + alls +" meters" );
		//$( "#len" ).text( " Len=" + alls +" meters" );
	}  
  } 
  );
  
  
//  var alls = 0; // test 1 - міняє значення але задвоює!!! err!
  
  

 // PRINT printMousePos click ( x ,y ) 
document.addEventListener('click', printMousePos, true);
function printMousePos(e){
 
      cursorX = e.pageX;
      cursorY= e.pageY;
	  $( "#label_test" ).text( "pageX: " + cursorX +",pageY: " + cursorY );
	  const cords = {
		  cursorX,
		  cursorY
	  }
	  cordsArray.push(cords);
	  // console.log(cordsArray);
	  
  if(cursorY > 70 ){	

	
      


// ADD point and calc len_cabel
//	   var alls = 0;  // all len cable meters  OK 
	   let alls = 0; 
	   var i=0 ;  // all len cable meters  OK 

//	for(i=0; i<cordsArray.length; i++){
		i += 1 ;
	 
		x = cordsArray[i].cursorX-20;	
		y = cordsArray[i].cursorY-60;
		
  
		if(cursorX > 915 ){   
		// $('body').toggleClass('day-background');
		// $('body').removeClass('day-background');
		// $('body').addClass('day-background');
		$('body').removeClass('day-background');
		len_xy = ( Math.abs(server2_x - x)+Math.abs(server2_y - y) ) * 29,5;  //pixels size coeficient(29,5) to mm 
		len_xy = (len_xy /1000) + 5;  // convert images pixels to --> meters  + 6 meters zapasu
		$div = $('<div/>')
		$div.css({top: y, left: x}).addClass('Dot2');
		$div.appendTo( $('#Wrap') )		
		
		}
		else {  
		$('body').addClass('day-background');
		
//  len_xy = Math.abs(server1_x - cordsArray[i].cursorX)+Math.abs(server1_y - cordsArray[i].cursorY);
		len_xy = ( Math.abs(server1_x - x)+Math.abs(server1_y - y) ) * 29,5;  //pixels size coeficient(29,5) to mm 
		len_xy = (len_xy /1000) + 5;  // convert images pixels to --> meters  + 6 meters zapasu
		$div = $('<div/>')
		$div.css({top: y, left: x}).addClass('Dot');
		$div.appendTo( $('#Wrap') )
		}
		
		
		alls += len_xy ;
		console.log(len_xy + " meters;  all=" + alls);
		
		$( "#label_len" ).text( "ALL Len=" + alls +" meters " + " # Len_1_PtP=" +  len_xy +" meters" );
		$( "#label_len_1_ptp" ).text( " Len_1_PtP=" +  len_xy +" meters  " + "ALL Len=" + alls +" meters" );
//	}

  }
}

// console.log(cordsArray.length);
/*
 for(i=0;i<cordsArray.length;i++){
	 
	var radius = 100;
	x = Math.random() * 2 * radius - radius;
	ylim = Math.sqrt(radius * radius - x * x);
	y = Math.random() * 2 * ylim - ylim;
  x = 200;	
  y = 300;
  len_xy = (150-cordsArray[i].cursorX)+(230-cordsArray[i].cursorY) ;
  
  $div = $('<div/>')
  $div.css({top: y, left: x}).addClass('Dot');
  $div.appendTo( $('#Wrap') )
  console.log(len_xy);
 }
*/
