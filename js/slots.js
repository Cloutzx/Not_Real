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



    let count = 0;



    let animation =
    setInterval(function(){



        slot1.innerText =
        randomSlot();



        slot2.innerText =
        randomSlot();



        slot3.innerText =
        randomSlot();



        count++;




        if(count >= 25){


            clearInterval(animation);



            if(typeof playSound === "function"){

                playSound("slotStop");

            }



            finishSlots(

                bet,

                slot1.innerText,

                slot2.innerText,

                slot3.innerText

            );


        }



    },100);



}







function randomSlot(){


    return slotSymbols[
        Math.floor(
            Math.random() *
            slotSymbols.length
        )
    ];


}







function finishSlots(

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
        "🔥 777 JACKPOT x100";



        playGameSound("jackpot");


    }



    else if(

        first === "💎" &&
        second === "💎" &&
        third === "💎"

    ){


        multiplier = 50;

        message =
        "💎 Diamond Jackpot x50";



        playGameSound("jackpot");


    }



    else if(

        first === second &&
        second === third

    ){


        multiplier = 10;

        message =
        "⭐ Triple Match x10";


    }



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



        playGameSound("win");



    }

    else{


        result.innerText =
        message;



        result.className =
        "lose";



        playGameSound("lose");


    }





    spinning = false;


}






function playGameSound(sound){


    if(typeof playSound === "function"){

        playSound(sound);

    }


}
