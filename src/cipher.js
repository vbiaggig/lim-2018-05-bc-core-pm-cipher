window.cipher = {
    encode: (offset, string) => {
      let ciphertext = '';
      offset = offset % 26;
      for(let i=0 ; i < string.length ; i++) {
          let cAscii = string.charCodeAt(i);
          let letter;
          if((cAscii >= 65) && (cAscii <= 90)){
              letter = (cAscii-65+offset)%26+65;
          }else if((cAscii >= 97) && (cAscii <= 122)){
              letter = (cAscii-97+offset)%26+97;
          }else {
              letter = cAscii;
          }
          ciphertext += String.fromCharCode(letter);
      }
      
      return ciphertext;
    },
    decode: (offset, string) => {
        let ciphertext = '';
        offset = offset % 26;
        for(let i=0 ; i < string.length ; i++) {
            let cAscii = string.charCodeAt(i);
            let letter;
            if((cAscii >= 65) && (cAscii <= 90)){
                letter = (cAscii-65-offset+26)%26+65;
            }else if ((cAscii >= 97) && (cAscii <= 122)) {
                letter = (cAscii-97-offset+26)%26+97;
            }else {
                letter=cAscii;
            }
            ciphertext += String.fromCharCode(letter);
        }
        
        return ciphertext;
    },
    createCipherWithOffset: () => {
        /* */
    }
  };
  