const chai = require('chai');
const should = require('chai').should() //actually call the function

chai.config.includeStack = true;
global.should = should;