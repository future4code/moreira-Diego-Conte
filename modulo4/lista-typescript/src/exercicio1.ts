// Crie um função que receba uma string com o nome e outra string com uma data de nascimento
// (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato:
// "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}"


function splitSentence(name: string, birthDay: string): string {
  const split: string[] = birthDay.split("/", 3);

  return `Olá. Chamo-me ${name}, nasci no dia ${split[0]} do mês ${split[1]} do ano de ${split[2]}.`;
}

console.log(splitSentence("Diego", "23/03/1991"));
