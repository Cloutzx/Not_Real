/* =========================================================
   LUCKY LOUNGE SOUND SYSTEM
========================================================= */


const SOUND_VOLUME = 0.1; // Change volume here (0.0 - 1.0)



const sounds = {

    click: new Audio("assets/sounds/click.mp3"),

    cardDeal: new Audio("assets/sounds/card-deal.mp3"),

    cardFlip: new Audio("assets/sounds/card-flip.mp3"),

    coinFlip: new Audio("assets/sounds/coin-flip.mp3"),

    fish: new Audio("assets/sounds/fish.mp3"),

    jackpot: new Audio("assets/sounds/jackpot.mp3"),

    lose: new Audio("assets/sounds/lose.mp3"),

    reward: new Audio("assets/sounds/reward.mp3"),

    slotSpin: new Audio("assets/sounds/slot-spin.mp3"),

    slotStop: new Audio("assets/sounds/slot-stop.mp3"),

    win: new Audio("assets/sounds/win.mp3")

};





/*
    Set volume for every sound
*/

Object.values(sounds).forEach(sound => {

    sound.volume = SOUND_VOLUME;

});







/*
    Play Sound Function

    Example:
    playSound("click");
    playSound("fish");
*/


function playSound(name){


    let sound = sounds[name];



    if(!sound){

        console.log("Missing sound:", name);

        return;

    }



    sound.pause();


    sound.currentTime = 0;


    sound.play()
    .catch(()=>{});


}








/*
    Add button click sounds automatically
*/

document.addEventListener(
"DOMContentLoaded",
()=>{


    document
    .querySelectorAll("button")
    .forEach(button=>{


        button.addEventListener(
        "click",
        ()=>{


            playSound("click");


        });


    });


});
