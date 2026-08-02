let coins;


function loadCoins(){

    let savedCoins = localStorage.getItem("coins");


    // Only give starter coins if the player has NEVER played
    if(savedCoins === null){

        coins = 1000;

        localStorage.setItem(
            "coins",
            "1000"
        );

    }
    else{

        coins = Number(savedCoins);

    }

}



loadCoins();
