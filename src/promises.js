var promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

var promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('An unexpected error happened (promise2)'));
    }, 2000);
});

var promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, 3000);
});

var promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(4);
    }, 4000);
});

module.exports = {
    promise1: promise1,
    promise2: promise2,
    promise3: promise3,
    promise4: promise4
};
