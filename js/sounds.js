/* =========================================================
   LUCKY LOUNGE SOUND SYSTEM
========================================================= */


const MASTER_VOLUME = 0.10; // 10% overall volume



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





// Different volumes for different sounds

const soundLevels = {

    click: 0.5,

    cardDeal: 0.4,

    cardFlip: 0.4,

    coinFlip: 0.35,

    fish: 0.25,

    jackpot: 0.3,

    lose: 0.3,

    reward: 0.35,

    slotSpin: 0.25,

    slotStop: 0.25,

    win: 0.35

};







Object.keys(sounds).forEach(sound => {


    sounds[sound].volume =
        MASTER_VOLUME * soundLevels[sound];


});








function playSound(name){


    let sound = sounds[name];


    if(!sound) return;



    sound.pause();


    sound.currentTime = 0;


    sound.play()
    .catch(()=>{});


}








document.addEventListener(
"DOMContentLoaded",
()=>{


    document.querySelectorAll("button")
    .forEach(button=>{


        button.addEventListener(
        "click",
        ()=>{


            playSound("click");


        });


    });


});
