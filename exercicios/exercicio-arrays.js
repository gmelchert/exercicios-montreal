// ---------- Exercício 1 ------------ // 
/*
 Criar outro array (Ex1_array2) com base no array 1 duplicando os valores
 Usa map() marreco
*/
 
const array1 = [1,2,3,5,10,30];
const array2 = array1.map(n => n*2)
 
// ---------- Exercício 2 ------------ //
/*
 Percorra o array de nomes e para cada elemento adicione um elemento <li> no array liList
 Use forEach() marreco
*/
 
let liList = [];
const arrayNomes = ['Gabriel', 'Anna', 'Fernando', 'Jessica', 'Tantofaz'];
arrayNomes.forEach(nome => liList.push(`<li>${el}<li>`));
 
// ---------- Exercício 3 ------------ //
 
/*
 Com base no array alunos1, veja se:
 1 - Algum tem a nota menor do que 6 (use some())
 2 - Se todos têm a nota maior do que 6 (use every())
*/
 
const alunos1 = [
    {
        id: 1,
        nota: 7.8,
    },
    {
        id: 2,
        nota: 8.3,
    },
    {
        id: 3,
        nota: 5.2,
    },
    {
        id: 4,
        nota: 9.8,
    },
];
const seAlgumaNotaMenor = alunos1.some(aluno => aluno.nota < 6);
const seTodosNotaMaior =alunos1.every(({ nota }) => nota > 6);
 
// ---------- Exercício 4 ------------ //
 
/*
 Pegue esse array de dados e retorne a soma de todos que tiveram uma pontuação maior que 6.0 e são ativos
 
 Passo 1: Transforme os pontos de String para Number (use map())
 
 Passo 2: Filtre os dados (use filter())
 Passo 3: some todos os pontos (use reduce())
*/
 
const dados = [
    { nome: 'Gabriel', ativo: true, pontos: '7.5' },
    { nome: 'Anna', ativo: true, pontos: '9.0' },
    { nome: 'José', ativo: false, pontos: '3.8' },
    { nome: 'maria', ativo: false, pontos: '8.5' },
    { nome: 'Abreu', ativo: true, pontos: '2.2' },
    { nome: 'Clara', ativo: false, pontos: '6.4' },
];

const arrayMapping = dado => {
    dado.pontos = +dado.pontos;
    return dado;
}

const resultado = dados
    .map(arrayMapping)
    .filter(({ ativo, pontos }) => ativo && pontos > 6)
    .reduce((previous, current) => previous.pontos + current.pontos)