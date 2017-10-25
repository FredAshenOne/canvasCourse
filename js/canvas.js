$(document).ready(function(){
  var canvas =  document.getElementById('canvas');
  console.log(canvas);

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var c = canvas.getContext('2d');

  // c.fillRect(150,150,200,200);
// // //arcs / circle
// for (var i = 0; i < 100; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   var colorr = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
// var colorg = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
// var colorb = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
// console.log(colorr);
  c.beginPath();
  c.arc(300,300,200,0.6,2.5,true);
  c.strokeStyle = 'blue';
  c.moveTo(300,300);
  c.lineTo(425,425);
  c.stroke();
// }
// c.beginPath();
// c.arc(300,300,30,0,Math.PI*2,false );
// c.stroke();


});
