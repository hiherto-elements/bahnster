/** @module rentalobjects */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get information about the Rental Object.
 * 
 * @param {string} rentalObjectUID 
 * @param {string} providernetworkUID 
 * @param {object} options Optional options
 * @param {string} [options.expand] 
 * @return {Promise<module:types.RentalObjectJO>} OK
 */
export function getRentalObject(rentalObjectUID, providernetworkUID, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      rentalObjectUID,
      providernetworkUID
    },
    query: {
      expand: options.expand
    }
  }
  return gateway.request(getRentalObjectOperation, parameters)
}

const getRentalObjectOperation = {
  path: '/providernetworks/{providernetworkUID}/rentalobjects/{rentalObjectUID}',
  method: 'get'
}
