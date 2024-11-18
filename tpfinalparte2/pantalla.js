class Pantalla{
  constructor(){
    this.posX=0;
    this.posY=0;
    this.pantallaJuego=[];
  }
    dibujar(valor){
      
    if(valor==0){
image(this.pantallaJuego[valor], this.posX, this.posY,3300,480);
//image(this.pantallaJuego[1], (this.posX+1100), this.posY,1100,480);
//image(this.pantallaJuego[1], (this.posX+2200), this.posY,1100,480);
this.moverPantalla();
  }else{
  image(this.pantallaJuego[valor], 0, 0,640,480);
  if(pantalla==3){
  
  }
  }
  
  }
  
  cargarImagenes(fondo){
this.pantallaJuego=fondo;
}
moverPantalla(){
this.posX=this.posX-1;
}

}
