// =================================
// Lucky Lounge Fishing
// =================================



function fish(){



    let result =
    document.getElementById(
    "fishResult"
    );


    let fish =
    document.getElementById(
    "fish"
    );



    fish.classList.remove(
    "swimming"
    );


    void fish.offsetWidth;


    fish.classList.add(
    "swimming"
    );



    result.innerHTML =
    "🎣 Waiting for a bite...";





    setTimeout(()=>{


        let chance =
        Math.random();



        let reward;



        if(chance < .1){


            reward = 1000;


            result.innerHTML =
            "🐋 Legendary Fish! +1000 Coins";


        }

        else if(chance < .35){


            reward = 300;


            result.innerHTML =
            "🐠 Rare Fish! +300 Coins";


        }

        else{


            reward = 100;


            result.innerHTML =
            "🐟 Fish caught! +100 Coins";


        }





        coins += reward;


        updateCoins();



    },3000);


}
