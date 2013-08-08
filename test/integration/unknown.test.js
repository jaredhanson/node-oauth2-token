var token = require('../..');

describe('parsing of uknown tokens', function() {
  
  describe('with standard parameters', function() {
    var json = {
      "access_token":"mF_9.B5f-4.1JqM",
      "token_type":"Unknown",
      "expires_in":3600,
      "refresh_token":"tGzv3JOkF0XG5Qx2TlKWIA"
    }
     
    it('should throw an error', function() {
      expect(function() {
        token.parse(json)
      }).to.throw(Error, 'Unable to parse OAuth 2.0 token type: unknown');
    });
  });

});
