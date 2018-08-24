/** @module types */
// Auto-generated, edits will be overwritten

/**
 * @typedef disruption
 * @memberof module:types
 * 
 * @property {string} description The local conditions of the related facility.
 * @property {number} disruptionnumber Unique identifier.
 * @property {number} equipmentnumber Identifier of the related facility.
 * @property {string} furtherDescription Further information of the cause if available.
 * @property {module:types.point} geographicCoordinates 
 * @property {date} lastUpdate Last time this disruption has been updated (formatted in ISO-1806).
 * @property {date} outOfServiceOn Time specification when the facility will not be available for planned maintenance work (formatted in ISO-1806).
 * @property {string} outOfServiceReason Cause of the disruption.
 * @property {date} outOfServiceTo Time specification when the facility will be available again after planned maintenance work (formatted in ISO-1806).
 * @property {date} plannedCompletion Time specification when the repair is planned to be finished (formatted in ISO-1806).
 * @property {string} state Actual operational status.
 * @property {number} stationnumber Station number of the related facility.
 * @property {string} type The type of the related facility e.g. escalator or elevator.
 */

/**
 * @typedef facility
 * @memberof module:types
 * 
 * @property {string} description The local conditions of the facility.
 * @property {number} equipmentnumber Unique identifier of the facility.
 * @property {number} geocoordX longitude component of geocoordinate in WGS84 format
 * @property {number} geocoordY latitude component of geocoordinate in WGS84 format
 * @property {string} state Actual operational status.
 * @property {number} stationnumber Number of the station where the facility is located.
 * @property {string} type Facility type. Currently elevator or escalator.
 */

/**
 * @typedef point
 * @memberof module:types
 * 
 * @property {number[]} coordinates An array of numbers. First value is longitude, second latitude.
 * @property {string} type 
 */

/**
 * @typedef station
 * @memberof module:types
 * 
 * @property {module:types.facility[]} facilities 
 * @property {string} name Name of the station.
 * @property {number} stationnumber Unique identifier of the railway station.
 */
