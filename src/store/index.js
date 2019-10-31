import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fighters: [
      {
        id: 1,
        name: 'Mario',
        thumbnail: '',
        franchise: '',
        isSelected: false
      },
      {
        id: 2,
        name: 'Luigi',
        thumbnail: '',
        franchise: '',
        isSelected: false
      },
      {
        id: 3,
        name: 'Bowser',
        thumbnail: '',
        franchise: '',
        isSelected: false
      }
    ]
  },
  getters: {
    getSelectedFighter: state => {
      let selectedFighter = state.fighters.filter(fighter => {
        return fighter.isSelected
      })

      if (selectedFighter.length > 0) {
        return selectedFighter[0].name
      } else {
        return ''
      }
    }
  },
  mutations: {
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
    setSelectedFighter: (context, fighter) => {
      context.commit('setSelectedFighter', fighter)
    }
  },
  modules: {}
})
