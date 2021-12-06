// ------------------------------- OBJETOS
//      06Dec21

// ----------------- Exercícios de interpretação de código


//      Exercício 1
//  Matheus Nachtergaele
//  Virginia Cavendish
//  canal: "Globo", horario: "14h"


//      Exercício 2
//  a)
//  {nome: "Juca", idade: 3, raca: "SRD"}

//  {nome: "Juba" , idade: 3, raca: "SRD"}

//  {nome: "Jubo",  idade: 3, raca: "SRD"}

//  b)
//  Spread operator: o comando realiza uma cópia do objeto original e modifica/inclui as chaves
//  especificadas com os respectivos valores informados.


//      Exercício 3
//  a) 
//  false
//  undefined

//  b)
//  Quando a função é chamada no console, ela aciona o objeto completo e adicona entre colchetes
//  a propriedade que tem o mesmo nome de uma chave do objeto ora referido. Desta forma, o return
//  oferece o valor de falso da chave 'backender' e indefinido para 'altura', já que não há chave
//  com esse nome.



// ----------------- Exercícios de escrita de código


//      Exercício 1
//  a)
    const nickName = {
        nome: "Diego",
        apelidos: ["Di", " Die", " Didi"]
    }

    const printNickName = (objeto) => {
        return `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos}.`
    }
        console.log(printNickName(nickName))


//  b)
    const newNickName = {...nickName,
                            apelidos: ["Conte", " Dico", " Digo"]
                        }
    console.log(printNickName(newNickName))


//      Exercício 2
//  a)
    const personalInfo1 = {
        nome: "Diego Conte",
        idade: 30,
        profissao: "Estudante"
    }

    const personalInfo2 = {
        nome: "Valdete Boni",
        idade: 40,
        profissao: "Professora"
    }

//  b)
    function returnString (personalInfo){
        const arrayWithString = [personalInfo.nome, personalInfo.nome.length, personalInfo.idade,
        personalInfo.profissao, personalInfo.profissao.length]

        return arrayWithString
    }

    console.log(returnString(personalInfo1))
    console.log(returnString(personalInfo2))


//      Exercício 3
//  a)
    const carrinho = []


//  b)
    const eggPlant = {
        nome: "Berinjela",
        disponibilidade: true
    }

    const tomato = {
        nome: "Tomate",
        disponibilidade: true
    }

    const orange = {
        nome: "Laranja",
        disponibilidade: true
    }


//  c)
    function fruit (objeto) {
        carrinho.push(objeto)
        return carrinho
    }

    fruit(eggPlant)
    fruit(tomato)
    fruit(orange)


//  d)
    console.log(carrinho)



// ----------------- Desafios


//      Exercício 1

    function aboutYou(nome, profissao, idade){
        
        const aboutYouObj = {
            nome: nome,
            profissao: profissao,
            idade: idade
        }

        console.log(aboutYouObj)
    }

    const nameUser = prompt("Informe o seu nome:")
    const profession = prompt("Informe a sua profissão:")
    const age = Number(prompt("Informe a sua idade:"))

    aboutYou(nameUser, profession, age)


//      Exercício 2

    const movie1 = {
        anoLancamento: 1986,
        nome: "The name of the Rose"
    }

    const movie2 = {
        anoLancamento: 1968,
        nome: "2001: A space odyssey"
    }

    function compareMovies(objeto1, objeto2){
        const firstOlder = objeto1.anoLancamento < objeto2.anoLancamento
        const sameAge = objeto1.anoLancamento === objeto2.anoLancamento
        const secondOlder = objeto2.anoLancamento < objeto1.anoLancamento

        console.log(`\
                    O primeiro filme foi lançado antes do segundo? ${firstOlder}.
                    O primeiro filme foi lançado no mesmo ano do segundo? ${sameAge}.
                    O segundo filme foi lançado antes do primeiro? ${secondOlder}.`)
    }
        compareMovies(movie1, movie2)


//      Exercício 3

    const missing = []

    function fruitNotAvailable (objeto) {
        objeto.disponibilidade = !objeto.disponibilidade
        missing.push(objeto)
        return missing
    }

    fruitNotAvailable(eggPlant)
    fruitNotAvailable(tomato)
    fruitNotAvailable(orange)
    