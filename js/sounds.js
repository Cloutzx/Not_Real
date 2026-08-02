/* =========================================================
   LUCKY LOUNGE SOUND SYSTEM
========================================================= */


const MASTER_VOLUME = 0.10;



function getSoundPath(file){

    if(window.location.pathname.includes("/games/")){

        return "../assets/sounds/" + file;

    }

    return "assets/sounds/" + file;

}





const sounds = {


    click: new Audio(getSoundPath("click.mp3")),

    cardDeal: new Audio(getSoundPath("card-deal.mp3")),

    cardFlip: new Audio(getSoundPath("card-flip.mp3")),

    coinFlip: new Audio(getSoundPath("coin-flip.mp3")),

    fish: new Audio(getSoundPath("fish.mp3")),

    jackpot: new Audio(getSoundPath("jackpot.mp3")),

    lose: new Audio(getSoundPath("lose.mp3")),

    reward: new Audio(getSoundPath("reward.mp3")),

    slotSpin: new Audio(getSoundPath("slot-spin.mp3")),

    slotStop: new Audio(getSoundPath("slot-stop.mp3")),

    win: new Audio(getSoundPath("win.mp3"))

};







Object.values(sounds).forEach(sound=>{

    sound.volume = MASTER_VOLUME;

});








function playSound(name){


    if(!sounds[name]) return;



    sounds[name].pause();

    sounds[name].currentTime = 0;


    sounds[name].play()
    .catch(()=>{});


}







// ONLY add click sounds after page loads

window.addEventListener("load",()=>{


    document.querySelectorAll("button")
    .forEach(button=>{


        button.addEventListener(
        "click",
        ()=>{


            playSound("click");


        },
        false
        );


    });


});
