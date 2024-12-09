function cargarDatosPreload() {
for (let i = 0; i <= 7; i++) {
    let ruta = "data/diego" + nf(i, 2) + ".png";
    let ruta2 = "data/mani" + nf(i, 2) + ".png";
    imagenesEnemigo[i] = loadImage(ruta);
    imagenesPersonaje[i] = loadImage(ruta2);
  }
   for (let i=0; i<=3; i++ ) {
    fondo[i] = loadImage("data/imagen"+nf(i, 2)+".png  ");
  }
  botonesSonido[0]=loadImage("data/apagado.png");
  botonesSonido[1]=loadImage("data/encendido.png");
  
  for(let i=0;i<2;i++){
  let ruta="data/piedra" + nf(i, 2) + ".png";
  piedras[i] = loadImage(ruta);
  }

  botones[0] = "INICIAR";
  botones[1] = "REINICIAR";
  botones[2] = "REINICIAR";
  
  texto[0]= "Para saltar";
  texto[1]="¡¡¡GANASTE,SALVASTE AL BODOQUE!!!";
  texto[2]=" ¡¡¡Perdiste, vuelve a intentar ayudar a Mani y Sid a salvar al pobre Bodoque!!!";
  texto[4]=" Pacheco Jeremy y Pereyra Luz";
  texto[5]=" Pacheco Jeremy y Pereyra Luz";
  

}
