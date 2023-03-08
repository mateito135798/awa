
var PA=0;
var PB=0;
var PAPBDIFF=0;
function setup() {
    canvas = createCanvas(800, 500);
 canvas.position(560,100);
    video = createCapture(VIDEO);
    video.size(550,500);
 poseNet=ml5.poseNet(video,modelolisto);
 poseNet.on('pose',getPoses);
}
function modelolisto() {
    console.log("ositolito")
  }
function draw() {
   background('#96e0c6');
   fill('#feffb0');
   stroke('#feffb0');
  text("WHOPPER",50,400);
    textSize(PAPBDIFF)
   document.getElementById("square_side").innerHTML="EL ANCHO Y EL ALTO DEL CUADRADO ES= "+PAPBDIFF+" PIXELES";
}
function getPoses(resultados) {
    
    if(resultados.length>0){
        console.log(resultados);
  


PA=resultados[0].pose.leftWrist.x;
PB=resultados[0].pose.rightWrist.x;
 PAPBDIFF=floor(PA-PB);


}
}









