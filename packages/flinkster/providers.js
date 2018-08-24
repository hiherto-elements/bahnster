/** @module providers */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get information about the ProviderResourcesCtrl.
 * 
 * @param {string} uid 
 * @return {Promise<module:types.RentalObjectJO>} OK
 */
export function getProvider(uid) {
  const parameters = {
    path: {
      uid
    }
  }
  return gateway.request(getProviderOperation, parameters)
}

const getProviderOperation = {
  path: '/providers/{uid}',
  method: 'get'
}
