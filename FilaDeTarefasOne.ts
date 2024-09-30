interface inTarefa {
    descricao: string
    status: string

    getTarefa(): void
} 
//interface da classe Tarefa

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
    //get que mostra os atributos da classe
}

interface inFilaDeTarefas {
    fila: Tarefa[]
    adicionar_tarefa(tarefa: Tarefa): void
    remover_tarefa(): Tarefa | undefined
    listar_tarefas(): void
    tarefa_pronta(): void
    concluirTarefa(index: number): void
}
//interface da classe FilDeTarefas

export class FilaDeTarefas implements inFilaDeTarefas {
    public fila: Tarefa[] = []

    public adicionar_tarefa(tarefa: Tarefa): void {
        this.fila.push(tarefa) 
    }
    //enfileira a Tarefa no vetor

    public remover_tarefa(): Tarefa | undefined {
        return this.fila.shift()
    }
    //remove a primeira Tarefa no vetor

    public listar_tarefas(): void {
        console.log(this.fila)
    }
    //printa todas as Tarefas

    public tarefa_pronta(): void {
        for (let i = 0; i < this.fila.length; i++) {
            if (this.fila[i].status == 'pendente') {
                this.concluirTarefa(i)
                console.log(this.fila[i])
                break
            } 
        }
    }
    //procura pelo indice o primeiro status que for 'pendente', entao chama o concluirTarefa() e coloca o indice como parametro para efetuar a troca para 'concluido'

    public concluirTarefa(index: number): void{
        this.fila[index].status = 'concluido'
    }
    //muda o atributo status da Tarefa para 'concluido' de acordo com o index
}

let readlineSync = require('readline-sync')

let filaNova = new FilaDeTarefas()

function menu() {
    console.log(`\n===== Fila de Tarefas =====\n 1. adicionar\n 2. remover\n 3. listar\n 4. marcar como concluídas\n 5. sair`)
}


function escolha(opcao) {
    switch (opcao) {

        case '1':
            
            console.log("\nadicionar\n");

            let perguntaTarefa = readlineSync.question('Insira descricao da tarefa: ')
            let novaTarefa = new Tarefa(perguntaTarefa, 'pendente')
            filaNova.adicionar_tarefa(novaTarefa)
            console.log(`Tarefa Inserida: ${perguntaTarefa}\nStatus: pendente`)

            break;

        case '2':

            console.log("\nremover\n")

            console.log(filaNova.remover_tarefa())

            break;

        case '3':

            console.log("\nlistar\n");

            filaNova.listar_tarefas()

            break;
        
        case '4':

            console.log('\nmarcar como conclúida\n')

            filaNova.tarefa_pronta()

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
        let opcao = readlineSync.question("\nEscolha uma opcao: ");
        encerrar = escolha(opcao);
    }
}

main()
