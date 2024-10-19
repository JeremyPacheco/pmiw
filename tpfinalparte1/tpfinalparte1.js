//Jeremy Pacheco
//Legajo: 88250/3
//Pereyra Luz
//Legajo: 92816/1
//https://youtu.be/PISGOJ5pmpY
//https://youtu.be/KwP8sOd4qWI
//Comisión 3
let volumen=0;
let sonidoMusica;
let textos = [];
let imagen = [];
let pantalla = 0;
let botones=[];

function preload() {
  cargarimagenes();
}

function setup() {
  createCanvas(640, 480);
  texto();
  textoBotones();
  sonidoMusica = document.getElementById("sonido-musica");
}

function draw() {
  mostrarimagen();
  mostrartexto();

  if (pantalla==0 || pantalla==1 || pantalla==5){
  pantallaHistoriaDosBotones(botones[pantalla], botones[pantalla+13]);
  }else{pantallaHistoriaUnBoton(botones[pantalla])}
image(imgencendido,600,10);
image(imgenapagado,600,50); 
}


function mousePressed() {
    pantallaPosicion();
    activarMusica();
}
