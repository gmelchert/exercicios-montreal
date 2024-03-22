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
    Pegue todos os atributos do objeto "pessoa" e atribua esse valor à uma variável chamada atributos
    Pegue todos os valores do objeto "pessoa" e atribua esse valor à uma variável chamada valores
*/

const pessoa = {
    nome: 'Gabriel',
    altura: 178,
    idade: 21,
    sexo: 'M',
    profissao: 'Desenvolvedor',
}

//----------------- Exercício 4 -----------------//
/*
    Crie duas funções, uma irá incrementar a quantidade de itens enquanto a outra irá decrementar.
    Ambas funções devem estar dentro do objeto item e devem usar a palavra "this" para a resolução.
    Recomendo que use funções anônimas também
*/

const item = {
    quantidade: 1,
    lote: '01EACN',
}

//----------------- Exercício 5 -----------------//
/*
    Com base no objeto casa faça o seguinte:
    1 - Crie variáveis desestruturando o objeto
    2 - Ao desestruturar o atributo "preco" renomeie a variável para "valor"
    3 - Crie uma variável pessoa que receberá os valores do atributo "proprietario" mais 2 atributos de sua escolha
        (Use o operador spread para esse caso)
*/

const casa = {
    cor: 'verde',
    metros: 300,
    preco: 300000,
    negociavel: true,
    proprietario: {
        nome: 'Gabriel',
        idade: 21,
        primeiroDono: false,
    }
}

//------------------- Desafio -------------------//
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
                    filhos: [{
                        nome: "Enzo",
                        grau: "Primo 2",
                        filhos: [],
                    }],
                    conjuge: 'Clara',
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