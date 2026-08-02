/* =========================================================
   LUCKY LOUNGE SLOTS
========================================================= */


let spinning = false;



const symbols = [

"🍒",

"💎",

"7️⃣",

"👑",

"🍀"

];





function spin(){



    if(spinning)
    return;





    let bet =
    Number(
        document.getElementById("bet").value
    );





    if(!bet || bet <= 0){


        result.innerHTML =
        "Enter a bet!";


        return;


    }







    if(bet > getCoins()){


        result.innerHTML =
        "Not enough coins!";


        return;


    }







    spinning = true;




    removeCoins(bet);


    updateCoins();





    LuckySounds.slotSpin();







    let slots = [

        document.getElementById("slot1"),

        document.getElementById("slot2"),

        document.getElementById("slot3")

    ];







    let count = 0;







    let animation =
    setInterval(()=>{





        slots.forEach(slot=>{


            slot.innerHTML =

            symbols[
                Math.floor(
                    Math.random()
                    *
                    symbols.length
                )
            ];



        });





        count++;






        if(count >= 25){



            clearInterval(animation);



            finishSpin(
                slots,
                bet
            );


        }





    },100);





}









function finishSpin(slots,bet){



    LuckySounds.slotStop();





    let results =

    slots.map(
        slot=>slot.innerHTML
    );







    if(
        results[0] === results[1]
        &&
        results[1] === results[2]
    ){



        let multiplier = 3;





        if(results[0] === "💎")

            multiplier = 5;





        if(results[0] === "7️⃣")

            multiplier = 10;





        if(results[0] === "👑")

            multiplier = 25;









        let reward =

        bet * multiplier;






        addCoins(reward);



        updateCoins();







        result.innerHTML =

        `
        🎉 WIN!<br>
        🪙 +${reward} Coins
        `;








        if(results[0] === "👑"){



            LuckySounds.jackpot();



        }

        else{


            LuckySounds.win();


        }





    }

    else{



        result.innerHTML =

        "❌ Lost";



        LuckySounds.lose();



    }







    spinning=false;





}
