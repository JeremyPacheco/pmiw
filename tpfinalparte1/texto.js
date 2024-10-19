function texto() {
  // Cuento
  textos[1] = "La historia empieza con sid siendo rescatado por Many quien lo salva de un problema causado por el por un mal entendido, Sid decide seguirlo aunque a Many no lo convence mucho esa idea. En su camino cerca al rio abajo de una cascada se encuentra con una madre y su hijo pequeño, la madre estando débil hace un gesto de ayuda para que agarren a su pequeño en brazos, ellos sin saber que hacer deben tomar una decisión. Sid sugiere llevar al bebe.";
  textos[2] = "Many dice que lo mejor es no meternos con los humanos ya que suelen ser peligrosos estos incluso un pequeño o vulnerable.Sid igual desilusionado decide ir con Many aunque con a ver querido ayudar a la madre y el pequeño niño humano";
  textos[3] = "Many y Sid sin preocupaciones se embarcan en una aventura ellos solos en donde la pasan bien sin mirar atrás de lo que podría a ver sido una buena o mala idea de la decisión anterior";
  textos[4] = "Ellos toman la decisión de tomar el pequeño bebe humano sin saber mucho de estos mismos, Many se le queda viendo por un momento. Sid dice de que es un nuevo compañero de viaje pero Many toma la decisión de que estén con los de su misma especie.Sid con desilusión pero aceptación van en camino en busca de su aldea en el que podría estar el padre del pequeño.";
  textos[5] = "En su camino mientras piensan donde están el grupo de los humanos del pequeño, se encuentran con Diego un Tigre dientes de sable. Diego con intenciones sospechosas y viendo que el pequeño esta con ellos insiste en guiarlos hasta el grupo de humanos, Sid con temor no sabe que responder.  Many con dudas piensan si confiar en las palabras de Diego o puede ser una trampa, sin mucho tiempo para pensar ";
  textos[6] = "No  han tomado la decisión de seguirlo a Diego, deciden Many y sid alejarse y guiarse por ellos mismo como llevarlo aunque no saber mucho como el  siendo un cazador. Una vez la noche dormidos con las guardia baja aparece Diego para llevarse al bebe sin que se den cuenta luego de que ellos les rechazara la propuesta como guía";
  textos[7] = "Diego lleva rápidamente al bebe con su manda sin que Many y Sid se den cuenta.Llega a tiempo con su grupo de tigres dientes de sable con el que lo recibe el líder de la manada con el que le ordeno capturar el bebe.Una vez entregado el bebe es felicitado por su grupo y por fin consigue el grupo venganza de los humanos por lo que le hicieron una vez en el pasado a ellos.";
  textos[8] = "Es el amanecer ya Many y Sid despiertan del sueño con la sorpresa de que no esta el bebe junto a ellos buscándolo cerca del lugar si podría estar ahí con ellos hasta que encuentran las pisadas de un tigre dientes de sable. Many y Sid intuyen que podría haber sido Diego como una respuesta a no haber aceptado su propuesta.";
  textos[9] = "Many igual desconfiado con Diego aun así decide seguirlo para encontrar al grupo del pequeño bebe humano, diego dice que para llegar hasta ellos ahí que seguir sus pasos el camino será largo y con zonas complicadas de seguir pero que si seguimos las huellas llegaremos hasta su paradero que no suelen irse muy lejos de sus zonas de asentamiento. Entonces deciden seguir las huellas.";
  textos[10] = "Diego a pesar de todo el camino pasando el tiempo con ellos con todos los desafíos en el camino y por ayudarse mutuamente para llevar al bebe con su grupo reflexiona y les habla de que su plan era llevar al bebe con su manada que estaba siempre cerca con el grupo humano a cierta distancia para poder cazarlos. Many a pesar del engaño y el enojo acepta las disculpas a Diego y junto con Sid deciden un plan para ir rápido con los humanos que se encontraban cerca de ellos.";
  textos[11] = "A pesar de todo las dificultadas y la revelación de Diego pero aceptándolo y perdonándolo, Sid Many y Diego logran dar con el paradero de los humanos y el pequeño se encuentra con su padre y su grupo su manada reuniéndolos una vez ellos cumpliendo su acción, ahora deciden irse lejos en una nueva aventura ellos juntos siendo una manada.";
  textos[12]= "Pacheco Jeremy y Pereyra Luz";
  }
  
function textoBotones() {
  // Cuento
  botones[0] = "INICIO";
  botones[1] = "SI AGARRAN AL BEBÉ";
  botones[2] = "SIGUIENTE";
  botones[3] = "CRÉDITOS";
  botones[4] = "SIGUIENTE";
  botones[5] = "SE VAN CON DIEGO";
  botones[6] = "SIGUIENTE";
  botones[7] = "SIGUIENTE";
  botones[8] = "CRÉDITOS";
  botones[9] = "SIGUIENTE";
  botones[10] = "SIGUIENTE";
  botones[11] = "CRÉDITOS";
  botones[12]= "INICIO";
  botones[13] = "CRÉDITOS";
  botones[14] = "NO AGARRAN AL BEBÉ";
  botones[18] = "DIEGO ROBA AL BEBÉ";
  }
  
  function mostrartexto() {
    fill(255);
    textSize(16);
    textAlign(LEFT, TOP);
    text(textos[pantalla], 20, 340, 580, 580); // Ajustar el texto dentro del canvas
  }
