let readlineSync = require('readline-sync')

import  { Carro } from './Carro'

export interface GaragemII {
    carros: Carro []
    getGaragem(): void
    setGaragem(carro: Carro): void
}

export class Garagem implements GaragemII {
    public carros: Carro [] = []

    public getGaragem(): void {
        for (let i = 0; i < this.carros.length; i++) {
            console.log(`${this.carros[i].marca}`)
        }
    }

    public setGaragem(carro: Carro): void{
        if(this.carros.length >= 10) {
            console.log('Limite máx = 10.')
        } else {
            this.carros.push(carro)
            console.log(`${this.carros.length} carro(s) na garagem.`)
        }
    }

    public deletarCarro(): void{
        for (let i = 0; i < this.carros.length; i++) {
            console.log(`Carro ${i}: ${this.carros[i].marca}`)
        }

        let deletar = readlineSync.question('Carro que queira deletar: ')

        this.carros = this.carros.filter(carro => carro.marca !== deletar)

        console.log(`Carros: 
                    ${this.carros}`)
    }

    public modificarCarro(): void{
        for(let i = 0; i < this.carros.length; i++) {
            console.log(`${i} - ${this.carros[i].marca}`)
        }

        let modificarNumero = readlineSync.question('Numero do carro para modificar: ')

        let modificarMarca = readlineSync.question('Marca: ')
        let modificarKm = readlineSync.questionInt('Km/L: ')
        let modificarTanque = readlineSync.questionInt('Tanque: ')

        this.carros[modificarMarca].marca = modificarMarca
        this.carros[modificarKm].km = modificarKm
        this.carros[modificarTanque].tanque = modificarTanque

        console.log(`Carro: ${this.carros[modificarNumero].marca}`)

    }
}