// Test helpers
require('./helper/chai.js');
const sinon = require("sinon");

// Lib
const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));

//const Gherkin = require.main.require('lib/gherkin/gherkin');
const Gherkin = require.main.require('gherkin');

// Core
const Path = require("path");

// App modules


describe('Parse specification', function() {
    it('should parse a correctly formatted specification', () => {
        const parser = new Gherkin.Parser();

        const builder = new Gherkin.AstBuilder();
        parser.stopAtFirstError = false;

        const scanner = new Gherkin.TokenScanner('Feature: Parse specification');
        const ast = parser.parse(scanner, builder, new Gherkin.TokenMatcher());
        const result = JSON.stringify(ast, null, 2);

        console.log(result);
    });
});
