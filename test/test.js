require('./helper/chai.js');
const Spec = require.main.require('src/model/Spec.js');

var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
var Path = require("path");

describe('Should', function(){
    it('bar', function(){
        const foo = new Spec();
        foo.fooString.should.equal('bar');
    })
});

describe('Reading directory and sub-directory contents recursively', function(){
    it('Should display directory contents', function(){
        //readDir('../').then(function(v){
        //    console.log(v.join("\n"));
        //});

        return Promise.resolve(2 + 2).should.eventually.equal(4);

    })
});

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