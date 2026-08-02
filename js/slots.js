// ==========================
// Lucky Lounge Slots
// ==========================


const slotSymbols = [

    "🍒",
    "🍋",
    "🍀",
    "⭐",
    "💎",
    "7️⃣"

];


let spinning = false;






function spinSlots(){


    if(spinning){

        return;

    }



    let bet = Number(
        document.getElementById("bet").value
    );



    if(!bet || bet <= 0){

        alert("Enter a valid bet");

        return;

    }



    if(bet > coins){

        alert("Not enough coins");

        return;

    }





    spinning = true;



    coins -= bet;

    updateCoins();





    if(typeof playSound === "function"){

        playSound("slotSpin");

    }






    let slot1 =
    document.getElementById("slot1");


    let slot2 =
    document.getElementById("slot2");


    let slot3 =
    document.getElementById("slot3");



    let result =
    document.getElementById("result");





    result.innerText =
    "🎰 Spinning...";



    result.className = "";





    let spins = 0;



    let animation =
    setInterval(function(){



        slot1.innerText =
        getRandomSymbol();


        slot2.innerText =
        getRandomSymbol();


        slot3.innerText =
        getRandomSymbol();




        spins++;




        if(spins >= 25){



            clearInterval(animation);



            if(typeof playSound === "function"){

                playSound("slotStop");

            }



            checkResult(

                bet,

                slot1.innerText,

                slot2.innerText,

                slot3.innerText

            );



        }



    },100);



}








function getRandomSymbol(){


    return slotSymbols[
        Math.floor(
            Math.random() *
            slotSymbols.length
        )
    ];


}








function checkResult(

    bet,
    first,
    second,
    third

){



    let multiplier = 0;

    let message = "";






    // 777 Jackpot

    if(

        first === "7️⃣" &&
        second === "7️⃣" &&
        third === "7️⃣"

    ){


        multiplier = 100;

        message =
        "🔥 JACKPOT 777 x100";


        if(typeof playSound === "function"){

            playSound("jackpot");

        }


    }




    // Diamond jackpot

    else if(

        first === "💎" &&
        second === "💎" &&
        third === "💎"

    ){


        multiplier = 50;

        message =
        "💎 Diamond Jackpot x50";


        if(typeof playSound === "function"){

            playSound("jackpot");

        }


    }





    // Triple match

    else if(

        first === second &&
        second === third

    ){


        multiplier = 10;

        message =
        "⭐ Triple Match x10";


    }





    // Two matching

    else if(

        first === second ||
        second === third ||
        first === third

    ){


        multiplier = 3;

        message =
        "✨ Double Match x3";


    }





    else{


        message =
        "❌ No Match";


    }







    let winnings =
    bet * multiplier;





    coins += winnings;



    updateCoins();






    let result =
    document.getElementById("result");






    if(multiplier > 0){



        result.innerText =
        message
        + "\n+"
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
        message;



        result.className =
        "lose";



        if(typeof playSound === "function"){

            playSound("lose");

        }


    }






    spinning = false;


}
