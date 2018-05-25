const buttonEncode = document.getElementById("buttonEncode");
const buttonDecode = document.getElementById("buttonDecode");

document.getElementById("button").addEventListener("click", () => {
    document.getElementById("cipher_area").style.display = "";
    document.getElementById("container").style.display = "none";
});
document.getElementById("principal").addEventListener("click", () => {
    document.getElementById("cipher_area").style.display = "none";
    document.getElementById("container").style.display = "";
});

buttonEncode.addEventListener("click", ()=>{
    const cipher_message = document.getElementById("cipher_message").value;
    const shift = parseInt(document.getElementById("shift").value);
    const cipher_text = document.getElementById("cipher_text");
    cipher_text.innerHTML = cipher.encode(cipher_message,shift);
});
buttonDecode.addEventListener("click", ()=>{
    const cipher_message = document.getElementById("cipher_message").value;
    const shift = parseInt(document.getElementById("shift").value);
    const cipher_text = document.getElementById("cipher_text");
    cipher_text.innerHTML = cipher.decode(cipher_message,shift);
});