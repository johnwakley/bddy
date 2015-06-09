const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.config.includeStack = true;

const should = require('chai').should() //actually call the function
global.should = should;