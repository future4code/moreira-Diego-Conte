/* 
                                EXERCÍCIOS 18 DE ABRIL DE 2022

Exercício 1

a) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
R = É uma função que serve para inicializar variáveis. Chamamo-lo por meio da palavra reservada constructor().

b) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e 
   idade que você quiser). Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
R = Será chamado uma só vez.
*/

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }
}
const user = new UserAccount("111-111-111.11", "Diego Conte", 31);

/*
c) Como conseguimos ter acesso às propriedades privadas de uma classe?
R = Por meio de getters/setters, cuja sintaxe é: 
public getName() {return this.name} ou public setName(newName: string) {this.name}


EXERCÍCIO 2
*/

class Transaction {
  private date: string;
  private value: number;
  private description: string;

  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description;
  }

  getDate(): string {
    return this.date;
  }

  getValue(): number {
    return this.value;
  }

  getDescription(): string {
    return this.description;
  }
}

// EXERCÍCIO 3

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }

  getAccount(): UserAccount[] {
    return this.accounts;
  }

  setAccounts(account: UserAccount): void {
    this.accounts.push(account);
  }
}
