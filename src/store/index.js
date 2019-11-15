import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fighters: [],
    fightersLoaded: false,
    bioOpen: false
  },
  getters: {
    getFighters: state => {
      return state.fighters
    },
    getSelectedFighter: state => {
      let selectedFighter = state.fighters.find(fighter => {
        return fighter.isSelected
      })

      if (selectedFighter !== undefined) {
        return selectedFighter
      } else {
        return ''
      }
    }
  },
  mutations: {
    SET_INITIAL_FIGTHERS: (state, fighters) => {
      fighters.map(fighter => {
        fighter['isSelected'] = false
        state.fighters.push(fighter)
      })

      state.fightersLoaded = true
    },
    SET_SELECTED_FIGHTER: (state, selectedFighter) => {
      state.fighters.map(fighter => {
        if (fighter.name == selectedFighter) {
          fighter.isSelected = true
        } else {
          fighter.isSelected = false
          fighter.alt = 0
        }
      })
    },
    SET_FIGHTER_ALT: (state, fighter) => {
      state.fighters.map(character => {
        if (character.name == fighter.name) {
          character.alt = fighter.alt
        }
      })
    },
    SET_BIO_STATE: state => {
      state.bioOpen = !state.bioOpen
    }
  },
  actions: {
    setInitialFighterState: (context, fighters) => {
      context.commit('SET_INITIAL_FIGTHERS', fighters)
    },
    setSelectedFighterState: (context, fighter) => {
      context.commit('SET_SELECTED_FIGHTER', fighter)
    },
    setFighterAltState: (context, fighter) => {
      context.commit('SET_FIGHTER_ALT', fighter)
    },
    setBioOpenState: context => {
      context.commit('SET_BIO_STATE')
    }
  },
  modules: {}
})
