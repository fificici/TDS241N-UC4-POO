import { Pessoa } from "./Pessoa";

let readlineSync = require('readline-sync')

function criarPessoa(): Pessoa {
    let nomeUp = readlineSync.question('Nome: ')
    let sobrenomeUp = readlineSync.question('Sobrenome: ')
    let nomePaiUp = readlineSync.question('Nome do pai: ')
    let nomeMaeUp = readlineSync.question('Nome da mae: ')
    let rgUp = readlineSync.questionInt('RG: ')
    let cpfUp = readlineSync.questionInt('CPF: ')
    let dia = readlineSync.questionInt('Dia nascimento: ')
    let mes = readlineSync.questionInt('Mes nascimento: ')
    let ano = readlineSync.questionInt('Ano nascimento : ')
    let dataNascimentoUp = [dia, mes, ano]

    let pessoa = new Pessoa(nomeUp, sobrenomeUp, nomePaiUp, nomeMaeUp, rgUp, cpfUp, dataNascimentoUp)
    return pessoa
}

let novaPessoa = criarPessoa()
novaPessoa.getPessoa()
novaPessoa.calcularIdade()