import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
import state from './state'

const daybookModule = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default daybookModule