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




// -------------------------- DESAFIOS

//  Exercício 1

const NumberFirstPlayer = Number(prompt("Informe um número:"))
let numberSecondPlayer
let tries = 0

alert("Vamos jogar")

if(numberSecondPlayer !== NumberFirstPlayer){
        while(numberSecondPlayer !== NumberFirstPlayer){
        numberSecondPlayer = Number(prompt("Descubra o número:"))
        tries++
        if(numberSecondPlayer !== NumberFirstPlayer){
            let maiorOuMenor
            if(numberSecondPlayer > NumberFirstPlayer){
                maiorOuMenor = "menor"
            } else{
                maiorOuMenor = "maior"
            }
            alert(`Você tentou o número ${numberSecondPlayer}. Errrrrrrou, o número escolhido é ${maiorOuMenor}. Tente de novo!`)
        }
}
} alert(`Acertou!!!
O número de tentativas foi ${tries}.`)

alert("Pressione a tecla 'F5' para jogar novamente.")



//-----------------------------------------------------------------------------------

//  Exercício 2

function getRandom(max) {
    return Math.floor(Math.random() * max + 1)
}

const matchNumber = getRandom(100)
let numberPlayer
let triesWithRandom = 0

alert("Vamos jogar")

if(numberPlayer !== matchNumber){
        while(numberPlayer !== matchNumber){
            numberPlayer = Number(prompt("Descubra o número:"))
        triesWithRandom++
        if(numberPlayer !== matchNumber){
            let maiorOuMenor
            if(numberPlayer > matchNumber){
                maiorOuMenor = "menor"
            } else{
                maiorOuMenor = "maior"
            }
            alert(`Você tentou o número ${numberPlayer}. Errrrrrrou, o número escolhido é ${maiorOuMenor}. Tente de novo!`)
        }
}
} alert(`Acertou!!!
O número de tentativas foi ${triesWithRandom}.`)

alert("Pressione a tecla 'F5' para jogar novamente.")

// A adaptação no exercício 2 do desafio não foi difícil, mas isso somente se considerada 
// a possibilidade de se pesquisar funções. Caso tivesse de elaborar todas, não as teria
// terminado ainda.