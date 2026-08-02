let flipping = false;



function flipCoin(choice){


    if(flipping) return;



    const bet =
    Number(document.getElementById("bet").value);



    if(!bet || bet <= 0){


        document.getElementById("result").innerHTML =
        "Enter a bet amount!";


        return;


    }



    if(bet > getCoins()){


        document.getElementById("result").innerHTML =
        "Not enough coins!";


        return;


    }




    flipping = true;



    removeCoins(bet);



    const coin =
    document.getElementById("coin");



    LuckySounds.coinflip();



    coin.classList.add("flip");



    document.getElementById("result").innerHTML =
    "Flipping...";





    setTimeout(()=>{



        let result =
        Math.random() < 0.5
        ? "Heads"
        : "Tails";





        coin.classList.remove("flip");



        if(result === choice){



            let reward =
            bet * 2;



            addCoins(reward);



            document.getElementById("result").innerHTML =

            "🎉 " + result + "! +" + reward + " Coins";



            LuckySounds.win();



        }

        else {



            document.getElementById("result").innerHTML =

            "❌ " + result + "! You lost";



            LuckySounds.lose();



        }




        flipping=false;



    },2000);



}
