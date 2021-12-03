// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const alturaRetangulo = Number(prompt("Digite a altura do retângulo"))
  const baseRetangulo = Number(prompt("Digite a largura do retângulo"))
  const area = alturaRetangulo * baseRetangulo
  return console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Olá. Em que anos estamos?"))
  const anoNascimento = Number(prompt("E em que ano você nasceu"))
  const idadeUser = anoAtual - anoNascimento

  return console.log(idadeUser)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
    const imcUser = peso / (altura * altura)

  return imcUser

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nomeUser = prompt("Seja bem-vindo. Qual é o seu nome")
  const idadeUsuario = Number(prompt("E qual é a sua idade"))
  const emailUser = prompt("E qual é o seu e-mail?")
  
  return console.log(`Meu nome é ${nomeUser}, tenho ${idadeUsuario} anos, e o meu email é ${emailUser}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const corFavorita = []
  corFavorita[0] = prompt("Olá. Qual é a sua cor favorita?")
  corFavorita[1] = prompt("E qual é a sua segunda cor favorita?")
  corFavorita[2] = prompt("E qual é a sua terceira cor favorita?")

  return console.log(corFavorita)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let arrayClonada = []
  arrayClonada = array
  let ultimoElemento = array.pop()
  let primeiroElemento = array[0]
  arrayClonada[0] = ultimoElemento
  arrayClonada.push(primeiroElemento)
  return arrayClonada
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const frase1 = string1.toLowerCase()
  const frase2 = string2.toLowerCase()

  return frase1 === frase2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
}