let readline = require('readline-sync')

class Produto {
    nome: string
    valor: number
    valorCompra: number
    marca: string
    idProduto: number
    descricao: string

    constructor (nome: string, valor: number, valorCompra: number, marca: string, idProduto: number, descricao: string){
        this.nome = nome
        this.valor = valor
        this.valorCompra = valorCompra
        this.marca = marca
        this.idProduto = idProduto
        this.descricao = descricao
    }

    getProduto (): void {
        console.log (`
                    nome: ${this.nome} 
                    valor: ${this.valor}    
                    valor de compra: ${this.valorCompra}
                    marca: ${this.marca}    
                    idProduto: ${this.idProduto}    
                    descricao: ${this.descricao}    
                    `)
    }

    setProduto (): void {
        let nomeUp = readline.question('Insira nome produto: ')
        let valorUp = readline.questionInt('Insira valor produto: ')
        let valorCompraUp = readline.questionInt('Insira valor produto: ')
        let marcaUp = readline.question('Insira marca produto: ')
        let idProdutoUp = readline.questionInt('Insira idProduto produto: ')
        let descricaoUp = readline.question('Insira descricao produto: ')

        this.nome = nomeUp
        this.valor = valorUp
        this.valorCompra = valorCompraUp
        this.marca = marcaUp
        this.idProduto = idProdutoUp
        this.descricao = descricaoUp
    }

    calcularLucro (): number {
        let lucro = this.valor - this.valorCompra
        return lucro
    }

    aplicarDesconto(): void{
        let desconto = readline.questionInt("Qual a porcentagem de desconto? ")
        let valorDescontado = (this.valor * (100 - desconto)) / 100
        console.log(`Valor do produto com desconto: ${valorDescontado}`);
    }
}

class Venda {
    produto: Produto
    quantidade: number
    valorTotal: number
    data: string
    idVenda: number
    endereco: string

    constructor (produto: Produto, quantidade: number,  data: string, idVenda: number, endereco: string) {
        this.produto = produto
        this.quantidade = quantidade
        this.valorTotal = this.quantidade * this.produto.valor
        this.data = data
        this.endereco = endereco
        this.idVenda = idVenda
    }

    calcularValor(): number {
        let calcularValor = this.produto.valor * this.quantidade

        return calcularValor
    }

    getVenda (): void {
        console.log(`   
                    produto: ${this.produto.nome}   
                    quantidade: ${this.quantidade}  
                    valorTotal: ${this.calcularValor()}  
                    data: ${this.data}  
                    idVenda: ${this.idVenda}    
                    endereco: ${this.endereco}  
                    `)
    }

    setVenda(): void{
        let produtoOuN = readline.question("Você gostaria de modificar o produto? (s/n) ").toLowerCase()

        if(produtoOuN == "s"){
            this.produto.setProduto()
            let arrayInfos = modificarVenda()
        
            this.quantidade = arrayInfos[0]
            this.data = arrayInfos[1]
            this.idVenda = arrayInfos[2]
            this.endereco = arrayInfos[3]

        } else {
            let arrayInfos = modificarVenda()
            this.quantidade = arrayInfos[0]
            this.data = arrayInfos[1]
            this.idVenda = arrayInfos[2]
            this.endereco = arrayInfos[3]
        }

        function modificarVenda(): Array<any>{
            let quantidadeUp = readline.questionInt("Qual a quantidade?: ")
            let dataUp = readline.question("Qual a data da venda?: ")
            let idVendaUp = readline.question("Qual o id da venda?: ")
            let enderecoUp = readline.question("Qual o endereco de entrega da venda?: ")
            let arrayInfos = [quantidadeUp, dataUp, idVendaUp, enderecoUp]

            return arrayInfos
        }
    }
}

let produto = new Produto("TV LG 50''", 3000, 2000, 'LG', 1, 'TV da LG 3a geração de 50 polegadas')
let venda = new Venda (produto, 3, "01/07/2024", 1, 'Av. Ovo, 123')
console.log(venda.calcularValor())
