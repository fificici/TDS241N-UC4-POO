let readlineSync = require('readline-sync')

export interface CarroII {
    tanque: number
    km: number
    marca: string

    getCarro(): void
    setCarro(): void
    andar(): void
    obterGasolina(): number
    adicionarGasolina(): void
}

export class Carro implements CarroII {
    tanque: number
    km: number
    marca: string

    constructor (tanque: number, km: number, marca: string) {
        this.tanque = tanque
        this.km = km
        this.marca = marca
    }

    public getCarro(): void{
        console.log(`
                    Marca: ${this.marca}
                    Km/L: ${this.km}
                    Tanque: ${this.tanque}
                    `)
    }

    public setCarro() {
        let marcaUp = readlineSync.question('Marca: ')
        let kmUp = readlineSync.questionInt('Km/L: ')
        let tanqueUp = readlineSync.questionInt('Tanque: ')

        this.tanque = tanqueUp
        this.km = kmUp
        this.marca = marcaUp

        if(marcaUp == ""){
            this.marca = this.marca
        } else {
            this.tanque = tanqueUp
        }

        if(kmUp == null){
            this.km = this.km
        } else {
            this.km = kmUp
        }

        if(tanqueUp == null){
            this.tanque = this.tanque
        } else {
            this.marca = marcaUp
        }
    }

    public andar () {
        let distancia = readlineSync.questionInt('Distancia: ')
        let gasto = (distancia / this.km) 

        if (gasto > this.tanque) {
            console.log('Combustível insuficiente')
        } else {
            this.tanque -= gasto
            console.log(`Viagem realizada. Tanque: ${this.tanque}`)
        }
    }

    public obterGasolina(): number {

        return this.tanque
    }

    adicionarGasolina(): void {

        let adicionarGasolina = readlineSync.question('Adicione gasolina: ')
        this.tanque += adicionarGasolina

        console.log(`Você está com ${this.obterGasolina()}L`)
    }
}