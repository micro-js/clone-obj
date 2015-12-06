/**
 * Modules
 */

var forEach = require('@micro-js/foreach')

/**
 * Expose cloneObj
 */

module.exports = cloneObj['default'] = cloneObj

/**
 * Clone an object.
 * @param  {Object} obj Object to Clone
 * @return {Object}
 */

function cloneObj (obj) {
  var newObj = {}

  forEach(obj, function (val, key) {
    newObj[key] = val
  })

  return newObj
}
