let cupLocked = false;



let winningCup = 0;





function chooseCup(number){



    if(cupLocked)
    return;



    let bet =
    Number(
    document.getElementById("bet").value
    );





    if(!bet || bet <= 0){


        result.innerHTML =
        "Enter a bet amount!";


        return;


    }






    if(bet > getCoins()){


        result.innerHTML =
        "Not enough coins!";


        return;


    }







    cupLocked=true;



    removeCoins(bet);




    LuckySounds.click();





    result.innerHTML =
    "🥤 Mixing cups...";





    let cups =
    document.querySelectorAll(".cup");





    cups.forEach(cup=>{


        cup.disabled=true;


    });







    winningCup =
    Math.floor(Math.random()*3)+1;







    setTimeout(()=>{






        if(number === winningCup){



            let reward =
            bet * 3;



            addCoins(reward);




            result.innerHTML =

            "🎉 You found the ball! +" +

            reward +

            " Coins";



            LuckySounds.win();



        }

        else {



            result.innerHTML =

            "❌ Wrong cup!";



            LuckySounds.lose();



        }








        cups.forEach(cup=>{


            cup.disabled=false;


        });






        cupLocked=false;






    },2000);





}
