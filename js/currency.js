// ==========================
// Lucky Lounge Currency System
// ==========================


// Load saved coins

let coins = Number(
    localStorage.getItem("coins")
) || 1000;




// Update all coin displays

function updateCoins(){


    localStorage.setItem(
        "coins",
        coins
    );



    let coinDisplays =
    document.querySelectorAll("#coins");



    coinDisplays.forEach(display => {


        display.innerText =
        coins.toLocaleString();


    });


}





// Add coins

function addCoins(amount){


    coins += amount;


    updateCoins();


}






// Remove coins

function removeCoins(amount){


    if(amount > coins){

        return false;

    }



    coins -= amount;


    updateCoins();


    return true;


}






// Check coins

function hasCoins(amount){


    return coins >= amount;


}






// ==========================
// Daily Reward
// ==========================


function claimDailyReward(){



    let lastClaim =
    Number(
        localStorage.getItem("dailyReward")
    ) || 0;



    let now =
    Date.now();



    let cooldown =
    24 * 60 * 60 * 1000;





    if(now - lastClaim < cooldown){



        let remaining =
        cooldown - (now - lastClaim);



        let hours =
        Math.ceil(
            remaining / 3600000
        );



        alert(
            "🎁 Come back in "
            + hours
            + " hours"
        );



        return false;


    }





    let reward = 1000;



    coins += reward;



    localStorage.setItem(
        "dailyReward",
        now
    );



    updateCoins();




    if(typeof playSound === "function"){

        playSound("reward");

    }



    alert(
        "🎉 You received "
        + reward.toLocaleString()
        + " coins!"
    );



    return true;


}







// ==========================
// Reset Coins
// ==========================


function resetCoins(){


    coins = 1000;


    updateCoins();


}






// ==========================
// Load Coins On Every Page
// ==========================


function loadCoins(){


    let savedCoins =
    localStorage.getItem("coins");



    if(savedCoins !== null){


        coins =
        Number(savedCoins);


    }



    updateCoins();


}




document.addEventListener(
"DOMContentLoaded",
function(){


    loadCoins();


});
