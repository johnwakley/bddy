require('./helper/chai.js');
const Spec = require.main.require('src/model/Spec.js');

describe('Should', function(){
    it('bar', function(){
        const foo = new Spec();
        foo.fooString.should.equal('bar');
    })
});
