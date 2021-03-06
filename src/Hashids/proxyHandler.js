'use strict'

/**
 * adonis-hashids
 *
 * (c) Carlson Orozco <carlsonorozco@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const proxyHandler = exports = module.exports = {}

/**
 * proxies the target attributes and returns defined implementation
 * for them
 *
 * @param  {Object} target
 * @param  {String} name
 *
 * @return {Mixed}
 * @public
 */
proxyHandler.get = (target, name) => {
  /**
   * Node.js inspecting target
   */
  if (typeof (name) === 'symbol' || name === 'inspect') {
    return target[name]
  }

  /**
   * Property exists on target
   */
  if (typeof (target[name]) !== 'undefined') {
    return target[name]
  }

  return target.connection()[name]
}
