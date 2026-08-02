let coins = Number(localStorage.getItem("coins")) || 1000;

document.getElementById("coins").innerText = coins;


function updateCoins(){
    document.getElementById("coins").innerText = coins;
    localStorage.setItem("coins", coins);
}


function dailyReward(){

    let reward = 500;

    coins += reward;

    alert("You received " + reward + " coins!");

    updateCoins();
}



function playSlots(){

    let win = Math.random();

    if(win > .5){

        coins += 500;
        alert("🎰 You won 500 coins!");

    } else {

        coins -= 100;
        alert("You lost 100 coins!");

    }

    updateCoins();
}



function playBlackjack(){

    let win = Math.random();

    if(win > .5){

        coins += 300;
        alert("🃏 Blackjack win!");

    } else {

        coins -= 150;
        alert("Dealer wins!");

    }

    updateCoins();
}



function fish(){

    let fishReward = Math.floor(Math.random()*500);

    coins += fishReward;

    alert("🐟 You caught a fish worth " + fishReward + " coins!");

    updateCoins();
}



function cups(){

    let win = Math.random();

    if(win > .66){

        coins += 400;
        alert("🥤 Correct cup!");

    } else {

        coins -= 100;
        alert("Wrong cup!");

    }

    updateCoins();
}
