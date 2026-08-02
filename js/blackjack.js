/* =========================================================
   LUCKY LOUNGE BLACKJACK
========================================================= */


let playerCards = [];

let dealerCards = [];

let deck = [];

let gameRunning = false;

let playerTurn = false;








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

                suit:suit,

                rank:rank

            });


        });


    });





    return newDeck.sort(
        ()=>Math.random()-0.5
    );


}









function startGame(){


    if(gameRunning)
    return;




    let bet = Number(
        document.getElementById("bet").value
    );




    if(!bet || bet <= 0){


        result.innerHTML =
        "Enter a bet!";


        return;


    }






    if(bet > getCoins()){


        result.innerHTML =
        "Not enough coins!";


        return;


    }






    removeCoins(bet);




    deck = createDeck();



    playerCards = [];

    dealerCards = [];




    playerCards.push(deck.pop());

    playerCards.push(deck.pop());



    dealerCards.push(deck.pop());

    dealerCards.push(deck.pop());




    gameRunning = true;

    playerTurn = true;




    LuckySounds.cardDeal();



    updateCards();



    result.innerHTML =
    "Your turn";



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


    if(!gameRunning || !playerTurn)
    return;



    playerTurn = false;



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



        let bet =
        Number(
            document.getElementById("bet").value
        );



        let reward =
        bet * 2;



        addCoins(reward);



        result.innerHTML =
        "🎉 You Win! +" + reward;



        LuckySounds.win();



    }

    else if(
        playerScore === dealerScore
    ){



        let bet =
        Number(
            document.getElementById("bet").value
        );



        addCoins(bet);



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


    gameRunning = false;

    playerTurn = false;


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

        else if(card.rank === "A"){


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





    player.innerHTML = "";

    dealer.innerHTML = "";







    playerCards.forEach(card=>{


        player.innerHTML += `

        <div class="card">

        ${card.rank}${card.suit}

        </div>

        `;


    });







    dealerCards.forEach((card,index)=>{


        if(index === 1 && gameRunning){


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
