function cargarimagenes() {
  // Cargar imágenes
   for (let i=0; i<=12; i++ ) {
    imagen[i] = loadImage("data/imagen"+nf(i, 2)+".png  ");
  }
  imgencendido=loadImage("data/encendido.png ");
  imgenapagado=loadImage("data/apagado.png ");
}

function mostrarimagen(){
background(255);
  image(imagen[pantalla], 0, 0); // Mostrar la imagen correspondiente
}
