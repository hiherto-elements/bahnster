/** @module default */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get all station and stop infos
 * 
 * @param {object} options Optional options
 * @param {string} [options.name] A station name or part of it
 * @return {Promise<module:types.StationList>} List was generated
 */
export function getBetriebsstellen(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      name: options.name
    }
  }
  return gateway.request(getBetriebsstellenOperation, parameters)
}

/**
 * Get information about a specific station or stop by abbrevation
 * 
 * @param {string} abbrev Station or stop abbrevation
 * @return {Promise<module:types.Station>} Entry found
 */
export function getBetriebsstellenAbbrev(abbrev) {
  const parameters = {
    path: {
      abbrev
    }
  }
  return gateway.request(getBetriebsstellenAbbrevOperation, parameters)
}

const getBetriebsstellenOperation = {
  path: '/betriebsstellen',
  method: 'get'
}

const getBetriebsstellenAbbrevOperation = {
  path: '/betriebsstellen/{abbrev}',
  method: 'get'
}
