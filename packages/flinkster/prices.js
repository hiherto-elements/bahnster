/** @module prices */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Prices of a rental object by query params. The params depend on the price determination strategy of the provider network.
 * 
 * @param {string} providernetworkUID 
 * @return {Promise<module:types.RentalObjectJO>} OK
 */
export function getPrices(providernetworkUID) {
  const parameters = {
    path: {
      providernetworkUID
    }
  }
  return gateway.request(getPricesOperation, parameters)
}

const getPricesOperation = {
  path: '/providernetworks/{providernetworkUID}/prices',
  method: 'get'
}
