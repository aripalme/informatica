let canvas = document.querySelector ("#Canvas")
let ctx = canvas.getContext ("2d")

ctx.fillStyle = "yellow"
ctx.fillRect (10, 35, 40, 340)
ctx.stroke();

ctx.fillStyle = "pink";
ctx.beginPath();
ctx.arc(31, 35, 20, 0, Math.PI, true);
ctx.moveTo(30, 100);
ctx.lineTo(40, 100);
ctx.fill();

ctx.fillStyle = "grey"
ctx.fillRect (10, 35, 42, 20)

ctx.fillStyle = ("black");
ctx.beginPath();
ctx.moveTo(10, 370);
ctx.lineTo(32, 400);
ctx.lineTo(50, 370);
ctx.fill();


ctx.fillStyle = ("black");
ctx.fillRect (150, 50, 130, 300)

ctx.fillStyle = "grey"
ctx.fillRect (160, 60, 110, 250)

ctx.fillStyle = "13100F";
ctx.beginPath();
ctx.arc(218, 330, 12, 0, 2*Math.PI, true);
ctx.moveTo(50, 100);
ctx.lineTo(50, 100);
ctx.stroke();
ctx.fill();