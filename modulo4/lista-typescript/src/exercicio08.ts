// Escreva uma função que pergunta ao usuário a data de nascimento de uma pessoa (ex.: “24/04/1993”),
// e a data de emissão da sua carteira de identidade (ex.: “07/11/2015”). A função deve retornar um booleano
// que indica se a carteira precisa ser renovada ou não.

function verifiesDocument( firstDate: string, secondDate: string ): boolean | string {
  const birthDate: string[] = firstDate.split("/");
  const documentDate: string[] = secondDate.split("/");

  if (birthDate.length !== 3 || documentDate.length !== 3) {
    return `Dados incorretos. Certifique-se de que as datas informadas obedecem ao formato dd/mm/aaaa`;
  }

  const timeStampBirthDate: number = new Date(birthDate[2]+'-'+birthDate[1]+'-'+birthDate[0]).getTime();
  const timeStampDocumentIssue: number = new Date(documentDate[2]+"-"+documentDate[1]+"-"+documentDate[0]).getTime();
  const timeStampDateNow: number = new Date().getTime();
  //const dateNow: string[] = new Date(timeStamp).toLocaleDateString("pt-BR").split("/"); >> To convert to string

  const userAge: number = (timeStampDateNow - timeStampBirthDate) * 3.17098e-11;
  const documentAge: number = (timeStampDateNow - timeStampDocumentIssue) * 3.17098e-11;
  // To convert milliseconds to years, use this conversion formula: X milliseconds * 3,17098e-11

  const condition1 : boolean = userAge < 21 && documentAge >= 5;
  const condition2 : boolean = userAge < 51 && documentAge >= 10;
  const condition3 : boolean = documentAge >= 15;
  
  return condition1 || condition2 || condition3
}

console.log(verifiesDocument("25/03/1971", "25/03/2012"));
