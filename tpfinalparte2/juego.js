class Juego{
  constructor(){
    this.pantalla= new Pantalla();
    this.gana = 0;
    this.personaje = new Personaje();
    this.enemigo = new Enemigo();
    this.piedras = [];
    this.cantPiedras = 10;
   // this.crearPiedras();
      }
      
    dibujar(){
    this.pantalla.dibujar(this.gana);
      
      if(this.gana==0){
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
  //chequearSalto(){
  //    if(this.enemigo.saltos<9){
  //    for (let i=0; i < this.cantPiedras;i++){
  //      this.enemigo.chequearDistancia(this.piedras[i]);
  //  }
  //  }
        
  // }
   cargarImagenes(imagenesEnemigo,imagenesPersonaje,fondo,piedras){
   this.enemigo.cargarImagenes(imagenesEnemigo);
   this.personaje.cargarImagenes(imagenesPersonaje);
   this.pantalla.cargarImagenes(fondo)
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

    // Si el personaje colisiona con la piedra (en X y Y)
    if (distXPersonaje < 80 && distYPersonaje < 40) {
      this.personaje.matar();
      pantalla=15;// Establece que el personaje ha perdido
    }

    // Si el enemigo colisiona con la piedra (en X y Y)
    if (distXEnemigo < 50 && distYEnemigo < 50) {
      //this.enemigo.matar();
      
      pantalla=14;// Establece que el enemigo ha perdido
    }

    // Verificar si el enemigo necesita saltar (en X y Y)
    if (this.enemigo.saltos < 9 && distXEnemigo < 180 && distYEnemigo < 180) {
      this.enemigo.saltar();
    }
  }
}

  
}
