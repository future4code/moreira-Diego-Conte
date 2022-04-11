import { accountTemplate } from "./Types";

export const users: accountTemplate[] = [
  {
    name: "Ana Paula Arósio",
    CPF: "636.157.687-60",
    birthDate: "16/07/1975",
    balance: 50000.0,
    statement: [
        {value: 5100, 
        date: "02/04/2022", 
        description: "Buying new car."
        },
        {value: 500, 
        date: "04/03/2022", 
        description: "Transfered to William Bonemer Júnior."
        },
    ],
  },
  {
    name: "William Bonemer Júnior",
    CPF: "097.956.522-73",
    birthDate: "16/11/1963",
    balance: 50000.0,
    statement: [],
  },
  {
    name: "Senor Abravanel",
    CPF: "156.545.341-73",
    birthDate: "12/12/1930",
    balance: 100000.0,
    statement: [],
  },
  {
    name: "Fausto Corrêa da Silva",
    CPF: "724.460.268-50",
    birthDate: "02/05/1950",
    balance: 70000.0,
    statement: [],
  },
];
