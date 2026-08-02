let cupLocked = false;



function chooseCup(choice){


    if(cupLocked) return;



    const bet =
    Number(document.getElementById("bet").value);



    if(!bet || bet <= 0){


        document.getElementById("result").innerHTML =
        "Enter a bet amount!";


        return;


    }



    let coins = getCoins();



    if(bet > coins){


        document.getElementById("result").innerHTML =
        "Not enough coins!";


        return;


    }



    cupLocked = true;



    removeCoins(bet);



    const cups =
    document.querySelectorAll(".cup");



    cups.forEach(cup=>{


        cup.style.pointerEvents="none";


    });





    document.getElementById("result").innerHTML =
    "🥤 Mixing cups...";



    LuckySounds.click();





    setTimeout(()=>{


        const winningCup =
        Math.floor(Math.random()*3)+1;



        if(choice === winningCup){



            let reward =
            bet * 3;



            addCoins(reward);



            document.getElementById("result").innerHTML =

            "🎉 Correct Cup! +" + reward + " Coins";



            LuckySounds.win();



        }

        else {



            document.getElementById("result").innerHTML =

            "❌ Wrong Cup!";



            LuckySounds.lose();



        }






        cups.forEach(cup=>{


            cup.style.pointerEvents="auto";


        });



        cupLocked=false;



    },2000);



}
