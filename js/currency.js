/* =========================================================
   LUCKY LOUNGE CURRENCY SYSTEM
========================================================= */


let coins = Number(localStorage.getItem("coins"));


// First time player

if (isNaN(coins)) {

    coins = 1000;

    localStorage.setItem(
        "coins",
        coins
    );

}





function updateCoins(){


    let displays =
    document.querySelectorAll("#coins");


    displays.forEach(display=>{


        display.textContent =
        coins.toLocaleString();


    });


}





function getCoins(){

    return coins;

}





function addCoins(amount){


    coins += amount;


    saveCoins();


}





function removeCoins(amount){


    if(coins < amount){

        return false;

    }


    coins -= amount;


    saveCoins();


    return true;


}





function saveCoins(){


    localStorage.setItem(
        "coins",
        coins
    );


    updateCoins();


}





document.addEventListener(
"DOMContentLoaded",
()=>{


    updateCoins();


});
