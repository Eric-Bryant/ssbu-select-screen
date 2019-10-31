<template>
  <div id="app">
    <Header />
    <FighterGrid />
  </div>
</template>

<script>
import Header from './components/Header'
import FighterGrid from './components/FighterGrid'

export default {
  name: 'app',
  components: { Header, FighterGrid }
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
