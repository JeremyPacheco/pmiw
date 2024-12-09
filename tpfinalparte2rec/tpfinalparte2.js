//https://youtu.be/c6mFCyEn6cU
//nota:hola profe perdon, se me hizo un poco mas largo el video espero que no haya problemas trate de ser lo mas corto posible, tratare de abordar el resto o lo faltante en la defensa.
//88250/3 Jeremy Pacheco
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
