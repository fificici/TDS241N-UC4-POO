interface inTarefa {
    descricao: string
    status: string

    getTarefa(): void
}

export class Tarefa implements inTarefa {
    public descricao: string
    public status: string

    public constructor(descricao: string, status: string) {
        this.descricao = descricao
        this.status = 'pendente'
    }

    public getTarefa(): void {
        console.log(`Descrição: ${this.descricao}\nStatus: ${this.status}`)
    }
}

interface inFilaDeTarefas {
    fila: Tarefa[]
    adicionar_tarefa(tarefa: Tarefa): void
    remover_tarefa(): Tarefa | undefined
    listar_tarefas(): void
    tarefa_pronta(): void
}

export class FilaDeTarefas implements inFilaDeTarefas {
    public fila: Tarefa[] = []

    public adicionar_tarefa(tarefa: Tarefa): void {
        this.fila.push(tarefa) 
    }

    public remover_tarefa(): Tarefa | undefined {
        return this.fila.shift()
    }

    public listar_tarefas(): void {
        console.log(this.fila)
    }

    public tarefa_pronta(): void {
        this.fila[0].status = 'concluído'
    }
}

let readlineSync = require('readline-sync')

let filaNova = new FilaDeTarefas()

function menu() {
    console.log(`===== Fila de Tarefas =====\n 1. adicionar\n 2. remover\n 3. listar\n 4. marcar como concluídas\n 5. sair`)
}


function escolha(opcao) {
    switch (opcao) {

        case '1':

            console.log("adicionar");
            let perguntaTarefa = readlineSync.question('Insira descricao da tarefa: ')
            this.Tarefa.descricao = perguntaTarefa
            filaNova.adicionar_tarefa(perguntaTarefa)
            console.log(`Tarefa Inserida: ${perguntaTarefa}`)

            break;

        case '2':

            console.log("remover")

            console.log(filaNova.remover_tarefa())

            break;

        case '3':

            console.log("listar");

            filaNova.listar_tarefas()

            break;
        
        case '4':

            console.log('marcar como conclúida')

            console.log(filaNova.tarefa_pronta())

            break;

        case '5':

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
