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

let contador = new Contador (0)
contador.incrementar()
contador.incrementar()
contador.incrementar()
console.log(contador.valor())
contador.zerar()
console.log(contador.valor())
contador.incrementar()
contador.incrementar()
console.log(contador.valor())