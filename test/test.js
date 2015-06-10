require('./helper/chai.js');
const sinon = require("sinon");
const Spec = require.main.require('src/model/Spec.js');

const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));
const Path = require("path");

describe.skip('Should', function(){
    it('bar', function(){
        const foo = new Spec();
        foo.fooString.should.equal('bar');
    })
});

describe.skip('Reading directory and sub-directory contents recursively', function(){
    it('should display directory contents', function(){
        const readPromise = readDir('./test');

        readPromise.then(function(v){
            console.log(v.join("\n"));
        });

        return readPromise.should.eventually.contain('test/test.js');
    })
});

describe('Sinon Stub', function(){
    it('should call stub', function(){
        const stub = sinon.stub().returns(42);
        stub().should.equal(42);
    })

    it('should stub object method', function(){
        const foo = Object.create(Foo);
        foo.baz().should.equal('bananas');

        sinon.stub(foo, "bar").returns('apple');
        foo.baz().should.equal('apple');
    })
});

const Foo = {
    bar: function() {
        return "bananas";
    },
    baz: function() {
        return this.bar();
    }
}


function readDir(dirName) {
    return fs.readdirAsync(dirName).map(function (fileName) {
        var path = Path.join(dirName, fileName);
        return fs.statAsync(path).then(function(stat) {
            return stat.isDirectory() ? readDir(path) : path;
        });
    }).reduce(function (a, b) {
        return a.concat(b);
    }, []);
}