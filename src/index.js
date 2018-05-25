document.getElementById("button").addEventListener("click", () => {
    document.getElementById("cipher_area").style.display = "";
    document.getElementById("container").style.display = "none";
});

document.getElementById("principal").addEventListener("click", () => {
    document.getElementById("cipher_area").style.display = "none";
    document.getElementById("container").style.display = "";
});

document.getElementById("buttonCopyText").addEventListener("click", ()=>{
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById("cipher_text").innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
})

document.getElementById("buttonEncode").addEventListener("click", ()=>{
    const cipher_message = document.getElementById("cipher_message").value;
    const shift = parseInt(document.getElementById("shift").value);
    const cipher_text = document.getElementById("cipher_text");
    cipher_text.innerHTML = cipher.encode(shift, cipher_message);
});

document.getElementById("buttonDecode").addEventListener("click", ()=>{
    const cipher_message = document.getElementById("cipher_message").value;
    const shift = parseInt(document.getElementById("shift").value);
    const cipher_text = document.getElementById("cipher_text");
    cipher_text.innerHTML = cipher.decode(shift, cipher_message);
});