<template>
  <div ref="nameLogoRef" class="NameLogo"></div>
</template>

<script>
import lottie from 'lottie-web';
import * as nameLogoData from '~/assets/json/data.json';
export default {
  name: 'NameLogo',
  mounted() {
    this.lottie = lottie.loadAnimation({
      container: this.$refs.nameLogoRef,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: nameLogoData.default
    });
    setTimeout(() => {
      this.$emit('nameLogoCreated', this.lottie);
    }, 5000);
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
