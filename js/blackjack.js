// ==========================
// Lucky Lounge Blackjack
// ==========================


let deck = [];

let playerCards = [];

let dealerCards = [];

let gameStarted = false;





function createDeck(){

    deck = [];

    let suits = [
        "♠",
        "♥",
        "♦",
        "♣"
    ];


    let values = [
        {name:"A", value:11},
        {name:"2", value:2},
        {name:"3", value:3},
        {name:"4", value:4},
        {name:"5", value:5},
        {name:"6", value:6},
        {name:"7", value:7},
        {name:"8", value:8},
        {name:"9", value:9},
        {name:"10", value:10},
        {name:"J", value:10},
        {name:"Q", value:10},
        {name:"K", value:10}
    ];



    for(let suit of suits){

        for(let card of values){

            deck.push({

                name: card.name,

                value: card.value,

                suit: suit

            });

        }

    }



    deck.sort(() => Math.random() - 0.5);

}





function drawCard(){

    if(typeof playSound === "function"){

        playSound("cardFlip");

    }


    return deck.pop();

}





function getScore(cards){


    let score = 0;

    let aces = 0;



    for(let card of cards){

        score += card.value;


        if(card.name === "A"){

            aces++;

        }

    }



    while(score > 21 && aces > 0){

        score -= 10;

        aces--;

    }


    return score;

}





function displayCards(){


    let player =
    document.getElementById("playerCards");


    let dealer =
    document.getElementById("dealerCards");



    player.innerHTML = "";

    dealer.innerHTML = "";




    playerCards.forEach(card => {


        player.innerHTML += `

        <div class="card">

        ${card.name}${card.suit}

        </div>

        `;


    });




    dealerCards.forEach((card,index)=>{


        if(index === 0 && gameStarted){


            dealer.innerHTML += `

            <div class="card back">

            ?

            </div>

            `;


        }

        else{


            dealer.innerHTML += `

            <div class="card">

            ${card.name}${card.suit}

            </div>

            `;


        }


    });



    document.getElementById("playerScore")
    .innerText =
    getScore(playerCards);


}





function startGame(){


    if(gameStarted){

        return;

    }



    let bet =
    Number(
        document.getElementById("bet").value
    );



    if(bet <= 0){

        alert("Enter a bet");

        return;

    }



    if(bet > coins){

        alert("Not enough coins");

        return;

    }



    coins -= bet;


    updateCoins();



    if(typeof playSound === "function"){

        playSound("cardDeal");

    }



    createDeck();



    playerCards = [];

    dealerCards = [];



    playerCards.push(drawCard());

    playerCards.push(drawCard());



    dealerCards.push(drawCard());

    dealerCards.push(drawCard());



    window.currentBet = bet;



    gameStarted = true;



    displayCards();



    document.getElementById("dealerScore")
    .innerText = "?";



    document.getElementById("result")
    .innerText = "";



    // Instant blackjack

    if(getScore(playerCards) === 21){

        blackjackWin();

    }


}





function hit(){


    if(!gameStarted){

        return;

    }



    playerCards.push(drawCard());



    displayCards();



    let score =
    getScore(playerCards);



    if(score > 21){


        if(typeof playSound === "function"){

            playSound("lose");

        }


        endGame(
            "💥 Bust! Dealer wins"
        );


    }


}







function stand(){


    if(!gameStarted){

        return;

    }



    while(
        getScore(dealerCards) < 17
    ){

        dealerCards.push(drawCard());

    }



    let playerScore =
    getScore(playerCards);


    let dealerScore =
    getScore(dealerCards);



    gameStarted = false;



    displayCards();



    document.getElementById("dealerScore")
    .innerText =
    dealerScore;




    if(
        dealerScore > 21 ||
        playerScore > dealerScore
    ){


        if(typeof playSound === "function"){

            playSound("win");

        }



        coins +=
        window.currentBet * 2;



        endGame(
            "🎉 You win x2!"
        );


    }



    else if(playerScore === dealerScore){


        if(typeof playSound === "function"){

            playSound("click");

        }



        coins +=
        window.currentBet;



        endGame(
            "🤝 Push - Bet returned"
        );


    }



    else{


        if(typeof playSound === "function"){

            playSound("lose");

        }



        endGame(
            "❌ Dealer wins"
        );


    }



    updateCoins();


}






function blackjackWin(){


    gameStarted = false;



    let reward =
    window.currentBet * 2.5;



    coins += reward;



    updateCoins();



    if(typeof playSound === "function"){

        playSound("jackpot");

    }



    endGame(
        "🃏 BLACKJACK! x2.5"
    );


}







function endGame(message){


    document.getElementById("result")
    .innerText =
    message;


    gameStarted = false;


}
