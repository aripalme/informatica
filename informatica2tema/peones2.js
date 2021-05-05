let canvas = document.querySelector("#miCanvas")
let ctx = canvas.getContext("2d")


function dibujarPeon(x, y, r, color){
    ctx.strokeStyle = color
    ctx.fillStyle = color

    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(x-r, y+r*2.5)
    ctx.lineTo(x+r, y+r*2.5)
    ctx.lineTo(x,y)
    ctx.stroke()
    ctx.fill()

    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.stroke()
    ctx.fill()

    
}

for(let x = 10; x < 140; x= x+40){
    dibujarPeon(x, 110, 10, "pink")
}

for(let x = 55; x < 1000; x= x+125){
    dibujarPeon(x, 470, 40, "green")
}

for(let x = 30; x < 420; x= x+60){
    dibujarPeon(x, 270, 25, "black")
}