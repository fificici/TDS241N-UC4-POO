let readlineSync = require('readline-sync')

export class FilaDeParque{
    private pessoas: string[] = []

    public entrarNaFila(nome: string): void{
        this.pessoas.unshift(nome)
    }

    public atender(): string | undefined{
        if(this.isEmpty()){
            console.log('Fila vazia')
            return undefined
        }

        return this.pessoas.pop()
    }

    public proximaNaFila(): string | undefined{
        if(this.isEmpty()){
            console.log('Fila vazia')
            return undefined
        }

        return this.pessoas[this.pessoas.length - 1]
    }

    public isEmpty(): boolean{
        return this.pessoas.length === 0
    }

    public size(): number{
        return this.pessoas.length
    }
}
let sistema = new FilaDeParque()

function menu() {
    console.log(`===== SISTEMA DE FILA DE PARQUE =====\n 1. entrarNaFila\n 2. atender\n 3. proximaNaFila\n 4. isEmpty\n 5. size\n 6. sair `)
}

function escolha(opcao) {
    switch (opcao) {

        case '1':

            console.log("entrarNaFila");
            let perguntaNome = readlineSync.question('Insira nome: ')
            sistema.entrarNaFila(perguntaNome)
            console.log(`Nome inserido: ${perguntaNome}`)

            break;

        case '2':

            console.log("atender")

            console.log(sistema.atender())

            break;

        case '3':

            console.log("proximaNaFila");

            console.log(sistema.proximaNaFila())

            break;
        
        case '4':

            console.log('isEmpty')

            console.log(`Fila vazia: ${sistema.isEmpty()}`)

            break;

        case '5':

            console.log('size')

            console.log(`Tamanho da fila: ${sistema.size()}`)

            break;

        case '6':

            console.log("Encerrando o programa...");
           
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
        let opcao = readlineSync.question("Escolha uma opcao: ");
        encerrar = escolha(opcao);
    }
}

main()