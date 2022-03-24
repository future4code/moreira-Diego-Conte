//                            EXERCÍCIO 4

//  a) 

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//  b) Rodaria o comando tsc, seja por meio de script, seja manualmente.

//  c) Sim, seria necessário ir ao referido diretório ou alterar o script.

//  d) Sim, usando o comando tsc e enumerando o arquivos ou alterando as configurações do arquivo
//     tsconfig.json: "rootDir": "./src" e "outDir": "./build".