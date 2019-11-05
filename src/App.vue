<template>
  <div id="app">
    <Header />
    <FighterGrid v-if="this.$store.state.fightersLoaded" />
    <p v-else style="color: white; text-align: center">Loading fighters...</p>
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
</style>
