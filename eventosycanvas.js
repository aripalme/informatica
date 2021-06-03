let canvas = document.querySelector("#miCanvas")

// escoger el contexto, en este caso el contexto 2d
let ctx = canvas.getContext("2d")

function dibujarPelota(xC, yC, r, color){
    // console.log(color)
    ctx.beginPath();
    ctx.strokeStyle = color
    ctx.fillStyle = color;
    // console.log(ctx.strokeStyle)
    ctx.arc(xC, yC, r, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
}
let x = 200
let y = 0;
let r = 30; 
let color = "red";

let vY = 10;// en px/s
let vX = 0
let dT = 30;

function moverYDibujar(){
    if (vX == 0) {
    ctx.clearRect(0,0, 600, 400);
    let dY = dT/1000 *vY
    y = y + dY;
    // console.log(color)
    dibujarPelota(x, y, r, color);    
    } else {
    ctx.clearRect(0,0, 600, 400);
    let dX = dT/1000 *vX
    x = x + dX;
    // console.log(color)
    dibujarPelota(x, y, r, color);    
    }
    
}

function arrancarOParar(){
    if (vY > 0 || vX > 0){
        vY = 0;
        vX = 0;
    }
    else{
        vY = 10;
    }
}
function mcdonalds(params) {
    r = r + 1

}
function burgerking(params) {
    r = r - 1
}
window.setInterval(moverYDibujar, dT);
// Quiero que arranque o pare cuando presiones la tecla espacio.
// Para hacer esto se debe usar un event listener.
window.onkeyup = function(event){
    // La función que se ejecuta cuando el evento ocurre puede recibir un argumento. Este argumento tiene los detalles del evento.
    // La función arrancarOParar se debe ejecutar únicamente si se levanta la tecla espacio.
    console.log(event.code);
    if (event.code == "Space")
    {
        arrancarOParar();
    }
    // cómo identificar cuál fue la tecla presionada?
    if (event.code == "NumpadAdd") {
       mcdonalds()
    }
    if (event.code == "NumpadSubtract") {
       burgerking() 
    }
}

function cambiarColorPelota(){
    color = "#" + Math.floor(Math.random()*16777215).toString(16);
}
window.onclick = function(event){
    if (event.offsetX - x > r || event.offsetX -x < -r || event.offsetY - y > r || event.offsetY -y < -r ) {
    if (vX == 0 ) {
    vX = 10    
    } else {
    vX = 0    
    }
    } else {
        cambiarColorPelota();   
    }
   
}