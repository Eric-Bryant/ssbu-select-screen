<template>
  <div class="menu-wrapper">
    <FighterThumbnail
      v-for="(fighter, index) in this.$store.state.fighters"
      :key="index"
      :fighter="fighter"
    />
  </div>
</template>

<script>
import FighterThumbnail from './FighterThumbnail'

export default {
  name: 'FighterGrid',
  components: { FighterThumbnail },
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
