/* =========================================================
   LUCKY LOUNGE CURRENCY SYSTEM
========================================================= */


const DEFAULT_COINS = 1000;



// Get coins

function getCoins(){


    let coins = localStorage.getItem("coins");



    if(coins === null){


        localStorage.setItem(
            "coins",
            DEFAULT_COINS
        );


        return DEFAULT_COINS;


    }



    return Number(coins);



}







// Add coins

function addCoins(amount){


    let coins = getCoins();



    coins += amount;



    localStorage.setItem(
        "coins",
        coins
    );



    updateCoins();



}







// Remove coins

function removeCoins(amount){


    let coins = getCoins();



    coins -= amount;



    if(coins < 0){

        coins = 0;

    }



    localStorage.setItem(
        "coins",
        coins
    );



    updateCoins();



}







// Update all coin displays

function updateCoins(){


    const displays =
    document.querySelectorAll("#coins");



    displays.forEach(display=>{


        display.innerHTML =
        getCoins().toLocaleString();



    });



}







// Load coins when page opens

document.addEventListener(
"DOMContentLoaded",
()=>{


    updateCoins();



});
