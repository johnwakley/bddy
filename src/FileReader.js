// Promises
const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));

class FileReader {
    readFile(filename) {
        const readFilePromise = fs.readFileAsync(filename, 'utf8');

        readFilePromise.then((data) => {
            return data;
        })
        .catch((error) => {
            console.log("handled the error");
        });

        return readFilePromise;
    }

    // Private

}

module.exports = FileReader;