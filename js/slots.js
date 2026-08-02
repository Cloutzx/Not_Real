// =================================
// Lucky Lounge Slots
// =================================


function spin(){


    let bet = Number(
        document.getElementById("bet").value
    );


    if(!bet || bet <= 0){

        alert("Enter a bet amount!");

        return;

    }



    if(bet > coins){

        alert("Not enough coins!");

        return;

    }



    coins -= bet;

    updateCoins();



    let slot1 =
    document.getElementById("slot1");

    let slot2 =
    document.getElementById("slot2");

    let slot3 =
    document.getElementById("slot3");



    let symbols = [

        "🍒",

        "💎",

        "7️⃣",

        "🍀",

        "⭐"

    ];




    slot1.innerHTML = "❔";
    slot2.innerHTML = "❔";
    slot3.innerHTML = "❔";



    slot1.classList.add("spin");
    slot2.classList.add("spin");
    slot3.classList.add("spin");




    setTimeout(()=>{


        let a =
        symbols[
        Math.floor(Math.random()*symbols.length)
        ];

        let b =
        symbols[
        Math.floor(Math.random()*symbols.length)
        ];

        let c =
        symbols[
        Math.floor(Math.random()*symbols.length)
        ];



        slot1.innerHTML = a;
        slot2.innerHTML = b;
        slot3.innerHTML = c;



        slot1.classList.remove("spin");
        slot2.classList.remove("spin");
        slot3.classList.remove("spin");




        let reward = 0;



        if(a === b && b === c){


            reward = bet * 10;


            document.getElementById("result").innerHTML =
            "🎉 JACKPOT! +" + reward + " coins";


        }

        else if(a === b || a === c || b === c){


            reward = bet * 2;


            document.getElementById("result").innerHTML =
            "✨ Nice Win! +" + reward + " coins";


        }

        else{


            document.getElementById("result").innerHTML =
            "❌ Lost";


        }




        coins += reward;


        updateCoins();



    },1500);


}
