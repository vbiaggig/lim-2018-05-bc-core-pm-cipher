// objeto global window
window.cipher = {
  // metodo encode
  encode: (offset, string) => {
    // convirtiendo offset a Interger
    offset = parseInt(offset);
    // creando una variable string para almacenamiento de las letras cifradas
    let ciphertext = '';
    // obteniendo el residuo del offset
    offset = offset % 26;
    // bucle para almacenar las letras cifradas
    for (let i = 0 ; i < string.length ; i++) {
      // convirtiendo a ASCII
      let cAscii = string.charCodeAt(i);
      let letter;
      // diviendo el cifrado por letras mayusculas, minusculas y cuando no sea letra, no cifrar
      if ((cAscii >= 65) && (cAscii <= 90)) {
        letter = (cAscii - 65 + offset) % 26 + 65;
      } else if ((cAscii >= 97) && (cAscii <= 122)) {
        letter = (cAscii - 97 + offset) % 26 + 97;
      } else {
        letter = cAscii;
      }
      // almacenando las letras cifradas y convirtiendolas en string
      ciphertext += String.fromCharCode(letter);
    }
    return ciphertext;
  },
  // metodo decode
  decode: (offset, string) => {
    // convirtiendo offset a Interger
    offset = parseInt(offset);
    // creando una variable string para almacenamiento de las letras cifradas
    let ciphertext = '';
    // obteniendo el residuo del offset
    offset = offset % 26;
    // bucle para almacenar las letras descifradas
    for (let i = 0 ; i < string.length ; i++) {
      // convirtiendo a ASCII
      let cAscii = string.charCodeAt(i);
      let letter;
      // diviendo el descifrado por letras mayusculas, minusculas y cuando no sea letra, no descifrar
      if ((cAscii >= 65) && (cAscii <= 90)) {
        letter = (cAscii - 65 - offset + 26) % 26 + 65;
      }else if ((cAscii >= 97) && (cAscii <= 122)) {
        letter = (cAscii - 97 - offset + 26) % 26 + 97;
      }else {
        letter=cAscii;
      }
      // almacenando las letras descifradas y convirtiendolas en string
      ciphertext += String.fromCharCode(letter);
    }
    return ciphertext;
  },
  // metodo createCipherWithOffset
  createCipherWithOffset: (offset) => {
    // retornando un objeto con dos metodos
    return {
      // funcion encode
      encode: (string) => {
        // retornando cipher.encode con un string dado
        return cipher.encode(offset, string);
      },
      // funcion decode
      decode: (string) => {
        // retornando cipher.decode con un string dado
        return cipher.decode(offset, string);
      }
    }
  }
};
  