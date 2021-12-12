/*

                           PROJETO DE FIXAÇÃO: BLACKJACK
      10Dec21

Exercício 1
*/

/*
alert("Boas-vindas ao jogo de Blackjack!")
let welcomeQuestion = confirm("Quer iniciar uma nova rodada?")

function myBlackjack(){
   if( welcomeQuestion === true){
      let card1User = comprarCarta();
      let card2User = comprarCarta();
      let card1Pc = comprarCarta();
      let card2Pc = comprarCarta();

      let scoreUser = card1User.valor + card2User.valor
      let scorePc = card1Pc.valor + card2Pc.valor

      alert(`
      Você tirou as cartas ${card1User.texto} e ${card2User.texto}, totalizando ${scoreUser} pontos.
      O computador tirou as cartas ${card1Pc.texto} e ${card2Pc.texto}, totalizando ${scorePc} pontos.`);

         if(scoreUser > scorePc){
            alert("Você venceu! ^^");
         } else if(scoreUser === scorePc) {
            alert("Empate. Vamos à melhor de 3! ^^")
         } else {
            alert("O computador venceu! ^^")
         }

   } else {
       alert("O jogo acabou.")
}

let playAgain = confirm("Deseja jogar novamente?")
if(playAgain=== true){
   myBlackjack()
} else {
   alert("Você pode fechar esta página.")
}
}

myBlackjack()
*/
