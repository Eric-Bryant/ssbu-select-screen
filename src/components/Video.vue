<template>
  <iframe
    width="560"
    height="315"
    :src="`https://www.youtube.com/embed/${this.videoID}`"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope;"
    allowfullscreen
  ></iframe>
</template>

<script>
export default {
  name: 'Video',
  props: ['videoID']
}
</script>

<style></style>
