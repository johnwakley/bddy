#!/usr/bin/env node

// app modules
const CommandLineParser = require('./CommandLineParser.js');
const GherkinParser = require('./GherkinParser');
const FileReader = require('./FileReader');
const Spec = require("./model/Spec");
const SpecRepository = require('./SpecRepository');

const command = new CommandLineParser();
const commandArgs = command.parse(process.argv);

if (commandArgs.error) {
    console.error(`Error: ${commandArgs.error}`);
} else {
    const fileReader = new FileReader(commandArgs.source, Spec.FileExtension.GHERKIN);
    const gherkinParser = new GherkinParser();
    const specRepository = new SpecRepository(fileReader, gherkinParser);

    const features = specRepository.fetch();
    const json = JSON.stringify(features, null, 2);
    console.log(json);
}