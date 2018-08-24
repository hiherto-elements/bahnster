/** @module providernetworks */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get information about the ProviderNetworkResources.
 * 
 * @param {string} uid 
 * @return {Promise<module:types.RentalObjectJO>} OK
 */
export function getProviderNetwork(uid) {
  const parameters = {
    path: {
      uid
    }
  }
  return gateway.request(getProviderNetworkOperation, parameters)
}

const getProviderNetworkOperation = {
  path: '/providernetworks/{uid}',
  method: 'get'
}
