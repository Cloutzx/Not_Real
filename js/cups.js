/* =========================================================
   LUCKY LOUNGE CUPS
========================================================= */


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








    cupLocked = true;




    removeCoins(bet);



    updateCoins();




    LuckySounds.click();






    let cups =
    document.querySelectorAll(".cup");






    cups.forEach((cup,index)=>{



        cup.disabled = true;




        if(index + 1 === number){


            cup.classList.add("selected");


        }



    });







    result.innerHTML =
    "🥤 Mixing cups...";








    winningCup =
    Math.floor(
        Math.random()*3
    ) + 1;









    setTimeout(()=>{





        if(number === winningCup){



            let reward =
            bet * 3;




            addCoins(reward);



            updateCoins();





            result.innerHTML =

            `
            🎉 Correct Cup!<br>
            🪙 +${reward} Coins
            `;



            LuckySounds.win();



        }

        else{



            result.innerHTML =

            `
            ❌ Wrong Cup!<br>
            The ball was under cup ${winningCup}
            `;




            LuckySounds.lose();



        }








        cups.forEach(cup=>{


            cup.disabled = false;


            cup.classList.remove(
                "selected"
            );


        });






        cupLocked=false;







    },2000);




}
