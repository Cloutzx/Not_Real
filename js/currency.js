/* =========================================================
   LUCKY LOUNGE CURRENCY
========================================================= */


let coins;



function loadCoins(){


    let saved =
    localStorage.getItem("coins");



    if(saved === null){


        coins = 1000;


        localStorage.setItem(
            "coins",
            coins
        );


    }
    else{


        coins = Number(saved);


    }



}



loadCoins();







function updateCoins(){


    document
    .querySelectorAll("#coins")
    .forEach(element=>{


        element.textContent =
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
