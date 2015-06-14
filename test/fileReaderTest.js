// Test helpers
require('./helper/chai.js');
const sinon = require("sinon");

// Promises
const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));

// Core
const Path = require("path");

// System Under Test
const FileReader = require.main.require('src/FileReader.js');

describe('Read specification', function() {
    it('should read a specification from an existing file', () => {
        const reader = new FileReader();

        const readerPromise = reader.readFile('./spec/gherkin/read.feature');

        return readerPromise.should.be.fulfilled;
    });

    it('should attempt to read a specification from a non-existing file', () => {
        const reader = new FileReader();
        let promiseRejected = false;

        const readerPromise = reader.readFile('./spec/gherkin/404.feature');

        return readerPromise.should.be.rejected;
    });
});
