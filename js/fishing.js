let fishing = false;




const fishTypes = [


    {

        name:"🐟 Common Fish",

        reward:100,

        chance:60

    },


    {

        name:"🐠 Rare Fish",

        reward:300,

        chance:30

    },


    {

        name:"🐋 Legendary Fish",

        reward:1000,

        chance:10

    }


];









function fish(){



    if(fishing)
    return;




    fishing=true;






    let fishElement =
    document.getElementById("fish");



    let text =
    document.getElementById("fishResult");







    text.innerHTML =
    "🎣 Waiting for a bite...";






    LuckySounds.fish();





    fishElement.classList.add(
        "swimming"
    );








    setTimeout(()=>{






        fishElement.classList.remove(
            "swimming"
        );







        let roll =
        Math.random()*100;





        let total=0;


        let caught=null;






        for(let fish of fishTypes){



            total += fish.chance;



            if(roll <= total){


                caught = fish;


                break;


            }



        }







        addCoins(
            caught.reward
        );







        text.innerHTML =


        "🎉 Caught " +

        caught.name +

        " +" +

        caught.reward +

        " Coins";







        LuckySounds.win();






        fishing=false;





    },3000);



}
