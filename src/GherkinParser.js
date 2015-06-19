// lib
const _ = require('lodash');
const Immutable = require('immutable');

class GherkinParser {
    constructor() {
        _.noop();
    }

    parse(spec) {
        return this._parseFeature(spec)
            .set("scenarios", this._parseScenarios(spec))
            .toJS();
    }

    //
    // private
    //

    _parseFeature(spec) {
        // @TODO: tags
        return Immutable.Map({
            name: spec.name,
            description: spec.description
        });
    }

    _parseScenarios(spec) {
        // @TODO: tags
        // @TODO: steps
        // @TODO: examples
        let scenarios = [];
        spec.scenarioDefinitions.forEach(scenario => {
            scenarios.push(Immutable.Map({
                name: scenario.name,
                description: scenario.description
            }));
        });

        return Immutable.List(scenarios);
    }
}

module.exports = GherkinParser;