// ==========================
// Lucky Lounge Fishing
// ==========================


let fishing = false;



const fishList = [

    // Common
    {
        name: "🐟 Small Fish",
        chance: 35,
        reward: 100
    },

    {
        name: "🐠 Tropical Fish",
        chance: 25,
        reward: 300
    },


    // Uncommon
    {
        name: "🐡 Puffer Fish",
        chance: 15,
        reward: 500
    },


    // Rare
    {
        name: "🦈 Shark",
        chance: 8,
        reward: 2000
    },


    {
        name: "🐋 Whale",
        chance: 3,
        reward: 10000
    },


    // Legendary
    {
        name: "✨ Golden Fish",
        chance: 1,
        reward: 50000
    },


    // Bad catches
    {
        name: "🗑️ Trash",
        chance: 10,
        reward: -500
    },


    {
        name: "💀 Old Boot",
        chance: 3,
        reward: -1000
    }

];





function getFish(){


    let random =
    Math.random() * 100;


    let total = 0;


    for(let fish of fishList){


        total += fish.chance;


        if(random <= total){

            return fish;

        }

    }


    return fishList[0];

}






function fish(){


    if(fishing){

        return;

    }



    fishing = true;



    let result =
    document.getElementById("result");



    result.innerText =
    "🎣 Fishing...";



    if(typeof playSound === "function"){

        playSound("click");

    }






    setTimeout(()=>{



        let caught =
        getFish();



        coins += caught.reward;



        if(coins < 0){

            coins = 0;

        }



        updateCoins();






        if(caught.reward > 0){


            result.innerText =
            "🎉 You caught "
            + caught.name
            + " +"
            + caught.reward.toLocaleString()
            + " coins!";



            if(typeof playSound === "function"){

                playSound("reward");

            }


        }



        else{


            result.innerText =
            "💀 You found "
            + caught.name
            + " "
            + caught.reward.toLocaleString()
            + " coins";



            if(typeof playSound === "function"){

                playSound("lose");

            }


        }





        fishing = false;



    },3000);



}
