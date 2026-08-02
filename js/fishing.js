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



    if(fishing) return;



    fishing=true;




    const fishElement =
    document.getElementById("fish");



    const result =
    document.getElementById("fishResult");



    result.innerHTML =
    "🎣 Fishing...";



    LuckySounds.fish();





    fishElement.classList.add("swimming");






    setTimeout(()=>{



        fishElement.classList.remove("swimming");



        let roll =
        Math.random()*100;



        let total=0;



        let caught;



        for(let fish of fishTypes){



            total += fish.chance;



            if(roll <= total){


                caught = fish;


                break;


            }


        }







        addCoins(caught.reward);





        result.innerHTML =

        "🎉 Caught " +

        caught.name +

        " +" +

        caught.reward +

        " Coins";





        LuckySounds.win();





        fishing=false;




    },3000);



}
