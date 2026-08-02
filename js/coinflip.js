// ==========================
// Lucky Lounge Coin Flip
// ==========================


let flipping = false;



function flipCoin(choice){


    if(flipping){
        return;
    }


    let bet = Number(
        document.getElementById("bet").value
    );



    if(bet <= 0){

        alert("Enter a valid bet amount");

        return;

    }



    if(bet > coins){

        alert("You don't have enough coins");

        return;

    }



    flipping = true;



    // Remove bet

    coins -= bet;

    updateCoins();



    let coin = document.getElementById("coin");

    let result = document.getElementById("result");



    coin.style.animation = "none";

    setTimeout(()=>{

        coin.style.animation =
        "coinSpin 1s";

    },10);



    result.innerText =
    "🪙 Flipping...";



    setTimeout(()=>{



        let outcome;



        if(Math.random() < 0.5){

            outcome = "Heads";

        }

        else{

            outcome = "Tails";

        }




        if(choice === outcome){


            let winnings = bet * 2;


            coins += winnings;


            result.innerText =
            "🎉 " +
            outcome +
            " - You won x2! +" +
            winnings +
            " coins";


            result.className =
            "win";


        }


        else{


            result.innerText =
            "❌ " +
            outcome +
            " - You lost " +
            bet +
            " coins";


            result.className =
            "lose";


        }



        updateCoins();


        flipping = false;



    },1000);


}
