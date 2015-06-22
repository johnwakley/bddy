const Immutable = require('immutable');

class Spec {
    constructor(root) {
        this._root = root;
    }

    toJS() {
        return this._root.toJS();
    }
}

Spec.__proto__.FileExtension = {
    GHERKIN: '.feature'
};

module.exports = Spec;