/* =========================================================
   LUCKY LOUNGE CURRENCY SYSTEM
========================================================= */



let coins =
Number(
localStorage.getItem("coins")
)
|| 1000;





function saveCoins(){


    localStorage.setItem(
        "coins",
        coins
    );


}







function getCoins(){


    return coins;


}







function addCoins(amount){



    coins += amount;



    if(coins < 0)
    coins = 0;



    saveCoins();


    updateCoins();



}







function removeCoins(amount){



    coins -= amount;



    if(coins < 0)
    coins = 0;



    saveCoins();


    updateCoins();


}








function updateCoins(){



    document
    .querySelectorAll("#coins")
    .forEach(element=>{


        element.innerHTML =
        coins.toLocaleString();



    });



}









function setCoins(amount){



    coins =
    Number(amount)
    || 0;



    saveCoins();


    updateCoins();


}









document.addEventListener(
"DOMContentLoaded",
()=>{


    updateCoins();



});
