import * as app from '../app';
import chai from 'chai';

describe("App", function () {
    beforeEach(function () {

    });
    afterEach(function () {

    });

    it("Logger type", function () {
       chai.expect(typeof app).to.be.equal("object");
    });

});