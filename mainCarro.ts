import { Carro } from './Carro'
import { Garagem } from './Garagem'

let readlineSync = require('readline-sync')

let menu = true

let garagem = new Garagem ()

while(menu){
    let pergunta = readlineSync.questionInt(`1 - Adicionar Carro \n 2 - Verificar Garagem \n 3 - Modificar Carro \n 4 - Deletar Carro \n 0 - Sair \n Insira: `)

    switch(pergunta){

        case 1: 
            let marca = readlineSync.question('Marca: ')
            let km = readlineSync.questionInt('Km/L: ')
            let tanque = readlineSync.questionInt('Tanque: ')

            let carroTemp = new Carro(tanque, km, marca)

            garagem.setGaragem(carroTemp)

            break

        case 2: 
            console.log(`Carros: `)
            garagem.getGaragem()

            break

        case 3: 
            garagem.modificarCarro()

            break

        case 4: 
            garagem.deletarCarro()

            break

        case 0:
            process.exit(0)
    }
}