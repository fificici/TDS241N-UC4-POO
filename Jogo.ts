let readlineSync = require('readline-sync')

interface JogoII {
    titulo: string
    genero: string
    classificacao: number
}

export class Jogo implements JogoII{
    titulo: string
    genero: string
    classificacao: number

    constructor(titulo: string, genero: string, classificacao: number) {
        this.titulo = titulo
        this.genero = genero
        this.classificacao = classificacao
    }

    getDetalhes (): string {
        return `
                Titulo: ${this.titulo}
                Genero: ${this.genero}
                Classificacao: ${this.classificacao}
                `
    }

    setDetalhes(): void {
        let tituloUp = readlineSync.question('Titulo: ')
        let generoUp = readlineSync.question('Genero: ')
        let classificacaoUp = readlineSync.questionInt('Classificacao')

        this.titulo = tituloUp
        this.genero = generoUp
        this.classificacao = classificacaoUp
    }
}

class JogoEletronico extends Jogo {
    plataforma: string

    constructor(titulo: string, genero: string, classificacao: number, plataforma: string) {
        super(titulo, genero, classificacao)
        this.plataforma = plataforma
    }

    getDetalhes (): string {
        return `
                Titulo: ${this.titulo}
                Genero: ${this.genero}
                Classificacao: ${this.classificacao}
                Plataforma: ${this.plataforma}
                `
    }

    setDetalhes(): void {
        let tituloUp = readlineSync.question('Titulo: ')
        let generoUp = readlineSync.question('Genero: ')
        let classificacaoUp = readlineSync.questionInt('Classificacao: ')
        let plataformaUp = readlineSync.question('Plataforma: ')

        this.titulo = tituloUp
        this.genero = generoUp
        this.classificacao = classificacaoUp
        this.plataforma = plataformaUp
    }
}

class JogoTabuleiro extends Jogo {
    numeroJogadores: number

    constructor(titulo: string, genero: string, classificacao: number, numeroJogadores: number) {
        super(titulo, genero, classificacao)
        this.numeroJogadores = numeroJogadores
    }

    getDetalhes (): string {
        return `
                Titulo: ${this.titulo}
                Genero: ${this.genero}
                Classificacao: ${this.classificacao}
                Numero de Jogadores: ${this.numeroJogadores}
                `
    }

    setDetalhes(): void {
        let tituloUp = readlineSync.question('Titulo: ')
        let generoUp = readlineSync.question('Genero: ')
        let classificacaoUp = readlineSync.questionInt('Classificacao: ')
        let numeroJogadoresUp = readlineSync.questionInt('Numero de Jogadores: ')

        this.titulo = tituloUp
        this.genero = generoUp
        this.classificacao = classificacaoUp
        this.numeroJogadores = numeroJogadoresUp
    }  
}

