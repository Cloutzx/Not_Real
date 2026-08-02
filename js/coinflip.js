let flipping = false;




function flipCoin(choice){



    if(flipping)
    return;




    let bet =
    Number(
    document.getElementById("bet").value
    );





    if(!bet || bet <= 0){


        result.innerHTML =
        "Enter a bet amount!";


        return;


    }







    if(bet > getCoins()){


        result.innerHTML =
        "Not enough coins!";


        return;


    }







    flipping=true;



    removeCoins(bet);



    LuckySounds.coinFlip();





    let coin =
    document.getElementById("coin");



    coin.classList.add("flip");





    result.innerHTML =
    "🪙 Flipping...";








    setTimeout(()=>{





        let outcome =
        Math.random() < .5
        ? "Heads"
        : "Tails";






        coin.classList.remove("flip");







        if(outcome === choice){



            let reward =
            bet * 2;



            addCoins(reward);



            result.innerHTML =

            "🎉 " +
            outcome +
            "! +" +
            reward +
            " Coins";



            LuckySounds.win();



        }

        else {



            result.innerHTML =

            "❌ " +
            outcome +
            "! You lost";



            LuckySounds.lose();


        }







        flipping=false;




    },2000);



}
