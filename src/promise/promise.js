//-------------
var successPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('Success');
    }, 1000);
});

successPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

//-------------
var errorPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        reject(new Error('An unexpected error happened'));
    }, 3000);
});

errorPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

//-------------
var finallyPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('Success with finally');
    }, 1000);
});

finallyPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log('Finally');
    });
