let cupLocked = false;



function chooseCup(number){


    if(cupLocked) return;



    const bet =
    Number(document.getElementById("bet").value);



    if(!bet || bet <= 0){

        document.getElementById("result").innerHTML =
        "Enter a bet!";

        return;

    }



    if(bet > getCoins()){


        document.getElementById("result").innerHTML =
        "Not enough coins!";

        return;

    }





    cupLocked=true;



    removeCoins(bet);



    const cups =
    document.querySelectorAll(".cup");



    cups.forEach(c=>{

        c.disabled=true;

    });




    LuckySounds.click();



    document.getElementById("result").innerHTML =
    "🥤 Mixing...";




    setTimeout(()=>{



        let winning =
        Math.floor(Math.random()*3)+1;



        if(number === winning){



            let reward =
            bet * 3;



            addCoins(reward);



            document.getElementById("result").innerHTML =
            "🎉 You found the ball! +" + reward;



            LuckySounds.win();



        }

        else{


            document.getElementById("result").innerHTML =
            "❌ Wrong cup!";


            LuckySounds.lose();


        }





        cups.forEach(c=>{

            c.disabled=false;

        });



        cupLocked=false;



    },2000);



}
