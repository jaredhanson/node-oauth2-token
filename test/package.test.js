var token = require('..');

describe('oauth2-token', function() {
  
  it('should export parse function', function() {
    expect(token.parse).to.be.a('function');
  });
  
  it('should export Parser constructor', function() {
    expect(token.Parser).to.be.a('function');
  });
  
});
