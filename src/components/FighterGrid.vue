<template>
  <transition name="fade-scale" mode="out-in">
    <div class="fighter-grid" v-if="sortType === 'Default'" :key="'Default'">
      <FighterThumbnail
        v-for="fighter in getFighters"
        :key="fighter.id"
        :fighter="fighter"
      />
    </div>
    <div class="fighter-grid" v-else-if="sortType === 'ID'" :key="'ID'">
      <FighterThumbnail
        v-for="fighter in orderByID"
        :key="fighter.id"
        :fighter="fighter"
      />
    </div>
    <div class="fighter-grid" v-else-if="sortType === 'Name'" :key="'Name'">
      <FighterThumbnail
        v-for="fighter in orderByName"
        :key="fighter.id"
        :fighter="fighter"
      />
    </div>
    <div
      class="fighter-grid"
      v-else-if="sortType === 'Franchise'"
      :key="'Franchise'"
    >
      <FighterThumbnail
        v-for="fighter in orderByFranchise"
        :key="fighter.id"
        :fighter="fighter"
      />
    </div>
  </transition>
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
    },
    orderByFranchise() {
      return [...this.getFighters].sort((a, b) => {
        let textA = a.franchise.toUpperCase()
        let textB = b.franchise.toUpperCase()

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
.fighter-grid {
  margin: 0 auto;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: 425px) {
    display: none;
  }
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s ease;
}

.fade-scale-enter,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
