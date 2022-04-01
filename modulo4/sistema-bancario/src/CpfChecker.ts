import { users } from "./Data";

export function CpfChecker(cpf: string): boolean | string {
  //Starting validation entries >>>>>>>
  if (typeof cpf !== typeof "matrix") {
    return "Please check CPF: must to be string.";
  }

  const cpfLength: string[] = cpf.split("");

  if (
    cpfLength.length < 14 ||
    cpfLength[3] !== "." ||
    cpfLength[7] !== "." ||
    cpfLength[11] !== "-"
  ) {
    return "Please verify CPF format: must to be xxx.xxx.xxx-xx";
  } else if (
    cpfLength[0] === cpfLength[1] &&
    cpfLength[1] === cpfLength[2] &&
    cpfLength[2] === cpfLength[4] &&
    cpfLength[4] === cpfLength[5] &&
    cpfLength[5] === cpfLength[6] &&
    cpfLength[6] === cpfLength[8] &&
    cpfLength[8] === cpfLength[9] &&
    cpfLength[9] === cpfLength[10] &&
    cpfLength[10] === cpfLength[12]
  ) {
    return "Please check information: fictitious CPF (111.111.111-11) are not accepted.";
  }
  //Finishing validation entries <<<<<<<<

  const n1: number = Number(cpfLength[0]);
  const n2: number = Number(cpfLength[1]);
  const n3: number = Number(cpfLength[2]);
  const n4: number = Number(cpfLength[4]);
  const n5: number = Number(cpfLength[5]);
  const n6: number = Number(cpfLength[6]);
  const n7: number = Number(cpfLength[8]);
  const n8: number = Number(cpfLength[9]);
  const n9: number = Number(cpfLength[10]);
  const n10: number = Number(cpfLength[12]);
  const n11: number = Number(cpfLength[13]);

  const sumDigitTen: number =
    n1 * 10 +
    n2 * 9 +
    n3 * 8 +
    n4 * 7 +
    n5 * 6 +
    n6 * 5 +
    n7 * 4 +
    n8 * 3 +
    n9 * 2;
  let validatingDigitTen: number = 11 - (sumDigitTen % 11);
  validatingDigitTen >= 10 ? (validatingDigitTen = 0) : validatingDigitTen;

  const sumDigitEleven: number =
    n1 * 11 +
    n2 * 10 +
    n3 * 9 +
    n4 * 8 +
    n5 * 7 +
    n6 * 6 +
    n7 * 5 +
    n8 * 4 +
    n9 * 3 +
    n10 * 2;
  let validatingDigitEleven: number = 11 - (sumDigitEleven % 11);
  validatingDigitEleven >= 10
    ? (validatingDigitEleven = 0)
    : validatingDigitEleven;

  const isCpfAvailable = users.filter((c) => {
    return c.CPF === cpf;
  });

  if (isCpfAvailable.length !== 0) {
    return "Please check input: CPF already taken.";
  }

  if (validatingDigitTen === n10 && validatingDigitEleven === n11) {
    return true;
  } else {
    return false;
  }
}


// ==========================================================================================


export function findingCpf(cpf: string): boolean | string {
  //Starting validation entries >>>>>>>
  if (typeof cpf !== typeof "matrix") {
    return "Please check CPF: must to be string.";
  }

  const cpfLength: string[] = cpf.split("");

  if (
    cpfLength.length < 14 ||
    cpfLength[3] !== "." ||
    cpfLength[7] !== "." ||
    cpfLength[11] !== "-"
  ) {
    return "Please verify CPF format: must to be xxx.xxx.xxx-xx";
  } else if (
    cpfLength[0] === cpfLength[1] &&
    cpfLength[1] === cpfLength[2] &&
    cpfLength[2] === cpfLength[4] &&
    cpfLength[4] === cpfLength[5] &&
    cpfLength[5] === cpfLength[6] &&
    cpfLength[6] === cpfLength[8] &&
    cpfLength[8] === cpfLength[9] &&
    cpfLength[9] === cpfLength[10] &&
    cpfLength[10] === cpfLength[12]
  ) {
    return "Please check information: fictitious CPF (111.111.111-11) are not accepted.";
  }
  //Finishing validation entries <<<<<<<<

  const n1: number = Number(cpfLength[0]);
  const n2: number = Number(cpfLength[1]);
  const n3: number = Number(cpfLength[2]);
  const n4: number = Number(cpfLength[4]);
  const n5: number = Number(cpfLength[5]);
  const n6: number = Number(cpfLength[6]);
  const n7: number = Number(cpfLength[8]);
  const n8: number = Number(cpfLength[9]);
  const n9: number = Number(cpfLength[10]);
  const n10: number = Number(cpfLength[12]);
  const n11: number = Number(cpfLength[13]);

  const sumDigitTen: number =
    n1 * 10 +
    n2 * 9 +
    n3 * 8 +
    n4 * 7 +
    n5 * 6 +
    n6 * 5 +
    n7 * 4 +
    n8 * 3 +
    n9 * 2;
  let validatingDigitTen: number = 11 - (sumDigitTen % 11);
  validatingDigitTen >= 10 ? (validatingDigitTen = 0) : validatingDigitTen;

  const sumDigitEleven: number =
    n1 * 11 +
    n2 * 10 +
    n3 * 9 +
    n4 * 8 +
    n5 * 7 +
    n6 * 6 +
    n7 * 5 +
    n8 * 4 +
    n9 * 3 +
    n10 * 2;
  let validatingDigitEleven: number = 11 - (sumDigitEleven % 11);
  validatingDigitEleven >= 10
    ? (validatingDigitEleven = 0)
    : validatingDigitEleven;

  const cpfInDB = users.filter((c) => {
    return c.CPF === cpf;
  });

  if(cpfInDB.length <= 0){
    return "Please check CPF: No user found.";
  } else {
    return true
  }
}
