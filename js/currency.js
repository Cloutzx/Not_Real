// ==========================
// Lucky Lounge Currency System
// ==========================



let coins =
Number(localStorage.getItem("coins")) || 1000;





function updateCoins(){


    localStorage.setItem(
        "coins",
        coins
    );



    let displays =
    document.querySelectorAll("#coins");



    displays.forEach(display => {


        display.innerText =
        coins.toLocaleString();


    });


}






function addCoins(amount){


    coins += amount;


    updateCoins();


}







function removeCoins(amount){



    if(amount > coins){


        return false;


    }



    coins -= amount;



    updateCoins();



    return true;


}







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




    let currentTime =
    Date.now();




    let cooldown =
    24 * 60 * 60 * 1000;





    if(currentTime - lastClaim < cooldown){



        let remaining =
        cooldown - (currentTime - lastClaim);



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






    let reward =
    1000;





    coins += reward;




    localStorage.setItem(
        "dailyReward",
        currentTime
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
// Reset Account
// ==========================


function resetCoins(){



    coins = 1000;



    localStorage.setItem(
        "coins",
        coins
    );



    updateCoins();



}
