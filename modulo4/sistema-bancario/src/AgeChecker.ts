export function ageChecker( birthDate: string): number | string {
    const splitgBirthDate: string[] = birthDate.split("/");

    if (splitgBirthDate.length !== 3) {
      return `Please check birth date format: it must to be dd/mm/yyyy`;
    } else if (splitgBirthDate[2].length !== 4){
        return `Please check birth date format: it must to be dd/mm/yyyy.`
    }

    const timeStampBirthDate: number = new Date(
        splitgBirthDate[2] + '-' + splitgBirthDate[1] + '-' + splitgBirthDate[0]
        ).getTime();

    if (typeof timeStampBirthDate !== typeof 1){
        return `Please check birth date: only numbers and slash are accepted.`
    }
    const timeStampDateNow: number = new Date().getTime();
    const userAge: number = (timeStampDateNow - timeStampBirthDate) / 1000 / 60 / 60 / 24 / 365;

    return userAge
}