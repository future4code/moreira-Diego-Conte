// Além dessas informações presentes em todos os filmes, alguns deles possuem uma informação opcional: 
// 4. pontuação em site de resenha (ex. Metacritic, RotenTomatoes). Considerando todas estas informações, 
// crie uma função que receba todas essas informações como parâmetros( 3 essenciais + 1 opcional) e retorne
// todas informações organizadas em um `type`


enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

type filmInfos = {
    nome: string,
    lançamento: number,
    genero: GENERO,
    pontuacao: number | null | undefined
}

function returningType (
    name: string, 
    year: number, 
    category: GENERO, 
    score?: number | null | undefined) : filmInfos {
    
    const movie: filmInfos = {
        nome: name,
        lançamento: year,
        genero: category,
        pontuacao: score
    }    

    return movie
}

console.log(returningType("Duna", 2021, GENERO.ACAO , 74))
