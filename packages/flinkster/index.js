/** @module index */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Show Service index.
 */
export function getIndex() {
  return gateway.request(getIndexOperation)
}

const getIndexOperation = {
  path: '/index',
  method: 'get'
}
