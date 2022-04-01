export type statementTemplate = {
    value: number,
    date: string,
    desscription: string
}


export type accountTemplate = {
    name: string,
    CPF: string,
    birthDate: string,
    balance: number,
    statement: statementTemplate[]
}