// test helpers
require('./helper/chai.js');
const sinon = require("sinon");

// lib
const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));

// core
const Path = require("path");

// fixtures
const gherkin = require.main.require('test/fixtures/example.feature.js');

// app modules
const GherkinParser = require.main.require('src/GherkinParser.js');

describe('Parse specification', function() {
    it('should parse a correctly formatted specification', () => {
        //
        // given I have selected a correctly formatted gherkin feature file
        // when I invoke the parse command
        //
        const gherkinParser = new GherkinParser();
        const result = gherkinParser.parse(gherkin);
        const feature = result.spec;

        //
        // then I should see the following output:
        //
        //const result = JSON.stringify(feature, null, 2);
        //console.log(result);

        feature.name.should.equal('Sample Feature');
        feature.description.should.equal('In order to <impact>\n  As an <actor>\n  I want to <what>');
        feature.tags.should.have.members(['@feature-tag']);

        feature.background.name.should.equal('Feature Background');
        //feature.background.steps.should.have.deep.members([{keyword:'Given', text:'some background'}]);
        feature.background.steps.should.have.members(['Given some background']);

        const scenario1 = feature.scenarios[0];
        scenario1.name.should.equal('Scenario One');
        scenario1.description.should.equal('This is a scenario description');
        scenario1.tags.should.have.members(['@foo', '@bar']);
        scenario1.steps.should.have.members(['Given context', 'When action', 'Then result']);

        const scenario2 = feature.scenarios[1];
        scenario2.name.should.equal('Scenario Two');
        scenario2.description.should.equal('');
        scenario2.tags.should.have.members(['@baz']);
        scenario2.steps.should.have.members(['Given <one>', 'When <two>', 'Then <three>']);

        const example = scenario2.examples[0];
        example.name.should.equal('numbers');
        example.tableHeader.should.have.members(['one', 'two', 'three']);
        example.tableBody.should.have.deep.members([['un', 'deux', 'trois'], ['uno', 'dos', 'tres']]);
    });

    it('should report error when parsing an incorrectly formatted specification', () => {
        const gherkinParser = new GherkinParser();
        const result = gherkinParser.parse("bad pickles");
        result.success.should.be.false;
    });
});
