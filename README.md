# oauth2-token

[![Build](https://travis-ci.org/jaredhanson/node-oauth2-token.png)](http://travis-ci.org/jaredhanson/node-oauth2-token)
[![Coverage](https://coveralls.io/repos/jaredhanson/node-oauth2-token/badge.png)](https://coveralls.io/r/jaredhanson/node-oauth2-token)
[![Dependencies](https://david-dm.org/jaredhanson/node-oauth2-token.png)](http://david-dm.org/jaredhanson/node-oauth2-token)


Parse OAuth 2.0 tokens.

## Install

    $ npm install oauth2-token

## Usage

```javascript
var token = oauth2token.parse('{
      "access_token":"mF_9.B5f-4.1JqM",
      "token_type":"Bearer",
      "expires_in":3600,
      "refresh_token":"tGzv3JOkF0XG5Qx2TlKWIA"
    }');
// => { type: 'bearer', accessToken: 'mF_9.B5f-4.1JqM', expiresAt: Date(...) }
```

## Tests

    $ npm install
    $ npm test

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>

