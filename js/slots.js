let spinning = false;



const symbols = [

"🍒",

"💎",

"7️⃣",

"👑",

"🍀"

];





function spin(){



    if(spinning) return;



    const bet =
    Number(document.getElementById("bet").value);



    if(!bet || bet <=0){


        result.innerHTML="Enter a bet!";

        return;

    }



    if(bet > getCoins()){


        result.innerHTML="Not enough coins!";


        return;


    }




    spinning=true;



    removeCoins(bet);



    LuckySounds.spin();





    const slots=[

    document.getElementById("slot1"),

    document.getElementById("slot2"),

    document.getElementById("slot3")

    ];





    let count=0;




    let animation=setInterval(()=>{


        slots.forEach(slot=>{


            slot.innerHTML =

            symbols[
            Math.floor(Math.random()*symbols.length)
            ];


        });



        count++;



        if(count>=20){


            clearInterval(animation);



            finishSpin(slots,bet);



        }


    },100);



}






function finishSpin(slots,bet){



    let resultSlots = slots.map(slot=>slot.innerHTML);



    if(

    resultSlots[0] === resultSlots[1] &&

    resultSlots[1] === resultSlots[2]

    ){


        let multiplier=3;



        if(resultSlots[0]=="💎")
        multiplier=5;


        if(resultSlots[0]=="7️⃣")
        multiplier=10;


        if(resultSlots[0]=="👑")
        multiplier=25;



        let reward =
        bet * multiplier;



        addCoins(reward);



        result.innerHTML =
        "🎉 WIN +" + reward;



        LuckySounds.win();



    }

    else{


        result.innerHTML =
        "❌ Lost";


        LuckySounds.lose();


    }





    spinning=false;



}
