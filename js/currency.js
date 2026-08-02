/* =========================================================
   LUCKY LOUNGE CURRENCY SYSTEM
========================================================= */


let coins = 0;



/*
    LOAD COINS

    Only gives 1000 coins if the player
    has never had a save before.

    0 coins is a valid value.
*/


function loadCoins(){


    let savedCoins = localStorage.getItem("coins");



    if(savedCoins === null){


        coins = 1000;


        localStorage.setItem(
            "coins",
            coins
        );


    }
    else{


        coins = Number(savedCoins);



        // Safety check if save is corrupted

        if(isNaN(coins)){


            coins = 0;


            localStorage.setItem(
                "coins",
                coins
            );


        }


    }


}





loadCoins();







/*
    UPDATE ALL COIN TEXT
*/


function updateCoins(){


    let displays =
    document.querySelectorAll("#coins");



    displays.forEach(display=>{


        display.textContent =
        coins.toLocaleString();


    });


}








/*
    GET CURRENT COINS
*/


function getCoins(){


    return coins;


}








/*
    ADD COINS
*/


function addCoins(amount){


    amount = Number(amount);



    if(isNaN(amount)) return;



    coins += amount;


    saveCoins();


}








/*
    REMOVE COINS
*/


function removeCoins(amount){


    amount = Number(amount);



    if(isNaN(amount)) return false;



    if(coins < amount){


        return false;


    }



    coins -= amount;


    saveCoins();



    return true;


}








/*
    SAVE
*/


function saveCoins(){


    localStorage.setItem(
        "coins",
        coins
    );



    updateCoins();


}








/*
    RESET (FOR TESTING ONLY)
*/


function resetCoins(){


    coins = 1000;


    saveCoins();


}








/*
    LOAD UI
*/


document.addEventListener(
"DOMContentLoaded",
()=>{


    updateCoins();


});
