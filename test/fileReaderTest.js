// test helpers
require('./helper/chai.js');
const sinon = require("sinon");

// lib
const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));

// core
const Path = require("path");

// app modules
const FileReader = require.main.require('src/FileReader');
const Spec = require.main.require("src/model/Spec");

describe('Read specification', function() {
    it('should read a specification from an existing file', () => {
        const reader = new FileReader();
        const readerPromise = reader.readFile('./spec/gherkin/read.feature');

        return readerPromise.should.be.fulfilled;
    });

    it('should attempt to read a specification from a nonexistent file', () => {
        const reader = new FileReader();
        let promiseRejected = false;
        const readerPromise = reader.readFile('./spec/gherkin/404.feature');

        return readerPromise.should.be.rejected;
    });

    it('should attempt to recursively list all files matching a specification type from a nonexistent directory', () => {
        const reader = new FileReader();
        const result = reader.fileList('nonexistentdirectory', Spec.FileExtension.GHERKIN);

        result.error.should.equal(FileReader.Error.NONEXISTENT_DIRECTORY);
    });

    it('should recursively list all files matching a specification type from a valid directory', () => {
        const specDirectory = __dirname.replace(/bddy\/test/, 'bddy/spec');
        const expectedFiles = [
            specDirectory + '/gherkin/command-line.feature',
            specDirectory + '/gherkin/example.feature',
            specDirectory + '/gherkin/parse.feature',
            specDirectory + '/gherkin/read.feature'
        ];

        const reader = new FileReader();
        const result = reader.fileList(specDirectory, Spec.FileExtension.GHERKIN);

        result.should.have.members(expectedFiles);
    });

    it('should synchronously read a specification from an existing file', () => {
        const reader = new FileReader();
        const fileContents = reader.readFileSync('./spec/gherkin/read.feature');

        (fileContents.length > 500).should.be.true;
    });

    it('should synchronously attempt to read a specification from a nonexistent file', () => {
        const reader = new FileReader();
        const result = reader.readFileSync('./spec/gherkin/404.feature');

        result.error.should.equal(FileReader.Error.READ_FILE_ERROR);
    });

});
