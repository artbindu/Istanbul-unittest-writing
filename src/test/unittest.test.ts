import appConfig from '../config';
import { UnitTest } from '../unittest';
import chai from 'chai';

let unitTest: UnitTest|null;

describe("Unittest", function() {
    beforeEach(function() {
        unitTest = new UnitTest();
    });
    afterEach(function () {
        unitTest = null;
    });

    it("assign Unittest class", function () {
        chai.expect(unitTest).to.be.instanceOf(UnitTest);
        chai.expect(unitTest.inputPath).to.be.equal(appConfig.config.inputPath);
        chai.expect(unitTest.outputPath).to.be.equal(appConfig.config.outputPath);
        chai.expect(unitTest.allData).to.be.empty;
    });
});