// ==========================
// Lucky Lounge Sound System
// ==========================


const Sounds = {

    click: new Audio(
        "../assets/sounds/click.mp3"
    ),

    win: new Audio(
        "../assets/sounds/win.mp3"
    ),

    lose: new Audio(
        "../assets/sounds/lose.mp3"
    ),

    jackpot: new Audio(
        "../assets/sounds/jackpot.mp3"
    ),

    slotSpin: new Audio(
        "../assets/sounds/slot-spin.mp3"
    ),

    slotStop: new Audio(
        "../assets/sounds/slot-stop.mp3"
    ),

    coinFlip: new Audio(
        "../assets/sounds/coin-flip.mp3"
    ),

    cardFlip: new Audio(
        "../assets/sounds/card-flip.mp3"
    ),

    reward: new Audio(
        "../assets/sounds/reward.mp3"
    )

};



// Volume settings

Object.values(Sounds).forEach(sound => {

    sound.volume = 0.5;

});




// Play sound function

function playSound(soundName){

    let sound = Sounds[soundName];


    if(sound){

        sound.currentTime = 0;

        sound.play()
        .catch(() => {

            console.log(
            "Sound blocked until user interaction"
            );

        });

    }

}
