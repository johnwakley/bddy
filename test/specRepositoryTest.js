// test helpers
require('./helper/chai.js');
const sinon = require("sinon");

// app modules
const GherkinParser = require.main.require('src/GherkinParser.js');
const FileReader = require.main.require('src/FileReader');
const Spec = require.main.require("src/model/Spec");
const SpecRepository = require.main.require('src/SpecRepository');

// @TODO: move into integration folder
describe.only('Fetch specifications', function() {
    it('should retrieve all specifications from a directory', () => {
        const specDirectory = __dirname.replace(/bddy\/test/, 'bddy/spec'); // @TODO: make DRYer
        const fileReader = new FileReader(specDirectory, Spec.FileExtension.GHERKIN);
        const gherkinParser = new GherkinParser();
        const specRepository = new SpecRepository(fileReader, gherkinParser);

        const features = specRepository.fetch();
        const json = JSON.stringify(features, null, 2);
        console.log(json);
    });
});
