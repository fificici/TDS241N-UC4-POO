class Livro {
    titulo: string
    autor: string
    anoPublicacao: number

    constructor(titulo: string, autor: string, anoPublicacao: number) {
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
    }

    obterDetalhes(): void {
        console.log(novoLivro)
    }
}

let novoLivro = new Livro ('revolução dos bichos', 'george orwell', 1968)

novoLivro.obterDetalhes()