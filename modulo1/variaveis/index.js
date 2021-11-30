//EXERCÍCIOS DE INTEPRETAÇÃO DE CÓDIGO//

/*Exercício1
O console imprime inicialmente 10 relativo à variável 'b'.
Depois, imprime os valores 10, 5 relativo à 'a' e 'b'.

Exercício 2
O console imprime 10, 10, 10.

Exercício 3
O programa solicita a carga horária trabalhada e a remuneração diára.
Com isso, calcula o quanto o funcionário recebe por hora.

let cargaHorariaDiaria = prompt("Quantas horas você trabalha por dia?")
let remuneraDiaria = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${remuneraDiaria/cargaHorariaDiaria} por hora`) */

//EXERCÍCIOS DE ESCRITA DE CÓDIGO//

//Exercício 1//
let nome1
let idade1

console.log(typeof nome1, typeof idade1)

/*O console imprimirá 'undefined undefined' porque não houve nenhuma atribuição
 de valor. Destaca-se que 'undefined' não é o mesmo de 'null'. */

 nome1 = prompt("Seja bem-vindo. Qual é o seu nome?")
 idade1 = prompt("E qual é a sua idade?")

 console.log(typeof nome1, typeof idade1)

 /* Agora, o console imprimirá 'string string' porque fez-se uso do prompt,
 o que sempre retorna valores 'string'. */

 console.log("Olá,", nome1,", você tem", idade1, "anos.")

 //Exercício 2//

 let almocouHoje = "Você já almoçou hoje?"
 let codouHoje = "Você já programou em JavaScript hoje?"
 let aulaFer = "Você gostou da aula da Fer hoje?"

 let respostaAlmoco = prompt(almocouHoje)
 let respostaCodou = prompt(codouHoje)
 let respostaAula = prompt(aulaFer)

 console.log(almocouHoje, respostaAlmoco)
 console.log(codouHoje, respostaCodou)
 console.log(aulaFer, respostaAula)

 //Exercício 3//
 
let a = 10
let b = 25

let c = a
a = b
b = c

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b)


//Desafio//

let valorUser1 = Number(prompt("Olá. Informe o primeiro valor:"))
let valorUser2 = Number(prompt("Agora, informe o segundo valor:"))

console.log("O primeiro número somado ao segundo resulta em", valorUser1+valorUser2)
console.log("O primeiro número multiplicado pelo segundo resulta em", valorUser1*valorUser2)