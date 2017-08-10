var token = require('../..');

describe('parsing of bearer tokens', function() {
  
  describe('with standard parameters', function() {
    var json = {
      "access_token":"mF_9.B5f-4.1JqM",
      "token_type":"Bearer",
      "expires_in":3600,
      "refresh_token":"tGzv3JOkF0XG5Qx2TlKWIA"
    }
     
    it('should parse correctly', function() {
      var tok = token.parse(json);
    
      expect(tok).to.be.an('object');
      expect(Object.keys(tok)).to.have.length(5);
      expect(tok.type).to.equal('bearer');
      expect(tok.token).to.equal('mF_9.B5f-4.1JqM');
      expect(tok.expiresIn).to.equal(3600);
      expect(tok.expiresAt).to.be.an.instanceOf(Date);
      expect(tok.refreshToken).to.equal('tGzv3JOkF0XG5Qx2TlKWIA');
    });
  });
  
  describe('without token type, but default declared', function() {
    var json = {
      "access_token":"mF_9.B5f-4.1JqM",
      "expires_in":3600,
      "refresh_token":"tGzv3JOkF0XG5Qx2TlKWIA"
    }
     
    it('should parse correctly', function() {
      var tok = token.parse(json, 'bearer');
    
      expect(tok).to.be.an('object');
      expect(Object.keys(tok)).to.have.length(5);
      expect(tok.type).to.equal('bearer');
      expect(tok.token).to.equal('mF_9.B5f-4.1JqM');
      expect(tok.expiresIn).to.equal(3600);
      expect(tok.expiresAt).to.be.an.instanceOf(Date);
      expect(tok.refreshToken).to.equal('tGzv3JOkF0XG5Qx2TlKWIA');
    });
  });
  
  describe('without token type, and no default declared', function() {
    var json = {
      "access_token":"mF_9.B5f-4.1JqM",
      "expires_in":3600,
      "refresh_token":"tGzv3JOkF0XG5Qx2TlKWIA"
    }
     
    it('should throw an error', function() {
      expect(function() {
        token.parse(json)
      }).to.throw(Error, 'Unable to determine OAuth 2.0 token type');
    });
  });

});
