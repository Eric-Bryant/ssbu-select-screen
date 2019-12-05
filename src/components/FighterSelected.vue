<template>
  <div class="fighter-selection">
    <div class="fighter-selection-box">
      <div class="fighter-portrait">
        <div class="selected-fighter">
          <transition name="slide-fade">
            <img
              v-if="fighter.id != null"
              :src="getSelectedFighterImage"
              :key="fighter.name"
              @click="showAltOptions"
              :class="parsedNameForAssets"
              class="selected-fighter__image"
            />
          </transition>
          <div class="alt-options" v-if="altOptionsShowing">
            <div
              class="alt-options__close-btn"
              @click="setAltOptionsShowingState()"
            >
              X
            </div>
            <div class="alt-icons">
              <img
                :src="getStockIcon(0)"
                @click="changeFighterAltSpecific(0)"
                class="alt-icons__image"
              />
              <img
                :src="getStockIcon(1)"
                @click="changeFighterAltSpecific(1)"
                class="alt-icons__image"
              />
              <img
                :src="getStockIcon(2)"
                @click="changeFighterAltSpecific(2)"
                class="alt-icons__image"
              />
              <img
                :src="getStockIcon(3)"
                @click="changeFighterAltSpecific(3)"
                class="alt-icons__image"
              />
              <img
                :src="getStockIcon(4)"
                @click="changeFighterAltSpecific(4)"
                class="alt-icons__image"
              />
              <img
                :src="getStockIcon(5)"
                @click="changeFighterAltSpecific(5)"
                class="alt-icons__image"
              />
              <img
                :src="getStockIcon(6)"
                @click="changeFighterAltSpecific(6)"
                class="alt-icons__image"
              />
              <img
                :src="getStockIcon(7)"
                @click="changeFighterAltSpecific(7)"
                class="alt-icons__image"
              />
            </div>
          </div>
        </div>
        <div class="fighter-info-wrapper">
          <div class="fighter-info">
            <transition name="slide-fade-vertical">
              <img
                class="fighter-info__series-icon"
                :src="getSeriesIcon"
                :key="fighter.franchise"
              />
            </transition>
            <p class="fighter-info__name">{{ fighter.name }}</p>
            <button
              v-if="fighter.id != null"
              class="fighter-info__btn"
              @click="openBio"
            >
              View Bio
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import fighterAssets from '../mixins/fighterAssets'

export default {
  name: 'FighterSelected',
  props: {
    fighter: {
      type: Object,
      required: false,
      default: function() {
        return {
          alt: 0,
          bio: null,
          franchise: 'Default',
          id: null,
          isSelected: null,
          name: '',
          videoID: null
        }
      }
    }
  },
  mixins: [fighterAssets],
  computed: {
    ...mapState(['altOptionsShowing'])
  },
  methods: {
    ...mapActions([
      'setFighterAltState',
      'setBioOpenState',
      'setAltOptionsShowingState'
    ]),
    changeFighterAlt() {
      if (this.fighter.alt < 7 && !this.parsedNameForAssets.includes('mii')) {
        this.fighter.alt++
        this.setFighterAltState(this.fighter)
      } else if (this.fighter.alt == 7) {
        this.fighter.alt = 0
        this.setFighterAltState(this.fighter)
      }
    },
    changeFighterAltSpecific(altNumber) {
      if (!this.parsedNameForAssets.includes('mii')) {
        this.fighter.alt = altNumber
        this.setFighterAltState(this.fighter)
        this.setAltOptionsShowingState()
      }
    },
    showAltOptions() {
      if (!this.parsedNameForAssets.includes('mii')) {
        this.setAltOptionsShowingState()
      }
    },
    openBio() {
      this.setBioOpenState()

      if (this.altOptionsShowing) {
        this.setAltOptionsShowingState()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fighter-selection {
  display: flex;
  justify-content: center;
  width: 100vw;
  margin: 10px 0 0 0;
  padding: 11px 0;
  background: linear-gradient(90deg, #462c97, #462c97, #6ad3ed, #6ad3ed, white);
}

.fighter-selection-box {
  margin: 10px;
  width: 600px;
  overflow: hidden;
  position: relative;
  border-top: 8px solid black;
  border-left: 3px solid black;
  border-bottom: 3px solid black;
  border-right: 3px solid black;
  clip-path: polygon(35px 0, 100% 0, 100% 100%, 0 100%, 0 35px);

  &:after {
    position: absolute;
    content: '';
    top: 0px;
    left: -40px;
    width: 125px;
    height: 15px;
    z-index: 99;
    background: black;
    transform: rotate(-45deg);
  }
}

.fighter-portrait {
  padding: 0px;
  width: 100%;
  height: auto;
  display: flex;
  background: linear-gradient(
    35deg,
    rgba(209, 127, 139, 1) 15%,
    rgba(209, 127, 139, 1) 15%,
    rgba(200, 76, 113, 1) 15.5%,
    rgba(200, 76, 113, 1) 25%,
    rgba(176, 29, 98, 1) 25.5%,
    rgba(176, 29, 98, 1) 45%,
    rgba(184, 181, 210, 1) 45.5%
  );
  transition: opacity 0.3s ease;
}

.selected-fighter {
  flex-basis: 45%;
  z-index: 1;
  height: 270px;
  position: relative;

  @media screen and (max-width: 425px) {
    max-height: 200px;
  }

  @media screen and (max-width: 375px) {
    max-height: 175px;
  }

  @media screen and (max-width: 350px) {
    max-height: 145px;
  }

  &__image {
    width: 110%;
    max-width: 110%;
    cursor: pointer;

    @media screen and (max-width: 425px) {
      transform: translate(0px, 10px);
    }
  }

  .mii-brawler,
  .mii-swordfighter,
  .mii-gunner {
    cursor: initial;
  }
}

.alt-options {
  position: absolute;
  top: 0;
  width: 110%;
  height: 100%;
  background: rgba(#111, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__close-btn {
    position: absolute;
    cursor: pointer;
    top: 0px;
    padding: 5px 15px;
    background: #e7e7e7;
    font-size: 1rem;
    font-family: 'Roboto Condensed', sans-serif;

    @media screen and (max-width: 600px) {
      font-size: 0.75rem;
      padding: 5px 10px;
    }
  }
}

.alt-icons {
  display: flex;
  justify-content: center;
  align-self: flex-start;
  flex-wrap: wrap;
  margin-top: auto;
  width: 80%;

  &__image {
    width: 48px;
    cursor: pointer;
    @media screen and (max-width: 425px) {
      width: 32px;
    }

    @media screen and (max-width: 350px) {
      width: 24px;
    }
  }
}

.fighter-info-wrapper {
  flex-basis: 55%;
  width: 100%;
  margin-top: -10px;
  position: relative;
  z-index: 2;

  &:after {
    content: '';
    position: absolute;
    background: #ff3737;
    bottom: 0;
    right: -25px;
    width: 50px;
    height: 150px;
    z-index: -1;
  }
}

.fighter-info {
  width: 100%;
  height: 100%;
  display: flex;
  padding-right: 25px;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  transform: skewX(-10deg);
  z-index: 0;
  background: linear-gradient(
    25deg,
    rgba(251, 127, 109, 1) 0%,
    rgba(251, 127, 109, 1) 5%,
    rgba(220, 63, 59, 1) 5.5%,
    rgba(220, 63, 59, 1) 10%,
    rgba(180, 3, 3, 1) 10.5%,
    rgba(180, 3, 3, 1) 30%,
    rgba(255, 55, 55, 1) 30.5%,
    rgba(255, 55, 55, 1) 100%
  );

  @media screen and (max-width: 425px) {
    padding-right: 15px;
  }

  &:before {
    content: '';
    position: absolute;
    left: -8px;
    top: 0;
    width: 8px;
    height: 100%;
    background: rgba(#333, 0.3);
  }

  &__series-icon {
    transform: skewX(10deg);
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
    opacity: 0.8;

    @media screen and (max-width: 425px) {
      top: 5px;
    }
  }

  &__name {
    transform: skewX(10deg);
    font-family: 'Roboto Condensed', sans-serif;
    color: #e7e7e7;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 1.75rem;
    line-height: 1em;
    text-transform: capitalize;
    text-shadow: 0px 0px 1px #111111, 1px 1px 1px #111111, 2px 2px 1px #111111,
      3px 3px 1px #111111, 4px 4px 1px #111111;
    margin-bottom: 10px;

    @media screen and (max-width: 425px) {
      font-size: 1.25rem;
    }
  }

  &__btn {
    transform: skewX(10deg);
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.15rem;
    letter-spacing: 0.5px;
    padding: 2px 0px;
    font-weight: 700;
    background: #f9a09e;
    border: 2px solid #111;
    outline: none;
    cursor: pointer;
    width: 75%;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.75;
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.8s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translate(100px, 0px);
}

.slide-fade-vertical-enter-active {
  transition: all 0.8s ease;
}

.slide-fade-vertical-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-vertical-enter,
.slide-fade-vertical-leave-to {
  transform: translate(0px, -100px) skewX(10deg) !important;
  opacity: 0 !important;
}
</style>
