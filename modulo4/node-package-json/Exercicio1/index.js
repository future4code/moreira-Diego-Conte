//          Exercício 1

//  a) Usamos a propriedade process.argv para acessar os parâmetros passados na linha de comando.

//  b)
    const nameUser = process.argv[2]
    const ageUser = Number(process.argv[3])

    console.log(`Olá ${nameUser}! Você tem ${ageUser} anos.`)

// c)
    console.log(`Olá ${nameUser}! Você tem ${ageUser} anos. Em sete anos você terá ${ageUser + 7} anos.`)
