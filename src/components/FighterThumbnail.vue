<template>
  <div
    class="fighter-thumbnail"
    :class="{ 'fighter-thumbnail--selected': fighter.isSelected }"
    @click="selectFighter"
  >
    <img :src="getThumbnailURL" class="fighter-thumbnail__image" />
    <p class="fighter-thumbnail__name">{{ fighter.name }}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import fighterAssets from '../mixins/fighterAssets'

export default {
  name: 'FighterThumbnail',
  props: {
    fighter: {
      type: Object,
      required: true
    }
  },
  mixins: [fighterAssets],
  computed: {
    ...mapState(['altOptionsShowing'])
  },
  methods: {
    ...mapActions(['setSelectedFighterState', 'setAltOptionsShowingState']),
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
    }
  }
}
</script>

<style lang="scss" scoped>
.fighter-thumbnail {
  position: relative;
  // flex-basis: 125px;
  flex-basis: calc(100vw / 14);
  height: 84px;
  margin: 2.5px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-basis: calc(100vw / 13);
  }

  &--selected {
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

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__name {
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

    @media screen and (max-width: 1500px) {
      font-size: 1rem;
      line-height: 1.25em;
    }

    @media screen and (max-width: 1024px) {
      font-size: 14px;
      line-height: 1.25em;
    }

    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
}

@for $i from 1 through 85 {
  .fighter-thumbnail:nth-child(#{$i}) .fighter-thumbnail__image {
    background: linear-gradient(to bottom right, #37c4ef, #e9c531);
    background-size: 400% 400%;
    background-position: 0% 0%;
    animation: animateFighterThumbnail 8s infinite alternate;
    @if ($i >= 1 and $i <= 10) {
    } @else if ($i >= 14 and $i <= 22) {
    } @else if ($i >= 27 and $i <= 34) {
    } @else if ($i >= 40 and $i <= 46) {
    } @else if ($i >= 53 and $i <= 58) {
    } @else if ($i >= 66 and $i <= 70) {
    } @else if ($i == 79) {
    } @else {
      background-position: 100% 100%;
      animation-delay: 4s;
      animation-direction: alternate-reverse;
    }
  }
}

@keyframes animateFighterThumbnail {
  from {
    background-position: 0% 0%;
  }

  to {
    background-position: 100% 100%;
  }
}
</style>
