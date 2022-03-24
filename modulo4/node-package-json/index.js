/*
            EXERCÍCIOS
    
        Exercício 1 */

//  a) Usamos a propriedade process.argv para acessar os parâmetros passados na linha de comando.

//  b)
    const nameUser = process.argv[2]
    const ageUser = Number(process.argv[3])

    console.log(`Olá ${nameUser}! Você tem ${ageUser} anos.`)

// c)
    console.log(`Olá ${nameUser}! Você tem ${ageUser} anos. Em sete anos você terá ${ageUser + 7} anos.`)


//      Exercício 2

    const mathOperation = process.argv[4]
    const firstNumber = Number(process.argv[5])
    const secondNumber = Number(process.argv[6])

    switch(mathOperation) {
        case "add":
            console.log(`A operação ${firstNumber} + ${secondNumber} é igual a ${firstNumber + secondNumber}.`);
            break;
        case "sub":
            console.log(`A operação ${firstNumber} - ${secondNumber} é igual a ${firstNumber - secondNumber}.`);
            break;
        case "mult":
            console.log(`A operação ${firstNumber} * ${secondNumber} é igual a ${firstNumber * secondNumber}.`);
            break;
        case "div":
            console.log(`A operação ${firstNumber} / ${secondNumber} é igual a ${firstNumber / secondNumber}.`);
            break;
        default:
            console.log(`Operação sinválida.`)
    }


//      Exercício 3

    const tasksList = [];
    const task = tasksList.push(process.argv[7])

    console.log(tasksList)
