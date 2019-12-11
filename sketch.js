var num = 10;
var numlevelFail = 3;
var startT;
var deltaT = 1000;
var deltaLvlComplet = 6;
var letsgo  = false;
var level = 1;
var levelComplet = false;
var tiempoEspera; 
var tiempoInicio;
var lvl1=[];
var checkLvl1=[];
var lvl2=[];
var checkLvl2=[];
var lvl3=[];
var checkLvl3=[];
var lvl4=[];
var checkLvl4=[];
var l1,l2,l3,l4;
var EnterYourCode = false;
var cheked = false;
var nextLevel = false;
var levelFail = false;
var sound;

function preload() {
	sound = loadSound('assets/drum2.mp3')

}

function setup() { 
/*Funció per inicialitzar les variables de l'audio i crear el canvas.*/
    var canvas = createCanvas (600,720);
	canvas.position((windowWidth - width) / 2, 0);
	startT=millis();
	tiempoInicio = 0;
  	tiempoEspera = 1000; // 3 segundos
  	tiempoEspera2 = 500;
	tiempoEspera3 = 300;
  	noStroke();
	
	lvl1 = 		[1,2,3,4,5];
	lvl2 = 		[5,4,3,2,1];
	lvl3 = 		[3,1,5,4,2];
	lvl4 = 		[5,3,2,1,4];
	
	l1= 0;
	l2= 0;
	l3= 0;
	l4= 0;
	
}

function draw(){
	   
	if (letsgo == true){
		switch(level){
			   case 1:  
					checkLevel1();
			   		levelOne();
					break;
			   case 2: 
					checkLevel2();
			   		levelTwo(); 
					break;
			   case 3:  
					checkLevel3();
			   		levelThree(); 
					break;
			   case 4: 
					checkLevel4();
			   		levelFour(); 
					break;
			   case 5:
				    gameComplet();
				    break;
				
		}
		
		if (((millis() - tiempoInicio) > tiempoEspera3) && EnterYourCode) { 
			drawLayout();
  		}	
			
	}else{
		background('black');
		drawLayout();
		countDown(deltaT); 
		if(num == -2){letsgo = true;}
	}
			
}

function countDown (delay){
	fill('white');
	textSize(50);
	if(num <= 0){
		text("Let's Go!", 225, 300);
	}else{
		text(' '+num, 270, 300);
	}
	
	if (millis() > startT + delay) {
    	startT = millis();
		num -= 1;
		
  	}
	
}

function countDownLevelFail (delay){
	fill('white');
	textSize(50);
	if(numlevelFail <= 0){
		background('black');
		drawLayout();
		levelFail = false;
		EnterYourCode = false;
		cheked = false;
		checkLvl1=[];
		checkLvl2=[];
		checkLvl3=[];
		checkLvl4=[];
		l1 = 0;
		l2 = 0;
		l3 = 0;
		l4 = 0;
		numlevelFail = 3;
	}else{
		background('black');
		drawLayout();
		text("You Lose! \n   Retry...", 200, 300);
	}
	
	if (millis() > startT + delay) {
    	startT = millis();
		numlevelFail -= 1;
		
  	}
	
}

function countDownLevelComplet (){
	fill('white');
	textSize(50);
	
	if(deltaLvlComplet <= 3){
		text(" ", 225, 300);
		if(deltaLvlComplet = 1){
			nextLevel=true;
		}
	}else{
		text("  Level\nCompleted!", 180, 300);
	}
	
	if (millis() > startT + 1000) {
    	startT = millis();
		deltaLvlComplet -= 1;
		
  	}
	
}

function countDownYourTurn (delay){
	fill('white');
	textSize(50);
	text("It's your \n turn!", 225, 300);
	
	if (millis() > startT + delay) {
    	startT = millis();	
	}
	
}

function levelOne(){
	fill('white');
	textSize(30);
	text("Level 1", 10, 30);
	
	if(l1 <= lvl1.length){
		if ((millis() - tiempoInicio) > tiempoEspera) { 
			background('black');
			drawLayout();
			if(lvl1[l1]==1){
			  fill(150,0,100);
			  circle(300,150,150);
			}else if(lvl1[l1]==2){
			  fill(100,80,20);
			  circle(100,300,150);
			}else if(lvl1[l1]==3){
			  fill(150,1500,100);
			  circle(500,300,150);
			}else if(lvl1[l1]==4){
			  fill(0,0,100);
			  circle(200,500,150);
			}else if(lvl1[l1]==5){
			  fill(150,0,00);
			  circle(400,500,150);
			}
			l1++;
			tiempoInicio = millis();
		  }	

		  if ((millis() - tiempoInicio) > tiempoEspera2) { 
			drawLayout();
		  }	
	
		}else if(!EnterYourCode){
			countDownYourTurn(3000);
			EnterYourCode = true;
		}else if(levelFail){
			countDownLevelFail(1000);	 
		}
	
	if(cheked){
		cheked = false;
		if(JSON.stringify(checkLvl1)==JSON.stringify(lvl1)){
			level += 1;
			EnterYourCode = false;			
		}else{
			levelFail = true;
		}
	}
	 
	
}
	
function levelTwo(){
	fill('white');
	textSize(30);
	text("Level 2", 10, 30);
	
	if((l2 <= lvl2.length) && (nextLevel)){
		EnterYourCode = false;
		if ((millis() - tiempoInicio) > tiempoEspera) { 
			background('black');
			drawLayout();
			if(lvl2[l2]==1){
			  fill(150,0,100);
			  circle(300,150,150);
			}else if(lvl2[l2]==2){
			  fill(100,80,20);
			  circle(100,300,150);
			}else if(lvl2[l2]==3){
			  fill(150,1500,100);
			  circle(500,300,150);
			}else if(lvl2[l2]==4){
			  fill(0,0,100);
			  circle(200,500,150);
			}else if(lvl2[l2]==5){
			  fill(150,0,00);
			  circle(400,500,150);
			}
			l2++;
			tiempoInicio = millis();
		  }	

		  if ((millis() - tiempoInicio) > tiempoEspera2) { 
			drawLayout();
		  }	
	
	}else if(!EnterYourCode){
		countDownYourTurn(3000);
		EnterYourCode = true;
	}else if(!nextLevel){
		background('black');
		drawLayout();
		if(deltaLvlComplet > -1){countDownLevelComplet();}
	}else if(levelFail){
			countDownLevelFail(1000);	 
	}
	
	if(cheked){
		cheked = false;
		if(JSON.stringify(checkLvl2)==JSON.stringify(lvl2)){
			level += 1;
			EnterYourCode = false;			
		}else{
			levelFail = true;
		}
	}
	
}

function levelThree(){
	fill('white');
	textSize(30);
	text("Level 3", 10, 30);
	
	if((l3 <= lvl3.length) && (nextLevel)){
		EnterYourCode = false;
		if ((millis() - tiempoInicio) > tiempoEspera) { 
			background('black');
			drawLayout();
			if(lvl3[l3]==1){
			  fill(150,0,100);
			  circle(300,150,150);
			}else if(lvl3[l3]==2){
			  fill(100,80,20);
			  circle(100,300,150);
			}else if(lvl3[l3]==3){
			  fill(150,1500,100);
			  circle(500,300,150);
			}else if(lvl3[l3]==4){
			  fill(0,0,100);
			  circle(200,500,150);
			}else if(lvl3[l3]==5){
			  fill(150,0,00);
			  circle(400,500,150);
			}
			l3++;
			tiempoInicio = millis();
		  }	

		  if ((millis() - tiempoInicio) > tiempoEspera2) { 
			drawLayout();
		  }	
	
		}else if(!EnterYourCode){
			countDownYourTurn(3000);
			EnterYourCode = true;
		}else if(!nextLevel){
			background('black');
			drawLayout();
			if(deltaLvlComplet > -1){countDownLevelComplet();}
		}else if(levelFail){
			countDownLevelFail(1000);	 
		}
	
	if(cheked){
		cheked = false;
		if(JSON.stringify(checkLvl3)==JSON.stringify(lvl3)){
			level += 1;	
			EnterYourCode = false;
		}else{
			levelFail = true;
		}
	}
	
}

function levelFour(){
	fill('white');
	textSize(30);
	text("Level 4", 10, 30);
	
	if((l4 <= lvl4.length) && (nextLevel)){
		EnterYourCode = false;
		if ((millis() - tiempoInicio) > tiempoEspera) { 
			background('black');
			drawLayout();
			if(lvl4[l4]==1){
			  fill(150,0,100);
			  circle(300,150,150);
			}else if(lvl4[l4]==2){
			  fill(100,80,20);
			  circle(100,300,150);
			}else if(lvl4[l4]==3){
			  fill(150,1500,100);
			  circle(500,300,150);
			}else if(lvl4[l4]==4){
			  fill(0,0,100);
			  circle(200,500,150);
			}else if(lvl4[l4]==5){
			  fill(150,0,00);
			  circle(400,500,150);
			}
			l4++;
			tiempoInicio = millis();
		  }	

		  if ((millis() - tiempoInicio) > tiempoEspera2) { 
			drawLayout();
		  }	
	
		}else if(!EnterYourCode){
			countDownYourTurn(3000);
			EnterYourCode = true;
		}else if(levelFail){
			countDownLevelFail(1000);	 
		}
	
	if(cheked){
		cheked = false;
		if(JSON.stringify(checkLvl4)==JSON.stringify(lvl4)){
			level += 1;
			EnterYourCode = false;			
		}else{
			levelFail = true;
		}
	}
	
}

function gameComplet(){
	background('black');
	fill('white');
	textSize(50);
	text("You Win!!!", 200, 300);
	
	
	
}

function drawLayout(){
  fill(255);
  circle(300,150,150);
  fill(255);
  circle(100,300,150);
  fill(255);
  circle(500,300,150);
  fill(255);
  circle(200,500,150);
  fill(255);
  circle(400,500,150);
}


function keyPressed() {
  if (EnterYourCode){
	  sound.play();
	  if (keyCode == LEFT_ARROW) {
		  fill(150,0,100);
		  circle(300,150,150);
		  tiempoInicio = millis();
		  if(level == 1){
			  checkLvl1.push(1); 
		  }else if(level == 2){
			  checkLvl2.push(1);
		  }else if(level == 3){
			  checkLvl3.push(1);
		  }else if(level == 4){
			  checkLvl4.push(1)
		  }


	  } else if (keyCode == RIGHT_ARROW) {
		  fill(100,80,20);
		  circle(100,300,150);
		  tiempoInicio = millis();
		  if(level == 1){
			  checkLvl1.push(2); 
		  }else if(level == 2){
			  checkLvl2.push(2);
		  }else if(level == 3){
			  checkLvl3.push(2);
		  }else if(level == 4){
			  checkLvl4.push(2);
		  }

	  }else if (keyCode == UP_ARROW) {
		  fill(150,1500,100);
		  circle(500,300,150);
		  tiempoInicio = millis();
		  if(level == 1){
			  checkLvl1.push(3); 
		  }else if(level == 2){
			  checkLvl2.push(3);
		  }else if(level == 3){
			  checkLvl3.push(3);
		  }else if(level == 4){
			  checkLvl4.push(3);
		  }

	  }else if (keyCode == DOWN_ARROW) {
		  fill(0,0,100);
		  circle(200,500,150);
		  tiempoInicio = millis();
		  if(level == 1){
			  checkLvl1.push(4); 
		  }else if(level == 2){
			  checkLvl2.push(4);
		  }else if(level == 3){
			  checkLvl3.push(4);
		  }else if(level == 4){
			  checkLvl4.push(4);
		  }

	  }else if(keyCode == 32){
		  fill(150,0,00);
		  circle(400,500,150);
		  tiempoInicio = millis();
		  if(level == 1){
			  checkLvl1.push(5); 
		  }else if(level == 2){
			  checkLvl2.push(5);
		  }else if(level == 3){
			  checkLvl3.push(5);
		  }else if(level == 4){
			  checkLvl4.push(5);
		  }

	  }
  }
	
  if(keyCode == 8){
	 level += 1;
	  deltaLvlComplet = 6;
	  console.log('piu');
   }
	  
}

function checkLevel1(){
	if(checkLvl1.length == lvl1.length){
		cheked = true;
	}
	
}

function checkLevel2(){
	if(checkLvl2.length == lvl2.length){
		cheked = true;
	}
	
}

function checkLevel3(){
	if(checkLvl3.length == lvl3.length){
		cheked = true;
	}
	
}

function checkLevel4(){
	if(checkLvl4.length == lvl4.length){
		cheked = true;
	}
	
}






