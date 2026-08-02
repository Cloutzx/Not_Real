/* =========================================================
   LUCKY LOUNGE SOUND SYSTEM
   Assets/Sounds Version
========================================================= */


const soundPath =
window.location.pathname.includes("/games/")
?
"../assets/sounds/"
:
"assets/sounds/";





const Sounds = {


    click:
    new Audio(soundPath + "click.mp3"),



    slotSpin:
    new Audio(soundPath + "slot-spin.mp3"),



    slotStop:
    new Audio(soundPath + "slot-stop.mp3"),



    cardDeal:
    new Audio(soundPath + "card-deal.mp3"),



    cardFlip:
    new Audio(soundPath + "card-flip.mp3"),



    coinFlip:
    new Audio(soundPath + "coin-flip.mp3"),



    fish:
    new Audio(soundPath + "fish.mp3"),



    jackpot:
    new Audio(soundPath + "jackpot.mp3"),



    reward:
    new Audio(soundPath + "reward.mp3"),



    win:
    new Audio(soundPath + "win.mp3"),



    lose:
    new Audio(soundPath + "lose.mp3")



};







// Volume settings

Object.values(Sounds).forEach(sound=>{


    sound.volume = 0.5;


});









function playSound(name){



    if(!Sounds[name]){


        console.log(
            "Sound missing:",
            name
        );


        return;


    }






    Sounds[name].currentTime = 0;






    Sounds[name]
    .play()
    .catch(error=>{


        console.log(
            "Sound blocked:",
            error
        );


    });



}









window.LuckySounds = {




    click(){


        playSound("click");


    },





    slotSpin(){


        playSound("slotSpin");


    },





    slotStop(){


        playSound("slotStop");


    },





    cardDeal(){


        playSound("cardDeal");


    },





    cardFlip(){


        playSound("cardFlip");


    },





    coinFlip(){


        playSound("coinFlip");


    },





    fish(){


        playSound("fish");


    },





    jackpot(){


        playSound("jackpot");


    },





    reward(){


        playSound("reward");


    },





    win(){


        playSound("win");


    },





    lose(){


        playSound("lose");


    }





};









// Unlock browser audio after first interaction

document.addEventListener(
"click",
()=>{


    if(!window.audioUnlocked){


        window.audioUnlocked = true;


        Sounds.click.play()
        .then(()=>{


            Sounds.click.pause();

            Sounds.click.currentTime = 0;


        })
        .catch(()=>{});



    }



},
{
    once:true
});









// Add click sounds to all buttons

document.addEventListener(
"DOMContentLoaded",
()=>{


    document
    .querySelectorAll("button")
    .forEach(button=>{


        button.addEventListener(
        "click",
        ()=>{


            LuckySounds.click();


        });



    });



});
