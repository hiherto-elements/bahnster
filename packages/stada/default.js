/** @module default */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get a QueryResult object containing station objects from the database applying to the parameters described below. 
 * 
 * QueryResult is a container providing the following information about the query result.
 *   1. the total number of hits
 *   2. the maximum number of hits to be returned in that QueryResult object
 *   3. the offset of the first hit returned in that QueryResult object with respect to all hits returned by the query
 *   4. the result objects
 *   
 * The parameters described below work as filters to reduce the number of hits returned. Some of these parameters must be used only once, others are allowed to be used multiple times. Valid parameters that are allowed to be used only once are _offset_, _limit_ and _logicaloperator_. 
 * 
 * All other parameters described below may be used multiple times.
 * 
 * If a parameter is given more than once, the result will contain all hits that match all given parameter values.
 * 
 * E.g. _federalstate=berlin&federalstate=saarland_ returns all stations in Berlin and Saarland.
 * 
 * If more than one filter criterion is used at the same time, the different filter criteria are interpreted as if they are combined by a logical AND operator, unless the parameter _logicaloperator_ is set to _or_.
 * 
 * E.g. _category=1-2&federalstate=hamburg_ returns all stations in Hamburg having category 1 or 2.
 * 
 * _category=1-2&federalstate=hamburg&federalsate=hessen_ returns all stations in Hamburg and Hessen having category 1 or 2, while
 * 
 * _searchstring=berlin*&federalstate=hamburg&federalsate=hessen&logicaloperator=or_ will return all stations with a name starting with 'berlin' as well as all stations in Hamburg and Hessen.
 * 
 * If no 'limit' parameter is given, the number of hits (stations) is set to its maximum value of 10000.
 * 
 * To specify parameter values containing German umlauts, the following encoding has to be used
 *   * ä  => %C3%A4
 *   * ö  => %C3%B6
 *   * ü  => %C3%BC
 *   * Ä  => %C3%84
 *   * Ö  => %C3%96
 *   * Ü  => %C3%9C
 *   * ß  => %C3%9F
 * 
 * @param {object} options Optional options
 * @param {number} [options.offset] Offset of the first hit returned in the QueryResult object with respect to all hits returned by the query. If this parameter is omitted, it will be set to 0 internally.
 * @param {number} [options.limit] The maximum number of hits to be returned by that query. If 'limit' is set greater than 10000, it will be reset to 10000 internally and only 10000 hits will be returned.
 * @param {string} [options.searchstring] String to search for a station name. The wildcards * (indicating an arbitrary number of characters) and ? (indicating one single character) can be used in the search pattern. A comma separated list of station names is also supported (e.g. searchstring=hamburg*,berlin*).
 * @param {string} [options.category] Filter by station category. Category ranges are supported as well as lists of categories (e.g. category=2-4 or category=1,3-5). The category must be between 1 and 7 otherwise a parameter exception is returned.
 * @param {string} [options.federalstate] Filter by German federal state. Lists of federal states are also supported (e.g. federalstate=bayern,hamburg). Wildcards are not allowed here.
 * @param {number} [options.eva] Filter by EVA number. Wildcards are not allowed here.
 * @param {string} [options.ril] Filter by Ril100-identifier. Wildcards are not allowed here.
 * @param {string} [options.logicaloperator] Logical operator to combine query parameters (default=AND). See above for further details.  Allowed values: or, and
 * @return {Promise<module:types.StationQuery>} station data
 */
export function getStations(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      offset: options.offset,
      limit: options.limit,
      searchstring: options.searchstring,
      category: options.category,
      federalstate: options.federalstate,
      eva: options.eva,
      ril: options.ril,
      logicaloperator: options.logicaloperator
    }
  }
  return gateway.request(getStationsOperation, parameters)
}

/**
 * Get a QueryResult object containing one station object specified by its id.
 * 
 * @param {number} id Station ID (Bahnhofsnummer)
 * @return {Promise<module:types.StationQuery>} station data
 */
export function getStationsId(id) {
  const parameters = {
    path: {
      id
    }
  }
  return gateway.request(getStationsIdOperation, parameters)
}

/**
 * Get a QueryResult object containing SZentralen objects from the database applying to the parameters described below. 
 * QueryResult is a container providing the following information about the query result.
 *   1. the total number of hits
 *   2. the maximum number of hits to be returned in that QueryResult object
 *   3. the offset of the first hit returned in that QueryResult object with respect to all hits returned by the query
 *   4. the result objects
 * 
 * @param {object} options Optional options
 * @param {number} [options.offset] Offset of the first hit returned in the QueryResult object with respect to all hits returned by the query. If this parameter is omitted, it will be set to 0 internally.
 * @param {number} [options.limit] The maximum number of hits to be returned by that query. If 'limit' is set greater than 10000, it will be reset to 10000 internally and only 100 hits will be returned.
 * @return {Promise<module:types.SZentraleQuery>} 3-S-Zentralen data
 */
export function getSzentralen(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      offset: options.offset,
      limit: options.limit
    }
  }
  return gateway.request(getSzentralenOperation, parameters)
}

/**
 * Get a QueryResult object containing one SZentralen object specified by its id.
 * 
 * @param {number} id id of the 3-S-Zentrale.
 * @return {Promise<module:types.SZentraleQuery>} 3-S-Zentralen data
 */
export function getSzentralenId(id) {
  const parameters = {
    path: {
      id
    }
  }
  return gateway.request(getSzentralenIdOperation, parameters)
}

const getStationsOperation = {
  path: '/stations',
  method: 'get'
}

const getStationsIdOperation = {
  path: '/stations/{id}',
  method: 'get'
}

const getSzentralenOperation = {
  path: '/szentralen',
  method: 'get'
}

const getSzentralenIdOperation = {
  path: '/szentralen/{id}',
  method: 'get'
}
