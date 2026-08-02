const symbols = [
    {
        emoji: "🍒",
        multiplier: 3
    },
    {
        emoji: "💎",
        multiplier: 5
    },
    {
        emoji: "7️⃣",
        multiplier: 10
    },
    {
        emoji: "👑",
        multiplier: 25
    }
];

let spinning = false;

function spin() {

    if (spinning) {
        return;
    }

    const betInput = document.getElementById("bet");
    const result = document.getElementById("result");

    const slot1 = document.getElementById("slot1");
    const slot2 = document.getElementById("slot2");
    const slot3 = document.getElementById("slot3");

    if (!betInput || !result || !slot1 || !slot2 || !slot3) {
        console.error("[Slots] Required elements are missing.");
        return;
    }

    const bet = Number(betInput.value);

    if (!Number.isFinite(bet) || bet <= 0) {
        result.textContent = "❌ Enter a valid bet!";
        return;
    }

    /*
        Supports common currency systems where the
        balance is stored in localStorage as "coins".
    */

    let coins = Number(localStorage.getItem("coins"));

    if (!Number.isFinite(coins)) {
        coins = 1000;
        localStorage.setItem("coins", coins);
    }

    if (bet > coins) {
        result.textContent = "❌ Not enough coins!";
        return;
    }

    spinning = true;

    coins -= bet;

    localStorage.setItem("coins", coins);

    updateCoins();

    result.textContent = "🎰 Spinning...";

    const slots = [slot1, slot2, slot3];

    let animationCount = 0;

    const animation = setInterval(() => {

        slots.forEach(slot => {
            const random =
                symbols[
                    Math.floor(Math.random() * symbols.length)
                ];

            slot.textContent = random.emoji;
        });

        animationCount++;

        if (animationCount >= 12) {

            clearInterval(animation);

            finishSpin(
                bet,
                slots,
                result
            );
        }

    }, 80);
}


function finishSpin(bet, slots, result) {

    const first =
        symbols[
            Math.floor(Math.random() * symbols.length)
        ];

    const second =
        symbols[
            Math.floor(Math.random() * symbols.length)
        ];

    const third =
        symbols[
            Math.floor(Math.random() * symbols.length)
        ];

    slots[0].textContent = first.emoji;
    slots[1].textContent = second.emoji;
    slots[2].textContent = third.emoji;

    let winnings = 0;

    if (
        first.emoji === second.emoji &&
        second.emoji === third.emoji
    ) {

        winnings = bet * first.multiplier;

        const profit = winnings - bet;

        result.textContent =
            `🎉 ${first.emoji} JACKPOT! +${profit} coins!`;

    } else {

        result.textContent =
            "😢 No match. Better luck next spin!";
    }

    let coins =
        Number(localStorage.getItem("coins")) || 0;

    coins += winnings;

    localStorage.setItem("coins", coins);

    updateCoins();

    spinning = false;
}


function updateCoins() {

    const coinsElement =
        document.getElementById("coins");

    if (!coinsElement) {
        return;
    }

    const coins =
        Number(localStorage.getItem("coins")) || 0;

    coinsElement.textContent =
        coins.toLocaleString();
}


/*
    Make sure the balance displays
    as soon as the page loads.
*/

document.addEventListener("DOMContentLoaded", () => {
    updateCoins();
});
