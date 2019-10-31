<template>
  <div class="menu-wrapper">
    <Fighter
      v-for="(fighter, index) in this.$store.state.fighters"
      :key="index"
      :fighter="fighter"
    />
  </div>
</template>

<script>
import Fighter from './Fighter'

export default {
  name: 'FighterGrid',
  components: { Fighter },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.menu-wrapper {
  margin: 0px auto 0;
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>
