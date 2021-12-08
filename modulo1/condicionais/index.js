/*

------------------------------- CONDICIONAIS
        07Dec21

 ----------------- Exercícios de interpretação de código


        Exercício 1
    a)
    O código solicita ao usuário um número, atribui-o a outra variável convertendo-o para o tipo 'número',
    e verifica se o resto da divisão do número por 2 é exato, ou igual a zero.

    b)
    Para todos os números pares.

    c)
    Para os números ímpares.


        Exercício 2
    a)
    O código solicita o nome de determinada fruta e retorna o seu preço.

    b)
    'O preço da fruta Maçã é R$ 2.25'

    c)
    O código continuaria a rodar e o preço não seria o correto.


        Exercício 3
    a)
    A primeira linha do código solicita um número ao usuário e o converte para o tipo número;
    a primeira linha da função compara o número informado e retorna um boolean.

    b)
    Valor 10: O console apresentará a mensagem "Esse número passou no teste".
    Valor -10: Sem mensagem.

    c)
    Sim, haverá erro porque a variável 'mensagem' é de escopo local. Isso posto, não é acessível fora
    da função.

*/

// ----------------- Exercícios de interpretação de código


 //       Exercício 1
 //   a), b) e c)
const userAge = Number(prompt("Informe a sua idade"))

if(userAge >= 18){
    console.log("Parabéns! Você pode dirigir.")
} else{
    console.log("Você não pode dirigir ainda.")
}


//       Exercício 2
const workShiftIfElse = prompt(`Informe em que turno você estuda digitando M para matutino, \
V para vespertino e N noturno:`).toLocaleLowerCase()
 
if(workShiftIfElse === "m"){
    console.log("Bom dia!")
} else if(workShiftIfElse === "v"){
    console.log("Boa tarde!")
} else if (workShiftIfElse === "n"){
    console.log("Boa noite!")
} else {
    console.log("O valor informado não é válido.")
}


//       Exercício 3
const workShiftSwitch = prompt(`Informe em que turno você estuda digitando M para matutino, \
V para vespertino e N noturno:`).toLocaleLowerCase()

switch(workShiftSwitch){
    case "m":
        console.log("Bom dia!")
        break
    case "v":
        console.log("Boa tarde!")
        break
    case "n":
        console.log("Boa noite!")
    default:
        console.log("O valor informado não é válido.")
        break
}


//       Exercício 4
const movie = prompt("Informe o gênero do filme ao qual vão assistir:").toLocaleLowerCase()
const price = Number(prompt("Informe o valor do ingresso"))

if(movie === "fantasia" && price < 15){
    console.log("Bom filme")
} else {
    console.log("Escolha outro gênero de filme :(")
}


// ----------------- Desafios

//       Exercício 1
const movieWithSnack = prompt("Informe o gênero do filme ao qual vão assistir:").toLocaleLowerCase()
const pricewithSnack = Number(prompt("Informe o valor do ingresso"))
const snack = prompt("Qual lanche irão comer?"). toLocaleLowerCase()

if(movieWithSnack === "fantasia" && pricewithSnack < 15){
    console.log(`Bom filme! Divirtam-se comendo ${snack}`)
} else {
    console.log("Escolha outro gênero de filme :(")
}


//       Exercício 2
const completeName = prompt("Informe o seu nome completo:")
const matchType = prompt(`Informe o tipo do jogo ao qual deseja assistir:
 'IN' para internacional e 'DO' para doméstico`).toLocaleLowerCase()
const matchStage = prompt(`Informe a etapa do jogo ao qual deseja assistir:
'SF' indica semi-final; 
'DT' indica decisão de terceiro lugar; e 
'FI' indica final.`).toLocaleLowerCase()
const category = Number(prompt("Informe a categoria: 1, 2, 3 ou 4:"))
const tickets = Number(prompt("Informe a quantidade de ingressos"))

const valoresIngressos = {
    semifinalPrices: [1.320, 880, 550, 220],
    decisaoPrices: [660, 440, 330, 170],
    finalPrices: [1.980, 1.320, 880, 330]
}

let tipoJogo = " "
let etapaMatch = " "
let valorTotal = 0
let valorUnitario = 0

function domesticoOuInter(tipoJogo){
    if(tipoJogo === "do"){
        tipoJogo = "Doméstico"
    } else{
        tipoJogo = "Internacional"
    }
    return tipoJogo
}

function etapaDoJogo(etapaJogo){
    if(etapaJogo === "SF"){
        etapaMatch = "Semifinal"
    } else if(etapaJogo === "dt"){
        etapaMatch = "Decisão de terceiro lugar"
    } else {
        etapaMatch = "Final"
    }
    return etapaMatch
}

function valorUnico (etapaDoJogo, categoria, valoresIngressos){
    if(etapaDoJogo === "sf"){
        if(categoria === 1){
            valorUnitario = valoresIngressos.semifinalPrices[0]
        }else if (categoria === 2){
            valorUnitario = valoresIngressos.semifinalPrices[1]
        } else if (categoria === 3){
            valorUnitario = valoresIngressos.semifinalPrices[2]
        } else {
            valorUnitario = valoresIngressos.semifinalPrices[3]
        }
    } else if( categoria === "dt"){
        if(categoria === 1){
            valorUnitario = valoresIngressos.decisaoPrices[0]
        }else if (categoria === 2){
            valorUnitario = valoresIngressos.decisaoPrices[1]
        } else if (categoria === 3){
            valorUnitario = valoresIngressos.decisaoPrices[2]
        } else {
            valorUnitario = valoresIngressos.decisaoPrices[3]
        }
    } else {
        if(categoria === 1){
            valorUnitario = valoresIngressos.finalPrices[0]
        }else if (categoria === 2){
            valorUnitario = valoresIngressos.finalPrices[1]
        } else if (categoria === 3){
            valorUnitario = valoresIngressos.finalPrices[2]
        } else {
            valorUnitario = valoresIngressos.finalPrices[3]
        }
    }
    return valorUnitario
}

function valoresTotais (etapaDoJogo, categoria, quantiIngressos, valoresIngressos){
    if(etapaDoJogo === "sf"){
        if(categoria === 1){
            valorTotal = quantiIngressos * valoresIngressos.semifinalPrices[0]
        }else if (categoria === 2){
            valorTotal = quantiIngressos * valoresIngressos.semifinalPrices[1]
        } else if (categoria === 3){
            valorTotal = quantiIngressos * valoresIngressos.semifinalPrices[2]
        } else {
            valorTotal = quantiIngressos * valoresIngressos.semifinalPrices[3]
        }
    } else if( categoria === "dt"){
        if(categoria === 1){
            valorTotal = quantiIngressos * valoresIngressos.decisaoPrices[0]
        }else if (categoria === 2){
            valorTotal = quantiIngressos * valoresIngressos.decisaoPrices[1]
        } else if (categoria === 3){
            valorTotal = quantiIngressos * valoresIngressos.decisaoPrices[2]
        } else {
            valorTotal = quantiIngressos * valoresIngressos.decisaoPrices[3]
        }
    } else {
        if(categoria === 1){
            valorTotal = quantiIngressos * valoresIngressos.finalPrices[0]
        }else if (categoria === 2){
            valorTotal = quantiIngressos * valoresIngressos.finalPrices[1]
        } else if (categoria === 3){
            valorTotal = quantiIngressos * valoresIngressos.finalPrices[2]
        } else {
            valorTotal = quantiIngressos * valoresIngressos.finalPrices[3]
        }
    }
    return valorTotal
}


  
    console.log(`\
--- Dados da compra ---
Nome do cliente: ${completeName}
Tipo do jogo: ${domesticoOuInter(matchType)}
Etapa do jogo: ${etapaDoJogo(matchStage)}
categoria: ${category}
Quantidade de ingressos: ${tickets}

--- Valores ---
Valor do ingresso: ${valorUnico(matchStage, category, valoresIngressos)}
Valore total: ${valoresTotais(matchStage, category, tickets, valoresIngressos)}
`)

//Há formas muito mais simples, mas a ideia foi aplicar tudo o que aprendi na semana.