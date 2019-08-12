const fs = require('fs');
const EventEmitter = require('events');
const path = require('path');

class WithTime extends EventEmitter {
    execute(asyncFunc, ...args) {
        this.emit('begin');
        console.time('execute');
        asyncFunc(...args, (err, data) => {
            if (err) {
                return this.emit('error', err);
            }

            this.emit('data', data);
            console.timeEnd('execute');
            this.emit('end');
        });
    }
}

const withTime = new WithTime();

withTime.on('begin', () => console.log('About to execute'));
withTime.on('end', () => console.log('Done with execute'));
withTime.on('error', error => console.log(error));
withTime.on('data', data => {
    console.log(data.toString());
});

//withTime.execute(fs.readFile, __filename);
let filePath = path.join(process.cwd(), 'assets', 'name.txt');
withTime.execute(fs.readFile, filePath);
