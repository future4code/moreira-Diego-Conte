//                                      STRINGS E ARRAYS
//                    01Dez21
//
//                      Exercícios de interpretação de código
//      Exercício 1
//  a. undefined
//  b. null
//  c. 11
//  d. Depende. Se todos os comandos anteriores estiverem ativos, a console retorna a posição '0' do array.
//     Caso contrário, há erro porque o array não foi declarado. Respota: d. 3
//  e. Se os comandos anteriores estiverem válidos, o número na posição '1' será alterado para '19' (i = 0 + 1)
//     Senão, há erro de array não declarado. Resposta: e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//  f. Se os comandos anteriores estiverem válidos, a console retorna f. 9, porque o i=0 resulta na posição 0, que
//     é o valor 3, somado ao 6.
//
//
//      Exercício 2
//  SUBI NUM ÔNIBUS EM MIRROCOS 27
//
//
//
//                      Exercícios de escrita de código
//      Exercício 1

    const nomeDoUsuario = prompt("Seja bem-vindo. Informe seu nome:")
    const emailDoUsuario = prompt("Obrigado. E qual é o seu endereço de E-mail?")

    console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeDoUsuario}.`)


//      Exercício 2

    const favorDishes = ["Gnocchi", "Macarronada", "Berinjela", "Ovo frito", "Pão de queijo"]

//  a)
    console.log(favorDishes)
    console.log("Essas são as minhas comidas preferidas: ", favorDishes)

//  b)
    console.log(`Essas são as minhas comidas preferidas: 
    ${favorDishes[0]},
    ${favorDishes[1]},
    ${favorDishes[2]},
    ${favorDishes[3]},
    ${favorDishes[4]}`);
   
//  c)
    let favorDishUser = prompt("Qual é a sua comida favorita?")
    favorDishes[1] = favorDishUser

    console.log(favorDishes)
 

//      Exercício 3

//  a)
    let listaDeTarefas = []

// b)
    listaDeTarefas[0] = prompt("Informe uma tarefa diária que você realiza:")
    listaDeTarefas[1] = prompt("Informe outra tarefa diária que você realiza:")
    listaDeTarefas[2] = prompt("Informe uma última tarefa diária que você realiza:")

//  c)
    console.log(listaDeTarefas)

//  d)
    let tarefasRealizadas = Number(prompt("Informe qual tarefa já realizou digitando 0, 1 ou 2:"))

//  e)
    let listaDeTarefasRemovidas = listaDeTarefas
    listaDeTarefasRemovidas.splice(tarefasRealizadas, 1)

    console.log(listaDeTarefasRemovidas)


//                          DESAFIO
//  Exercício 1
const sentenceUser = prompt("Digite uma frase:")
const sentenceSpliced = sentenceUser.split(" ")

console.log(sentenceSpliced)


//  Exercício 2
const fruits = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let positionOfFruit = fruits.indexOf("Abacaxi")
console.log(` 
    Índice da palavra Abacaxi: ${positionOfFruit}. 
    Tamanho completo do array: ${fruits.length}.`)