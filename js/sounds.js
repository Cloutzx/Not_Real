/* =========================================================
   LUCKY LOUNGE SOUND SYSTEM
========================================================= */


// Detect if we are inside /games/
const soundPath = window.location.pathname.includes("/games/")
    ? "../sounds/"
    : "sounds/";




// Sounds

const Sounds = {

    click: new Audio(soundPath + "click.mp3"),

    spin: new Audio(soundPath + "spin.mp3"),

    win: new Audio(soundPath + "win.mp3"),

    lose: new Audio(soundPath + "lose.mp3"),

    fish: new Audio(soundPath + "fish.mp3"),

    reward: new Audio(soundPath + "reward.mp3"),

    coinflip: new Audio(soundPath + "coinflip.mp3")

};




// Volume settings

Object.values(Sounds).forEach(sound => {

    sound.volume = 0.5;

});






// Play sound function

function playSound(name){


    if(!Sounds[name]) return;



    Sounds[name].currentTime = 0;



    Sounds[name].play().catch(()=>{});


}







// Automatic button sounds

document.addEventListener("DOMContentLoaded",()=>{


    const buttons = document.querySelectorAll("button");



    buttons.forEach(button=>{


        button.addEventListener("click",()=>{


            playSound("click");


        });



    });



});







// Export for other scripts

window.LuckySounds = {


    click(){

        playSound("click");

    },


    spin(){

        playSound("spin");

    },


    win(){

        playSound("win");

    },


    lose(){

        playSound("lose");

    },


    fish(){

        playSound("fish");

    },


    reward(){

        playSound("reward");

    },


    coinflip(){

        playSound("coinflip");

    }


};
