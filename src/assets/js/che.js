function textoAVoz() {
    const texto = 'Welcome to my application!';
    const voz = new SpeechSynthesisUtterance(texto);
    window.speechSynthesis.speak(voz);
    console.log('textoAVoz');
}

function delay(nro) {
    console.log('delay'+nro);
    for(i=0;i<nro;i++) {}
}