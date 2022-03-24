//      Exercício 2

const mathOperation = process.argv[2]
const firstNumber = Number(process.argv[3])
const secondNumber = Number(process.argv[4])

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