import Vue from 'vue'
import Vuex from 'vuex'
import doctors from './doctors'
import bemors from './bemors'
import home from './home'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    doctors:[],
    bemors:[]
  },
  modules: {
    doctors,
    bemors,
    home
  }
})
