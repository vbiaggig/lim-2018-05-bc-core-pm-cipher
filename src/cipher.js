window.cipher = {
  encode : cipher.encode(offset, string),
  decode : cipher.decode(offset, string)
};

const msg = document.getElementById("msg");
const number = Number(document.getElementById("number"));



/*
function caesar(texto, clave) {
    var output="";
    clave = parseInt(clave);
    for (var i=0; i<texto.length;i++){
		output += String.fromCharCode(texto.charCodeAt(i)+clave);
    }
    return output;    
}

function cifrar(){
    var texto = $("#texto_cifrar").val();
    var clave = $("#clave_cifrar").val();
    $("#texto_desc").val(caesar(texto,clave));
}

function descifrar(){
    var texto = $("#texto_desc").val();
    var clave = $("#clave_desc").val();
    $("#texto_cifrar").val(caesar(texto,-clave));
}
 */