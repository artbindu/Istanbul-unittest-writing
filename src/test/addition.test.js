let chai = require('chai');
let addition = require("../jscode/addition");

describe('Addition', function () {
    it('Addition of two numbers', function() {
        chai.expect(addition.add(2, 3)).to.equal(5);
    });
});
