import appConfig from '../config';
import { logger, loggerUnitTest, clearLogger } from "../logger";
import chai from 'chai';

describe("Logger Component", function () {
    beforeEach(function () {

    });
    afterEach(function () {

    });

    describe("Logger", function () {
        it("Logger type", function () {
            chai.expect(typeof logger).to.be.equal("object");
        });
        it("Logger info", function () {
            logger.info("\nDemo Message\n");
            logger.info("Demo Message");
            // chai.expect(typeof logger).to.be.equal("object");
        });
    });

    describe("Logger", function () {
        it("Logger type", function () {
            chai.expect(typeof loggerUnitTest).to.be.equal("object");
        });
        it("Logger info", function () {
            loggerUnitTest.info("\nDemo Message\n");
            loggerUnitTest.info("Demo Message");
            // chai.expect(typeof logger).to.be.equal("object");
        });
    })

    describe("Logger", function () {
        it("Logger type", function () {
            chai.expect(typeof clearLogger).to.be.equal("function");
        });
        it("call clearLogger", function() {
            clearLogger();
            clearLogger();
        })
    })
});