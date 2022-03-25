// Crie um função que receba uma string com o nome e outra string com uma data de nascimento
// (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato:
// "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}"


function splitSentence(name: string, birthDay: string): string {
  const split: string[] = birthDay.split("/");

  switch(split[1]){
    case '01': split[1] = "janeiro" 
    break;
    case '02': split[1] = "fevereiro"
    break;
    case '03': split[1] = "março"
    break;
    case '04': split[1] = "abril"
    break;
    case '05': split[1] = "maio"
    break;
    case '06': split[1] = "junho"
    break;
    case '07': split[1] = "julho"
    break;
    case '08': split[1] = "agosto"
    break;
    case '09': split[1] = "setembro"
    break;
    case '10': split[1] = "outubro"
    break;
    case '11': split[1] = "novembro"
    break;
    case '12': split[1] = "dezembro"
    break;
    default: ""
  }

  return `Olá. Chamo-me ${name}, nasci no dia ${split[0]} do mês de ${split[1]} do ano de ${split[2]}.`;
}

console.log(splitSentence("Diego", "23/12/1991"));
