/** @module bookingproposals */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Here you can query all bookable Rental Objects with different Parameters (Time, Location,...)
 * 
 * @param {object} options Optional options
 * @param {number} [options.lat] 
 * @param {number} [options.lon] 
 * @param {number} [options.radius] 
 * @param {number} [options.offset] 
 * @param {number} [options.limit] 
 * @param {string} [options.providernetwork] 
 * @param {string} [options.begin] 
 * @param {string} [options.end] 
 * @param {string} [options.expand] 
 * @param {string} [options.view] 
 * @return {Promise<module:types.RentalObjectJO>} OK
 */
export function listBookingProposals(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      lat: options.lat,
      lon: options.lon,
      radius: options.radius,
      offset: options.offset,
      limit: options.limit,
      providernetwork: options.providernetwork,
      begin: options.begin,
      end: options.end,
      expand: options.expand,
      view: options.view
    }
  }
  return gateway.request(listBookingProposalsOperation, parameters)
}

const listBookingProposalsOperation = {
  path: '/bookingproposals',
  method: 'get'
}
