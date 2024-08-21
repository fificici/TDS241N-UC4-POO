let readline = require('readline-sync')

class NumeroComplexo {
    real: number
    imaginario: number

    constructor(real: number, imaginario: number){
        this.real = real
        this.imaginario = imaginario
    }

    getReal(): void {
        console.log(this.real)
    }

    getImaginario(): void {
        console.log(this.imaginario + 'i')
    }

    setReal(): void {
        let realUp = readline.questionFloat('Real: ')

        this.real = realUp
        console.log(realUp)
    }

    setImaginario(): void {
        let imaginarioUp = readline.questionFloat('Imaginario: ')

        this.imaginario = imaginarioUp
        console.log(imaginarioUp)
    }

    somar(outroComplexo: NumeroComplexo): void {
        let novoImaginario = this.imaginario + outroComplexo.imaginario
        let novoReal = this.real + outroComplexo.real
        if (novoImaginario >= 0) {
            console.log(novoReal, '+', novoImaginario + 'i')
        } else {
            console.log(novoReal, novoImaginario + 'i')
        }
    }

    subtrair(outroComplexo: NumeroComplexo): void {
        let novoImaginario = this.imaginario - outroComplexo.imaginario
        let novoReal = this.real - outroComplexo.real
        if (novoImaginario >= 0) {
            console.log(novoReal, '+', novoImaginario + 'i')
        } else {
            console.log(novoReal, novoImaginario + 'i')
        }
    }

    multiplicar(outroComplexo: NumeroComplexo): void {
        let novoImaginario = ((this.real * outroComplexo.imaginario) + (this.imaginario * outroComplexo.real))
        let novoReal = ((this.real * outroComplexo.real) - (this.imaginario * outroComplexo.real))

        if (novoImaginario >= 0) {
            console.log(novoReal, '+', novoImaginario + 'i')
        } else {
            console.log(novoReal, novoImaginario + 'i')
        }
    }

    dividir(outroComplexo: NumeroComplexo): void {
        let novoReal = (((this.real * outroComplexo.real) + (this.imaginario * outroComplexo.real)) / ((outroComplexo.real * outroComplexo.real) + (outroComplexo.imaginario * outroComplexo.imaginario)))
        let novoImaginario = (((this.imaginario * outroComplexo.real) - (this.real * outroComplexo.imaginario)) / ((outroComplexo.real * outroComplexo.real) + (outroComplexo.imaginario * outroComplexo.imaginario)))
        
        if (novoImaginario >= 0) {
            console.log(novoReal, '+', novoImaginario + 'i')
        } else {
            console.log(novoReal, novoImaginario + 'i')
        }
    }

    equals(outroComplexo: NumeroComplexo): string {

        console.log(compararReal(this.real))
        function compararReal (real: number) {
            if (real == outroComplexo.real) {
                return true
            } else {
                return false
            }
        }

        console.log(compararImaginario(this.imaginario))
        function compararImaginario(imaginario: number) {
            if (imaginario == outroComplexo.imaginario) {
                return true
            }
            if (imaginario != outroComplexo.imaginario) {
                return false
            }
        }

        return ''
    }

    toString(): string {
        let novoImaginario = this.imaginario.toString()
        let novoReal = this.real.toString()
        return `[${novoReal}, ${novoImaginario}i]`
    }

    modulo(): number {
        let modulo = Math.sqrt((this.real * this.real) + (this.imaginario * this.imaginario))
        return modulo
    }
}

let ncomplexo = new NumeroComplexo (0, 0)
let outroComplexo = new NumeroComplexo (10, 3)

function menu2() {
    console.log(`===== escolha aí =====\n 1. getReal\n 2. getImaginario\n 3. setReal\n 4. setImaginario\n 5. somar\n 6. subtrair\n 7. multiplicar\n 8. dividir\n 9. equals\n 10. toString\n 11. modulo\n 12. sair`)

}

function escolha2(opcao: string) {
    switch (opcao) {

        case '1':

            ncomplexo.getReal()

            break;

        case '2':

            ncomplexo.getImaginario()

            break;

        case '3':

            ncomplexo.setReal()

            break;

        case '4':

            ncomplexo.setImaginario()

            break;
        
        case '5':

            ncomplexo.somar(outroComplexo)

            break;

        case '6':

            ncomplexo.subtrair(outroComplexo)

            break;

        case '7':

            ncomplexo.multiplicar(outroComplexo)

            break;

        case '8':

            ncomplexo.dividir(outroComplexo)

            break;

        case '9':

            console.log(ncomplexo.equals(outroComplexo))

            break;

        case '10':

            console.log(ncomplexo.toString())

            break;

        case '11':

            console.log(ncomplexo.modulo())

            break;

        case '12':

            console.log("saindo...");
           
            return true; 

        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
    }
    return false; 
}

function main2() {
    let encerrar = false;

    while (!encerrar) {
        menu2();
        let opcao = readline.question("Escolha uma opcao: ");
        encerrar = escolha2(opcao);
    }
}

main2()
/*
ncomplexo.getReal()
ncomplexo.getImaginario()
ncomplexo.somar(outroComplexo)
ncomplexo.subtrair(outroComplexo)
ncomplexo.multiplicar(outroComplexo)
ncomplexo.dividir(outroComplexo)
console.log(ncomplexo.equals(outroComplexo))
console.log(ncomplexo.toString())
console.log(ncomplexo.modulo())
*/