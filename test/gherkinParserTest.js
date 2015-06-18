// Test helpers
require('./helper/chai.js');
const sinon = require("sinon");

// Lib
const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));
const Gherkin = require('gherkin');

// Core
const Path = require("path");

// Fixtures
const spec = require.main.require('test/fixture/example.feature.js');

// App modules


describe('Parse specification', function() {
    it.only('should parse a correctly formatted specification', () => {
        const parser = new Gherkin.Parser();

        const builder = new Gherkin.AstBuilder();
        parser.stopAtFirstError = false;

        const scanner = new Gherkin.TokenScanner(spec);
        const ast = parser.parse(scanner, builder, new Gherkin.TokenMatcher());
        const result = JSON.stringify(ast, null, 2);

        //console.log(result);
        console.log(ast.tags);
    });
});
