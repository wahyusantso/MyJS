function buyTollRoadCard(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (money >= 25) {
            console.log('buying card');
            resolve({ tollRoadCard: true, balance: 0 });
            return;
        }

        reject(new Error('not enough money to buy card'));
        }, 1000);
    });
}

function topUpBalance(card, amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (card) {
            console.log('topping up balance');
            resolve({ ...card, balance: card.balance + amount });
            return;
        }

        reject(new Error('no card'));
        }, 1000);
    });
}


function useTollRoad(card) {
    const TOLL_PRICE = 10;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (card.balance < TOLL_PRICE) {
            reject(new Error('not enough balance'));
            return;
        }

        card.balance -= TOLL_PRICE;

        console.log('using toll road');
        resolve();
        }, 1000);
    });
}

async function getTollAccess() {
    try {
        const card = await buyTollRoadCard(25);
        const topUp = await topUpBalance(card, 10);
        const result = await useTollRoad(topUp);
        return result;
    } catch (error) {
        throw error;

    }
}

getTollAccess();
// .then((result) => console.log(result))
// .catch((error) => console.log(error.message));