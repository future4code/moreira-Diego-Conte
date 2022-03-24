//                            EXERCÍCIO 2

type result = {
  maior: number;
  menor: number;
  media: number;
};

function obterEstatisticas(numeros: number[]) {
  const numerosOrdenados: number[] = numeros.sort((a, b) => a - b);

  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas: result = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

//  a) ENTRADA: Array de números
//     SAÍDA: Objeto contendo as propriedade maior, menor e média.

//  b) O array numerosOrdenados e a variável soma. Há também o type result.

//  c)
type amostra = {
  numeros: number[];
  obterEstatistica: () => { estatistica(numeros: number[]): result };
};
