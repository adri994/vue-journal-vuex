import * as actions from './actions'
import * as getters from './getter'
import * as mutations from './mutations'
import state from './state'

const myCustomModule = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default myCustomModule