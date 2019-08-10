const promises = require('./promises');
var promise1 = promises.promise1;
var promise2 = promises.promise2;
var promise3 = promises.promise3;
var promise4 = promises.promise4;

// Return first fulfliled in resolve
Promise.race([promise1, promise2, promise3, promise4])
    .then(result => {
        // They are all done but promise race will return the first fulfliled:
        // resolve or reject
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

// Return first fulfliled in reject
Promise.race([promise2, promise4])
    .then(result => {
        // They are all done but promise race will return the first fulfilled:
        // resolve or reject
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });