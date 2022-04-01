// Escreva uma função para converter de números normais para algarismos romanos (string).

function convertToRoman(number: number) {
/* It also works using separated values, like this: 

const matrixNumbers: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const matrixRoman: string[] = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

It is even better, more elegant I think.  */

  const matrix: {letter: string, number: number}[]= [
    {letter: 'M', number: 1000},
    {letter: 'CM', number: 900},
    {letter: 'D', number: 500},
    {letter: 'CD', number: 400},
    {letter: 'C', number: 100},
    {letter: 'XC', number: 90},
    {letter: 'L', number: 50},
    {letter: 'XL', number: 40},
    {letter: 'X', number: 10},
    {letter: 'IX', number: 9},
    {letter: 'V', number: 5},
    {letter: 'IV', number: 4},
    {letter: 'I', number: 1}
]

  let romanizing = "";

  for (let i = 0; i < matrix.length; i++) {
    while (matrix[i].number <= number) {
        romanizing += matrix[i].letter;
        number -= matrix[i].number;
    }
  }

  return romanizing;
}

console.log(convertToRoman(523));
