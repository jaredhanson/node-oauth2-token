/**
 * Module dependencies.
 */
var Parser = require('./parser')
  , defaultParser;


/**
 * Parse an OAuth 2.0 token.
 *
 * @param {String|Object} json
 * @param {String} [type]
 * @return {Object}
 * @api public
 */
exports.parse = function(json, type) {
  return defaultParser.parse(json, type);
};

/**
 * Setup default parser.
 */
defaultParser = new Parser();
defaultParser.use('bearer', require('./types/bearer')());

/**
 * Export constructors.
 */
exports.Parser = Parser;
