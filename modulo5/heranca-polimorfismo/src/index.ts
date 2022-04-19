/**
 * **********************************
 *              HERANÇA             *
 * **********************************
 */


// EXERCÍCIO 1
class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(id: string, email: string, name: string, password: string) {
    console.log("Chamando o construtor da classe User");
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
  }

  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getName(): string {
    return this.name;
  }

  public introduceYourself(): string {
    return `Olá, ${this.name}, bom dia!`;
  }
}

const diego = new User("001", "diego@moreira.com", "Diego Conte", "12345");
// console.log(diego.getEmail);

// a) Não é possível imprimir unicamente a senha.
// b) Uma vez.

// EXERCÍCIO 2
class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

const aluno = new Customer(
  "002",
  "aluno@labenu.com",
  "Aluno Moreira",
  "senha",
  "0000-1111-2222-3333"
) 
console.log(
  aluno.getCreditCard,
  aluno.getEmail,
  aluno.getId,
  aluno.getName,
  aluno.purchaseTotal,
  aluno.introduceYourself()
);

// a) Uma só vez.
// b) Duas vezes  porque foi chamado no momento de instanciar e de obter o email via get.

// EXERCÍCIO 3
// a) Não porque é privado.

// EXERCÍCIOS 4 E 5
// No corpo do exercício anterior.


/**
 * **********************************
 *            POLIMORFISMO          *
 * **********************************
 */

// EXERCÍCIOS 1 E 2

export interface Client {
    name: string
    registrationNumber: number
    consumedEnergy: number
    calculateBill(): number
}

const client: Client = {
    name: 'pEDRO',
    registrationNumber: 1,
    consumedEnergy: 40,
    calculateBill: () => {
        return 2
    }
}
console.log(client)
console.log(client.calculateBill())
console.log(client.name)
console.log(client.registrationNumber)
console.log(client.consumedEnergy)

export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}

//EXERCÍCIO 2
// a) Não se pode criar instância de uma classe abstrata.
// b)

