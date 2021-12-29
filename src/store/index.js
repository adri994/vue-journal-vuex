import { createStore } from 'vuex'
import daybook from '../modules/daybook/store/daybook'

const store = createStore({
  modules: {
    daybook
  }
  
})

export default store