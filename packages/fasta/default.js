/** @module default */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Returns information about disruptions of facilities filtered by parameters.
 * 
 * @param {object} options Optional options
 * @param {string[]} [options.type=ESCALATOR,ELEVATOR] type of the facility to filter by
 * @param {number} [options.equipmentnumber] equipmentnumber of the facility to fetch
 * @param {number} [options.stationnumber] stationnumber of the station to fetch
 * @return {Promise<module:types.disruption[]>} disruption data
 */
export function findDisruptions(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      type: gateway.formatArrayParam(options.type, 'csv', 'type'),
      equipmentnumber: options.equipmentnumber,
      stationnumber: options.stationnumber
    }
  }
  return gateway.request(findDisruptionsOperation, parameters)
}

/**
 * Returns information about a specific disruption of a facility
 * 
 * @param {number} disruptionnumber disruptionnumber of the disruption to fetch
 * @return {Promise<module:types.disruption>} disruption data
 */
export function findDisruptionByDisruptionNumber(disruptionnumber) {
  const parameters = {
    path: {
      disruptionnumber
    }
  }
  return gateway.request(findDisruptionByDisruptionNumberOperation, parameters)
}

/**
 * Access to public facilities (escalators and elevators) in railway stations
 * 
 * @param {object} options Optional options
 * @param {string[]} [options.type=ESCALATOR,ELEVATOR] type of the facility to filter by
 * @param {string[]} [options.state=ACTIVE,INACTIVE] the state of the facility to filter by
 * @param {number[]} [options.equipmentnumbers] equipmentnumbers of the facility to filter by
 * @param {number} [options.stationnumber] station number to filter by
 * @param {string[]} [options.area] Geo coordinate rectangle in WGS84-format to filter by. Parameters must be 4 numbers exactly as follows: longitudeWest, latitudeSouth, longitudeEast, latitudeNorth.
 * @return {Promise<module:types.facility[]>} facility data
 */
export function findFacilities(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      type: gateway.formatArrayParam(options.type, 'csv', 'type'),
      state: gateway.formatArrayParam(options.state, 'csv', 'state'),
      equipmentnumbers: gateway.formatArrayParam(options.equipmentnumbers, 'csv', 'equipmentnumbers'),
      stationnumber: options.stationnumber,
      area: gateway.formatArrayParam(options.area, 'csv', 'area')
    }
  }
  return gateway.request(findFacilitiesOperation, parameters)
}

/**
 * Returns the facility identified by its equipmentnumber
 * 
 * @param {number} equipmentnumber equipmentnumber of the facility to fetch
 * @return {Promise<module:types.facility>} Facility data
 */
export function getFacilityByEquipmentNumber(equipmentnumber) {
  const parameters = {
    path: {
      equipmentnumber
    }
  }
  return gateway.request(getFacilityByEquipmentNumberOperation, parameters)
}

/**
 * Returns information about the station and its facilities identified by a stationnumber.
 * 
 * @param {number} stationnumber stationnumber of the station to fetch
 * @return {Promise<module:types.station>} station data
 */
export function findStationByStationNumber(stationnumber) {
  const parameters = {
    path: {
      stationnumber
    }
  }
  return gateway.request(findStationByStationNumberOperation, parameters)
}

const findDisruptionsOperation = {
  path: '/disruptions',
  method: 'get',
  security: [
    {
      id: 'UserSecurity'
    }
  ]
}

const findDisruptionByDisruptionNumberOperation = {
  path: '/disruptions/{disruptionnumber}',
  method: 'get',
  security: [
    {
      id: 'UserSecurity'
    }
  ]
}

const findFacilitiesOperation = {
  path: '/facilities',
  method: 'get',
  security: [
    {
      id: 'UserSecurity'
    }
  ]
}

const getFacilityByEquipmentNumberOperation = {
  path: '/facilities/{equipmentnumber}',
  method: 'get',
  security: [
    {
      id: 'UserSecurity'
    }
  ]
}

const findStationByStationNumberOperation = {
  path: '/stations/{stationnumber}',
  method: 'get',
  security: [
    {
      id: 'UserSecurity'
    }
  ]
}
