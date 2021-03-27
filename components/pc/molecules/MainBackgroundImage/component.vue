<template>
  <div class="MainBackgroundImage">
    <p class="MainBackgroundImage__body"></p>
  </div>
</template>

<script>
export default {
  name: 'MainBackgroundImage',
  data() {
    return {
      isRendered: false
    };
  },
  mounted() {
    this.isRendered = true;
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
