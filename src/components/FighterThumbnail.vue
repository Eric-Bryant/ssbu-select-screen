<template>
  <div
    class="fighter"
    :class="[{ selected: fighter.isSelected }, parsedNameForAssets]"
    @click="selectFighter"
  >
    <img :src="getThumbnailURL" alt />
    <p>{{ fighter.name }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FighterThumbnail',
  props: {
    fighter: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    parsedNameForAssets() {
      const parsedName = this.fighter.name
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/\./g, '')
        .replace(/&/g, 'and')

      return parsedName
    },
    getThumbnailURL() {
      return require(`../assets/thumbnails/${this.parsedNameForAssets}.png`)
    }
  },
  methods: {
    ...mapActions(['setSelectedFighterState']),
    selectFighter() {
      this.fighter.isSelected = !this.fighter.isSelected

      if (this.fighter.isSelected) {
        this.setSelectedFighterState(this.fighter.name)
      } else {
        this.setSelectedFighterState('')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fighter {
  position: relative;
  flex-basis: 125px;
  height: 84px;
  margin: 2.5px;

  &:hover {
    cursor: pointer;
  }

  &.selected {
    border: 5px solid #b3acb2;

    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 0;
      border: 5px solid #b3acb2;
      transform: rotate(45deg) translate(-4px, -1px);
      border-right: none;
    }

    &::after {
      position: absolute;
      content: '';
      right: 0;
      bottom: 0;
      width: 0;
      border: 5px solid #b3acb2;
      transform: rotate(45deg) translate(4px, 1px);
      border-right: none;
    }

    &:hover {
      box-shadow: none;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: blue;
  }

  p {
    position: absolute;
    width: 100%;
    bottom: 0;
    cursor: default;
    text-align: center;
    margin: 0;
    font-family: 'Roboto Condensed', sans-serif;
    color: #e7e7e7;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.4rem;
    text-transform: uppercase;
    text-shadow: 0px 0px 1px #111111, 1px 1px 1px #111111, 2px 2px 1px #111111,
      3px 3px 1px #111111;

    &:hover {
      cursor: pointer;
    }
  }

  &.mr-game-and-watch,
  &.pokemon-trainer,
  &.mii-swordfighter {
    p {
      font-size: 0.9rem;
    }
  }

  &.captain-falcon,
  &.piranha-plant {
    p {
      font-size: 1.1rem;
    }
  }

  &.zero-suit-samus,
  &.rosalina-and-luma {
    p {
      font-size: 1rem;
    }
  }
}
</style>
