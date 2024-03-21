//----------------- Exercício 1 -----------------//
/*
    Crie um objeto carro, esse objeto deve conter as seguintes propriedades:
    - modelo: string,
    - cor: string,
    - portas: number,
    - donos: string[], -> exemplo: ['José', 'Maria']
*/

//----------------- Exercício 2 -----------------//
/*
    Com base no objeto carro que você mesma criou, exiba uma mensagem no console.log dizendo o seguint:
    "O carro {modelo} de cor {cor} apresenta {portas} portas e os donos são {dono 1} e {dono 2}"
*/

//----------------- Exercício 3 -----------------//
/*
    Com base no objeto avo, para cada elemento da sua familia exiba uma mensagem no console.log dizendo o seguinte:
    "Nome: {nome} grau: {grau}"
*/

const avo = {
    nome: 'João',
    grau: 'Avô',
    filhos: [
        {
            nome: 'Ana',
            grau: 'Tia',
            filhos: [],
        },
        {
            nome: 'Maria',
            grau: 'Mãe',
            filhos: [{
                nome: 'Anna',
                grau: 'Você',
                filhos: [],
            }],
            conjuge: 'Marcos',
        },
        {
            nome: 'Braga',
            grau: 'Tio',
            filhos: [
                {
                    nome: 'Felipe',
                    grau: 'Primo',
                    filhos: [],
                },
                {
                    nome: 'Jorge',
                    grau: 'Primo',
                    filhos: [],
                }
            ],
            conjuge: 'Angélica'
        }
    ]
}