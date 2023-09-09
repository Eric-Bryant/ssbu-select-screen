<template>
  <div
    class="mobile-fighter-thumbnail"
    :class="{ 'mobile-fighter-thumbnail--selected': fighter.isSelected }"
    @click="selectFighter"
  >
    <img :src="getStockIcon(0)" class="mobile-fighter-thumbnail__stock-icon" />
    <p class="mobile-fighter-thumbnail__fighter-id">{{ parsedFighterID }}</p>
    <p class="mobile-fighter-thumbnail__name">{{ fighter.name }}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import fighterAssets from '../mixins/fighterAssets'

export default {
  name: 'MobileFighterThumbnails',
  props: {
    fighter: {
      type: Object,
      required: true
    }
  },
  mixins: [fighterAssets],
  computed: {
    ...mapState(['altOptionsShowing', 'mobileMenuShowing'])
  },
  methods: {
    ...mapActions([
      'setSelectedFighterState',
      'setAltOptionsShowingState',
      'setMobileMenuShowingState'
    ]),
    selectFighter() {
      this.fighter.isSelected = !this.fighter.isSelected

      if (this.fighter.isSelected) {
        this.setSelectedFighterState(this.fighter.name)

        const announcer = new Audio(
          require(`../assets/sounds/${this.parsedNameForAssets}.wav`)
        )

        announcer.play()
      } else {
        this.setSelectedFighterState('')
      }

      if (this.altOptionsShowing) {
        this.setAltOptionsShowingState()
      }

      if (this.mobileMenuShowing) {
        this.setMobileMenuShowingState()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-fighter-thumbnail {
  margin-right: 1rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 48px 0.125fr 1fr;
  align-items: center;

  &:nth-child(2) {
    margin-top: 1rem;
  }

  &--selected {
    border: 1px solid #e7e7e7;
  }

  &__stock-icon {
    width: 100%;
  }

  &__name,
  &__fighter-id {
    font-family: 'Roboto Condensed', sans-serif;
    color: #e7e7e7;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.4rem;
    text-transform: uppercase;
    text-shadow: 0px 0px 1px #111111, 1px 1px 1px #111111, 2px 2px 1px #111111,
      3px 3px 1px #111111;
  }
}
</style>
