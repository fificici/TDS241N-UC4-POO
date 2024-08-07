export interface Data {
    dia: number 
    mes: number
    ano: number

    compara(outraData: DataII): void;
    getDia(): number;
    getMes(): number;
    getMesExtenso(): string;
    getAno(): number;
    isBissexto(): boolean;
    clone(): DataII;
}

export class DataII implements Data{
    public dia: number
    public mes: number
    public ano: number

    constructor(dia: number, mes: number, ano: number){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }

    public compara(outraData: DataII): void {

        console.log(compararDia(this.dia))
        function compararDia (dia: number) {
            if (dia == outraData.dia) {
                return `os dias são iguais`
            } else {
                return `os dias são diferentes`
            }
        }

        console.log(compararMes(this.mes))
        function compararMes(mes: number) {
            if (mes == outraData.mes) {
                return `os meses são iguais`
            }
            if (mes != outraData.mes) {
                return `os meses são diferentes`
            }
        }
          
        console.log(compararAno(this.ano))
        function compararAno(ano: number) {
            if (ano == outraData.ano) {
                return `os anos são iguais`
            }
            if (ano != outraData.ano) {
                return `os anos são diferentes`
            }
        }
    }

    public getDia(): number{
        return this.dia
    }

    public getMes(): number{
        return this.mes
    }

    public getMesExtenso(): string {
        if (this.mes = 1) {
                return 'Janeiro'
        }
        if (this.mes = 2) {
                return 'Fevereiro'
        }
        if (this.mes = 3) {
                return 'Março'
        }
        if (this.mes = 4) {
                return 'Abril'
        }
        if (this.mes = 5) {
                return 'Maio'
        }
        if (this.mes = 6) {
                return 'Junho'
        }
        if (this.mes = 7) {
                return 'Julho'
        }
        if (this.mes = 8) {
                return 'Agosto'
        }
        if (this.mes = 9) {
                return 'Setembro'
        }
        if (this.mes = 10) {
                return 'Outubro'
        }
        if (this.mes = 11) {
                return 'Novembro'
        }
        if (this.mes = 12) {
                return 'Dezembro'
        }
        
        return this.getMesExtenso()
    }
    
    public getAno(): number {
        return this.ano
    }

    public isBissexto(): boolean {
        return (this.ano % 4 === 0 && this.ano % 100 !== 0) || (this.ano % 400 === 0)
    }

    public clone(): DataII {
        return new DataII (this.dia, this.mes, this.ano)
    }
}

let novaData = new DataII (29, 7, 2000)
let outraData = new DataII (29, 7, 2024)
console.log(novaData.getDia())
console.log(novaData.getMes())
console.log(novaData.getMesExtenso())
console.log(novaData.getAno())
console.log(novaData.isBissexto())
novaData.compara(outraData)
console.log(novaData.clone())


