function pantallaPosicion (){
       if (pantalla == 12 && colisionBoton(120, 30, 200, 40)) {pantalla = 0;}
       else if (pantalla == 11 && colisionBoton(120, 30, 200, 40)) {pantalla = 12;}
       else if (pantalla == 10 && colisionBoton(120, 30, 200, 40)) {pantalla = 11;}
       else if (pantalla == 9 && colisionBoton(120, 30, 200, 40)) {pantalla = 10;}
       else if (pantalla == 8 && colisionBoton(120, 30, 200, 40)) {pantalla = 12;}
       else if (pantalla == 7 && colisionBoton(120, 30, 200, 40)) {pantalla = 8;}
       else if (pantalla == 6 && colisionBoton(120, 30, 200, 40)) {pantalla = 7;}
       else if (pantalla == 5) {
                if (colisionBoton(120, 30, 200, 40)){pantalla = 9;}
                if (colisionBoton(120, 80, 200, 40)){pantalla = 6;}
                                }
       else if (pantalla == 4 && colisionBoton(120, 30, 200, 40)) {pantalla = 5;}
       else if (pantalla == 3 && colisionBoton(120, 30, 200, 40)) {pantalla = 12;}
       else if (pantalla == 2 && colisionBoton(120, 30, 200, 40)) {pantalla = 3;}
       else if (pantalla == 1) {
                if (colisionBoton(120, 30, 200, 40)){pantalla = 4;}
                if (colisionBoton(120, 80, 200, 40)){pantalla = 2;}
                                }
       else if (pantalla == 0) {
                if (colisionBoton(120, 30, 200, 40)){pantalla = 1;}
                if (colisionBoton(120, 80, 200, 40)){pantalla = 12;}
                                }
}


function dibujaBoton(txt, x, y, w, h ) {
  //dibuja un boton centrado:
  push();
  rectMode(CENTER);
  //evaluo para crear efecto rolover:
  if ( colisionBoton( x, y, w, h ) ) {
    fill(0, 50, 200);
  } else {
    fill(200);
    stroke(0);
  }
  rect(x, y, w, h);
  //texto:
  textAlign(CENTER, CENTER);
  fill(255);
  stroke (0);
  text(txt, x, y);
  pop();
}
function colisionBoton( x, y, w, h ) {
  //evalua colision boton Centrado:
  return (mouseX>x-w/2 && mouseX<x+w/2 && mouseY>y-h/2 && mouseY<y+h/2);
}

function pantallaHistoriaDosBotones( txt_btn_A , txt_btn_B ) {
  push();
  fill(255);
  textAlign(CENTER);
  textSize(14);
  //botones:
  //A:
  dibujaBoton(txt_btn_A, 120, 30, 200, 40);
  //B:
  dibujaBoton(txt_btn_B, 120, 80, 200, 40);
  pop();
}

function pantallaHistoriaUnBoton( txt_btn_A ) {
  push();
  fill(255);
  textAlign(CENTER);
  textSize(14);
//  //boton:
//  //A:
  dibujaBoton(txt_btn_A, 120, 30, 200, 40);
  pop();
}
