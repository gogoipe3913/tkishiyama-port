<template>
  <div class="MainBackgroundImage">
    <p>
      <img
        :class="[
          isRendered
            ? 'MainBackgroundImage__body--show'
            : 'MainBackgroundImage__body'
        ]"
        src="../../../../assets/images/top-image-sp.jpg"
        alt="top-image"
      />
    </p>
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
