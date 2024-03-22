//----------------- Exercício 1 -----------------//
/*
    Crie um objeto carro, esse objeto deve conter as seguintes propriedades:
    - modelo: string,
    - cor: string,
    - portas: number,
    - donos: string[2], -> exemplo: ['José', 'Maria']
*/
console.log('\n//----------------- Exercício 1 -----------------//')
const carro = {
    modelo: 'March 2015',
    cor: 'prata',
    portas: 4,
    donos: ['Gabriel', 'Daniel'],
}
console.log(carro)
//----------------- Exercício 2 -----------------//
/*
    Com base no objeto carro que você mesma criou, exiba uma mensagem no console.log dizendo o seguint:
    "O carro {modelo} de cor {cor} apresenta {portas} portas e os donos são {dono 1} e {dono 2}"
*/
console.log('\n//----------------- Exercício 2 -----------------//\n')
console.log(
    `O carro ${carro.modelo} de cor ${carro.cor} apresenta ${carro.portas} portas e os donos são ${carro.donos[0]} e ${carro.donos[1]}`
);

//----------------- Exercício 3 -----------------//
/*
    Pegue todos os atributos do objeto "pessoa" e atribua esse valor à uma variável chamada atributos
    Pegue todos os valores do objeto "pessoa" e atribua esse valor à uma variável chamada valores
*/
{
    console.log('\n//----------------- Exercício 3 -----------------//')
    const pessoa = {
        nome: 'Gabriel',
        altura: 178,
        idade: 21,
        sexo: 'M',
        profissao: 'Desenvolvedor',
    }
    const atributos = Object.keys(pessoa);
    const valores = Object.values(pessoa);
    
    console.log({
        atributos,
        valores,
    })
}
//----------------- Exercício 4 -----------------//
/*
Crie duas funções, uma irá incrementar a quantidade de itens enquanto a outra irá decrementar.
Ambas funções devem estar dentro do objeto item e devem usar a palavra "this" para a resolução.
Recomendo que use funções anônimas também
*/
console.log('\n//----------------- Exercício 4 -----------------//')

const item = {
    quantidade: 1,
    lote: '01EACN',
    incrementar: function () {
        this.quantidade++;
    },
    decrementar: function () {
        this.quantidade--;
    },
}
console.log(item.quantidade);
item.incrementar();
item.incrementar();
console.log(item.quantidade);
item.decrementar();
console.log(item.quantidade);
//----------------- Exercício 5 -----------------//
/*
Com base no objeto casa faça o seguinte:
1 - Crie variáveis desestruturando o objeto
2 - Ao desestruturar o atributo "preco" renomeie a variável para "valor"
3 - Crie uma variável pessoa que receberá os valores do atributo "proprietario" mais 2 atributos de sua escolha
(Use o operador spread para esse caso)
*/
{
    console.log('\n//----------------- Exercício 5 -----------------//')
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
    
    const {
        cor,
        metros,
        negociavel,
        proprietario,
        preco: valor,
    } = casa;
    console.log({
        cor,
        metros,
        negociavel,
        proprietario,
        valor,
    })
    
    const pessoa = {
        ...proprietario,
        inteligente: true,
        olho: 'azul/verde',
    }
    
    console.log(pessoa)
}
//------------------- Desafio -------------------//
/*
Com base no objeto avo, para cada elemento da sua familia exiba uma mensagem no console.log dizendo o seguinte:
"Nome: {nome}
grau: {grau}
conjuge: {conjuge || não tem}"
(Utilize função recursiva)
*/
console.log('\n//----------------- Desafio -----------------//')

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

function exibePessoa(pessoa = avo) {
    console.log(
        `
        Nome: ${pessoa.nome}
        Grau: ${pessoa.grau}
        Conjuge: ${pessoa.conjuge || 'Não tem'}
        `
    );

    if (pessoa.filhos?.length) {
        pessoa.filhos.forEach(exibePessoa);
    }
}
exibePessoa()