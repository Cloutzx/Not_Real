// ==========================
// Lucky Lounge Fishing
// ==========================


let fishing = false;



const fishList = [

    {
        name:"🐟 Small Fish",
        reward:100
    },

    {
        name:"🐠 Tropical Fish",
        reward:300
    },

    {
        name:"🦈 Shark",
        reward:2000
    },

    {
        name:"💎 Golden Fish",
        reward:10000
    }

];





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
        fishList[
            Math.floor(
                Math.random() *
                fishList.length
            )
        ];



        coins += caught.reward;



        updateCoins();



        result.innerText =
        "🎉 You caught "
        + caught.name
        + " +"
        + caught.reward.toLocaleString()
        + " coins!";



        if(typeof playSound === "function"){

            playSound("reward");

        }



        fishing = false;



    },2000);



}
