<template>
  <div ref="blogLogoRef" class="BlogLogo"></div>
</template>

<script>
import lottie from 'lottie-web';
import * as blogLogoData from '~/assets/json/data-blog.json';
export default {
  name: 'BlogLogo',
  mounted() {
    this.lottie = lottie.loadAnimation({
      container: this.$refs.blogLogoRef,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: blogLogoData.default
    });
    setTimeout(() => {
      this.$emit('blogLogoCreated', this.lottie);
    }, 5000);
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
