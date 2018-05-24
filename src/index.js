function buttonEncode(){
    const cipher_message = document.getElementById("cipher_message").value;
    const shift = parseInt(document.getElementById("shift").value);
    const cipher_text = document.getElementById("cipher_text");
    cipher_text.innerHTML = cipher.encode(cipher_message,shift)
}

function buttonDecode(){
    const cipher_message = document.getElementById("cipher_message").value;
    const shift = parseInt(document.getElementById("shift").value);
    const cipher_text = document.getElementById("cipher_text");
    cipher_text.innerHTML = cipher.decode(cipher_message,shift)
}