class SpecRepository {
    constructor(reader, parser) {
        this._reader = reader;
        this._parser = parser;
    }

    fetch() {
        const fileList = this._reader.fileList();

        if (fileList.error) {
            return {
                // @TODO: create custom error object
                error: fileList.error
            };
        }

        let specs = [];

        fileList.forEach(path => {
            const file = this._reader.readFileSync(path);

            if (file.error) {
                return {
                    error: file.error
                };
            }

            const spec = this._parser.parse(file.content);

            if (spec.error) {
                return {
                    error: spec.error
                };
            }

            specs.push(spec.content);
        });

        return specs;
    }
}

SpecRepository.__proto__.Error = {
    READ_FAILED: 'READ_FAILED',
    PARSE_FAILED: 'PARSE_FAILED'
};

module.exports = SpecRepository;