// Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável.

function typeOfData(data: any): any {
  return typeof data;
}

function typeOfDataAndTypes(
  data: string | number | boolean | null | undefined
): string | number | boolean | null | undefined {
  return typeof data;
}

console.log("Usando 'any': ", typeOfData(true));
console.log("Tipando com todos os tipos: ", typeOfDataAndTypes(true));
