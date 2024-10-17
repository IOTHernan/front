function SalidaDeVoz(texto: string) {
  // Crear el cuadro de diálogo
  const dialogBox = document.createElement('div');
  dialogBox.style.position = 'fixed';
  dialogBox.style.top = '50%';
  dialogBox.style.left = '50%';
  dialogBox.style.transform = 'translate(-50%, -50%)';
  dialogBox.style.padding = '20px';
  dialogBox.style.backgroundColor = '#fff';
  dialogBox.style.border = '1px solid #ccc';
  dialogBox.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  dialogBox.style.textAlign = 'center';

  // Añadir el texto al cuadro de diálogo
  const textBox = document.createElement('p');
  textBox.textContent = texto;
  dialogBox.appendChild(textBox);

  // Crear el botón
  const button = document.createElement('button');
  button.textContent = 'Continuar';
  button.style.padding = '10px 20px';
  button.style.fontSize = '16px';
  button.style.marginTop = '10px';
  button.style.backgroundColor = 'linear-gradient(45deg, #ff6b6b, #f5f5f5, #4caf50, #2196f3)';
  button.style.border = 'none';
  button.style.borderRadius = '5px';
  button.style.cursor = 'pointer';
  dialogBox.appendChild(button);

  // Añadir el cuadro de diálogo al cuerpo del documento
  document.body.appendChild(dialogBox);

  // Esperar a que se presione el botón
  button.addEventListener('click', () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(texto);
      utterance.lang = 'es-ES'; // Ajusta el idioma según sea necesario
      window.speechSynthesis.speak(utterance);
    } else {
      console.error('La síntesis de voz no es soportada en este navegador.');
    }
    // Eliminar el cuadro de diálogo después de la síntesis de voz
    document.body.removeChild(dialogBox);
  });
}
