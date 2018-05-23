function cipherEncode(string, offset) {
    const holatext = "";
    for(const i = 0; i < string.length; i++) {
        const plainCharacter = string.charCodeAt(i);
        if(plainCharacter >= 97 && plainCharacter <= 122) {
            holatext += String.fromCharCode((plainCharacter - 97 + offset) % 26 + 97);
        } else if(plainCharacter >= 65 && plainCharacter <= 90) {
            holatext += String.fromCharCode((plainCharacter - 65 + offset) % 26 + 65);
        } else {
            holatext += String.fromCharCode(plainCharacter);
        }
    }
    return text;
}

function buttonEncode(){
    const cipher_message = document.getElementById("cipher_message").value;
    const number = parseInt(document.getElementById("number").value);
    const cipher_text = document.getElementById("cipher_text").value;

    console.log(alert(cipherEncode(cipher_message, number)));
}