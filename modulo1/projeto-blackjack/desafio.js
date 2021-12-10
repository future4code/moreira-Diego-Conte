let card1User;
let card2User;
let card1Pc;
let card2Pc;
let scoreUser;
let scorePc;


function messages(){
   //Winner or looser
   if(scoreUser > scorePc){
      alert("Você venceu! ^^");
   } else if(scoreUser === scorePc) {
      alert("Empate. Vamos à melhor de 3! ^^")
   } else {
      alert("O computador venceu! ^^")
}
}

//Game

alert("Boas-vindas ao jogo de Blackjack!");
let welcomeQuestion = confirm("Quer iniciar uma nova rodada?");

function myBlackjack(){
   if(welcomeQuestion === true){
      card1User = comprarCarta()
      card2User = comprarCarta()
      card1Pc = comprarCarta()
      card2Pc = comprarCarta()

         if((card1User && card2User === "A") || (card1Pc && card2Pc === "A")){
         cards();
         }

      scoreUser = card1User.valor + card2User.valor
      scorePc = card1Pc.valor + card2Pc.valor
   
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
