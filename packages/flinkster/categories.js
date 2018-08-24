/** @module categories */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Search for categorie.
 * 
 * @param {string} providernetworkUID 
 * @param {object} options Optional options
 * @param {string} [options.expand] 
 * @return {Promise<module:types.CategoryJO>} OK
 */
export function listCategories(providernetworkUID, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      providernetworkUID
    },
    query: {
      expand: options.expand
    }
  }
  return gateway.request(listCategoriesOperation, parameters)
}

/**
 * Search for categorie.
 * 
 * @param {string} providernetworkUID Provider Network UID
 * @param {string} categoryUID 
 * @param {object} options Optional options
 * @param {string} [options.expand] 
 * @return {Promise<module:types.CategoryJO>} OK
 */
export function getCategory(providernetworkUID, categoryUID, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      providernetworkUID,
      categoryUID
    },
    query: {
      expand: options.expand
    }
  }
  return gateway.request(getCategoryOperation, parameters)
}

const listCategoriesOperation = {
  path: '/providernetworks/{providernetworkUID}/categories',
  method: 'get'
}

const getCategoryOperation = {
  path: '/providernetworks/{providernetworkUID}/categories/{categoryUID}',
  method: 'get'
}
