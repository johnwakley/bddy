// test helpers
require('./helper/chai.js');
const sinon = require("sinon");

// lib
const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));
const Gherkin = require('gherkin');
const _ = require('lodash');


// core
const Path = require("path");

// fixtures
const spec = require.main.require('test/fixture/example.feature.js');

// app modules
const GherkinParser = require.main.require('src/GherkinParser.js');

describe('Parse specification', function() {
    it.only('should parse a correctly formatted specification', () => {
        const parser = new Gherkin.Parser();

        const builder = new Gherkin.AstBuilder();
        parser.stopAtFirstError = false;

        const scanner = new Gherkin.TokenScanner(spec);
        const ast = parser.parse(scanner, builder, new Gherkin.TokenMatcher());

        const gherkinParser = new GherkinParser();
        const feature = gherkinParser.parse(ast);

        const result = JSON.stringify(feature, null, 2);
        console.log(result);
    });
});
