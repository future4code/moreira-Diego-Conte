// Crie um ENUM para os setores e um type para as pessoas colaboradoras. Em seguida, crie uma função que receba
// este arraycomo parâmetro e retorne apenas as pessoas do setor de marketing que trabalham presencialmente.

enum setores {
  MARKETING = "marketing",
  VENDAS = "vendas",
  FINACEIRO = "financeiro",
}

type pessoa = {
  nome: string;
  salario: number;
  setor: setores;
  presencial: boolean;
}[];

const pessoas: pessoa = [
  { nome: "Marcos", salario: 2500, setor: setores.MARKETING, presencial: true },
  { nome: "Maria", salario: 1500, setor: setores.VENDAS, presencial: false },
  { nome: "Salete", salario: 2200, setor: setores.FINACEIRO, presencial: true },
  { nome: "João", salario: 2800, setor: setores.MARKETING, presencial: false },
  { nome: "Josué", salario: 5500, setor: setores.FINACEIRO, presencial: true },
  { nome: "Natalia", salario: 4700, setor: setores.VENDAS, presencial: true },
  { nome: "Paola", salario: 3500, setor: setores.MARKETING, presencial: true },
];

function filtering(array: pessoa): pessoa {
  const filteredList = array.filter((p) => {
    return p.setor === setores.MARKETING && p.presencial === true;
  });
  return filteredList;
}

console.log(filtering(pessoas))
