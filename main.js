var canvas1 = document.getElementById('Canvas1');
var ctx1 = canvas1.getContext('2d');

var canvas2 = document.getElementById('Canvas2');
var ctx2 = canvas2.getContext('2d');

// var canvas3 = document.getElementById('Canvas3');
// var ctx3 = canvas3.getContext('2d');

function init(){
  
  canvas1.width = window.innerWidth;
  canvas1.height = window.innerHeight;
  canvas2.width = window.innerWidth;
  canvas2.height = window.innerHeight;
  // canvas3.width = window.innerWidth;
  // canvas3.height = window.innerHeight;
    setInterval(draw_languages, 10);

  }

var x = 50 ;
var y = 50 ;

var a = window.innerWidth/3;
var b = window.innerHeight/5;

var dy = 1;

function draw_languages() {

  if (y<500){
    
   

    if(y==100){
     
      // La bulle
      ctx1.beginPath();
      ctx1.arc(x, y, 4, 0, Math.PI*2);
     
      ctx1.fill();
      ctx1.closePath();
      draw_HTML();
      
      

    }

    if(y==200){
      
      ctx1.beginPath();
      ctx1.arc(x, y, 4, 0, Math.PI*2);
      
      ctx1.fill();
      ctx1.closePath();
      draw_CSS();
    }

    if(y==300){
      
      ctx1.beginPath();
      ctx1.arc(x, y, 4, 0, Math.PI*2);
      
      ctx1.fill();
      ctx1.closePath();
      draw_PHP();
    }

    if(y==400){
      
      ctx1.beginPath();
      ctx1.arc(x, y, 4, 0, Math.PI*2);
      
      ctx1.fill();
      ctx1.closePath();
      draw_SQL();
      
    }
    
    ctx1.fillStyle = "white";
    
    ctx1.beginPath();
    ctx1.arc(x, y, 2, 0, Math.PI*2);
    
    ctx1.fill();
    ctx1.closePath();

  
    y += dy;}

    ctx1.beginPath();
    ctx1.arc(a, b, 2, 0, Math.PI*2);
    
    ctx1.fill();
    ctx1.closePath();

     
  }


function draw_HTML(){

  draw_H([x,y]);
  var draw_y =y;
  setTimeout(draw_T,250,[x+40,draw_y]);
  setTimeout(draw_M,500,[x+60,draw_y]);
  setTimeout(draw_L,750,[x+80,draw_y]);


}

function draw_H(tableau_draw){
  ctx1.beginPath();
  // H
  ctx1.rect(tableau_draw[0]+20,tableau_draw[1]-5,5,20);
  ctx1.rect(tableau_draw[0]+30,tableau_draw[1]-5,5,20);
  ctx1.rect(tableau_draw[0]+20,tableau_draw[1],15,5);
  ctx1.fill();
  ctx1.closePath();
   
}

function draw_T(tableau_draw){
  ctx1.beginPath(); 
  // T
  ctx1.rect(tableau_draw[0],tableau_draw[1]-5,15,5);
  ctx1.rect(tableau_draw[0]+5,tableau_draw[1]-5,5,20);
  ctx1.fill();
  ctx1.closePath();
}

function draw_M (tableau_draw){
  ctx1.beginPath(); 
  // M
  ctx1.rect(tableau_draw[0],tableau_draw[1]-5,5,20);
  ctx1.rect(tableau_draw[0]+10,tableau_draw[1]-5,5,20);
  ctx1.rect(tableau_draw[0]+10,tableau_draw[1]-5,5,20);
  ctx1.rect(tableau_draw[0],tableau_draw[1],15,5);
  ctx1.fill();
  ctx1.closePath();
}

function draw_L (tableau_draw){
  ctx1.beginPath(); 
  // L
  ctx1.rect(tableau_draw[0],tableau_draw[1]-5,5,20);
  ctx1.rect(tableau_draw[0],tableau_draw[1]+10,15,5);
  ctx1.fill();
  ctx1.closePath();
}

function draw_CSS (){
  var draw_y =y;
  draw_C([x+20,y]);
  setTimeout(draw_S,250,[x+40,draw_y]);
  setTimeout(draw_S,500,[x+60,draw_y]);
  
}
function draw_C (tableau_draw){
  ctx1.beginPath(); 
  // C
 
  ctx1.rect(tableau_draw[0],tableau_draw[1]-5,5,20);
   ctx1.rect(tableau_draw[0],tableau_draw[1]+10,15,5);
   ctx1.rect(tableau_draw[0],tableau_draw[1]-5,15,5);
  ctx1.fill();
  ctx1.closePath();
}

function draw_S (tableau_draw){
  ctx1.beginPath(); 
  // S
  ctx1.rect(tableau_draw[0],tableau_draw[1]-5,15,5);
  ctx1.rect(tableau_draw[0],tableau_draw[1]-5,5,10);


  ctx1.rect(tableau_draw[0]+10,tableau_draw[1]+5,5,10);
  
  ctx1.rect(tableau_draw[0],tableau_draw[1]+10,15,5);


   ctx1.fill();
   ctx1.closePath();
}



function draw_PHP (){
  var draw_y =y;
  draw_P([x+20,draw_y]);
  setTimeout(draw_H,250,[x+20,draw_y]);
  setTimeout(draw_P,500,[x+60,draw_y]);
  
}

function draw_P (tableau_draw){
  ctx1.beginPath(); 
  // P
 
  ctx1.rect(tableau_draw[0],tableau_draw[1]-5,5,20);
  ctx1.rect(tableau_draw[0]+10,tableau_draw[1]-5,5,10);
   ctx1.rect(tableau_draw[0],tableau_draw[1]-5,10,5);
   ctx1.rect(tableau_draw[0],tableau_draw[1]+5,15,5);
   
  ctx1.fill();
  ctx1.closePath();
}

function draw_SQL (){
  var draw_y =y;
  draw_S([x+20,draw_y]);
  setTimeout(draw_Q,250,[x+40,draw_y]);
  setTimeout(draw_L,500,[x+60,draw_y]);
  
}

function draw_Q (tableau_draw){
  ctx1.beginPath(); 
  // P
 
  ctx1.rect(tableau_draw[0],tableau_draw[1]-5,5,20);
  ctx1.rect(tableau_draw[0],tableau_draw[1]-5,15,5);
  ctx1.rect(tableau_draw[0],tableau_draw[1]+10,15,5);
  ctx1.rect(tableau_draw[0]+10,tableau_draw[1]-5,5,25);
 
   
  ctx1.fill();
  ctx1.closePath();
}
