export enum OrigemPreposicao {
    Do = 'do',
    Da = 'da',
    De = 'de',
    Dos = 'dos',
    Das = 'das'
}

export interface FonteDados {
  nome: string;
  url: string;
  preposicao?: OrigemPreposicao;
}