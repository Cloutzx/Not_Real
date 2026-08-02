/* =========================================================
   LUCKY LOUNGE SOUND SYSTEM
========================================================= */


const Sounds = {

    click: new Audio("/sounds/click.mp3"),
    spin: new Audio("/sounds/spin.mp3"),
    win: new Audio("/sounds/win.mp3"),
    lose: new Audio("/sounds/lose.mp3"),
    fish: new Audio("/sounds/fish.mp3"),
    reward: new Audio("/sounds/reward.mp3"),
    coinflip: new Audio("/sounds/coinflip.mp3")

};



Object.values(Sounds).forEach(sound=>{

    sound.volume = 0.5;

});




function playSound(sound){


    if(!Sounds[sound]) return;


    Sounds[sound].currentTime = 0;


    Sounds[sound].play().catch(error=>{

        console.log("Sound blocked:", error);

    });


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





document.addEventListener("DOMContentLoaded",()=>{


    document.querySelectorAll("button").forEach(button=>{


        button.addEventListener("click",()=>{


            LuckySounds.click();


        });


    });


});
