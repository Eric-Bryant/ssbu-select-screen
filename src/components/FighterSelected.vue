<template>
  <div class="character-selection">
    <div class="character-portrait">
      <div class="selected-fighter">
        <img :src="getFullCharacterImage" />
        <p>{{ fighter.name }}</p>
        <p>Info</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FighterSelected',
  props: ['fighter'],
  computed: {
    parsedNameForAssets() {
      const parsedName = this.fighter.name
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/\./g, '')
        .replace(/&/g, 'and')

      return parsedName
    },
    getFullCharacterImage() {
      return require(`../assets/characters/${this.parsedNameForAssets}.png`)
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
}

.character-portrait {
  padding: 20px;
  border-radius: 15px;
  width: 275px;
  height: auto;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom right, #e52521, #049cd8);
  transition: opacity 0.3s ease;

  p {
    font-family: 'Roboto Condensed', sans-serif;
    color: #e7e7e7;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 2rem;
    text-align: center;
    line-height: 1;
    text-shadow: 0px 2px 10px #111;
    margin: 0 0 10px 0;
  }

  p:last-child {
    font-size: 1.2rem;
    margin: 0;
    position: relative;
    cursor: pointer;
    border: 2px solid #e7e7e7;
    padding: 5px;
    border-radius: 10px;
    background: linear-gradient(to right, #e52521, #111);
    z-index: 100;

    &:before {
      content: '';
      background-image: linear-gradient(to right, #111, #43b047);
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: -100;
      border-radius: 7px;
    }

    &:hover:before {
      opacity: 1;
    }
  }

  .selected-fighter img {
    object-fit: contain;
    max-height: 235px;
    width: 100%;
  }
}
</style>
