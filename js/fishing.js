/* =========================================================
   LUCKY LOUNGE FISHING
========================================================= */


let fishing = false;



function fish(){


    if(fishing) return;



    fishing = true;



    let button =
    document.querySelector(".game-action");



    if(button){

        button.disabled = true;

        button.innerHTML =
        "🎣 Fishing...";

    }





    let fishEmoji =
    document.getElementById("fish");



    if(fishEmoji){

        fishEmoji.style.animation =
        "fishMove 1s infinite";

    }





    playSound("fish");





    document.getElementById("fishResult").innerHTML =
    "🌊 Waiting for a bite...";





    setTimeout(()=>{



        let catches = [


            {
                name:"Common Fish",
                emoji:"🐟",
                reward:100
            },


            {
                name:"Rare Fish",
                emoji:"🐠",
                reward:300
            },


            {
                name:"Legendary Fish",
                emoji:"🐋",
                reward:1000
            }


        ];





        let caught =
        catches[
            Math.floor(
                Math.random()*catches.length
            )
        ];







        document.getElementById("fishResult").innerHTML =

        `${caught.emoji} You caught ${caught.name}!<br>
        🪙 +${caught.reward} Coins`;






        addCoins(caught.reward);



        // force UI update

        updateCoins();







        if(caught.reward >= 1000){


            playSound("jackpot");


        }
        else{


            playSound("win");


        }







        if(button){


            button.disabled = false;


            button.innerHTML =
            "🎣 Cast Line";


        }






        fishing = false;



    },3000);





}
