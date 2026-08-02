// =================================
// Lucky Lounge Slots
// =================================


let spinning = false;



function spin(){


    if(spinning){

        return;

    }



    let bet = Number(
        document.getElementById("bet").value
    );



    if(!bet || bet <= 0){

        alert("Enter a bet amount!");

        return;

    }



    if(bet > coins){

        alert("Not enough coins!");

        return;

    }



    spinning = true;



    coins -= bet;

    updateCoins();




    let slots = [

        document.getElementById("slot1"),

        document.getElementById("slot2"),

        document.getElementById("slot3")

    ];



    let symbols = [

        "🍒",

        "🍋",

        "🍀",

        "💎",

        "⭐",

        "7️⃣"

    ];





    let result =
    document.getElementById("result");



    result.innerHTML =
    "🎰 Spinning...";




    slots.forEach(slot=>{

        slot.classList.add("spin");

    });





    let spinTime = 3000;



    let animation = setInterval(()=>{


        slots.forEach(slot=>{


            slot.innerHTML =
            symbols[
            Math.floor(
            Math.random()*symbols.length
            )
            ];


        });



    },100);







    setTimeout(()=>{


        clearInterval(animation);



        let final = [];


        slots.forEach(slot=>{


            let symbol =
            symbols[
            Math.floor(
            Math.random()*symbols.length
            )
            ];


            slot.innerHTML = symbol;


            final.push(symbol);



            slot.classList.remove("spin");


        });





        let reward = 0;




        if(
        final[0] === final[1] &&
        final[1] === final[2]
        ){


            if(final[0] === "7️⃣"){


                reward = bet * 25;


                result.innerHTML =
                "🔥 JACKPOT 7s! +" + reward + " coins";


            }

            else if(final[0] === "💎"){


                reward = bet * 10;


                result.innerHTML =
                "💎 Diamond Win! +" + reward + " coins";


            }

            else{


                reward = bet * 5;


                result.innerHTML =
                "🎉 Big Win! +" + reward + " coins";


            }


        }


        else if(

        final[0] === final[1] ||

        final[1] === final[2] ||

        final[0] === final[2]

        ){


            reward = bet * 2;


            result.innerHTML =
            "✨ Small Win! +" + reward + " coins";


        }


        else{


            result.innerHTML =
            "❌ No Match";


        }





        coins += reward;


        updateCoins();



        spinning = false;



    },spinTime);



}
