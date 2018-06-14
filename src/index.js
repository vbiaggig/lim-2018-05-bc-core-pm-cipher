// Boton para desplegar cipherArea y ocultar cipherInformation
document.getElementById('buttonInformation').addEventListener('click', () => {
    // Desplegando cipherArea
    document.getElementById('cipherArea').style.display = '';
    // Ocultando cipherInformation
    document.getElementById('cipherInformation').style.display = 'none';
});

// Boton para volver al incio de la pagina
document.getElementById('logoLink').addEventListener('click', () => {
    // Ocultando cipherArea
    document.getElementById('cipherArea').style.display = 'none';
    // Ocultando cipherSteps
    document.getElementById('cipherSteps').style.display = 'none';
    // Desplegando cipherInformation
    document.getElementById('cipherInformation').style.display = '';
});

// Boton de copiar texto descifrado o cifrado en el portapapeles
document.getElementById('buttonCopyText').addEventListener('click', ()=>{
    // auxiliar que almacena un elemento parrafo creado
    let aux = document.createElement('input');
    // dandole un atributo al auxiliar que establece un nombre y un valor
    aux.setAttribute('value', document.getElementById('cipherText').innerHTML);
    // agregando el elemento parrafo al final del cuerpo
    document.body.appendChild(aux);
    // seleccionando el contenido del auxiliar.
    aux.select();
    // ejecutando comandos para copiar el contenido en el portapapeles
    document.execCommand('copy');
    // removiendo el auxiliar
    document.body.removeChild(aux);
})

// Boton para abrir las instrucciones
document.getElementById('buttonOpenSteps').addEventListener('click', () => {
    document.getElementById('cipherSteps').style.display = '';
    // Dandole scroll a donde abre el div
    let elmnt = document.getElementById('scroll');
    elmnt.scrollIntoView();
    // window.scroll(0,1200);
});

// Boton para cerrar las instrucciones
document.getElementById('buttonCloseSteps').addEventListener('click', () => {
    document.getElementById('cipherSteps').style.display = 'none';
});

// Boton para realizar la funcion cifrar
document.getElementById('buttonEncode').addEventListener('click', ()=>{
    // almacenando elementos de area de texto del mensaje escrito
    const cipherMessage = document.getElementById('cipherMessage').value;
    // almacenando posicion
    const cipherNumber = parseInt(document.getElementById('cipherNumber').value);
    // mostrando mensaje cifrado
    const cipherText = document.getElementById('cipherText');
    cipherText.innerHTML = cipher.encode(cipherNumber, cipherMessage);
});

// Boton para realizar la funcion descifrar 
document.getElementById('buttonDecode').addEventListener('click', ()=>{
    // almacenando elementos de area de texto del mensaje escrito
    const cipherMessage = document.getElementById('cipherMessage').value;
    // almacenando posicion
    const cipherNumber = parseInt(document.getElementById('cipherNumber').value);
    // mostrando mensaje descifrado
    const cipherText = document.getElementById('cipherText');
    cipherText.innerHTML = cipher.decode(cipherNumber, cipherMessage);
});