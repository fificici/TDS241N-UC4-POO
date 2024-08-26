let readline2 = require('readline-sync')

class Aluno {
    nome: string
    notas: Array<number>

    constructor (nome: string) {
        this.nome = nome
        this.notas = []
    }

    addNotas(): void{
        let nota1 = readline2.questionInt('nota 1: ')
        let nota2 = readline2.questionInt('nota 2: ')
        let nota3 = readline2.questionInt('nota 3: ')

        this.notas.push(nota1, nota2, nota3)
    }

    calcularMedia() {
        let media = ((this.notas[0] + this.notas[1] + this.notas[2]) / this.notas.length)
        return `A média do ${this.nome} é ${media}`
    }

}

let nomeAluno = readline2.question('nome do aluno: ')

let novoAluno = new Aluno (nomeAluno)

novoAluno.addNotas()
console.log(novoAluno.calcularMedia())


