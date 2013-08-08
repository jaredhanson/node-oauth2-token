/**
 * Parse tokens of "Bearer" type.
 *
 * For details regarding this format, refer to RFC 6750, section 4.
 *
 * References:
 *   - [The OAuth 2.0 Authorization Framework: Bearer Token Usage](http://tools.ietf.org/html/rfc6750)
 *
 * @return {Function}
 * @api public
 */
module.exports = function() {
  
  return function(json) {
    // Bearer tokens consist solely of parameters defined by OAuth 2.0.  No
    // additional parameters are defined.
    return {};
  };
};
