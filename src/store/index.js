import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fighters: [],
    fightersLoaded: false
  },
  getters: {
    getSelectedFighter: state => {
      let selectedFighter = state.fighters.find(fighter => {
        return fighter.isSelected
      })

      if (selectedFighter !== undefined) {
        return selectedFighter.name
      } else {
        return ''
      }
    }
  },
  mutations: {
    setInitialFighters: (state, fighters) => {
      fighters.map(fighter => {
        fighter['isSelected'] = false
        state.fighters.push(fighter)
      })

      state.fightersLoaded = true
    },
    setSelectedFighter: (state, selectedFighter) => {
      state.fighters.map(fighter => {
        if (fighter.name == selectedFighter) {
          fighter.isSelected = true
        } else {
          fighter.isSelected = false
        }
      })
    }
  },
  actions: {
    setInitialFighterState: (context, fighters) => {
      context.commit('setInitialFighters', fighters)
    },
    setSelectedFighter: (context, fighter) => {
      context.commit('setSelectedFighter', fighter)
    }
  },
  modules: {}
})
