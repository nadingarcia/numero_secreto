let numeroMaior;
let numeroSecreto;
let tentativas;
let historico = [];
let nummerosSorteados = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo da Adivinhação);
    exibirTextoNaTela('p', 'Escolha o nivel de dificuldade para começar o jogo');
}

mensagemInicial();

function nivelFacil(){
    numeroMaior = 10;
    iniciarJogo();
}
function nivelMedio(){
    numeroMaior = 50;
    iniciarJogo();
}
function nivelDificil(){
    numeroMaior = 100;
    iniciarJogo();
}

function iniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    nummerosSorteados.push(numeroSecreto);
    console.log(nummerosSorteados);
    document.getElementById('iniciar').removeAttribute('disabled')
    document.getElementById('dica').removeAttribute('disabled')
    exibirTextoNaTela('h1', 'Boa Sorte');
    exibirTextoNaTela('p', `Estou pensando em um numero entre 1 e ${numeroMaior}. Você consegue adivinhar qual é?`);
    document.getElementById('reiniciar').setAttribute('disabled','disabled');
    historico = [];
    tentativas = 0;
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    tentativas ++;
    historico.push(chute);
    if (isNaN(chute) || chute === ''){
        exibirTextoNaTela('p', 'por favor digite um numero valido.');
        return;
    }
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativas = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `voce acertou com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{ if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'Tente Novamente o numero secreto é menor');
        exibirTextoNaTela('h1', 'MENOR');
    }
    else {
        exibirTextoNaTela('p', 'Tente novamente o numero secreto é maior');
        exibirTextoNaTela('h1', 'MAIOR');
    } 
    exibirHistorico();
    limparCampo();
}
}

function exibirHistorico() {
    let historicoTexto = 'Historico dos chutes : ';
    for (let i = 0; i < historico.length; i++){
        historicoTexto += `${historico[i]}, `;
    }
    exibirTextoNaTela('p2', historicoTexto);
}

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * numeroMaior) + 1;
}    
    
function limparCampo(){    
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    mensagemInicial();
    iniciarJogo();
    limparHistorico();
    limparCampo();
    document.getElementById('dica').innerText = 'Dica';
}
function limparHistorico(){
    exibirTextoNaTela('p2', '');
}

function mostrarDica(){
    if (numeroSecreto % 2 === 0){
        document.getElementById('dica').innerText = 'Tente um numero par';
    } else {
        if (numeroSecreto % 3 === 0) {
            document.getElementById('dica').innerText = 'O numero e divisivel po 3';
        } else {
            document.getElementById('dica').innerText = 'O numero é impar e nao divisivel por 3';
        }
    }
}
