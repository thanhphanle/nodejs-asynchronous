var promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

var promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('An unexpected error happened (promise2)'));
    }, 3000);
});

var promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, 2000);
});

// Promise all success
Promise.all([promise1, promise3])
    .then(([result1, result3]) => {
        // Promise all will wait until all promises are resolved
        let table = {
            result1: result1,
            result3: result3
        };
        console.table(table);
    })
    .catch(error => {
        console.error(error);
    });

// Promise all with one failed
Promise.all([promise1, promise2, promise3])
    .then(([result1, result2, result3]) => {
        let table = {
            result1: result1,
            result2: result2,
            result3: result3
        };
        console.table(table);
    })
    .catch(error => {
        // Promise all will stop when the first promise throw error and catch here
        console.error(error);
    });
