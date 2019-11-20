/*Video: pause and play*/
/* Se crea variables para conectar DOM con HTML */
let video = document.getElementById("myVideo");
let btn = document.getElementById("myBtn");

/* cuando se presione botón: pause or play*/
btn.addEventListener('click', videoAction);

function videoAction() {
  /* Si video estaba pausado y presionan botón, dar play y cambiar ícono*/
  if (video.paused) {
    video.play();
    btn.innerHTML = '<i class="far fa-pause-circle fa-2x"></i>';
  } else {
    video.pause();
    btn.innerHTML = '<i class="far fa-play-circle fa-2x"></i>';
  }
}

/*---------------------------------------------------------------------------------*/

/* codificación y decodificación */

/* Creación de variables para conectar DOM con HTML */
let messageInput = document.getElementById('message1');
let offsetInput = document.getElementById('offset1');
let messageOutput = document.getElementById('message2');
let resultEncode = document.getElementById('btnCodificar');
let resultDecode = document.getElementById('btnDecodificar');
let resultCopy = document.getElementById('btnCopy');

/* Evento si se clickea botón codificar */
resultEncode.addEventListener('click', coding);

function coding() {
  if (messageInput.value === ''  || offsetInput.value === '') {
    alert("Recuerde ingresar información y código party");
  } else {
    if (offsetInput.value >= 0) {
      messageOutput.innerHTML = window.cipher.encode(offsetInput.value, messageInput.value);
    } else {
      /* Incorporación offset negativo - se usa su módulo en cipher */
      messageOutput.innerHTML = window.cipher.decode(offsetInput.value, messageInput.value);
    }
  }

}

/* Evento si se clickea botón decodificar */
resultDecode.addEventListener('click', decoding);

function decoding() {
  if (messageInput.value === ''  || offsetInput.value === '') {
    alert("Recuerde ingresar información y código party");
  } else{
    if (offsetInput.value >= 0) {
      messageOutput.innerHTML = window.cipher.decode(offsetInput.value, messageInput.value);
    } else {
      /* Incorporación offset negativo - se usa su módulo en cipher*/
      messageOutput.innerHTML = window.cipher.encode(offsetInput.value, messageInput.value);
    }
  }

}

/*---------------------------------------------------------------------------------*/

/*Evento si se clickea botón copiar */
resultCopy.addEventListener('click', copying);

function copying() {
  messageOutput.select();
  document.execCommand("copy");
}

/*---------------------------------------------------------------------------------*/
