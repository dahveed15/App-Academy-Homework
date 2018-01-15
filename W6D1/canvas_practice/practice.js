document.addEventListener("DOMContentLoaded", function(){
  let myCanvas = document.getElementById('mycanvas');
  myCanvas.width = 500;
  myCanvas.height = 500;

  const ctx = myCanvas.getContext('2d');
  ctx.fillStyle = 'red';
  ctx.fillRect(50, 50, 275, 250);

  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, 2 * Math.PI);
  ctx.lineWidth = 15;
  ctx.stroke();

  ctx.fillStyle = 'blue';
  ctx.fill();
});
