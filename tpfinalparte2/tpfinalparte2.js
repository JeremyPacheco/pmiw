//Jeremy Pacheco
//Legajo: 88250/3
//https://youtu.be/KwP8sOd4qWI
//Pereyra Luz
//Legajo: 92816/1
//https://youtu.be/PISGOJ5pmpY
//Comisión 3
let volumen=0;
let sonidoMusica;
let textos = [];
let imagen = [];
let pantalla = 0;
let botones=[];
let juego;
let imagenesEnemigo= [];
let imagenesPersonaje= [];
let fondo=[];
let piedras=[];

function preload() {
  cargarimagenes();
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
  juego.cargarImagenes(imagenesEnemigo,imagenesPersonaje,fondo,piedras);
  texto();
  textoBotones();
  sonidoMusica = document.getElementById("sonido-musica");
}

function draw() {
  if(pantalla!==16){
  mostrarimagen();
  mostrartexto();

  if (pantalla==0 || pantalla==1|| pantalla==5|| pantalla==13|| pantalla==14|| pantalla==15){
  pantallaHistoriaDosBotones(botones[pantalla], botones[pantalla+17]);
  }else{pantallaHistoriaUnBoton(botones[pantalla])}
image(imgencendido,600,10);
image(imgenapagado,600,50); 
}
else{
 juego.dibujar();
 if(keyIsPressed){
                    juego.teclaPresionada();
                  }
 }
}


function mousePressed() {
    pantallaPosicion();
    activarMusica();
}
