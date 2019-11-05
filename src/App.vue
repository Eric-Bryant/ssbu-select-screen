<template>
  <div id="app">
    <Header />
    <FighterGrid v-if="this.$store.state.fightersLoaded" />
    <p class="loading-msg" v-else>Loading fighters...</p>
  </div>
</template>

<script>
import Header from './components/Header'
import FighterGrid from './components/FighterGrid'
import { mapActions } from 'vuex'
import axios from 'axios'

export default {
  name: 'app',
  components: { Header, FighterGrid },
  methods: {
    ...mapActions(['setInitialFighterState'])
  },
  created() {
    axios
      .get('https://ssbu-select-screen.firebaseio.com/fighters.json')
      .then(response => {
        this.setInitialFighterState(response.data)
      })
      .catch(error => {
        console.log(error)
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
</style>
