<template>
  <div class="character-selection">
    <div class="select-box">
      <div class="select-border-top"></div>
      <div class="select-border-left"></div>
      <div class="character-portrait">
        <div class="selected-fighter">
          <img
            :src="getSelectedFighterImage"
            @click="changeFighterAlt"
            title="Click to Change Alternate Costumes"
          />
        </div>
        <div class="fighter-info-wrapper">
          <div class="fighter-info">
            <img class="series-icon" :src="getSeriesIcon" />
            <p class="fighter-name">{{ fighter.name }}</p>
            <button class="more-info">View Bio</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import parsedNameMixin from '../mixins/parsedNameMixin'

export default {
  name: 'FighterSelected',
  props: {
    fighter: {
      type: Object,
      required: true
    }
  },
  mixins: [parsedNameMixin],
  data() {
    return {}
  },
  computed: {
    getSelectedFighterImage() {
      return require(`../assets/characters/${this.parsedNameForAssets}/selected${this.fighter.alt}-min.png`)
    },
    getSeriesIcon() {
      return require(`../assets/series-icons/${this.parsedFranchiseForAssets}.png`)
    }
  },
  methods: {
    ...mapActions(['setFighterAltState']),
    changeFighterAlt() {
      if (this.fighter.alt < 7 && !this.parsedNameForAssets.includes('mii')) {
        this.fighter.alt++
        this.setFighterAltState(this.fighter)
      } else if (this.fighter.alt == 7) {
        this.fighter.alt = 0
        this.setFighterAltState(this.fighter)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.character-selection {
  display: flex;
  justify-content: center;
  width: 100vw;
  margin: 10px 0 0 0;
  background: lightblue;
}

.select-box {
  margin: 10px;
  width: 525px;
  overflow: hidden;
  position: relative;
  border-bottom: 3px solid black;
  border-right: 3px solid black;

  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-bottom: 50px solid transparent;
    border-left: 50px solid lightblue;
    z-index: 99;
  }

  &:after {
    position: absolute;
    content: '';
    top: 0px;
    left: -25px;
    width: 125px;
    height: 15px;
    z-index: 99;
    background: black;
    transform: rotate(-45deg);
  }
}

.select-border-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background: black;
  z-index: 5;
}

.select-border-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: black;
  z-index: 5;
}

.character-portrait {
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

  .selected-fighter {
    flex-basis: 45%;
    z-index: 1;
    position: relative;
    overflow: hidden;

    img {
      object-fit: contain;
      max-height: 235px;
      width: 100%;
      height: 100%;
      margin-bottom: -5px;
      cursor: pointer;
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

    .fighter-name {
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

    .more-info {
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

    .series-icon {
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
  }
}
</style>
