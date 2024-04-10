const inputExibir = document.querySelector(".container__input");
const microfone = document.querySelector(".iconeMicrofone");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";

microfone.addEventListener("click", ()=> {
    recognition.start();
})


recognition.addEventListener("result", onSpeak)

function onSpeak(evento) {
   let chuteFalado = evento.results[0][0].transcript;

   exibirChute(chuteFalado);
}

function exibirChute(chuteFalado) {
    inputExibir.value = chuteFalado;
}