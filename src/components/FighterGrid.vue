<template>
  <div class="menu-wrapper">
    <FighterThumbnail
      v-for="fighter in getFighters"
      :key="fighter.id"
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
    ...mapGetters(['getFighters']),
    orderByID() {
      return [...this.getFighters].sort((a, b) => {
        return a.id - b.id
      })
    },
    orderByName() {
      return [...this.getFighters].sort((a, b) => {
        let textA = a.name.toUpperCase()
        let textB = b.name.toUpperCase()

        if (textA < textB) {
          return -1
        } else if (textA > textB) {
          return 1
        } else {
          return 0
        }
      })
    }
  },
  methods: {
    showFranchiseOnly(franchise) {
      return this.getFighters.filter(fighter => {
        return fighter.franchise == franchise
      })
    }
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
