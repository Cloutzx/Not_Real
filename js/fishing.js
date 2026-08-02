/* =========================================================
   LUCKY LOUNGE FISHING
========================================================= */


let fishing = false;





function fish(){



    if(fishing)
    return;




    fishing = true;






    let button =
    document.querySelector(
        ".game-action"
    );





    if(button){


        button.disabled = true;


        button.innerHTML =
        "🎣 Fishing...";


    }







    let fishObject =
    document.getElementById(
        "fish"
    );






    if(fishObject){



        fishObject.classList.add(
            "swimming"
        );


    }






    playSound("fish");







    document.getElementById(
        "fishResult"
    ).innerHTML =

    "🌊 Waiting for a bite...";









    setTimeout(()=>{






        let catches = [



            {

                name:"Common Fish",

                emoji:"🐟",

                reward:100,

                chance:60

            },



            {

                name:"Rare Fish",

                emoji:"🐠",

                reward:300,

                chance:30

            },



            {

                name:"Legendary Fish",

                emoji:"🐋",

                reward:1000,

                chance:10

            }



        ];








        let roll =
        Math.random()*100;





        let total = 0;


        let caught;





        for(let fish of catches){



            total += fish.chance;



            if(roll <= total){



                caught = fish;


                break;


            }


        }








        document.getElementById(
            "fishResult"
        ).innerHTML =


        `

        ${caught.emoji}

        You caught ${caught.name}!<br>

        🪙 +${caught.reward} Coins

        `;









        addCoins(
            caught.reward
        );



        updateCoins();








        if(caught.reward === 1000){



            LuckySounds.jackpot();



        }

        else{



            LuckySounds.win();



        }








        if(fishObject){


            fishObject.classList.remove(
                "swimming"
            );


        }









        if(button){



            button.disabled=false;



            button.innerHTML =
            "🎣 Cast Line";


        }







        fishing=false;








    },3000);




}
