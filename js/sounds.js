/* =========================================================
   LUCKY LOUNGE SOUND SYSTEM
========================================================= */


const soundPath = window.location.pathname.includes("/games/")
    ? "../sounds/"
    : "sounds/";



const Sounds = {


    click: new Audio(soundPath + "click.mp3"),


    spin: new Audio(soundPath + "spin.mp3"),


    win: new Audio(soundPath + "win.mp3"),


    lose: new Audio(soundPath + "lose.mp3"),


    fish: new Audio(soundPath + "fish.mp3"),


    reward: new Audio(soundPath + "reward.mp3"),


    coinflip: new Audio(soundPath + "coinflip.mp3")



};





Object.values(Sounds).forEach(sound=>{

    sound.volume = 0.5;

});






function playSound(name){


    if(!Sounds[name]) return;


    Sounds[name].currentTime = 0;


    Sounds[name].play().catch(()=>{});



}





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







// Button click sound

document.addEventListener("DOMContentLoaded",()=>{


    document.querySelectorAll("button").forEach(button=>{


        button.addEventListener("click",()=>{


            LuckySounds.click();


        });


    });


});
