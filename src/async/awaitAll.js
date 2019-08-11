var doCoffee = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Coffee done');
    }, 1000);
});

var doBreakfast = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Breakfast done');
    }, 3000);
});

var doWashing = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('No, too tired to wash');
    }, 3000);
});

async function morningAwait() {
    console.log('Hi morning await');
    let coffeeResult = await doCoffee;
    console.log(coffeeResult);
    let breakfastResult = await doBreakfast;
    console.log(breakfastResult);
}
morningAwait();

async function morningAwaitAll() {
    console.log('Hi morning await all');
    let results = await Promise.all([doCoffee, doBreakfast]);
    console.table(results);
}
morningAwaitAll();

async function morningAwaitReject() {
    console.log('Hi morning await reject');
    let results = await Promise.all(
        [doCoffee, doBreakfast, doWashing].map(p => p.catch(e => e))
    );
    console.table(results);
}
morningAwaitReject();
