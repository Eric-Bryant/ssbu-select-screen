<template>
  <div class="menu-wrapper" v-if="sortType === 'Default'">
    <FighterThumbnail
      v-for="fighter in getFighters"
      :key="fighter.id"
      :fighter="fighter"
    />
  </div>
  <div class="menu-wrapper" v-else-if="sortType === 'ID'">
    <FighterThumbnail
      v-for="fighter in orderByID"
      :key="fighter.id"
      :fighter="fighter"
    />
  </div>
  <div class="menu-wrapper" v-else-if="sortType === 'Name'">
    <FighterThumbnail
      v-for="fighter in orderByName"
      :key="fighter.id"
      :fighter="fighter"
    />
  </div>
</template>

<script>
import FighterThumbnail from './FighterThumbnail'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'FighterGrid',
  components: { FighterThumbnail },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getFighters']),
    ...mapState(['sortType']),
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
  margin: 0 auto;
  width: 85vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
}
</style>
