import { log } from "console";

//let readline = require('readline-sync')

interface Voo {
    numeroVoo: string 
    data: string
    
    proximoLivre(): number;
    verifica(cadeira: number): boolean;
    ocupa(cadeira: number): boolean;
    vagas(): number;
    getVoo(): string;
    getData(): string;
    clone(): VooII;
}

export class VooII implements Voo {
    private passageiros: boolean[] 
    public numeroVoo: string
    public data: string

    constructor(numeroVoo: string, data: string){
        this.passageiros = new Array(100).fill(false)
        this.numeroVoo = numeroVoo
        this.data = data
    }

    public proximoLivre(): number {
        for(let i = 0; i < this.passageiros.length; i++){
            if(!this.passageiros[i]){
                return i + 1
            }
        }
        console.log('sem cadeiras livres');
        return -1
    }

    public verifica(cadeira: number): boolean {
        return this.passageiros[cadeira - 1]
    }

    public ocupa(cadeira: number): boolean {
        if(!this.verifica(cadeira)){
            this.passageiros[cadeira - 1] = true
            return true
        }

        return false
    }

    public vagas(): number {
        return this.passageiros.filter((ocupada) => !ocupada).length
    }

    public getVoo(): string {
        return this.numeroVoo
    }

    public getData(): string {
        return this.data
    }

    public clone(): VooII {
        return new VooII (this.numeroVoo, this.data)
    }
}

let voo = new VooII ('voo123', '22-08-2023')

console.log(voo.proximoLivre());
console.log(voo.ocupa(1));
console.log(voo.proximoLivre());
console.log(voo.verifica(1));
console.log(voo.ocupa(2));
console.log(voo.vagas());




