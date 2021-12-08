/*
--------------------------------- EXERCÍCIOS DE INTREPRETAÇÃO DE CÓDIGO

----------- 08Dec21

EXERCÍCIO 1

a)
Podemos dizer que o código é um index, um contador: ele soma 'valor' com 'i' um a cada execução do 
bloco 'for'. Assim, ele parará quando 'i' for 4, e o console imprimira '10'.


EXERCÍCIO 2

a)
Serão impressos os valores 19, 21, 23, 25, 27, 30.

b)
Sim. Pode-se usar '.length' e, a depender do que se deseja, '.length - 1'.


EXERCÍCIO 2

a) Seriam impressas quatro linhas com um, dois, três e quatro asteríscos, respectivamente.



--------------------------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO

EXERCÍCIO 1
*/

//a), b) e c)

const howManyAnimals = Number(prompt("Informe a quantidade de pets que você possui:"))
let i = 0
const namePets = []

if(howManyAnimals === 0){
    console.log("Que pena! Você pode adotar um pet!")
} else{
    while(i < howManyAnimals){
        namePets[i] = prompt("Informe o nome de cada um deles:")
        i++
        }
    console.log(namePets)
}


//EXERCÍCIO 1

const originalArray = [20, 40, 60, 80, 11, 31, 51, 71, 91]
let index = 0

//a)
while(index < originalArray.length){
    let result = originalArray[index]
    index ++
    console.log(result)
}

//b)
index = 0

while(index < originalArray.length){
    let result = ((originalArray[index]) / 10)
    index ++
    console.log(result)
}


//c)
index = 0
let  pairs = []

while(index < originalArray.length){
    if(originalArray[index] % 2 === 0){
        pairs[index] = originalArray[index]
    }
    index ++
}   console.log(pairs)


//d)
let arrayStrings = []
index = 0

while(index < originalArray.length){
    arrayStrings[index] = `O elemento do índex ${index} é: ${originalArray[index]}`
    index ++
}   
console.log(arrayStrings)


//e)

function maiorNumero(array){
let maiorNumber = 0
for(let i = 0; i < array.length; i ++){
    if(array[i] > maiorNumber){
       maiorNumber = array[i]
    }
    } return maiorNumber
}

function menorNumero(array){
let menorNumber = 91
for(let i = 0; i < array.length; i ++){
    if(array[i] < menorNumber){
       menorNumber = array[i]
    }
    } return menorNumber
}

console.log(`O maior número é ${maiorNumero(originalArray)} e o menor é ${menorNumero(originalArray)}`)