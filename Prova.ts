export interface Prova {
    gabarito: Array<string>

    respostaAluno(resposta: string): void;
    acertos(): number;
    nota(): number;
    maior(outraProva: Prova): number;
}

export class ProvaII implements Prova {
    private gabarito: string[] = ['A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E']
    private respostas: string[] = []

    public respostaAluno(resposta: string): void {
        this.respostas.push(resposta.toUpperCase())
    }

    public acertos(): number {
        return this.respostas.filter((resposta, indice) => resposta === this.gabarito[indice]).length
    }

    public nota(): number {
        let acertos = this.acertos()
        return acertos * 0.5 + (15 - acertos)
    }

    maior(outraProva: Prova): number {
        let notaAtual = this.nota()
        let outraNota = outraProva.nota()

        if(notaAtual > outraNota) {
            return notaAtual
        } else {
            return outraNota
        }
    }
}