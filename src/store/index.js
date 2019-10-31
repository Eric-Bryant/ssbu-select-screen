import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedFighter: null
  },
  getters: {
    getSelectedFighter: state => {
      return state.selectedFighter
    }
  },
  mutations: {
    setSelectedFighter: (state, fighter) => {
      state.selectedFighter = fighter
    }
  },
  actions: {
    setSelectedFighter: (context, fighter) => {
      context.commit('setSelectedFighter', fighter)
    }
  },
  modules: {}
})
