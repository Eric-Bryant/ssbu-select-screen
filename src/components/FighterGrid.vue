<template>
  <div class="menu-wrapper">
    <FighterThumbnail
      v-for="(fighter, index) in getFighters"
      :key="index"
      :fighter="fighter"
    />
  </div>
</template>

<script>
import FighterThumbnail from './FighterThumbnail'
import { mapGetters } from 'vuex'

export default {
  name: 'FighterGrid',
  components: { FighterThumbnail },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getFighters'])
  }
}
</script>

<style lang="scss" scoped>
.menu-wrapper {
  margin: 0px auto 0;
  width: 85vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>
