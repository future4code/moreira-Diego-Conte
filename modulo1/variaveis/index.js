/*EXERCÍCIOS DE INTERPRETAÇÃO

Exercício 1
O valor inicial da variável 'b' (10) é impresso.
A variável 'b' é atualizada e recebe o valor 5.
Os valores de 'a' e 'b' são impressos: 10 e 5. 

Exercício 2
O console imprimirá 10, 10, 10.

Exercício 3
O programa solicita o número de horas diárias trabalhadas e a remuneração
diária. Com isso, calcula quanto o usuário recebe por hora.

let horasDiaTrabalhadas = prompt("Quantas horas você trabalha por dia?")
let remuneraDiaria = prompt("Quanto você recebe por dia?")
alert('Voce recebe ${horasDiaTrabalhadas/remuneraDiaria} por hora') */

// *-*-*-*-*-*-*-*-*-*//

/*EXRCÍCIOS DE ESCRITA DE CÓDIGO
Exercício 1*/
let nome1
let idade1

console.log(typeof nome1, typeof idade1)

/* O console apresentará undefined undefined, isso porque as variáveis estão vazias,
sem valores atribuídos. */


nome1 = prompt("Seja bem-vindo. Qual é o seu nome?")
idade1 = prompt("E qual é a sua idade")

console.log(typeof nome1, typeof idade1)

/*Agora temos variáveis 'string' porque seus valores advêm do prompt,
o qual sempre retona valores do tipo texto. */

console.log("Olá,",nome1,", você tem", idade1, "anos.")

//Exercício 2//
let almocouHoje = prompt("Você já almoçou hoje?")
let codouHoje = prompt("Você já programou em JavaScript hoje?")
let aulaFer = prompt("Você gostou da aula da Fer?")

console.log("Você já almoçou hoje?", almocouHoje, ".")
console.log("Você já programou em JavaScript hoje?", codouHoje, ".")
console.log("Você gostou da aula da Fer?", aulaFer, ".")


//Exercício 3//
let a = 10
let b = 25

let exchanger = a
a = b
b = exchanger

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)


//Desafio//
let valorUser1 = Number(prompt("Olá. Informe o primeiro valor:"))
let valorUser2 = Number(prompt("Agora, informe o segundo valor:"))

console.log("O primeiro número somado ao segundo resulta em:", valorUser1+valorUser2)
console.log("O primeiro número multiplicado pelo segundo resulta em:", valorUser1*valorUser2)