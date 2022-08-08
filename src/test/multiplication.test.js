let chai = require('chai');
let multiplication = require("../jscode/multiplication");

describe('Multiplication', function () {
    it('Multiplication of two numbers', function() {
        chai.expect(multiplication.mul(2, 3)).to.equal(6);
    });
});