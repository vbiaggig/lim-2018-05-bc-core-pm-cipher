window.cipher = {
    encode: function(string, offset){
        return cipherEncode(string,offset);
    },
    decode: function(string, offset){
        return cipherDecode(string,offset);
    },
};

function cipherEncode(string, offset) {
    let ciphertext = '';
    
    for(let i=0 ; i < string.length ; i++){
        let cAscii = string.charCodeAt(i);
        let letter;
        if((cAscii >= 65) && (cAscii <= 90)){
            letter = (cAscii-65+offset)%26+65;
        }else if((cAscii >= 97) && (cAscii <= 122)){
            letter = (cAscii-97+offset)%26+97;
        }
        ciphertext += String.fromCharCode(letter);
    }
    
    return ciphertext;
}
function cipherDecode(string,offset) {
    return cipherEncode(string, 26-offset)
}