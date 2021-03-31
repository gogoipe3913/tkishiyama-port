<template>
  <div class="GalleryRightFrame">
    <p class="GalleryRightFrame__text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'GalleryRightFrame',
  props: {
    displayText: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      text: this.displayText
    };
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
