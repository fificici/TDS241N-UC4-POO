import { Jogo } from "./Jogo"

let readlineSync = require('readline-sync')

interface BibliotecaDeJogosII {
    jogos: Jogo []
}

export class BibliotecaDeJogos implements BibliotecaDeJogosII{
    jogos: Jogo []  

    constructor () {
        this.jogos = []
    }

    adicionarJogo (jogo: Jogo): void {
        this.jogos.push(jogo)
    }

    removerJogo (): void {
        this.listarJogos()
        console.log(this.jogos)
        let tituloExcluir = readlineSync.question('Exclua um titulo: ')
        this.jogos = this.jogos.filter(objJogo => objJogo.titulo !== tituloExcluir)
    }

    listarJogos (): void {
        console.log(this.jogos)
    }
}