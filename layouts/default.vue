<template>
  <div>
    <div v-if="!isSp" ref="cursor" class="cursor">
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
    <nuxt />
  </div>
</template>

<script>
import isMobile from 'ismobilejs';
import { TweenMax } from 'gsap';

export default {
  data() {
    return {
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
    for (const hoverable of hoverables) {
      hoverable.addEventListener('mouseenter', this.onMouseHover);
      hoverable.addEventListener('mouseleave', this.onMouseHoverOut);
      hoverable.addEventListener('click', this.onMouseHoverOut);
    }
  },
  methods: {
    onMouseMove(e) {
      const bigBall = this.$refs.bigBall;
      const smallBall = this.$refs.smallBall;
      const cursor = this.$refs.cursor;
      if (!cursor.style.display) {
        cursor.style.display = 'block';
      }

      TweenMax.to(bigBall, 0.65, {
        x: e.clientX - 25,
        y: e.clientY - 25.5
      });

      TweenMax.to(smallBall, 0.1, {
        x: e.clientX,
        y: e.clientY - 8
      });
    },
    onMouseHover(e) {
      const bigBall = this.$refs.bigBall;
      TweenMax.to(bigBall, 0.3, {
        scale: 3
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

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

// オリジナルカーソルのスタイル
.cursor {
  display: none;
  pointer-events: none;
  transition-duration: 3s;

  &__ball {
    position: fixed;
    mix-blend-mode: difference;
    z-index: $elevation-level5-z-index;

    circle {
      fill: #f7f8fa;
    }
  }
}

.hoverable {
  cursor: none;
}
</style>
