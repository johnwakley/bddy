// Promises
const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));

class FileReader {
    readFile(filename) {
        return fs.readFileAsync(filename, 'utf8')
            .then(data => {
                // @TODO: do something with data
            })
            .catch(error => {
                // @TODO: do something with error
                throw new Error('error');
            });
    }

    // Private

}

module.exports = FileReader;