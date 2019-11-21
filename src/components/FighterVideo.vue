<template>
  <iframe
    width="560"
    height="315"
    :src="`https://www.youtube.com/embed/${this.videoID}`"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope;"
    allowfullscreen
    class="fighter-video"
  ></iframe>
</template>

<script>
export default {
  name: 'FighterVideo',
  props: {
    videoID: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.fighter-video {
  max-width: 100%;
}
</style>
