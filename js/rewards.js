// ==================================
// Lucky Lounge Daily Rewards
// ==================================


const DAILY_REWARD = 500;

const REWARD_TIME = 24 * 60 * 60 * 1000;



function claimDailyReward(){


    let lastClaim = localStorage.getItem(
        "dailyReward"
    );


    let now = Date.now();



    if(lastClaim){


        let timePassed =
        now - Number(lastClaim);



        if(timePassed < REWARD_TIME){


            let remaining =
            REWARD_TIME - timePassed;



            let hours =
            Math.floor(
                remaining /
                (1000 * 60 * 60)
            );



            let minutes =
            Math.floor(
                (remaining %
                (1000 * 60 * 60))
                /
                (1000 * 60)
            );



            alert(
            `Come back in ${hours}h ${minutes}m`
            );


            return;


        }


    }




    // GIVE COINS


    coins += DAILY_REWARD;



    updateCoins();




    localStorage.setItem(

        "dailyReward",

        Date.now()

    );



    alert(
        `🎁 You received ${DAILY_REWARD} coins!`
    );


}








function updateRewardButton(){


    let button =
    document.querySelector(
    ".daily button"
    );



    if(!button)
    return;



    let lastClaim =
    localStorage.getItem(
    "dailyReward"
    );



    if(!lastClaim){


        button.innerText =
        "CLAIM";


        return;

    }



    let remaining =

    REWARD_TIME -

    (Date.now() -
    Number(lastClaim));



    if(remaining <= 0){


        button.innerText =
        "CLAIM";


        return;


    }




    let hours =
    Math.floor(
        remaining /
        (1000*60*60)
    );



    let minutes =
    Math.floor(
        remaining %
        (1000*60*60)
        /
        (1000*60)
    );



    button.innerText =
    `${hours}h ${minutes}m`;



}





setInterval(
    updateRewardButton,
    1000
);



updateRewardButton();
