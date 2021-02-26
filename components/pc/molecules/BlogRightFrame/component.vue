<template>
  <div class="BlogRightFrame">
    <p class="BlogRightFrame__text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'BlogRightFrame',
  props: {
    displayText: {
      type: String,
      required: false,
      default: 'TAIKI KISHIYAMA'
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
