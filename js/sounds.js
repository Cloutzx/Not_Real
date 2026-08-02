/* =========================================================
   LUCKY LOUNGE SOUND SYSTEM
========================================================= */


const soundPath = "../assets/sounds/";



const Sounds = {

    click: new Audio(soundPath + "click.mp3"),

    cardDeal: new Audio(soundPath + "card-deal.mp3"),

    cardFlip: new Audio(soundPath + "card-flip.mp3"),

    coinFlip: new Audio(soundPath + "coin-flip.mp3"),

    fish: new Audio(soundPath + "fish.mp3"),

    jackpot: new Audio(soundPath + "jackpot.mp3"),

    lose: new Audio(soundPath + "lose.mp3"),

    reward: new Audio(soundPath + "reward.mp3"),

    slotSpin: new Audio(soundPath + "slot-spin.mp3"),

    slotStop: new Audio(soundPath + "slot-stop.mp3"),

    win: new Audio(soundPath + "win.mp3")

};





Object.values(Sounds).forEach(sound => {

    sound.volume = 0.5;

});





function playSound(sound){

    if(!Sounds[sound]){

        console.log(
            "Missing sound:",
            sound
        );

        return;

    }


    Sounds[sound].currentTime = 0;


    Sounds[sound].play()
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





// Button click sound

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
