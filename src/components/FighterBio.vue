<template>
  <div class="modal" @click.self="closeBio">
    <div class="modal-box">
      <div class="modal-box__close-btn" @click="closeBio">X</div>
      <div class="fighter-profile">
        <img :src="getFranchiseLogo" class="fighter-profile__logo" />"
        <img :src="getSelectedFighterImage" class="fighter-profile__image" />
        <p class="fighter-profile__name">{{ fighter.name }}</p>
      </div>
      <div class="fighter-description">
        <p class="fighter-description__bio">{{ fighter.bio }}</p>
        <FighterVideo :videoID="fighter.videoID" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import fighterAssets from '../mixins/fighterAssets'
import FighterVideo from '../components/FighterVideo'

export default {
  name: 'FigherBio',
  components: { FighterVideo },
  props: {
    fighter: {
      type: Object,
      required: false
    }
  },
  mixins: [fighterAssets],
  methods: {
    ...mapActions(['setBioOpenState']),
    closeBio() {
      this.setBioOpenState()
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  z-index: 100;
  overflow-y: scroll;
}

.modal-box {
  position: absolute;
  width: 960px;
  max-width: 100%;
  background: #111;
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 20px;

  @media screen and (max-width: 769px) {
    grid-template-columns: 100%;
    top: 0px;
  }

  &__close-btn {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    background: #e7e7e7;
    font-size: 1.5rem;
    font-family: 'Roboto Condensed', sans-serif;
    padding: 10px 20px;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(#e7e7e7, 0.8);
    }
  }
}

.fighter-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media screen and (max-width: 600px) {
    padding: 20px 20px 0px 20px;
  }

  &__name {
    font-family: 'Roboto Condensed', sans-serif;
    color: #e7e7e7;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 2.5rem;
    line-height: 1.25em;
    text-transform: capitalize;
    text-shadow: 0px 0px 1px #111111, 1px 1px 1px #111111, 2px 2px 1px #111111,
      3px 3px 1px #111111, 4px 4px 1px #111111;
    text-align: center;
    margin: 20px 0px 0px 0px;
  }

  &__image {
    border-radius: 50%;
    border: 2px dashed white;
    object-fit: cover;
    object-position: 0% 0%;
    height: 350px;
    width: 350px;

    @media screen and (max-width: 769px) {
      width: 450px;
      height: 450px;
    }

    @media screen and (max-width: 425px) {
      width: 225px;
      height: 225px;
    }
  }

  &__logo {
    max-height: 150px;
  }
}

.fighter-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  justify-content: center;

  &__bio {
    font-family: 'Roboto Condensed', sans-serif;
    color: #e7e7e7;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 1.25rem;
    line-height: 1.25em;
    text-shadow: 0px 0px 1px #111111, 1px 1px 1px #111111, 2px 2px 1px #111111,
      3px 3px 1px #111111;
    margin: 0px 0px 20px 0px;
  }
}
</style>
