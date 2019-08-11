function firstPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Success');
        }, 2000);
    });
}

async function firstAsync(isValid) {
    if (!isValid) {
        return new Error('This is invalid');
    }
    console.log('calling');
    let result = await firstPromise();
    console.log(`result: ${result}`);
    return result;
}

//firstAsync();

firstAsync(false)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
