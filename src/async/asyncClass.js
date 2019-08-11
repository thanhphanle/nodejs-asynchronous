const Morning = class {
    async hello() {
        return 'Good morning';
    }

    async makeCoffee() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Coffee done');
            }, 1000);
        });
    }

    async cookBreakfast() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Breakfast done');
            }, 3000);
        });
    }
};

let morning = new Morning();
morning.hello().then(result => {
    console.log(result);
});

morning
    .makeCoffee()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

morning
    .cookBreakfast()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
