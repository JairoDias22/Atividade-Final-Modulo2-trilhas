//Modulo 02:

const prompt = require("prompt-sync")();
let time = [];
let continuar = true;

function mostrarMenu(){
    console.log("\n=============================");
    console.log("------SISTEMA DE GAMERS------");
    console.log("1. Cadastrar jogador");
    console.log("2. Deletar jogador");
    console.log("3. Mostrar equipe");
    console.log("4. Calcular a média da equipe");
    console.log("5. Buscar jogador");
    console.log("6. Atualizar pontos");
    console.log("7. Sair");
    console.log("\n");
}

// Mostrar equipe
function mostrarEquipe(){
    if (time.length === 0){
        console.log("Nenhum jogador cadastrado.");
        return;
    }
    for(let i = 0; i < time.length; i++){
        let jogador = time[i];
        console.log((i + 1) + ". " + jogador.nome + " | Função: " + jogador.funcao + " | Pontuação: " + jogador.pontuacao);
    }
}

//Cadastrar Jogador
function cadastrarJogador(){
    let nomeJogador = prompt("Digite o nome do jogador: ");
    let funcaoJogador = prompt("Digite a função do jogador: ");
    let pontuacaoJogador = Number(prompt("Digite a pontuação: "));

    if (isNaN(pontuacaoJogador)) {
        console.log("Pontuação invalida. Por favor digite um numero. ");
        return;
    } else {
        let recruta = {
            nome: nomeJogador,
            funcao: funcaoJogador,
            pontuacao: pontuacaoJogador,
        };
        time.push(recruta);
        console.log("Jogador " + nomeJogador + " foi cadastrado com sucesso");
    }
}

// deletar jogador
function deletarJogador(){
    if (time.length === 0){
        console.log("Nenhum jogador cadastrado.");
        return;
    }
    let nomeDeletado = prompt("Digite o nome a ser deletado: ");
    let indexDeletado = -1;
    for (let i = 0; i < time.length; i++){
        if (time[i].nome === nomeDeletado){
            indexDeletado = i;
            break;
        }
    }

    if (indexDeletado === -1){
        console.log("Jogador não encontrado");
        return;
    }

    time.splice(indexDeletado, 1);
    console.log("Jogador deletado com sucesso.");
}

// Calcular a média
function calculoDaMedia(){
    if (time.length === 0){
        console.log("Nenhum jogador cadastrado.");
        return;
    }
    let totalPontos = 0;
    for (let i = 0; i < time.length; i++){
        totalPontos = totalPontos + time[i].pontuacao;
    }
    let mediaPontos = totalPontos / time.length;
    console.log("A média da equipe é: " + mediaPontos);
}

//Buscar Jogador
function buscarJogador(){
    if (time.length === 0){
        console.log("Nenhum jogador cadastrado.");
        return;
    }

    let nomeDesejado = prompt("Digite o nome do jogador que deseja buscar: ");
    console.log("Buscando por: " + nomeDesejado + "...");
    let encontrou = false;

    for (let i = 0; i < time.length; i++){
        let jogadorAtual = time[i];

        if (jogadorAtual.nome === nomeDesejado){
            console.log("JOGADOR ENCONTRADO!");
            console.log("Nome: " + jogadorAtual.nome + " | Função: " + jogadorAtual.funcao + " | Pontos: " + jogadorAtual.pontuacao);
            encontrou = true;
            break;
        }
    }

    if (encontrou === false){
        console.log("O jogador " + nomeDesejado + " não faz parte da nossa equipe.");
    }
}

// Atualização de Pontuação
function atualizarPontuacao(){
    if (time.length === 0){
        console.log("Nenhum jogador cadastrado.");
        return;
    }

    console.log("\n--- ATUALIZAÇÃO DE RANKING ---");
    let nomeDesejado = prompt("Qual jogador deseja atualizar? ");
    let encontrou = false;

    for (let i = 0; i < time.length; i++){
        let jogadorAtual = time[i];

        if (jogadorAtual.nome === nomeDesejado){
            let pontosNovos = Number(prompt("Quantos pontos ele ganhou hoje? "));

            if (isNaN(pontosNovos)){
                console.log("Valor inválido. Por favor digite um número.");
                return;
            }

            jogadorAtual.pontuacao += pontosNovos;
            console.log("SUCESSO! A pontuação de " + jogadorAtual.nome + " subiu para " + jogadorAtual.pontuacao + " pontos!");
            encontrou = true;
            break;
        }
    }

    if (encontrou === false){
        console.log("ERRO: o jogador " + nomeDesejado + " não foi encontrado.");
    }
}

while (continuar === true){

    mostrarMenu();

    let opcao = prompt("Digite sua opção: ");

    if (opcao === "1"){
        cadastrarJogador();

    } else if (opcao === "2"){
        deletarJogador();

    } else if (opcao === "3"){
        mostrarEquipe();

    } else if (opcao === "4"){
        calculoDaMedia();

    } else if (opcao === "5"){
        buscarJogador();

    } else if (opcao === "6"){
        atualizarPontuacao();

    } else if (opcao === "7"){
        continuar = false;

        console.log("Encerrando o sistema...");
    } else {
        console.log("opção invalida, digite outra opção...");
    }
// Detalhe visual, é uma pausa para o usuario ver a mensagem antes de voltar ao menu
    if (continuar === true){
    prompt("\nPressione ENTER para voltar ao menu...");
    }
}