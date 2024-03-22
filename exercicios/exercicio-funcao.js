// ---------- Exercício 1 ------------ //
/*
    Crie uma função que receba 2 números como paramêtros e retorne a soma deles.
*/

console.log('//----------------- Exercício 1 -----------------//')

function soma(a, b) {
    return a + b;
}
console.log(soma(1, 2))

const somaArrow = (a, b) => a + b;

// ---------- Exercício 2 ------------ //
/*
    Crie uma função arrow que receba N elementos e retorne a média dos números passados.
    Use o operador spread no paramêtro
*/

console.log('\n//----------------- Exercício 2 -----------------//')

const calculaMedia = (...n) => (n.reduce((prev, curr) => prev + curr)) / n.length;

// ---------- Exercício 3 ------------ //
/*
    Crie uma função helper para te ajudar a chamar a API "https://jsonplaceholder.typicode.com" independente do método ou body da requisição
    Aqui vou ter que te ajudar
*/

console.log('\n//----------------- Exercício 3 -----------------//')

const api = (endpoint) => {
    const apiUrl = `https://jsonplaceholder.typicode.com/${endpoint}`
    const headers = new Headers({
        'Content-Type': 'application/json'
    });
    const init = {};

    return {
        get: async (param = '') => {
            headers.append('method', 'GET');
            init.headers = headers;

            const response = await fetch(`${apiUrl}/${param}`, init);
            return response.json();
        },
        post: async (body) => {
            headers.append('method', 'POST');
            init.headers = headers;
            if (body) init.body = JSON.stringify(body);

            const response = await fetch(apiUrl);
            return response.json();
        },
        put: async (body) => {
            headers.append('method', 'PUT');
            init.headers = headers;
            if (body) init.body = JSON.stringify(body);

            const response = await fetch(apiUrl);
            return response.json();
        },
        delete: async () => {
            headers.append('method', 'DELETE');
            init.headers = headers;

            const response = await fetch(apiUrl);
            return response.json();
        }
    }
}

// ---------- Exercício 4 ------------ //
/*
    Com base na função que criou no exercício 3:
    - Crie uma função assíncrona que chama o endpoint GET "/posts" e retorna os dados da API.
    - Crie uma outra função que deverá retornar os dados da primeira api por userId
*/

console.log('\n//----------------- Exercício 4 -----------------//')

const getPosts = async () => {
    const posts = await api('posts').get()
    return posts;
}

const getPostsByUser = async (id) => {
    const posts = await getPosts();
    const postByUser = posts.filter(p => p.userId == id);
    console.log(postByUser)
}
getPostsByUser(3)

// ---------- Exercício 5 ------------ //
/*
    Seguindo a mesma ideia do exercício 4...
    - Crie uma função assíncrona que chama a API GET "https://jsonplaceholder.typicode.com/posts" e retorna os dados da API.
    - Crie uma outra função que deverá retornar o título da primeira api por userId

    A função que pega dados por ID de usuário deve ser uma função recursiva que é chamada quando há registros do próximo usuário
*/

console.log('\n//----------------- Exercício 5 -----------------//')

const getPostsByUserRecursive = async (id) => {
    const posts = await getPosts();
    posts
        .filter(p => p.userId == id)
        .map(p => p.title)
        .forEach(title => console.log(`User ID: ${id}, title: ${title}`))

    if (posts.find(p => p.userId == id + 1)) {
        console.log('\n')
        return getPostsByUserRecursive(id + 1)
    }
}
getPostsByUserRecursive(1)