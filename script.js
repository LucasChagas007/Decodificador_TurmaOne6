document.addEventListener("DOMContentLoaded", function() {
    const inputText = document.getElementById("inputText");
    const textResult = document.getElementById("text-result");
    const outputContainer = document.getElementById("outputText");
    const encriptButton = document.getElementById("encript");
    const decryptButton = document.getElementById("decrypt");
    const copyButton = document.getElementById("copy-text");
  
    // Função para encriptar texto
    function encriptText() {
      let text = inputText.value.toLowerCase();
      text = text.replace(/e/g, "enter");
      text = text.replace(/i/g, "imes");
      text = text.replace(/a/g, "ai");
      text = text.replace(/o/g, "ober");
      text = text.replace(/u/g, "ufat");
      textResult.textContent = text;
      outputContainer.classList.remove("disabled");
      inputText.value = "";
    }
  
    // Função para desencriptar texto
    function decryptText() {
      let text = inputText.value.toLowerCase();
      text = text.replace(/enter/g, "e");
      text = text.replace(/imes/g, "i");
      text = text.replace(/ai/g, "a");
      text = text.replace(/ober/g, "o");
      text = text.replace(/ufat/g, "u");
      textResult.textContent = text;
      outputContainer.classList.remove("disabled");
      inputText.value = "";
    }
  
    // Função para copiar texto para a área de transferência
    function copyText() {
      const text = textResult.textContent.trim();
      if (text) {
        navigator.clipboard.writeText(text).then(function() {
          alert("Texto copiado com sucesso!");
        }).catch(function(err) {
          console.error('Erro ao copiar o texto: ', err);
        });
      } else {
        alert("Não há texto para copiar!");
      }
    }
  
    // Adicionando eventos aos botões
    encriptButton.addEventListener("click", encriptText);
    decryptButton.addEventListener("click", decryptText);
    copyButton.addEventListener("click", copyText);
  });
  