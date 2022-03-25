// Pensando em aumentar seu lucros, o banco quer identificar possíveis clientes precisando de empréstimos.
// Dessa forma, a sua tarefa é criar uma função que receba este array como parâmetro, atualize o saldo total
// descontando todos os débitos e retorne apenas os clientes com saldo negativo.

type templateBank = {
  cliente: string;
  saldoTotal: number;
  debitos: number[];
}[];

const clientsData: templateBank = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];

function negativeBankBalance(data: templateBank) {
  const filtering = data.filter((c) => {
    const debs = c.debitos.reduce((acc, sum) => { 
        return acc + sum; 
    }, 0);

    const balance = c.saldoTotal - debs;
    return balance < 0;
  });

  const negativeBalance = filtering.map((c) => {
    const debs = c.debitos.reduce((acc, sum) => { 
        return acc + sum; 
    }, 0);
    c.saldoTotal = c.saldoTotal - debs;
    c.debitos = []

    return c
  })
  return negativeBalance
}

console.log(negativeBankBalance(clientsData))