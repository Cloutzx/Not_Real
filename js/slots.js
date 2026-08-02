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



    let bet =
    Number(
        document.getElementById("bet").value
    );



    if(bet <= 0){

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
    setInterval(()=>{



        slot1.innerText =
        randomSymbol();



        slot2.innerText =
        randomSymbol();



        slot3.innerText =
        randomSymbol();




        spins++;




        if(spins >= 20){



            clearInterval(animation);




            if(typeof playSound === "function"){

                playSound("slotStop");

            }




            finishSpin(

                bet,

                slot1.innerText,

                slot2.innerText,

                slot3.innerText

            );



        }



    },100);



}








function randomSymbol(){


    return slotSymbols[
        Math.floor(
            Math.random() *
            slotSymbols.length
        )
    ];


}








function finishSpin(
    bet,
    first,
    second,
    third
){



    let multiplier = 0;

    let message = "";





    if(

        first === "7️⃣" &&
        second === "7️⃣" &&
        third === "7️⃣"

    ){


        multiplier = 100;


        message =
        "💎 JACKPOT 777 x100";



        if(typeof playSound === "function"){

            playSound("jackpot");

        }


    }




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




    else if(

        first === second &&
        second === third

    ){


        multiplier = 10;


        message =
        "🔥 Triple Match x10";


    }





    else if(

        first === second ||
        second === third ||
        first === third

    ){


        multiplier = 3;


        message =
        "⭐ Double Match x3";


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
        + " +"
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
