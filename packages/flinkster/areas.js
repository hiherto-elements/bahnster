/** @module areas */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Search for areas (locations of rental objects) by criteria.
 * 
 * @param {object} options Optional options
 * @param {number} [options.lat] 
 * @param {number} [options.lon] 
 * @param {number} [options.radius] 
 * @param {number} [options.offset] 
 * @param {number} [options.limit] 
 * @param {string} [options.expand] 
 * @param {string} [options.type] 
 * @param {string} [options.provider] 
 * @param {string} [options.providernetwork] 
 * @return {Promise<module:types.AreaJO>} OK
 */
export function listAreas(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      lat: options.lat,
      lon: options.lon,
      radius: options.radius,
      offset: options.offset,
      limit: options.limit,
      expand: options.expand,
      type: options.type,
      provider: options.provider,
      providernetwork: options.providernetwork
    }
  }
  return gateway.request(listAreasOperation, parameters)
}

/**
 * Search for a specific area by UID.
 * 
 * @param {string} areaUID The Area UID
 * @param {object} options Optional options
 * @param {string} [options.expand] Expand Provider
 * @return {Promise<module:types.AreaJO>} OK
 */
export function getArea(areaUID, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      areaUID
    },
    query: {
      expand: options.expand
    }
  }
  return gateway.request(getAreaOperation, parameters)
}

const listAreasOperation = {
  path: '/areas',
  method: 'get'
}

const getAreaOperation = {
  path: '/areas/{areaUID}',
  method: 'get'
}
