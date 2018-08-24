/** @module default */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get all station infos
 * 
 * @param {object} options Optional options
 * @param {string} [options.name] A station name or part of it
 * @return {Promise<module:types.TravelCenterList>} List has been created
 */
export function getReisezentren(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      name: options.name
    }
  }
  return gateway.request(getReisezentrenOperation, parameters)
}

/**
 * Get information about a station near a location
 * 
 * @param {number} lat Latitude
 * @param {number} lon Longitude
 * @return {Promise<module:types.TravelCenter>} A station was found
 */
export function getReisezentrenLocLatLon(lat, lon) {
  const parameters = {
    path: {
      lat,
      lon
    }
  }
  return gateway.request(getReisezentrenLocLatLonOperation, parameters)
}

/**
 * Get stations in a given radius
 * 
 * @param {number} lat Latitude
 * @param {number} lon Longitude
 * @param {number} dist Radius
 * @return {Promise<module:types.TravelCenter>} A station was found
 */
export function getReisezentrenLocLatLonDist(lat, lon, dist) {
  const parameters = {
    path: {
      lat,
      lon,
      dist
    }
  }
  return gateway.request(getReisezentrenLocLatLonDistOperation, parameters)
}

/**
 * Get information about a specific station
 * 
 * @param {string} id Station id
 * @return {Promise<module:types.TravelCenter>} The travel center was found
 */
export function getReisezentrenId(id) {
  const parameters = {
    path: {
      id
    }
  }
  return gateway.request(getReisezentrenIdOperation, parameters)
}

const getReisezentrenOperation = {
  path: '/reisezentren',
  method: 'get'
}

const getReisezentrenLocLatLonOperation = {
  path: '/reisezentren/loc/{lat}/{lon}',
  method: 'get'
}

const getReisezentrenLocLatLonDistOperation = {
  path: '/reisezentren/loc/{lat}/{lon}/{dist}',
  method: 'get'
}

const getReisezentrenIdOperation = {
  path: '/reisezentren/{id}',
  method: 'get'
}
