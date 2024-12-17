let listaNumerosSorteados [];//cria aqui uma lista vazia
let numerolimite = 50;// criada essa variável para nao precisar trocar ela em vários locais do codigo.
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML= texto;
//funcao para ler o campo selecionado. tem que estar no HTLM tb o script
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}

exibirMensagemInicial(); // tem que chamar a função fora de outra função antes.

function verificarChute() {
    let chute = document.querySelector('input').value;//aqui a gente quer pegar o que está no input, o que escrevemos, e comparar com o
    //numero secreto. para pegar só o valor, usa .value no final.

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';// aqui o codig é semelhante a if else, se tentativa for > que 1, entao... se não ...
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativa);
        
        // se vc acerta, o botão de reiniciar tem que ser ativado.
        document.getElementById('reiniciar').removeAttribute('disabled'); // esse nome reiniciar está no ID do button no HTML
        // getElementById é respons por identif qual é button que tem o ID 'reiniciar' 
        // remove.Attribute é usado para remover esse atributo chamado 'disabled' do HTML q está impedindo o button de funcionar.

    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('h1', 'Errou!');
            exibirTextoNaTela('p', 'O número é menor');
        } else {
            exibirTextoNaTela('h1', 'Errou!');
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++; // aqui ele vai contatar a quant de tentativas começando de 1. contar quantas vezes executa o else maior.
        limparCampo();// execucao da função limpar campo depois de uma tentativa errada
        }
    }

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()* numerolimite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;//aqui serve para esvaziar a lista caso nao tenha mais Nº diferentes para inserir nela.
    if (quantidadeDeElementosNaLista == numerolimite){
        listaNumerosSorteados = []
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)){//includes é uma função no JS que compara se o numero está na lista
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);//essa linha é para salvar na lista o numero sorteado usando a funcao push do JS.
        console.log(listaNumerosSorteados);//para mostrar no console a lista.
        return numeroEscolhido;
    } 
}
function limparCampo(){
    // função criada para limpar o campo do chute. executada se o chute nao for o certo.
    chute = document.querySelector('input');
    chute.value = '';
} 
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);// aqui vc coloca um parametro 'true' no setAtribute para habilitar o atributo novamente no HTML 
};