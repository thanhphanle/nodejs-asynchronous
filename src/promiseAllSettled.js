const promises = require('./promises');
var promise1 = promises.promise1;
var promise2 = promises.promise2;
var promise3 = promises.promise3;

/* Unsupported
Promise.allSettled([promise1, promise2, promise3]).then(
    ([result1, result2, result3]) => {
        console.log(`result1: ${result1}`);
        console.log(`result2: ${result2}`);
        console.log(`result3: ${result3}`);
    }
);
*/

function isError(obj) {
    return obj instanceof Error;
}

//----- #1
Promise.all(
    [promise1, promise2, promise3].map(p =>
        p.catch(error => {
            //console.log(error);
            return error;
        })
    )
)
    .then(([result1, result2, result3]) => {
        console.log(`//----- #1`);
        if (isError(result1)) {
            console.error(`result1 error: ${result1}`);
        } else {
            console.log(`result1: ${result1}`);
        }
        if (isError(result2)) {
            console.error(`result2 error: ${result2}`);
        } else {
            console.log(`result2: ${result2}`);
        }
        if (isError(result3)) {
            console.error(`result3 error: ${result3}`);
        } else {
            console.log(`result3: ${result3}`);
        }
    })
    .catch(error => {
        console.error(error);
    });

//----- #2
var promise1Catch = promise1.catch(error => {
    //console.log(error);
    return error;
});
var promise2Catch = promise2.catch(error => {
    //console.log(error);
    return error;
});
var promise3Catch = promise3.catch(error => {
    //console.log(error);
    return error;
});

Promise.all([promise1Catch, promise2Catch, promise3Catch]).then(
    ([result1, result2, result3]) => {
        console.log(`//----- #2`);
        if (isError(result1)) {
            console.error(`result1 error: ${result1}`);
        } else {
            console.log(`result1: ${result1}`);
        }
        if (isError(result2)) {
            console.error(`result2 error: ${result2}`);
        } else {
            console.log(`result2: ${result2}`);
        }
        if (isError(result3)) {
            console.error(`result3 error: ${result3}`);
        } else {
            console.log(`result3: ${result3}`);
        }
    }
);
