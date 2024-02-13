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
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha o nivel de dificuldade para comecar o jogo');
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
    exibirTextoNaTela('h1', 'Boa Sorte');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroMaior}`);
    document.getElementById('reiniciar').setAttribute('disabled','disabled');
    historico = [];
    tentativas = 0;
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    tentativas ++;
    historico.push(chute);

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
}
function limparHistorico(){
    exibirTextoNaTela('p2', '');
}