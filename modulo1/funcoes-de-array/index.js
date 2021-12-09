/*
---------------------------------- FUNÇÕES DE ARRAYS

        09Dec21

                Exercícios de interpretação de código


    Exercício 1
a)  Será impresso o novoArrayA com todos os elementos: nome, apelido e índice
    {nome: Amanda Rangel, apelido: Mandi} 0
    {nome: Laís Petra, apelido: Laura} 1
    {nome: Letícia Chijo, apelido: Chijo} 2


    Exercício 2
a)  Será impressor o novoArrayB contendo somente os nomes
    ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']


    Exercício 3
a)  Será impresso o novoArrayC filtrando os apelidos diferentes de "Chijo"
    [nome: 'Amanda Rangel', apelido: 'Mandi']
    [nome: 'Laís Petra', apelido: 'Laura']



                Exercícios de escrita de código


    Exercício 1
*/
/*
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]


//a)
function nameDogs(item){
    return item.nome;
}

const dogsNames = pets.map(nameDogs)
console.log(dogsNames)


//b)
function salsichaOnly(item){
    let salsicha = item.raca === "Salsicha"
    return salsicha
}

const onlySalsicha = pets.filter(salsichaOnly)
console.log(onlySalsicha)


//c)
const onlyBreed = (item) => {
    return item.raca === "Poodle"
}

const makingMessage = (item) =>{
    let message = [`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`]
    return message
}

const onlyPoodles = pets.filter(onlyBreed)
const messages = onlyPoodles.map(makingMessage)
console.log(messages)


//   Exercício 2

*/
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
/*
//a)
const lineProducts = (item) =>{
    return item.nome
}
const nameProducts = produtos.map(lineProducts)
console.log(nameProducts)


//b)
const nameAndPrice = (item) => {
    let namePrice = [item.nome, ((item.preco - ((item.preco * 5) / 100)).toFixed(2))]
    return namePrice
}

const productsAndPrices = produtos.map(nameAndPrice)
console.log(productsAndPrices)


//c)
const filterBeverages = (item) => {
    let beverages = item.categoria === "Bebidas"
    return beverages
}

const beveragesOnly = produtos.filter(filterBeverages)
console.log(beveragesOnly)
*/

//d)
const seekingYpe = (item) => {
    let ype = item.nome.includes("Ypê")
    return ype
}

const onlyYpe = produtos.filter(seekingYpe)
console.log (onlyYpe)


//e)
const messageYpe =(item) => {
    let messageCostumer = `Compre ${item.nome} por ${item.preco}.`
    return messageCostumer
}

const messageMarket = onlyYpe.map(messageYpe)
console.log(messageMarket)