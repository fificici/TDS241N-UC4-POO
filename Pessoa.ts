let readlineSync = require('readline-sync')


export class Pessoa {
    nome: string
    sobrenome: string
    nomePai: string
    nomeMae: string
    rg: number
    cpf: number
    dataNascimento: Array<number>

    constructor (nome: string, sobrenome: string, nomePai: string, nomeMae: string, rg: number, cpf: number, dataNascimento: Array<number>) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomePai = nomePai
    this.nomeMae = nomeMae
    this.rg = rg
    this.cpf = cpf
    this.dataNascimento = dataNascimento
    }

    public setPessoa (): void {
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

        this.nome = nomeUp
        this.sobrenome = sobrenomeUp
        this.nomePai = nomePaiUp
        this.nomeMae = nomeMaeUp
        this.rg = rgUp
        this.cpf = cpfUp
        this.dataNascimento = dataNascimentoUp
    }

    public getPessoa(): void {
        console.log(`
                    Nome: ${this.nome}
                    Sobrenome: ${this.sobrenome}
                    Nome do pai: ${this.nomePai}
                    Nome da mae: ${this.nomeMae}
                    RG: ${this.rg}
                    CPF: ${this.cpf}
                    Data de nascimento: ${this.dataNascimento[0]}/${this.dataNascimento[1]}/${this.dataNascimento[2]}
                    `)
    }

    public calcularIdade(): void {
        let dataAtual = 2024
        let idade = dataAtual - this.dataNascimento[2]
        

        if (idade <= 17) {

            console.log(`
                        Nome do pai: ${this.nomePai}
                        Nome da mae: ${this.nomeMae}
                        `)
        }
        
        if (idade >= 18) {
            console.log('Não é necessário responsável.')
        }
    }
}
