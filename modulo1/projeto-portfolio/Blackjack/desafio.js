//-------------------------------------------------------------- START
let welcomeQuestion = confirm(`Boas-vindas ao jogo de Blackjack! 
Deseja iniciar a rodada?`);

if (welcomeQuestion === true) {
   myBlackjack()
} else {
   alert("O jogo encerrou. Você pode fechar esta página.")
}

//-------------------------------------------------------------- MAIN FUNCTION
function myBlackjack() {


   //-------------------------------------------------------------- VARs
   let cardUser = [];
   let cardPc = [];
   let scoreUser = [];
   let scorePc = [];
   let allUserSuits = " ";
   let allPcSuits = " ";

   //-------------------------------------------------------------- MINOR FUNCTIONS
   const arrayOfPoints = (item) => { // Return all points in array
      return item.valor
   }

   const arrayOfSuits = (item) => { // Return all suits in array
      return item.texto
   }

   function totalScore(array) { // Return total points
      let totalPoints = 0
      for (let i = 0; i < array.length; i++) {
         totalPoints = totalPoints + array[i]
      } return totalPoints
   }

   function suits(array) { // Return string of suits
      let suits = ""
      for (let i = 0; i < array.length; i++) {
         suits = suits + array[i] + "  "
      } return suits
   }

   function returnAllUserSuits() { // Calls functions 'arrayOfSuits' and 'suits' to return user's suits
      return ((allUserSuits = cardUser.map(arrayOfSuits)), allUserSuits = suits(allUserSuits))
   }

   function returnAllPCSuits() { // Calls functions 'arrayOfSuits' and 'suits' to return Pc's suits
      return ((allPcSuits = cardPc.map(arrayOfSuits)), allPcSuits = suits(allPcSuits))
   }


   let i = 0
   while (i < 2) {
      cardUser.push(comprarCarta())
      cardPc.push(comprarCarta())
      i++
   }

   if ((cardUser[0].texto === "A" && cardUser[1].texto === "A") || (cardPc[0].texto === "A" && cardPc[1].texto === "A")) {
      alert(`A combinação atual de cartas não é permitida porque impossibilita a primeira rodada. Reinicie o jogo.`)
      throw new Error("Needs to restart due to combination of cards");
   }

   scoreUser = cardUser.map(arrayOfPoints); scoreUser = totalScore(scoreUser) //Adds user's points
   scorePc = cardPc.map(arrayOfPoints); scorePc = totalScore(scorePc) // Adds computers's points

   if (scoreUser === 21 && scorePc === 21) {
      alert("Você: " + scoreUser + " pontos. Cartas: " + returnAllUserSuits() + "\n" +
         "Computador: " + scorePc + " pontos. Cartas: " + returnAllPCSuits() + "\n" +
         "Empate. Vamos à melhor de três!")
   }

   let anotherCard = confirm("Você totaliza " + scoreUser + " pontos. Suas cartas são " + returnAllUserSuits() + "\n" +
      "O computador revelou a carta " + cardPc[0].texto + "\n" +
      "\n" +
      "Deseja tirar outra carta?")


   while (anotherCard === true && scoreUser <= 21) {
      cardUser.push(comprarCarta())
      scoreUser = cardUser.map(arrayOfPoints); scoreUser = totalScore(scoreUser)
      if (scoreUser > 21) {
         alert("Você: " + scoreUser + " pontos. Cartas: " + returnAllUserSuits() + "\n" +
            "Computador: " + scorePc + " pontos. Cartas: " + returnAllPCSuits() + "\n" +
            "\n" +
            "O Computador ganhou!")
      } else {
         anotherCard = confirm(" As suas cartas são " + returnAllUserSuits() + "\n" +
            "\n" +
            "Deseja tirar outra carta?")
      }
   }

   if (scorePc > scoreUser) {
      alert("Você: " + scoreUser + " pontos. Cartas: " + returnAllUserSuits() + "\n" +
         "Computador: " + scorePc + " pontos. Cartas: " + returnAllPCSuits() + "\n" +
         "\n" +
         "O Computador ganhou!")
   } else if (scorePc <= scoreUser && scoreUser <= 21) {
      while (scorePc <= scoreUser && scorePc <= 21) {
         cardPc.push(comprarCarta())
         scorePc = cardPc.map(arrayOfPoints); scorePc = totalScore(scorePc)
      }
      if (scorePc === 21 && scoreUser === 21) {
         alert("Você: " + scoreUser + " pontos. Cartas: " + returnAllUserSuits() + "\n" +
            "Computador: " + scorePc + " pontos. Cartas: " + returnAllPCSuits() + "\n" +
            "\n" +
            "Empate. Vamos à melhor de três!")
      } else if (scorePc > 21 && scoreUser <= 21) {
         alert("Você: " + scoreUser + " pontos. Cartas: " + returnAllUserSuits() + "\n" +
            "Computador: " + scorePc + " pontos. Cartas: " + returnAllPCSuits() + "\n" +
            "\n" +
            "Você ganhou!")
      } else {
         alert("Você: " + scoreUser + " pontos. Cartas: " + returnAllUserSuits() + "\n" +
            "Computador: " + scorePc + " pontos. Cartas: " + returnAllPCSuits() + "\n" +
            "\n" +
            "O computador ganhou!")
      }
   }

   let playAgain = confirm(`Deseja iniciar uma nova rodada?`);
   if (playAgain === true) {
      myBlackjack()
   } else {
      alert("O jogo encerrou. Você pode fechar esta página.")
   }
}

