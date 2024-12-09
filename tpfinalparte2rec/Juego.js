class Juego{
  constructor(){
    this.pantalla= new Pantalla();
    this.ubicacion = 0;
    this.personaje = new Personaje();
    this.enemigo = new Enemigo();
    this.piedras = [];
    this.cantPiedras = 10;
    this.avanzar=0;
   // this.crearPiedras();
      }
      
    dibujar(){
    this.pantalla.dibujar(this.ubicacion);
   this.chequearPantalla();  
      if(this.ubicacion==3){
    this.personaje.dibujar();
    this.enemigo.dibujar();
    this.chequearImpactos();
    //this.chequearSalto();
   
    for (let i=0; i< this.cantPiedras;i++){
      this.piedras[i].dibujar();

      }

      }
    }
  teclaPresionada(){
    this.personaje.teclaPresionada();
  }
  crearPiedras(piedras){
    let img=0;
  for(let i=0; i< this.cantPiedras;i++){
    
    let velocidad;
    if(i<3){velocidad=3}
    else{
    if(i<6){velocidad=4}
    else{velocidad=5}
    }
  this.piedras[i]=new Piedra(640+(i*250*velocidad),360,velocidad,piedras[img]);
  if(img==0){img=1}else{img=0}
  }
  }

   cargarImagenes(imagenesEnemigo,imagenesPersonaje,fondo,piedras,botones,botonesSonido,texto){
   this.enemigo.cargarImagenes(imagenesEnemigo);
   this.personaje.cargarImagenes(imagenesPersonaje);
   this.pantalla.cargarImagenes(fondo,botones,botonesSonido,texto);
   this.crearPiedras(piedras);
   
   
   }

  chequearImpactos() {
  // Verifica los impactos entre el personaje, el enemigo y las piedras
  for (let i = 0; i < this.cantPiedras; i++) {
    // Calcular la distancia en X y Y para el personaje
    let distXPersonaje = dist(this.personaje.posX + 100, 0, this.piedras[i].posX, 0);
    let distYPersonaje = dist(this.personaje.posY, 0, this.piedras[i].posY, 0);
    
    // Calcular la distancia en X y Y para el enemigo
    let distXEnemigo = dist(this.enemigo.posX+50, 0, this.piedras[i].posX, 0);
    let distYEnemigo = dist(this.enemigo.posY, 0, this.piedras[i].posY, 0);

    // Si el personaje colisiona con la piedra (en X e Y)
    if (distXPersonaje < 70 && distYPersonaje < 40) {
      this.personaje.matar();
     this.ubicacion = 2;
      this.pantalla.posX=0;// Personaje perdió, va a la pantalla de PERDISTE
    }

    // Si el enemigo colisiona con la piedra (en X y Y)
    if (distXEnemigo < 50 && distYEnemigo < 50) {
      //this.enemigo.matar();
      this.ubicacion = 1;
      this.pantalla.posX=0;// Enemigo perdió, va a la pantalla de GANASTE
    }

    // Verificar si el enemigo necesita saltar (en X e Y)
    if (this.enemigo.saltos < 9 && distXEnemigo < 180 && distYEnemigo < 180) {
      this.enemigo.saltar();
    }
  }
}
chequearPantalla(){
  
  if(this.ubicacion<3){
  if (mouseIsPressed){this.avanzar=this.avanzar+1}else{this.avanzar=0}

    
    
if (this.avanzar==1){   
if (this.ubicacion == 2 && this.pantalla.colisionBoton(120, 30, 200, 40)) {this.ubicacion = 0;}
       else if (this.ubicacion == 1 && this.pantalla.colisionBoton(120, 30, 200, 40) ) {this.ubicacion = 0;}
       else if (this.ubicacion == 0 && this.pantalla.colisionBoton(120, 30, 200, 40) ) {this.reiniciarJuego();this.ubicacion = 3;}
       }
}
}

reiniciarJuego(){
    this.pantalla.posX=0;
    this.pantalla.posY=0;
    this.enemigo.posX = -80;
    this.enemigo.posY = 360;
    this.enemigo.vidas = true;
    this.personaje.salto=false;
    this.personaje.posX = (width/2)-150;
    this.personaje.posY = 360;
    this.personaje.vidas = true;
    this.crearPiedras(piedras);
    this.enemigo.saltos=0;
}
  
}
