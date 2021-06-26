var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var color = "blue"
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 6;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

var color = "yellow"
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 6;
ctx.arc(250, 230, 40, 0, 2 * Math.PI);
ctx.stroke();

var color = "black"
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 6;
ctx.arc(300, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

var color = "green"
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 6;
ctx.arc(350, 230, 40, 0, 2 * Math.PI);
ctx.stroke();

var color = "red"
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 6;
ctx.arc(400, 200, 40, 0, 2 * Math.PI);
ctx.stroke();