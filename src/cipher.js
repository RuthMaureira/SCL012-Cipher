/* la interfaz window representa una ventana que contiene un documento DOM;
la propiedad apunta al documento DOM cargado en esa ventana. */

window.cipher = {
  encode: (offset, string) => {

    /* Creación variable que contendrá texto codificado */
    let textEncode = '';

    /* Se crea variable para obtener valor del offset como número entero y positivo */
    let offsetEncode = Math.abs(parseInt(offset));

    /* Se recorre string ingresado para determinar su código ASCII;
       Se aplica fórmula para obtener nueva posición (según rango de su código ASCII);
       se retorna texto codificado */

    for (let i = 0; i < string.length; i++) {
      /* Código ASCII de caracter */
      let codeAscii = string.charCodeAt(i);

      /* Letras del abecedario en mayúscula entre 65 y 90 */
      if(codeAscii >= 65 && codeAscii <= 90){
        textEncode += String.fromCharCode((codeAscii - 65 + offsetEncode) % 26 + 65);
      }

      /* Letras del abecedario en minúscula entre 97 y 122 */
      else if(codeAscii >= 97 && codeAscii <= 122){
         textEncode += String.fromCharCode((codeAscii - 97 + offsetEncode) % 26 + 97);
      }

      /* Si es un espacio (valor 32) se mantiene*/
      else if(codeAscii === 32){
         textEncode += String.fromCharCode(codeAscii);
      }

      /* Si existen saltos de línea, que lo mantenga */
      else if(codeAscii === 10){
         textEncode += String.fromCharCode(codeAscii);
      }

      /* Si es un caracter entre el tramo 33 y 64 (incluye números - 48 a 57),
      modificar en ese rango de 32 caracteres*/
      else if(codeAscii >= 33 && codeAscii <= 64){
        textEncode += String.fromCharCode((codeAscii - 33 + offsetEncode) % 32 + 33);
      }

      /* Si caracter está entre 91 y 96, nuevo bloque de 6 caracteres*/
      else if(codeAscii >= 91 && codeAscii <= 96){
        textEncode += String.fromCharCode((codeAscii - 91 + offsetEncode) % 6 + 91);
      }

      /* Si caracter está entre 123 y 126, nuevo bloque de 4 caracteres*/
      else if(codeAscii >= 123 && codeAscii <= 126){
        textEncode += String.fromCharCode((codeAscii - 123 + offsetEncode) % 4 + 123);
      }

      /* Si caracter está entre 128 y 254 (ASCII extendido), nuevo bloque de 127 caracteres;
      incluye ñ, Ñ, y vocales con tilde*/
      else if(codeAscii >= 128 && codeAscii <= 254){
        textEncode += String.fromCharCode((codeAscii - 128 + offsetEncode) % 127 + 128);
      }

      // console.log(textEncode);
    }

    return textEncode;

  },


  decode: (offset, string) => {

    /* Creación variable que contendrá texto decodificado */
    let textDecode = '';

    /* Se crea variable para obtener valor del offset como número entero */
    let offsetDecode = Math.abs(parseInt(offset));

    /* Se recorre string ingresado para determinar su código ASCII;
       Se aplica fórmula para obtener posición original (según rango de su código ASCII);
       se retorna texto decodificado */

    for (let i = 0; i < string.length; i++) {
      /* Código ASCII de caracter */
      let codeAscii = string.charCodeAt(i);

      /* Letras del abecedario en mayúscula entre 65 y 90 */
      if(codeAscii >= 65 && codeAscii <= 90){
        textDecode += String.fromCharCode((codeAscii - 90 - offsetDecode) % 26 + 90);
      }

      /* Letras del abecedario en minúscula entre 97 y 122 */
      else if(codeAscii >= 97 && codeAscii <= 122){
         textDecode += String.fromCharCode((codeAscii - 122 - offsetDecode) % 26 + 122);
      }

       /* Si es un espacio (valor 32) se mantiene*/
      else if(codeAscii === 32){
         textDecode += String.fromCharCode(codeAscii);
      }

      /* Si existen saltos de línea, que lo mantenga */
      else if(codeAscii === 10){
         textDecode += String.fromCharCode(codeAscii);
      }

      /* Si es un caracter entre el tramo 33 y 64 (incluye números - 48 a 57),
      modificar en ese rango de 32 caracteres*/
      else if(codeAscii >= 33 && codeAscii <= 64){
         textDecode += String.fromCharCode((codeAscii - 64 - offsetDecode) % 32 + 64);
      }

      /* Si caracter está entre 91 y 96, nuevo bloque de 6 caracteres*/
      else if(codeAscii >= 91 && codeAscii <= 96){
         textDecode += String.fromCharCode((codeAscii - 96 - offsetDecode) % 6 + 96);
      }

      /* Si caracter está entre 123 y 126, nuevo bloque de 4 caracteres*/
      else if(codeAscii >= 123 && codeAscii <= 126){
         textDecode += String.fromCharCode((codeAscii - 126 - offsetDecode) % 4 + 126);
      }

      /* Si caracter está entre 128 y 254 (ASCII extendido), nuevo bloque de 127 caracteres;
      incluye ñ, Ñ, y vocales con tilde*/
      else if(codeAscii >= 128 && codeAscii <= 254){
         textDecode += String.fromCharCode((codeAscii - 254 - offsetDecode) % 127 + 254);
      }

      // console.log(textDecode);
    }

    return textDecode;


  }
};
