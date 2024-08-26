import { log } from "console"

let readline = require('readline-sync')

class Pessoa {
    nome: string
    idade: number

    constructor(nome: string, idade: number){
        this.nome = nome
        this.idade = idade
    }

    cumprimentar(): void{
        console.log(`oi meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

let novoNome = readline.question('Nome: ')
let novaPessoa = new Pessoa(novoNome, 19)

novaPessoa.cumprimentar()

class Crianca extends Pessoa {

    cumprimentar(): void {
        console.log(`oi meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

let novoNome2 = readline.question('Nome: ')

let novaCrianca = new Crianca(novoNome2, 7)
novaCrianca.cumprimentar()

class Adulto extends Pessoa {

    cumprimentar(): void {
        console.log(`oi meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

let novoNome3 = readline.question('Nome: ')

let novoAdulto = new Adulto (novoNome3, 30)
novoAdulto.cumprimentar()

class Velho extends Pessoa {

    cumprimentar(): void {
        console.log(`oi meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

let novoNome4 = readline.question('Nome: ')

let novoVelho = new Crianca(novoNome4, 65)
novoVelho.cumprimentar()
