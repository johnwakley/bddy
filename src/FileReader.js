// core
const fs = require('fs');
const path = require('path');

// lib
const Promise = require("bluebird");
const promise_fs = Promise.promisifyAll(require("fs"));

class FileReader {
    constructor() {

    }

    readFile(filename) {
        return promise_fs.readFileAsync(filename, 'utf8')
            .then(data => {
                // @TODO: do something with data
            })
            .catch(error => {
                // @TODO: do something with error
                throw new Error('error');
            });
    }

    readFileSync(filename) {
        try {
            return fs.readFileSync(filename, 'utf8');
        } catch (exception) {
            // no-op
        }

        return {error: FileReader.Error.READ_FILE_ERROR};
    }

    fileList(directory, fileExtension) {
        if (!fs.existsSync(directory)) {
            return {
                error: FileReader.Error.NONEXISTENT_DIRECTORY
            }
        }

        return fs
            .readdirSync(directory)
            .map(filename => {
                const currentPath = path.join(directory, filename);
                const stat = fs.statSync(currentPath);
                return stat.isDirectory()
                    ? this.fileList(currentPath, fileExtension)
                    : currentPath;
            })
            .reduce(function (a, b) {
                // @TODO: review
                return a.concat(b);
            }, []);
    }
}

FileReader.__proto__.Error = {
    NONEXISTENT_DIRECTORY: 1,
    READ_FILE_ERROR: 2
};

module.exports = FileReader;