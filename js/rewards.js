/* =========================================================
   LUCKY LOUNGE DAILY REWARDS
========================================================= */


const DAILY_AMOUNT = 500;



const DAILY_TIME = 24 * 60 * 60 * 1000;






function claimDailyReward(){



    let lastClaim =
    localStorage.getItem(
        "dailyReward"
    );



    let now =
    Date.now();





    if(lastClaim){



        let difference =
        now - Number(lastClaim);





        if(difference < DAILY_TIME){



            let remaining =
            DAILY_TIME - difference;



            let hours =
            Math.floor(
            remaining /
            (1000*60*60)
            );



            document.getElementById("result")
            ?.remove();



            alert(
            "Come back in " +
            hours +
            " hours!"
            );



            return;



        }



    }







    addCoins(DAILY_AMOUNT);




    localStorage.setItem(

        "dailyReward",

        now

    );





    LuckySounds.reward();





    const button =
    document.getElementById(
        "rewardButton"
    );



    if(button){


        button.innerHTML =
        "CLAIMED ✓";


        button.disabled=true;



    }





    alert(
    "🎁 You received +500 Coins!"
    );



}
