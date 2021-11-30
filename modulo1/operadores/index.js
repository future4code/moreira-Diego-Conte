/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO


Exercício 1
   a. false
   b. false
   c. true
   d. boolean


Exercício 2
   O console apresentará concatenação porque os valores estarão em formato 'string'.
   Para que a soma aconteça, importa converter usando a função 'Number'.


Exercício 3
   O colega deverá usar a função 'Number'. Assim:

   let primeiroNumero = Number(prompt("Digite um numero!"))
   let segundoNumero = Number(prompt("Digite outro numero!"))

   const soma = primeiroNumero + segundoNumero

   console.log(soma)*/



   // EXERCÍCIOS DE ESCRITA DE CÓDIGO

// Exercício 1 */
const idadeUser = Number(prompt("Olá, qual é a sua idade?"))
const idadeAmigo = Number(prompt("E qual é a idade do(a) seu(sua) melhor amigo(a)?"))

console.log("Sua idade é maior do que a do(a) seu(sua) melhor amigo(a)?", idadeUser > idadeAmigo)
console.log("A diferença de idade entre vocês é de", idadeUser - idadeAmigo, "anos.")


// Exercício 2
const numPar = Number(prompt("Insira um número par:"))

console.log("O resto da divisão dos número informados é:", numPar % 2)

//O resto da divisão sempre será zero porque números pares divididos por dois sempre resultam inteiros.
// Se informado número ímpar, teremos como resto da divisão um número diferente de zero.


// Exercício 3
const idade = Number(prompt("Qual é a sua idade em anos?"))

console.log("A sua idade em meses é:", idade * 12)
console.log("A sua idade em dias é:", idade * 365)
console.log("A sua idade em meses é:", idade * 8760)


// Exercício 4
const umNumero = Number(prompt("Informe o primeiro valor:"))
const outroNumero = Number(prompt("Informe o segundo valor:"))

console.log("O primeiro numero é maior que segundo?", umNumero > outroNumero)
console.log("O primeiro numero é igual ao segundo?", umNumero === outroNumero)
console.log("O primeiro numero é divisível pelo segundo?", (umNumero % outroNumero) === 0)
console.log("O segundo numero é divisível pelo primeiro?", (outroNumero % umNumero) === 0)



// DESAFIO


// Exercício 1
// a)
let fahrenheit = 77
let kelvin = 0

kelvin = (fahrenheit - 32) * (5/9) + 273.15

console.log("77 graus Fahrenheit equivalem a", kelvin, "graus Kelvin.")

// b) 
let celcius = 80

fahrenheit = (celcius) * (9/5) + 32

console.log("80 graus Celcius equivalem a", fahrenheit, "graus Fahrenheit.")

// c)
celcius = 30
fahrenheit = (celcius) * (9/5) + 32
kelvin = (fahrenheit - 32) * (5/9) + 273.15
console.log("30 graus Celcius equivalem a", fahrenheit, "graus Fahrenheit e a", kelvin, "graus Kelvin.")

// d)
celcius = Number(prompt("Insira a temperatura em graus Celcius que deseja converter:"))
fahrenheit = (celcius) * (9/5) + 32
kelvin = (fahrenheit - 32) * (5/9) + 273.15
console.log("30 graus Celcius equivalem a", fahrenheit, "graus Fahrenheit e a", kelvin, "graus Kelvin.")

// Exercício 2
// a)
let kwUser = Number(prompt("Informe a quantidade de quilowatts consumida:"))
let kwModelo = 280

let gasto = kwModelo * 0.05
console.log("O gasto relativo ao seu consumo é de", gasto, "Reais.")

// b)
let desconto = Number(prompt("Insira o desconto (sem sinais, só números):"))
let calculoDesconto = gasto * 0.15

console.log("O valor a ser pago com desconto é de", gasto - calculoDesconto, "Reais.")

// Exercício 3
// a)
 let libra = 20
 let kiloExeA = libra / 2.2046

 console.log("20lb equivalem a", kiloExeA, "kg.")

 // b)
let onca = 10.5
let kiloExeB = onca / 35.274

console.log("10.5oz equivalem a", kiloExeB, "kg.")

// c)
let milhas = 100
let metroExeC = milhas / 0.00062137

console.log("100mi equivalem a", metroExeC, "m.")

// d
let pes = 50
let metroExeD = pes / 3.2808

console.log("50ft equivalem a", metroExeD, "m.")

// e)
let galao = 103.56
let litroExeD = galao / 0.26417

console.log("103.56gal equivalem a", litroExeD, "l.")

// f)
let xicara = 450
let litroExeE = xicara / 0.24

console.log("450 xic equivalem a", litroExeE, "l.")

// g)
let libra = Number(prompt("Informe a quantidade em Libras a ser convertida em kg:"))
let kiloExeA = libra / 2.2046

console.log(libra, "libras equivalem a", kiloExeA, "kg.")

