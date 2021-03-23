<template>
  <div id="app">
    <!-- <Loading v-show="loading" /> -->
    <TopView v-if="!isSp" />
    <TopViewSp v-if="isSp" />
  </div>
</template>

<script>
import isMobile from 'ismobilejs';
import { TweenMax } from 'gsap';
import TopView from '~/components/pc/templates/TopView/component.vue';
import TopViewSp from '~/components/sp/templates/TopView/component.vue';

export default {
  name: 'App',
  components: {
    TopView,
    TopViewSp
  },
  data() {
    return {
      loading: true,
      isSp: false
    };
  },
  created() {
    // eslint-disable-next-line nuxt/no-globals-in-created
    this.isSp = isMobile(window.navigator).phone;
  },
  mounted() {
    const hoverables = document.querySelectorAll('.hoverable');
    for (const hoverable of hoverables) {
      hoverable.addEventListener('mouseenter', this.onMouseHover);
      hoverable.addEventListener('mouseleave', this.onMouseHoverOut);
      hoverable.addEventListener('click', this.onMouseHoverOut);
    }
  },
  methods: {
    onMouseHover(e) {
      const bigBall = document.querySelector('.cursor__ball--big');

      TweenMax.to(bigBall, 0.3, {
        scale: 3
      });
    },
    onMouseHoverOut() {
      const bigBall = document.querySelector('.cursor__ball--big');

      TweenMax.to(bigBall, 0.3, {
        scale: 1
      });
    }
  }
};
</script>

<style lang="scss">
@import '~/assets/sass/index.scss';
#app {
  color: #fff;
  background-color: $global-color-gray-1;
}
</style>
