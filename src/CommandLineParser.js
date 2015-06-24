
// lib
const Immutable = require('immutable');
const commander = require('commander');
const _ = require('lodash');

// core
const pkg = require('../package.json');

class CommandLineParser {
    constructor() {
        this._SOURCE_ARG_INDEX = 0;
        this._DESTINATION_ARG_INDEX = 1;
    }

    parse(argv) {
        let parserCommand = '';
        let parserArguments = [];
        const program = new commander.Command();

        program
            .version(pkg.version)
            .arguments('<cmd> [args...]')
            .action((cmd, env) => {
                parserCommand = cmd || '';
                parserArguments = env || [];
            })
            .parse(argv);

        if (parserCommand == '') {
            return {
                success: false,
                error: CommandLineParser.Error.CLI_MISSING_PARSER,
                message: 'Parser type required'
            };
        }

        if (!this._isCommandValid(parserCommand)) {
            return {
                success: false,
                error: CommandLineParser.Error.CLI_INVALID_PARSER,
                message: `{parserCommand} is not supported`
            };
        }

        if (!this._hasArguments(parserArguments)) {
            return {
                success: false,
                error: CommandLineParser.Error.CLI_MISSING_ARGUMENTS,
                message: 'Parser source and destination location arguments required'
            };
        }

        return {
            success: true,
            error: null,
            message: '',
            source: this._sourceLocation(parserArguments),
            destination: this._destinationLocation(parserArguments)
        };
    }

    //
    // private
    //

    _isCommandValid(command) {
        return _.includes(CommandLineParser.Parser, command);
    }

    _hasArguments(args) {
        return args.length > this._SOURCE_ARG_INDEX
            && args[this._SOURCE_ARG_INDEX].length > 0;
    }

    _sourceLocation(args) {
        return this._hasArguments(args)
            ? args[this._SOURCE_ARG_INDEX]
            : '';
    }

    _destinationLocation(args) {
        return args.length > this._DESTINATION_ARG_INDEX
            ? args[this._DESTINATION_ARG_INDEX]
            : '';
    }
}

CommandLineParser.Error = {
    CLI_MISSING_PARSER: 1,
    CLI_INVALID_PARSER: 2,
    CLI_MISSING_ARGUMENTS: 3
};

CommandLineParser.Parser = {
    GHERKIN_PARSER: 'gherkin-parser'
};

module.exports = CommandLineParser;

// @TODO: generate command line help