// ==========================
// Lucky Lounge Cups Game
// ==========================


let winningCup = 0;

let cupGameActive = false;





function startCupGame(){


    winningCup =
    Math.floor(Math.random() * 3) + 1;



    cupGameActive = true;



    document.getElementById("result")
    .innerText =
    "🥤 Pick a cup!";



    document.getElementById("result")
    .className = "";



    document.querySelectorAll(".cup")
    .forEach(cup => {

        cup.innerText = "🥤";

    });


}





function pickCup(number){



    if(!cupGameActive){

        startCupGame();

        return;

    }




    let bet =
    Number(
        document.getElementById("bet").value
    );



    if(bet <= 0){

        alert("Enter a bet amount");

        return;

    }




    if(bet > coins){

        alert("Not enough coins");

        return;

    }




    coins -= bet;



    updateCoins();



    if(typeof playSound === "function"){

        playSound("click");

    }





    let result =
    document.getElementById("result");



    let multiplier = 0;




    if(number === winningCup){



        let chance =
        Math.random();




        if(chance < 0.05){

            multiplier = 20;

        }


        else if(chance < 0.25){

            multiplier = 5;

        }


        else{

            multiplier = 2;

        }




        let winnings =
        bet * multiplier;



        coins += winnings;



        updateCoins();




        result.innerText =
        "🎉 Correct Cup! x"
        + multiplier
        + " +"
        + winnings.toLocaleString()
        + " coins";



        result.className =
        "win";



        if(multiplier >= 20){

            if(typeof playSound === "function"){

                playSound("jackpot");

            }

        }

        else{


            if(typeof playSound === "function"){

                playSound("win");

            }

        }



    }



    else{



        result.innerText =
        "❌ Wrong Cup! Lost "
        + bet.toLocaleString()
        + " coins";



        result.className =
        "lose";



        if(typeof playSound === "function"){

            playSound("lose");

        }



    }





    document.querySelectorAll(".cup")
    [winningCup - 1]
    .innerText =
    "💰";



    cupGameActive = false;


}





function resetGame(){


    startCupGame();


}




startCupGame();
