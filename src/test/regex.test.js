let chai = require('chai');

describe('Postal code length', () => {
  describe('Italy postalCode', () => {
    const regexp = RegExp(/^.{1,5}$/);
    it('should accept min length 1', () => {
      chai.expect(regexp.toString()).to.have.lengthOf(10);
      chai.expect(regexp).to.match(/\^\.\{1,5\}\$/);
      chai.expect(regexp.test('1234')).to.be.equal(true);
      chai.expect(regexp.test('')).to.be.equal(false);
      chai.expect(regexp.test('123456')).to.be.equal(false);
    });
  });
});