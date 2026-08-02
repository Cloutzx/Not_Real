/* =========================================================
   LUCKY LOUNGE BLACKJACK
========================================================= */


let playerCards = [];

let dealerCards = [];

let deck = [];

let gameRunning = false;

let playerTurn = false;

let currentBet = 0;




const suits = [
    "♠️",
    "♥️",
    "♦️",
    "♣️"
];


const ranks = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
];





function createDeck(){


    let newDeck = [];



    suits.forEach(suit=>{


        ranks.forEach(rank=>{


            newDeck.push({

                rank:rank,

                suit:suit

            });


        });


    });



    return newDeck.sort(
        ()=>Math.random() - 0.5
    );

}





function startGame(){



    if(gameRunning)
    return;



    let betInput =
    document.getElementById("bet");



    currentBet =
    Number(betInput.value);



    if(!currentBet || currentBet <= 0){

        result.innerHTML =
        "Enter a bet!";

        return;

    }





    if(currentBet > getCoins()){


        result.innerHTML =
        "Not enough coins!";

        return;

    }





    removeCoins(currentBet);



    deck = createDeck();



    playerCards = [];

    dealerCards = [];



    gameRunning = true;

    playerTurn = true;




    playerCards.push(deck.pop());

    playerCards.push(deck.pop());



    dealerCards.push(deck.pop());

    dealerCards.push(deck.pop());



    LuckySounds.cardDeal();



    updateCards();



    result.innerHTML =
    "Your Turn";



}








function hit(){



    if(!gameRunning || !playerTurn)
    return;



    playerCards.push(
        deck.pop()
    );



    LuckySounds.cardDeal();



    updateCards();





    if(getScore(playerCards) > 21){


        result.innerHTML =
        "💥 Bust!";


        LuckySounds.lose();


        endGame();


    }


}








function stand(){



    if(!gameRunning)
    return;



    playerTurn=false;


    dealerTurn();


}








function dealerTurn(){



    while(
        getScore(dealerCards) < 17
    ){


        dealerCards.push(
            deck.pop()
        );


        LuckySounds.cardFlip();


    }



    updateCards();



    let playerScore =
    getScore(playerCards);



    let dealerScore =
    getScore(dealerCards);





    if(
        dealerScore > 21 ||
        playerScore > dealerScore
    ){


        let winnings =
        currentBet * 2;


        addCoins(winnings);



        result.innerHTML =
        "🎉 You Win! +" + winnings;



        LuckySounds.win();



    }


    else if(
        playerScore === dealerScore
    ){


        addCoins(currentBet);



        result.innerHTML =
        "🤝 Draw";



    }


    else{


        result.innerHTML =
        "❌ Dealer Wins";



        LuckySounds.lose();


    }



    endGame();



}








function endGame(){


    gameRunning=false;

    playerTurn=false;

    currentBet=0;


}









function getScore(cards){



    let score = 0;

    let aces = 0;




    cards.forEach(card=>{


        if(
            ["J","Q","K"]
            .includes(card.rank)
        ){


            score += 10;


        }


        else if(card.rank==="A"){


            score += 11;

            aces++;


        }


        else{


            score += Number(card.rank);


        }


    });





    while(score > 21 && aces > 0){


        score -= 10;

        aces--;


    }





    return score;


}









function updateCards(){



    let player =
    document.getElementById(
        "playerCards"
    );


    let dealer =
    document.getElementById(
        "dealerCards"
    );



    player.innerHTML="";

    dealer.innerHTML="";





    playerCards.forEach(card=>{


        player.innerHTML += `

        <div class="card">

        ${card.rank}${card.suit}

        </div>

        `;


    });





    dealerCards.forEach((card,index)=>{


        if(index===1 && gameRunning){


            dealer.innerHTML += `

            <div class="card back">
            ❔
            </div>

            `;


        }


        else{


            dealer.innerHTML += `

            <div class="card">

            ${card.rank}${card.suit}

            </div>

            `;


        }


    });






    document.getElementById(
        "playerScore"
    ).innerHTML =
    getScore(playerCards);




    document.getElementById(
        "dealerScore"
    ).innerHTML =

    gameRunning
    ?
    "?"
    :
    getScore(dealerCards);



}
