import state from './state'
/* astheric is because we have to import many functions and a alias is required (mutations)*/
import * as mutations from './mutations'
import * as actions from './actions'
/* Para llamar por su nombre cada módulo (products, users,..) */
const namespaced = true

export default {
  namespaced,
  state,
  mutations,
  actions
}
