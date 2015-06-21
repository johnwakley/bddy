// test helpers
require('./helper/chai.js');
const sinon = require("sinon");

// app modules
const CommandLineParser = require.main.require('src/CommandLineParser.js');

describe.only('Command-line interface', function() {
    it('should invoke command with valid arguments', () => {
        const command = new CommandLineParser();
        const results = command.parse(['node', 'bddy', CommandLineParser.Parser.GHERKIN_PARSER, 'source-location', 'destination-location']);

        results.success.should.be.true;
        results.source.should.equal('source-location');
        results.destination.should.equal('destination-location');
    });

    it('should invoke command with missing arguments', () => {
        const command = new CommandLineParser();
        const results = command.parse(['node', 'bddy', CommandLineParser.Parser.GHERKIN_PARSER, '', '']);

        results.error.should.equal(CommandLineParser.Error.CLI_MISSING_ARGUMENTS);
    });

    it('should invoke command with missing destination location', () => {
        const command = new CommandLineParser();
        const results = command.parse(['node', 'bddy', CommandLineParser.Parser.GHERKIN_PARSER, 'source-location', '']);

        results.success.should.be.true;
        results.source.should.equal('source-location');
        results.destination.should.equal('');
    });

    it('should invoke command with missing parser type', () => {
        const command = new CommandLineParser();
        const results = command.parse(['node', 'bddy', '', '', '']);
        results.error.should.equal(CommandLineParser.Error.CLI_MISSING_PARSER);
    });

    it('should invoke command with invalid parser type', () => {
        const command = new CommandLineParser();
        const results = command.parse(['node', 'bddy', 'invalid-parser', '', '']);
        results.error.should.equal(CommandLineParser.Error.CLI_INVALID_PARSER);
    });
});

