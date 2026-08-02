// ==========================
// Lucky Lounge Slots
// ==========================


const slotSymbols = [

    "🍒",
    "🍋",
    "🍀",
    "⭐",
    "💎",
    "7️⃣"

];


let spinning = false;



function spinSlots(){


    if(spinning){

        return;

    }



    let bet = Number(
        document.getElementById("bet").value
    );



    if(bet <= 0){

        alert("Enter a valid bet");

        return;

    }



    if(bet > coins){

        alert("Not enough coins");

        return;

    }



    spinning = true;



    // Take bet

    coins -= bet;

    updateCoins();



    let slot1 =
    document.getElementById("slot1");

    let slot2 =
    document.getElementById("slot2");

    let slot3 =
    document.getElementById("slot3");



    let result =
    document.getElementById("result");



    slot1.classList.add("spin");
    slot2.classList.add("spin");
    slot3.classList.add("spin");



    result.innerText =
    "🎰 Spinning...";



    let spins = 0;



    let animation =
    setInterval(()=>{


        slot1.innerText =
        randomSymbol();


        slot2.innerText =
        randomSymbol();


        slot3.innerText =
        randomSymbol();


        spins++;



        if(spins >= 15){


            clearInterval(animation);



            slot1.classList.remove("spin");
            slot2.classList.remove("spin");
            slot3.classList.remove("spin");



            finishSpin(
                bet,
                slot1.innerText,
                slot2.innerText,
                slot3.innerText
            );



        }



    },100);



}




function randomSymbol(){

    return slotSymbols[
        Math.floor(
            Math.random() *
            slotSymbols.length
        )
    ];

}





function finishSpin(
    bet,
    first,
    second,
    third
){



    let multiplier = 0;

    let message;



    // Jackpot

    if(
        first === "7️⃣" &&
        second === "7️⃣" &&
        third === "7️⃣"
    ){

        multiplier = 100;

        message =
        "💎 JACKPOT x100";


    }



    // Triple diamond

    else if(
        first === "💎" &&
        second === "💎" &&
        third === "💎"
    ){

        multiplier = 50;

        message =
        "💎 Diamond Win x50";


    }



    // Any 3 matching

    else if(
        first === second &&
        second === third
    ){

        multiplier = 10;

        message =
        "🔥 Triple Match x10";


    }



    // Two matching

    else if(
        first === second ||
        second === third ||
        first === third
    ){

        multiplier = 3;

        message =
        "⭐ Double Match x3";


    }



    else{


        multiplier = 0;

        message =
        "❌ No Match";


    }




    let winnings =
    bet * multiplier;



    coins += winnings;



    updateCoins();




    let result =
    document.getElementById("result");



    result.innerText =
    message +
    " +" +
    winnings.toLocaleString()
    +
    " coins";



    if(multiplier >= 10){

        result.className =
        "jackpot";

    }

    else if(multiplier > 0){

        result.className =
        "win";

    }

    else{

        result.className =
        "lose";

    }



    spinning = false;


}
