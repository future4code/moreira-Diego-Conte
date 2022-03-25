//  faça uma nova função que receba o arrayde estoque como parâmetro, use a função ajustaPreco para
// corrigir os preços e retorne a lista de estoque ordenada pela quantidade de cada produto.

type templateProducts = {
  nome: string;
  quantidade: number;
  valorUnitario: number | string;
}[];

const products: templateProducts = [
  { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
  { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
  { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
  { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
  { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
  { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
  { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 },
];

const ajustaPreco = (preco: number): string => {
  const valorAjustado: string = preco.toFixed(2).replace(".", ",");
  return "R$ " + valorAjustado;
};

function orderedProducts(data: templateProducts): templateProducts {
  const convertedPrice = data.map((p) => {
    p.valorUnitario = ajustaPreco(p.valorUnitario as number);
    return p;
  });

  const orderedProducts = convertedPrice.sort((a, b) => {
    return a.quantidade - b.quantidade;
  });

  return orderedProducts;
}

console.log(orderedProducts(products))
