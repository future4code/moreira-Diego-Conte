//                        EXERCÍCIO 1
//  a)
let minhaString: string = "Diego";
// Posso atribuir valores do tipo 'string' a esta variável, mas não do tipo 'number' porque seu tipo foi especificado.

//  b)
let meuNumero: number | string = 10;
meuNumero = "dez";
// Para que a variável aceite mais de um tipo de valor, podemos usar o type union ou declará-la como any.

//  c)
const person: { name: string; age: number; color: string } = {
  name: "Diego Conte",
  age: 31,
  color: "red",
};

// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

type pessoa = {
  name: string;
  age: number;
  color: string;
};

enum rainbowColors{
    RED = "red",
    ORANGE = "orange",
    YELLOW = "yellow",
    GREEN = "green",
    BLUE = "blue",
    INDIGO = "indigo",
    VIOLET = "violet"
};

const person2: pessoa = {
    name: "Jacqueline Nascimento",
    age: 27,
    color: rainbowColors.RED
};

const person3: pessoa = {
    name: "Léo Rigotto",
    age: 31,
    color: rainbowColors.BLUE
}

const person4: pessoa = {
    name: "Cristiane Conte",
    age: 35,
    color: rainbowColors.INDIGO
};
