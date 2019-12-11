<template>
  <div class="mobile-menu">
    <div class="menu-heading">
      <h2 class="menu-heading__title">SSBU Select</h2>
      <div class="menu-heading__close-btn" @click="setMobileMenuShowingState()">
        X
      </div>
    </div>
    <MobileFighterThumbnails
      v-for="fighter in getFighters"
      :key="fighter.id"
      :fighter="fighter"
    />
  </div>
</template>

<script>
import MobileFighterThumbnails from './MobileFighterThumbnails'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'MobileMenu',
  components: { MobileFighterThumbnails },
  props: [],
  mixins: [],
  computed: {
    ...mapState(['mobileMenuShowing']),
    ...mapGetters(['getFighters'])
  },
  methods: {
    ...mapActions(['setMobileMenuShowingState'])
  }
}
</script>

<style lang="scss" scoped>
.mobile-menu {
  position: absolute;
  width: 300px;
  height: 100vh;
  background: #111;
  z-index: 99;
  top: 0;
  left: 0;
  padding-left: 1rem;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

.menu-heading {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &__title {
    font-family: 'Roboto Condensed', sans-serif;
    color: #e7e7e7;
    margin: 0 auto 0 0;
  }

  &__close-btn {
    background: #e7e7e7;
    font-size: 1.5rem;
    font-family: 'Roboto Condensed', sans-serif;
    padding: 10px 20px;
    transition: all 0.3s ease;
  }
}
</style>
