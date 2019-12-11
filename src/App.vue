<template>
  <div id="app">
    <TheHeader />
    <MobileMenu v-if="mobileMenuShowing" />
    <FighterGrid v-if="fightersLoaded" />
    <p class="loading-msg" v-else>Loading fighters...</p>
    <FighterSelected v-if="getSelectedFighter" :fighter="getSelectedFighter" />
    <FighterSelected v-else-if="fightersLoaded" />
    <transition name="fade-scale">
      <FighterBio v-if="bioOpen" :fighter="getSelectedFighter" />
    </transition>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'
import FighterGrid from './components/FighterGrid'
import FighterSelected from './components/FighterSelected'
import FighterBio from './components/FighterBio'
import MobileMenu from './components/MobileMenu'
import { mapActions, mapState, mapGetters } from 'vuex'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    TheHeader,
    FighterGrid,
    FighterSelected,
    FighterBio,
    MobileMenu
  },
  computed: {
    ...mapState(['fightersLoaded', 'bioOpen', 'mobileMenuShowing']),
    ...mapGetters(['getSelectedFighter'])
  },
  methods: {
    ...mapActions(['setInitialFighterState'])
  },
  created() {
    axios
      .get('https://ssbu-character-select.firebaseio.com/fighters.json')
      .then(response => {
        this.setInitialFighterState(response.data)
      })
      .catch(error => {
        alert(error)
      })
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}
body {
  background: #111111;
  min-height: 100vh;
}

img {
  max-width: 100%;
}

.loading-msg {
  font-family: 'Roboto Condensed', sans-serif;
  color: #e7e7e7;
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.4rem;
  text-transform: uppercase;
  text-shadow: 0px 0px 1px #111111, 1px 1px 1px #111111, 2px 2px 1px #111111,
    3px 3px 1px #111111;
  text-align: center;
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-scale-enter,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
