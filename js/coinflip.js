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

        alert("Not enough coins");

        return;

    }



    flipping = true;



    coins -= bet;

    updateCoins();



    let coin =
    document.getElementById("coin");


    let result =
    document.getElementById("result");



    if(typeof playSound === "function"){

        playSound("coinFlip");

    }



    coin.style.animation = "none";


    setTimeout(()=>{

        coin.style.animation =
        "coinSpin 1s";

    },10);



    result.innerText =
    "🪙 Flipping...";


    result.className = "";




    setTimeout(()=>{



        let outcome;



        if(Math.random() < 0.5){

            outcome = "Heads";

        }

        else{

            outcome = "Tails";

        }




        if(outcome === choice){


            let winnings =
            bet * 2;



            coins += winnings;



            updateCoins();



            result.innerText =
            "🎉 "
            + outcome
            + "! You won "
            + winnings.toLocaleString()
            + " coins";



            result.className =
            "win";



            if(typeof playSound === "function"){

                playSound("win");

            }



        }



        else{



            result.innerText =
            "❌ "
            + outcome
            + "! You lost "
            + bet.toLocaleString()
            + " coins";



            result.className =
            "lose";



            if(typeof playSound === "function"){

                playSound("lose");

            }


        }




        flipping = false;



    },1000);



}
