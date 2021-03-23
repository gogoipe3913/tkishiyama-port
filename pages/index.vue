<template>
  <div id="app">
    <div v-if="!isSp" class="cursor">
      <div ref="bigBall" class="cursor__ball cursor__ball--big ">
        <svg height="50" width="50">
          <circle cx="30" cy="30" r="20" stroke-width="0"></circle>
        </svg>
      </div>

      <div ref="smallBall" class="cursor__ball cursor__ball--small">
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" stroke-width="0"></circle>
        </svg>
      </div>
    </div>
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

    // Listeners
    document.body.addEventListener('mousemove', this.onMouseMove);
    for (let i = 0; i < hoverables.length; i++) {
      hoverables[i].addEventListener('mouseenter', this.onMouseHover);
      hoverables[i].addEventListener('mouseleave', this.onMouseHoverOut);
    }
  },
  methods: {
    onMouseMove(e) {
      const bigBall = this.$refs.bigBall;
      const smallBall = this.$refs.smallBall;

      TweenMax.to(bigBall, 0.65, {
        x: e.clientX - 25,
        y: e.clientY - 17.5
      });

      TweenMax.to(smallBall, 0.1, {
        x: e.clientX,
        y: e.clientY
      });
    },
    onMouseHover() {
      const bigBall = this.$refs.bigBall;
      TweenMax.to(bigBall, 0.3, {
        scale: 4
      });
    },
    onMouseHoverOut() {
      const bigBall = this.$refs.bigBall;
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

// オリジナルカーソルのスタイル
.cursor {
  pointer-events: none;

  &__ball {
    position: fixed;
    mix-blend-mode: difference;
    z-index: 1000;

    circle {
      fill: #f7f8fa;
    }
  }
}
</style>
