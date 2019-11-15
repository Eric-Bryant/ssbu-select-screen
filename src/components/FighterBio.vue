<template>
  <div class="modal">
    <p @click="closeBio">{{ fighter.name }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FigherBio',
  props: {
    fighter: {
      type: Object,
      required: false
    }
  },
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  z-index: 100;

  p {
    color: white;
    font-size: 2rem;
  }
}
</style>
