/* =========================================================
   LUCKY LOUNGE CURRENCY SYSTEM
========================================================= */


let coins = 0;



function loadCoins(){


    let savedCoins = localStorage.getItem("coins");



    // First time player only

    if(savedCoins === null){


        coins = 1000;


        localStorage.setItem(
            "coins",
            coins
        );


    }
    else{


        coins = Number(savedCoins);



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








function updateCoins(){


    document
    .querySelectorAll("#coins")
    .forEach(display=>{


        display.textContent =
        coins.toLocaleString();


    });


}








function getCoins(){


    return coins;


}








function addCoins(amount){


    amount = Number(amount);



    if(isNaN(amount)) return;



    coins += amount;


    saveCoins();


}








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








function saveCoins(){


    localStorage.setItem(
        "coins",
        coins
    );



    updateCoins();


}








function resetCoins(){


    coins = 1000;


    saveCoins();


}








// Update when page opens

document.addEventListener(
"DOMContentLoaded",
()=>{


    loadCoins();

    updateCoins();


});




// Update when returning to page

window.addEventListener(
"pageshow",
()=>{


    loadCoins();

    updateCoins();


});
