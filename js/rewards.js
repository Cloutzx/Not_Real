const rewardTime = 24 * 60 * 60 * 1000;




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




        if(difference < rewardTime){



            let hours =
            Math.ceil(
            (rewardTime-difference)
            /
            (1000*60*60)
            );




            document.getElementById(
            "result"
            ).innerHTML =


            "⏳ Come back in " +
            hours +
            " hours";



            return;


        }



    }







    addCoins(500);





    localStorage.setItem(
        "dailyReward",
        now
    );







    let button =
    document.getElementById(
    "rewardButton"
    );




    if(button){


        button.innerHTML =
        "CLAIMED";


        button.disabled=true;


    }







    LuckySounds.reward();







    if(document.getElementById("result")){


        document.getElementById(
        "result"
        ).innerHTML =


        "🎁 +500 Coins Claimed!";


    }



}
