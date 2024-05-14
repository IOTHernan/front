function textoAVoz() {
	const texto = 'Welcome to my application!';
	const voz = new SpeechSynthesisUtterance(texto);
	window.speechSynthesis.speak(voz);
	console.log('textoAVoz');
}

function textoAVoz404() {
	const texto = 'Error 404: File not found!';
	const voz = new SpeechSynthesisUtterance(texto);
	window.speechSynthesis.speak(voz);
	console.log('Error 404');
}

function delay(nro) {
	console.log('delay' + nro);
	for (i = 0; i < nro; i++) { }
}

// Función para reproducir texto por voz
function reproducirTexto(texto) {
	// Verifica si el navegador soporta la Web Speech API
	if ('speechSynthesis' in window) {
		// Crear un nuevo objeto de síntesis de voz
		var synthesis = window.speechSynthesis;

		// Crear un nuevo objeto de síntesis de voz
		var utterance = new SpeechSynthesisUtterance(texto);

		// Reproducir el texto por voz
		synthesis.speak(utterance);
	} else {
		// El navegador no soporta la Web Speech API
		alert("Lo siento, tu navegador no soporta la reproducción de texto por voz.");
	}
}

// Ejemplo de uso:
//  reproducirTexto("Hola, ¿cómo estás?");
