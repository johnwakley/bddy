// lib
const _ = require('lodash');
const Immutable = require('immutable');
const Gherkin = require('gherkin');

// app modules
const Spec = require('./model/Spec');

class GherkinParser {
    constructor() {
        _.noop();
    }

    parse(gherkin) {
        let ast = null;

        try {
            ast = this._parseGherkin(gherkin);
        }
        catch (exception) {
            return {
                success: false,
                error: exception
            }
        }

        const spec = this._mapGherkinASTToSpecModel(ast);

        return {
            success: true,
            spec: spec.toJS()
        }
    }

    //
    // private
    //
    _parseGherkin(gherkin) {
        const parser = new Gherkin.Parser();
        parser.stopAtFirstError = false;
        const builder = new Gherkin.AstBuilder();
        const scanner = new Gherkin.TokenScanner(gherkin);

        return parser.parse(scanner, builder, new Gherkin.TokenMatcher());
    }

    _mapGherkinASTToSpecModel(ast) {
        const map = this._feature(ast)
            .set("scenarios", this._scenarios(ast.scenarioDefinitions));

        return new Spec(map);
    }

    _feature(spec) {
        return Immutable.Map({
            name: spec.name,
            description: _.trim(spec.description) || '',
            tags: this._tags(spec.tags),
            background: this._background(spec.background)
        });
    }

    _background(backgroundSpec) {
        return Immutable.Map({
            name: backgroundSpec.name,
            steps: this._steps(backgroundSpec.steps)
        });
    }

    _scenarios(scenarios) {
        let specScenarios = [];

        scenarios.forEach(scenario => {
            specScenarios.push(Immutable.Map({
                name: scenario.name,
                description: _.trim(scenario.description) || '',
                tags: this._tags(scenario.tags),
                steps: this._steps(scenario.steps),
                examples: scenario.examples ? this._examples(scenario.examples) : Immutable.List()
            }));
        });

        return Immutable.List(specScenarios);
    }

    _tags(tags) {
        let specTags = [];

        tags.forEach(tag => {
            specTags.push(tag.name);
        });

        return Immutable.List(specTags);
    }

    _steps(steps) {
        let specSteps = [];

        steps.forEach(step => {
            const keyword = _.trim(step.keyword);
            const text = _.trim(step.text);
            const name = `${keyword} ${text}`;

            specSteps.push(name);
        });

        return Immutable.List(specSteps);
    }

    _examples(examples) {
        let specExamples = [];

        examples.forEach(example => {
            const exampleMap = Immutable.Map({
                name: example.name,
                tableHeader: this._exampleTableHeader(example.tableHeader),
                tableBody: this._exampleTableBody(example.tableBody)
            });

            specExamples.push(exampleMap);
        });

        return Immutable.List(specExamples);
    }

    _exampleTableHeader(tableHeader) {
        let cells = [];

        tableHeader.cells.forEach(cell => {
            cells.push(cell.value);
        });

        return Immutable.List(cells);
    }

    _exampleTableBody(tableBody) {
        let rows = [];

        tableBody.forEach(row => {
            let cells = [];
            row.cells.forEach(cell => {
                cells.push(cell.value);
            })

            rows.push(cells);
        });

        return Immutable.List(rows);
    }
}

module.exports = GherkinParser;