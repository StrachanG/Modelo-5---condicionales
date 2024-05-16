let totalPuntos = 0;

const deshabilitarBotonNuevaPartida = (estaDeshabilitado: boolean) => {
  const botonNuevaPartida = document.getElementById('nuevaPartida');
  if (botonNuevaPartida && botonNuevaPartida instanceof HTMLButtonElement) {
    botonNuevaPartida.hidden = estaDeshabilitado; 
  }
}

const checkearPartida = () => {
  if (totalPuntos === 7.5) {
    mostrarMensaje('Hemos ganado');
    deshabilitarBotonPedirCarta(true);
    deshabilitarBotonNuevaPartida(false);
  }
  if (totalPuntos > 7.5) {
    mostrarMensaje('Hemos perdido');
    deshabilitarBotonPedirCarta(true);
    deshabilitarBotonNuevaPartida(false);
  }
}

const deshabilitarBotonPlantarse = (estaDeshabilitado: boolean) => {
  const botonPlantarse = document.getElementById('mePlanto');
  if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
    botonPlantarse.disabled = estaDeshabilitado;
  }
}

const deshabilitarBotonPedirCarta = (estaDeshabilitado: boolean) => {
  const botonPedirCarta = document.getElementById('pideCarta');
  if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
    botonPedirCarta.disabled = estaDeshabilitado;
  }
}

const mostrarMensaje = (mensaje: string) => {
  const elementoPuntos = document.getElementById('puntos');
  if (elementoPuntos && elementoPuntos instanceof HTMLDivElement) {
    elementoPuntos.innerText = mensaje;
  }
}

const obtenerPuntosCarta = (carta: number) => {
  if (carta > 7) {
    return 0.5;
  }
  return carta;
}

const sumarPuntos = (puntos: number) => {
  return totalPuntos + puntos;
}

const actualizarPuntos = (puntosActualizados: number) => {
  totalPuntos = puntosActualizados;
}

const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() *10)
}

const generarNumeroCarta = (numeroAleatorio: number) => {
if (numeroAleatorio > 7) {
 return numeroAleatorio + 2;
} 
return numeroAleatorio;
}

const pintarPuntosCarta = () => {
  const elementoPuntos = document.getElementById('puntos');
  if (elementoPuntos && elementoPuntos instanceof HTMLDivElement) {
    elementoPuntos.innerText = `Tu puntuación es: ${totalPuntos}`
  }
}

const obtenerURLcarta = (carta: number) => {
 switch (carta){
  case 1:
    return "src/img/baraja-svg/1_as-copas.svg";
  case 2:
    return "src/img/baraja-svg/2_dos-copas.svg";
  case 3:
    return  "src/img/baraja-svg/3_tres-copas.svg";
  case 4:
    return "src/img/baraja-svg/4_cuatro-copas.svg";
  case 5:
    return "src/img/baraja-svg/5_cinco-copas.svg";
  case 6:
    return  "src/img/baraja-svg/6_seis-copas.svg";
  case 7:
    return "src/img/baraja-svg/7_siete-copas.svg";
  case 10:
    return "src/img/baraja-svg/10_sota-copas.svg";
  case 11:
    return  "src/img/baraja-svg/11_caballo-copas.svg";
  case 12:
    return  "src/img/baraja-svg/12_rey-copas.svg";
  default:
    return "src/img/baraja-svg/back-1.svg";
 }
}

const pintarCarta = (urlCarta: string) => {
  const elementoIMG = document.getElementById('carta');
  if (elementoIMG && elementoIMG instanceof HTMLImageElement){
    elementoIMG.src = urlCarta
  }
} 

const mostrarResultadoMeHePlantado = () => {
  if (totalPuntos <= 4) {
    return `Has sido muy conservador ${totalPuntos}`;
  }
  if (totalPuntos === 5) {
    return `Te ha entrado el canguelo ${totalPuntos}`;
  }
  if (totalPuntos >= 6) {
    return `Casi casi ${totalPuntos}`;
  }
  if (totalPuntos === 7.5) {
    return `Lo has clavado, enhorabuena ${totalPuntos}`;
  }
  return `No deberías de pasar por aquí`
}

const pedirCarta = () => {
  const numeroAleatorio = generarNumeroAleatorio();
  const carta = generarNumeroCarta(numeroAleatorio);
  const urlCarta = obtenerURLcarta(carta);
  pintarCarta(urlCarta);
  const puntos = obtenerPuntosCarta(carta);
  const puntosSumados = sumarPuntos(puntos);
  actualizarPuntos(puntosSumados);
  pintarPuntosCarta();
  checkearPartida();
};

const empezarPartida = () => {
 totalPuntos = 0;
 const urlCarta = obtenerURLcarta(0);
 pintarCarta(urlCarta);
 mostrarMensaje('');
 deshabilitarBotonPedirCarta(false);
 deshabilitarBotonNuevaPartida(true);
 deshabilitarBotonPlantarse(false);
};

const botonPedirCarta = document.getElementById('pideCarta');
if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
  botonPedirCarta.addEventListener('click', pedirCarta)
};


const botonNuevaPartida = document.getElementById('nuevaPartida');
if (botonNuevaPartida && botonNuevaPartida instanceof HTMLButtonElement) {
  botonNuevaPartida.addEventListener('click', empezarPartida);
}

const plantarse = () => {
  const mensajeMePlanto = mostrarResultadoMeHePlantado()
  mostrarMensaje(mensajeMePlanto);
  deshabilitarBotonPedirCarta(true);
  deshabilitarBotonNuevaPartida(false);
  deshabilitarBotonPlantarse(true);
};

const botonPlantarse = document.getElementById('mePlanto');
if(botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
  botonPlantarse.addEventListener('click', plantarse)
};