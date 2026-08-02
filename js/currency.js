/* =========================================================
   LUCKY LOUNGE CURRENCY SYSTEM
========================================================= */


let coins = 0;





function loadCoins(){


    let saved = localStorage.getItem("coins");



    if(saved === null){


        coins = 0;


        localStorage.setItem(
            "coins",
            0
        );


    }
    else{


        coins = Number(saved);



        if(isNaN(coins)){


            coins = 0;


            localStorage.setItem(
                "coins",
                0
            );


        }


    }



    updateCoins();


}









function saveCoins(){


    localStorage.setItem(
        "coins",
        coins
    );


    updateCoins();


}









function updateCoins(){


    document
    .querySelectorAll("#coins")
    .forEach(display=>{


        display.innerHTML =
        coins.toLocaleString();


    });


}









function getCoins(){


    return coins;


}









function addCoins(amount){


    amount = Number(amount);



    if(isNaN(amount))
    return;



    coins += amount;



    saveCoins();


}









function removeCoins(amount){


    amount = Number(amount);



    if(isNaN(amount))
    return false;



    if(coins < amount)
    return false;



    coins -= amount;



    saveCoins();



    return true;


}









function resetCoins(){


    coins = 0;


    saveCoins();


}









// Load when script starts

loadCoins();





// Update after page loads

document.addEventListener(
"DOMContentLoaded",
()=>{


    loadCoins();


});





// Update when returning from another page

window.addEventListener(
"pageshow",
()=>{


    loadCoins();


});
