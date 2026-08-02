// =================================
// Lucky Lounge Slots
// =================================


let spinning = false;


const symbols = [

    "🍒",
    "🍋",
    "🍀",
    "⭐",
    "💎",
    "7️⃣"

];





function spin(){



    // Stop double spinning

    if(spinning){

        return;

    }




    let betInput =
    document.getElementById("bet");



    let bet =
    Number(
    betInput.value
    );





    if(!bet || bet <= 0){


        alert(
        "Enter a bet amount!"
        );


        return;

    }






    if(bet > coins){


        alert(
        "Not enough coins!"
        );


        return;


    }






    spinning = true;





    let spinButton =
    document.querySelector(
    ".game-action"
    );



    if(spinButton){

        spinButton.disabled = true;

        spinButton.innerHTML =
        "🎰 Spinning...";

    }






    coins -= bet;


    updateCoins();






    let slot1 =
    document.getElementById(
    "slot1"
    );


    let slot2 =
    document.getElementById(
    "slot2"
    );


    let slot3 =
    document.getElementById(
    "slot3"
    );




    let slots = [

        slot1,
        slot2,
        slot3

    ];







    let result =
    document.getElementById(
    "result"
    );




    result.innerHTML =
    "🎰 Rolling...";







    slots.forEach(slot=>{


        slot.classList.add(
        "spin"
        );


    });









    let rollAnimation =
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



    },100);









    setTimeout(()=>{



        clearInterval(
        rollAnimation
        );





        let final = [];





        slots.forEach(slot=>{


            let symbol =

            symbols[
            Math.floor(
            Math.random()
            *
            symbols.length
            )
            ];



            slot.innerHTML =
            symbol;



            final.push(
            symbol
            );



            slot.classList.remove(
            "spin"
            );


        });










        let reward = 0;









        // JACKPOT

        if(

        final[0] === final[1]

        &&

        final[1] === final[2]

        ){



            switch(final[0]){


                case "7️⃣":


                    reward =
                    bet * 25;


                    result.innerHTML =
                    "🔥 JACKPOT 7s! +" 
                    + reward 
                    + " coins";


                    break;





                case "💎":


                    reward =
                    bet * 15;


                    result.innerHTML =
                    "💎 DIAMOND JACKPOT! +"
                    + reward
                    + " coins";


                    break;






                default:


                    reward =
                    bet * 10;


                    result.innerHTML =
                    "🎉 THREE MATCH! +"
                    + reward
                    + " coins";


                    break;



            }



        }







        // TWO MATCH


        else if(

        final[0] === final[1]

        ||

        final[1] === final[2]

        ||

        final[0] === final[2]

        ){



            reward =
            bet * 2;



            result.innerHTML =

            "✨ Two Match! +"

            + reward

            + " coins";



        }







        // LOSS


        else{



            result.innerHTML =

            "❌ No match";



        }









        coins += reward;



        updateCoins();









        spinning = false;






        if(spinButton){


            spinButton.disabled = false;


            spinButton.innerHTML =

            "🎰 Spin";


        }







    },3000);





}
