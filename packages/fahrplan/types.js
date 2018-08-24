/** @module types */
// Auto-generated, edits will be overwritten

/**
 * @typedef Board
 * @memberof module:types
 * 
 * @property {string} boardId 
 * @property {string} dateTime 
 * @property {string} detailsId 
 * @property {string} name Name of train
 * @property {string} origin 
 * @property {string} stopId 
 * @property {string} stopName 
 * @property {string} track 
 * @property {string} type 
 */

/**
 * @typedef BoardResponse
 * @memberof module:types
 * 
 * @property {module:types.Board[]} boards 
 */

/**
 * @typedef ErrorModel
 * @memberof module:types
 * 
 * @property {number} code 
 * @property {number} internal_code 
 * @property {string} internal_message 
 * @property {string} message 
 */

/**
 * @typedef JourneyResponse
 * @memberof module:types
 * 
 * @property {module:types.TrainLocation[]} train_locs 
 */

/**
 * @typedef Location
 * @memberof module:types
 * 
 * @property {string} id id of location (eva-number), example: 8000105
 * @property {number} lat latitude, example: 50.107149
 * @property {number} lon longitude, example: 8.663785
 * @property {string} name Name of location, example: Frankfurt(Main)Hbf
 */

/**
 * @typedef LocationResponse
 * @memberof module:types
 * 
 * @property {module:types.Location[]} locations 
 */

/**
 * @typedef TrainLocation
 * @memberof module:types
 * 
 * @property {string} arrTime 
 * @property {string} depTime 
 * @property {number} lat 
 * @property {number} lon 
 * @property {string} operator 
 * @property {string} stopId 
 * @property {string} stopName 
 * @property {string} train 
 * @property {string} type 
 */
