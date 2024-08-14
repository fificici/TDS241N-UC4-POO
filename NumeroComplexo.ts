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
        let realUp = readline.question('Real: ')

        this.real = realUp
    }

    setImaginario(): void {
        let imaginarioUp = readline.question('Imaginario: ')

        this.imaginario = imaginarioUp
    }

    somar(outroComplexo: NumeroComplexo): void {
        let novoImaginario = this.imaginario + outroComplexo.imaginario
        let novoReal = this.real + outroComplexo.real
        console.log(`${novoReal}, ${novoImaginario}i`)
    }

    subtrair(outroComplexo: NumeroComplexo): void {
        let novoImaginario = this.imaginario - outroComplexo.imaginario
        let novoReal = this.real - outroComplexo.real
        console.log(novoReal, novoImaginario + 'i')
    }

    multiplicar(outroComplexo: NumeroComplexo): void {
        let novoImaginario = ((this.real * outroComplexo.imaginario) + (this.imaginario * outroComplexo.real))
        let novoReal = ((this.real * outroComplexo.real) - (this.imaginario * outroComplexo.real))
        console.log(novoReal, novoImaginario + 'i')
    }

    dividir(outroComplexo: NumeroComplexo): void {
        let novoReal = (((this.real * outroComplexo.real) + (this.imaginario * outroComplexo.real)) / ((outroComplexo.real * outroComplexo.real) + (outroComplexo.imaginario * outroComplexo.imaginario)))
        let novoImaginario = (((this.imaginario * outroComplexo.real) - (this.real * outroComplexo.imaginario)) / ((outroComplexo.real * outroComplexo.real) + (outroComplexo.imaginario * outroComplexo.imaginario)))
        console.log(novoReal, novoImaginario + 'i')
    }

    equals(outroComplexo: NumeroComplexo): boolean {

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
        
        return false
    }

    toString(): string {
        let novoImaginario = this.imaginario.toString()
        let novoReal = this.real.toString()
        return `${novoReal}, ${novoImaginario}i`
    }

    modulo(): number {
        let modulo = Math.sqrt((this.real * this.real) + (this.imaginario * this.imaginario))
        return modulo
    }
}

let ncomplexo = new NumeroComplexo (10, 10)
let outroComplexo = new NumeroComplexo (10, 10)

ncomplexo.getReal()
ncomplexo.getImaginario()
ncomplexo.somar(outroComplexo)
ncomplexo.subtrair(outroComplexo)
ncomplexo.multiplicar(outroComplexo)
ncomplexo.dividir(outroComplexo)
console.log(ncomplexo.equals(outroComplexo))
console.log(ncomplexo.toString())
console.log(ncomplexo.modulo())
