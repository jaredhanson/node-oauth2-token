/**
 * Module dependencies.
 */
var moment = require('moment')
  , merge = require('utils-merge');


/**
 * Creates an instance of `Parser`.
 *
 * @constructor
 * @api public
 */
function Parser() {
  this._types = {};
}

/**
 * Register parser for token type.
 *
 * The parser function must have the following signature:
 *
 *     function(json) {
 *     }
 *
 * The parser function is invoked with a JSON object, and must return an object
 * containing the parsed and normalized token.
 *
 * @param {String} type
 * @param {Function} fn
 * @api public
 */
Parser.prototype.use = function(type, fn) {
  this._types[type] = fn;
};

/**
 * Parse token.
 *
 * @param {String|Object} json
 * @param {String} [type]
 * @return {Object}
 * @api public
 */
Parser.prototype.parse = function(json, type) {
  if (typeof json == 'string') {
    json = JSON.parse(json);
  }
  
  type = json.token_type || type;
  if (!type) { throw new Error('Unable to determine OAuth 2.0 token type'); }
  type = type.toLowerCase();
  
  // Parse the common parameters defined by RFC 6749, section 5.1.
  var token = { type: type };
  token.token = json.access_token;
  token.expiresIn = json.expires_in;
  if (json.expires_in) {
    var dt = moment.utc().add(json.expires_in, 's');
    token.expiresAt = dt.toDate();
  }
  token.refreshToken = json.refresh_token;
  if (json.scope) {
    token.scope = json.scope.split(' ');
  }
  
  var fn = this._types[type];
  if (!fn) { throw new Error('Unable to parse OAuth 2.0 token type: ' + type); }
  
  // Parse and merge any additional parameters defined by the token type.
  var params = fn(json);
  merge(token, params);
  return token;
};


/**
 * Expose `Parser`.
 */
module.exports = Parser;
