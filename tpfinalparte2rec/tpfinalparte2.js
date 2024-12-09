let juego;
let imagenesEnemigo= [];
let imagenesPersonaje= [];
let fondo=[];
let piedras=[];
let botones=[];
let texto=[];
let botonesSonido=[];
function preload() {
cargarDatosPreload();
  
}

function setup() {
  createCanvas(640,480);
  juego = new Juego();
  juego.cargarImagenes(imagenesEnemigo,imagenesPersonaje,fondo,piedras,botones,botonesSonido,texto);

}


function draw() {
 background(255);
  juego.dibujar();

  if(keyIsPressed){
                    juego.teclaPresionada();
                  }
}
