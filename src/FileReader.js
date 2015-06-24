// core
const fs = require('fs');
const path = require('path');

// lib
const Promise = require("bluebird");
const promise_fs = Promise.promisifyAll(require("fs"));

class FileReader {
    constructor(directory, fileExtension) {
        this._directory = directory;
        this._fileExtension = fileExtension;
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
            return {
                success: true,
                content: fs.readFileSync(filename, 'utf8')
            };
        } catch (exception) {
            return {
                success: false,
                error: FileReader.Error.READ_FILE_ERROR
            };
        }
    }

    fileList() {
        // function overload
        if (arguments.length == 2) {
            const directory = arguments[0];
            const fileExtension = arguments[1];
             return this._fileList(directory, fileExtension);
        } else {
            return this._fileList(this._directory, this._fileExtension);
        }
    }

    _fileList(directory, fileExtension) {
        if (!fs.existsSync(directory)) {
            return {
                success: false,
                error: FileReader.Error.NONEXISTENT_DIRECTORY
            }
        }

        return fs
            .readdirSync(directory)
            .map(filename => {
                const currentPath = path.join(directory, filename);
                const stat = fs.statSync(currentPath);
                return stat.isDirectory()
                    ? this._fileList(currentPath, fileExtension)
                    : currentPath;
            })
            .reduce(function (a, b) {
                // @TODO: review
                return a.concat(b);
            }, []);
    }
}

FileReader.__proto__.Error = {
    NONEXISTENT_DIRECTORY: 'NONEXISTENT_DIRECTORY',
    READ_FILE_ERROR: 'READ_FILE_ERROR'
};

module.exports = FileReader;