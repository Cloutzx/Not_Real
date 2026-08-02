// ==========================
// Lucky Lounge Currency System
// ==========================


// Load saved coins
let coins = Number(localStorage.getItem("coins")) || 1000;



// Update every coin display
function updateCoins(){

    localStorage.setItem(
        "coins",
        coins
    );


    let displays = document.querySelectorAll("#coins");


    displays.forEach(display => {

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



// Check if player has enough coins
function hasCoins(amount){

    return coins >= amount;

}



// Daily Reward System

function claimDailyReward(){


    let lastReward =
    Number(
        localStorage.getItem("dailyReward")
    ) || 0;



    let now = Date.now();



    let cooldown =
    86400000; // 24 hours



    if(now - lastReward < cooldown){


        let remaining =
        cooldown - (now - lastReward);



        let hours =
        Math.ceil(
            remaining / 3600000
        );



        alert(
            "🎁 Come back in "
            + hours
            + " hour(s)"
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



    alert(
        "🎉 You received "
        + reward.toLocaleString()
        + " coins!"
    );



    return true;

}



// Reset account (for testing)
function resetCoins(){


    coins = 1000;


    localStorage.setItem(
        "coins",
        coins
    );


    updateCoins();


}
