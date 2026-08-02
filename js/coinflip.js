/* =========================================================
   LUCKY LOUNGE COIN FLIP
========================================================= */


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







    flipping = true;




    removeCoins(bet);




    updateCoins();





    let coin =
    document.getElementById("coin");





    if(coin){


        coin.classList.remove("flip");


        void coin.offsetWidth;


        coin.classList.add("flip");


    }






    LuckySounds.coinFlip();






    result.innerHTML =
    "🪙 Flipping...";









    setTimeout(()=>{





        let outcome =
        Math.random() < 0.5
        ?
        "Heads"
        :
        "Tails";









        if(coin){


            coin.classList.remove("flip");


            coin.innerHTML =
            outcome === "Heads"
            ?
            "🪙"
            :
            "💰";


        }









        if(outcome === choice){



            let reward =
            bet * 2;




            addCoins(reward);



            updateCoins();




            result.innerHTML =

            `
            🎉 ${outcome}!<br>
            🪙 +${reward} Coins
            `;



            LuckySounds.win();



        }

        else{



            result.innerHTML =

            `
            ❌ ${outcome}!<br>
            You lost ${bet} Coins
            `;



            LuckySounds.lose();



        }






        flipping=false;





    },2000);




}
