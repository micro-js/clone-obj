/**
 * Modules
 */

var forEach = require('@f/foreach')

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
