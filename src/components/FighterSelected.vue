<template>
  <div class="character-selection">
    <div class="select-box">
      <div class="select-border-top"></div>
      <div class="select-border-left"></div>
      <div class="character-portrait">
        <div class="selected-fighter">
          <img :src="getSelectedFighterImage" />
          <!-- <p>{{ fighter.name }}</p>
          <p @click="changeFighterAlt">Info</p>-->
        </div>
        <div class="fighter-info-wrapper">
          <div class="fighter-info">
            <p>{{ fighter.name }}</p>
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
    }
  },
  methods: {
    ...mapActions(['setFighterAltState']),
    changeFighterAlt() {
      if (this.fighter.alt < 7 && !this.parsedNameForAssets.includes('mii')) {
        this.fighter.alt++
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
    rgba(176, 29, 98, 1) 55%,
    rgba(184, 181, 210, 1) 55.5%
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
      width: 105%;
      height: 100%;
      margin-bottom: -5px;
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
      right: -30px;
      width: 50px;
      height: 150px;
      z-index: 0;
    }
  }

  .fighter-info {
    width: 100%;
    height: 100%;
    transform: skewX(-10deg);
    z-index: 0;
    background: linear-gradient(
      35deg,
      rgba(251, 127, 109, 1) 0%,
      rgba(251, 127, 109, 1) 5%,
      rgba(220, 63, 59, 1) 5%,
      rgba(220, 63, 59, 1) 10%,
      rgba(180, 3, 3, 1) 10%,
      rgba(180, 3, 3, 1) 40%,
      rgba(255, 55, 55, 1) 40%,
      rgba(255, 55, 55, 1) 100%
    );

    &:before {
      content: '';
      position: absolute;
      left: -8px;
      top: 0;
      width: 8px;
      height: 100%;
      background: rgba(#333, 0.3);
    }
  }
}
</style>
