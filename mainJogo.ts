import { Jogo } from "./Jogo";
import { BibliotecaDeJogos } from "./BibliotecaDeJogos";

let hollowKnight = new Jogo("hollow knight", "metroidvania", 10)
let cs2 = new Jogo("cs2", "fps", 14)
let estante = new BibliotecaDeJogos()

estante.adicionarJogo(hollowKnight)
estante.adicionarJogo(cs2)
estante.removerJogo()
console.log(estante);
