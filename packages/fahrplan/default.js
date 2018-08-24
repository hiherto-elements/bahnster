/** @module default */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get arrival board at a given location at a given daten and time.
 * 
 * @param {string} id Id of location. Use attribute 'id' from the result of 'location'
 * @param {string} date Date and time in ISO-8601 format, yyyy-mm-ddThh:mm:ss, example: 2017-04-01 or 2017-04-01T10:30
 * @return {Promise<module:types.BoardResponse>} arrival board
 */
export function getArrivalBoardId(id, date) {
  const parameters = {
    path: {
      id
    },
    query: {
      date
    }
  }
  return gateway.request(getArrivalBoardIdOperation, parameters)
}

/**
 * Get departure board at a given location at a given daten and time.
 * 
 * @param {string} id Id of a location. Use attribute 'id' from the result of 'location'
 * @param {string} date Date and time in ISO-8601 format, yyyy-mm-ddThh:mm:ss, example: 2017-04-01 or 2017-04-01T10:30
 * @return {Promise<module:types.BoardResponse>} departure board
 */
export function getDepartureBoardId(id, date) {
  const parameters = {
    path: {
      id
    },
    query: {
      date
    }
  }
  return gateway.request(getDepartureBoardIdOperation, parameters)
}

/**
 * Retrieve details of a journey. The id of journey should come from an arrival board or a departure board.
 * 
 * @param {string} id Id of a journey. Use attribute 'detailsId' from the result of  'arrivalBoard' or 'departureBoard'
 * @return {Promise<module:types.JourneyResponse>} journey details, locations of a journey
 */
export function getJourneyDetailsId(id) {
  const parameters = {
    path: {
      id
    }
  }
  return gateway.request(getJourneyDetailsIdOperation, parameters)
}

/**
 * Get information about locations matching the given name or name fragment
 * 
 * @param {string} name Name or name fragment of a location
 * @return {Promise<module:types.LocationResponse>} location information
 */
export function getLocationName(name) {
  const parameters = {
    path: {
      name
    }
  }
  return gateway.request(getLocationNameOperation, parameters)
}

const getArrivalBoardIdOperation = {
  path: '/arrivalBoard/{id}',
  method: 'get'
}

const getDepartureBoardIdOperation = {
  path: '/departureBoard/{id}',
  method: 'get'
}

const getJourneyDetailsIdOperation = {
  path: '/journeyDetails/{id}',
  method: 'get'
}

const getLocationNameOperation = {
  path: '/location/{name}',
  method: 'get'
}
