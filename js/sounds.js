/* =========================================================
   LUCKY LOUNGE SOUND SYSTEM
   Supports:
   index.html
   games/*.html
========================================================= */



const soundPath =
location.pathname.includes("/games/")
?
"../assets/sounds/"
:
"assets/sounds/";





const Sounds = {


    click:
    new Audio(soundPath + "click.mp3"),


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


    lose:
    new Audio(soundPath + "lose.mp3"),


    reward:
    new Audio(soundPath + "reward.mp3"),


    slotSpin:
    new Audio(soundPath + "slot-spin.mp3"),


    slotStop:
    new Audio(soundPath + "slot-stop.mp3"),


    win:
    new Audio(soundPath + "win.mp3")

};







// Volume settings

Object.values(Sounds).forEach(sound => {

    sound.volume = 0.5;

});







function playSound(name){


    if(!Sounds[name]){


        console.log(
            "Sound does not exist:",
            name
        );


        return;

    }



    Sounds[name].pause();


    Sounds[name].currentTime = 0;



    Sounds[name]
    .play()
    .catch(error=>{


        console.log(
            "Audio blocked:",
            error
        );


    });



}









window.LuckySounds = {



    click(){

        playSound("click");

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



    lose(){

        playSound("lose");

    },



    reward(){

        playSound("reward");

    },



    slotSpin(){

        playSound("slotSpin");

    },



    slotStop(){

        playSound("slotStop");

    },



    win(){

        playSound("win");

    }



};









// Button click sounds everywhere

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
