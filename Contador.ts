let readlinesync = require('readline-sync')

class Contador {
    inicial: number

    constructor(inicial: number){
        this.inicial = inicial
    }

    incrementar(): number{
        return ++this.inicial
    }

    zerar(): number{
        this.inicial = 0
        return this.inicial
    }

    valor(): number{
        return this.inicial
    }
}

let inicial = new Contador(0)

function menu() {
    console.log(`===== escolha aí =====\n 1. incrementar\n 2. zerar\n 3. valor\n 4. sair`)

}

function escolha(opcao: string) {
    switch (opcao) {

        case '1':

            inicial.incrementar()

            break;

        case '2':

            inicial.zerar()

            break;

        case '3':

            console.log(inicial.valor())

            break;

        case '4':

            console.log("saindo...");
           
            return true; 

        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
    }
    return false; 
}

function main() {
    let encerrar = false;

    while (!encerrar) {
        menu();
        let opcao = readlinesync.question("Escolha uma opcao: ");
        encerrar = escolha(opcao);
    }
}

main()