let chai = require('chai');
let addition = require("../jscode/addCallBack");
// import addition from '../jscode/addCallBack';
// import chai from 'chai';

describe('Addition', function () {
    it('Addition of two numbers', (done) => {
        addition.addCB(2, 3, function (result) {
            chai.expect(result).to.equal(2+3);
            done();
        })
    });
});
