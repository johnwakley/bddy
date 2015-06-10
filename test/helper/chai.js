const chai = require('chai');
chai.config.includeStack = true;

const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const sinonChai = require("sinon-chai");
chai.use(sinonChai);

const should = require('chai').should() //actually call the function
global.should = should;