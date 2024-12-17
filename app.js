// da pra criar uma variavel com o conteudo de h1 e p para aparecer na tela

/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Número';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
*/
// essa a execução dessa função abaixo, retorna algo para a gente, ela nao tem parametros, mas retorna algo
let numeroSecreto = gerarNumeroAleatorio();

// aqui a gente cria uma funcao para resumir os codigos anteriores. pq os anteriores são muito parecidos
// essa função nao retorna algo, mas tem parâmetros e exibe algo pra nos.
function exibirTextoNaTela (tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML= texto;
};
//depois de criada a função, vamos executa-la tanto para o H1 quanto para o P
// para executar, a gente passa os parametros que entraram no lugar da tag e do texto, entre parenteses:
exibirTextoNaTela('h1','Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');

// essa função abaixo nao tem parametro e nao tem retorno
function verificarChute() {
    let chute = document.querySelector('input').value;//aqui a gente quer pegar o que está no input, o que escrevemos, e comparar com o
    //numero secreto. para pegar só o valor, usa .value no final.
    console.log(chute == numeroSecreto);
}
function gerarNumeroAleatorio(){
    return parseInt(Math.random()*10+1);
};
