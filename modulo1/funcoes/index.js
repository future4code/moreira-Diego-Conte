// ----------------------------FUNÇÕES--------------------------------
// 
// ------- Exercícios de interpretação de código
//
// ------ Exercício 1
//      a) 10
//         50
//
//      b) A função funcionaria, porém não teríamos os resultados impressos no console.
//
//
// ------ Exercício 2
//      a) Esta função deixa toda a string-argumento em letras minúsculas e retorna true or false
//         para a palavra cenoura, confirmando se está ou não no texto informado pelo user.
//
//      b) i. true
//         ii. true
//         iii. false
//
//
// ------- Exercícios de interpretação de código
//
// ------ Exercício 1
//      a)
        function quemSouEu(){
            const euSou = console.log(`Eu sou Diego, tenho 30 anos, moro em Chapecó - SC e sou estudante.`)
            return euSou
        }
        quemSouEu()

//      b)
        function apresentacao(nome, idade, cidade, profissao){
            const apresentacaoCompleta = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
            return apresentacaoCompleta
        }
        apresentacao("Diego", 30, "Chapecó", "estudante")
//
//
// ------ Exercício 2
//      a)
        function somaDoisNumeros(numb1, numb2){
            return console.log(numb1 + numb2)
        }
        somaDoisNumeros(10, -25)
//
//
//      b)
        function maiorMenor2Numbs(numb1, numb2){
            return numb1 >= numb2
        }
//
//
//      c)
        function parOuNao(numb1){
            return numb1 % 2 === 0
        }
//
//
//      d)
        function tamanhoFraseEmMaiuscula(frase){
            return console.log(frase.length, frase.toUpperCase())
        }
        tamanhoFraseEmMaiuscula("Minha terra tem palmeiras onde canta o sabiá.")
//
//
//
//
// ------ Exercício 3
//      a)
        function soma(numb1, numb2){
            const resultadoSoma = numb1 + numb2
            return resultadoSoma
        }

        function subtracao(numb1, numb2){
            const resultadoSubtracao = numb1 - numb2
            return resultadoSubtracao
        }

        function multiplicacao(numb1, numb2){
            const resultadoMultiplicacao = numb1 * numb2
            return resultadoMultiplicacao
        }

        function divisao(numb1, numb2){
            const resultadoDivisao = numb1 / numb2
            return resultadoDivisao
        }

        const numb1 = Number(prompt("Informe o primeiro número:"))
        const numb2 = Number(prompt("Informe o segundo número:"))

        console.log(`
        Números inseridos: ${numb1} e ${numb2}
        Soma: ${soma(numb1, numb2)}
        Subtração: ${subtracao(numb1, numb2)}
        Multiplicação: ${multiplicacao(numb1, numb2)}
        Divisão: ${divisao(numb1, numb2)}`)



// -------------------------------- Desafios
//
// ------ Exercício 1
//      a)
        const umParametroSo = (texto) => {
            return console.log(texto)
        }
        umParametroSo("I wanna know, have you ever seen the rain?")
//
//
//      b)
        const twoValues = (value1, value2) => {
            result = value1 + value2
            finalResult = umParametroSo(result)
            return console.log(finalResult)
        }
        twoValues(2,30)
//
//
// ------ Exercício 2
//      a)
        const cateto1 = Number(prompt("Informe o valor do primeiro cateto:"))
        const cateto2 = Number(prompt("Informe o valor do segundo cateto:"))

        const hipotenusa = function(cateto1, cateto2){
            let resulHipo = ((cateto1**2 + cateto2**2)**(1/2))
            return console.log(resulHipo)
        }
        hipotenusa(cateto1, cateto2)