let readline = require('readline-sync')

export interface Aluno {
    matricula: number
    nome: string
    notaProva1: number
    notaProva2: number
    notaTrabalho: number
    
    media(): number;
    final(): number;
}

export class AlunoII implements Aluno {
    public matricula: number
    public nome: string
    public notaProva1: number
    public notaProva2: number
    public notaTrabalho: number

    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number){
        this.matricula = matricula
        this.nome = nome
        this.notaProva1 = notaProva1
        this.notaProva2 = notaProva2
        this.notaTrabalho = notaTrabalho
    }

    public getAluno(): void {
        console.log(`Nota: ${this.nome}, Matricula: ${this.matricula}, P1: ${this.notaProva1}, P2: ${this.notaProva2}, Trabalho: ${this.notaTrabalho}`)
    }

    public setDia(): void {
        let nomeUp = readline.question('Nome: ')
        let matriculaUp = readline.questionInt('Matricula: ')
        let notaProva1Up = readline.questionInt('P1: ')
        let notaProva2Up = readline.questionInt('P2: ')
        let notaTrabalhoUp = readline.questionInt('Trabalho: ')

        this.nome = nomeUp
        this.matricula = matriculaUp
        this.notaProva1 = notaProva1Up
        this.notaProva2 = notaProva2Up
        this.notaTrabalho = notaTrabalhoUp
    }

    public media(): number {
        let calculoMedia = (this.notaProva1 + this.notaProva2) / 2
        return calculoMedia
    }

    public final(): number {
        let calculoFinal = (this.notaProva1 + this.notaProva2 + this.notaTrabalho) / 3
        return calculoFinal
    }
}

let novoAluno = new AlunoII (1, 'Jão', 10, 5, 2)
novoAluno.media()
novoAluno.final()
