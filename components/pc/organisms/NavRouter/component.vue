<template>
  <div class="NavRouter">
    <div class="NavRouter__secondBackground">
      <ul class="NavRouter__items">
        <li class="NavRouter__item NavRouter__item--about">
          <nuxt-link class="NavRouter__itemButton hoverable" :to="topLink">
            <span class="NavRouter__itemButtonText">top</span>
          </nuxt-link>
        </li>
        <li class="NavRouter__item NavRouter__item--blog">
          <nuxt-link class="NavRouter__itemButton hoverable" :to="documentLink">
            <span class="NavRouter__itemButtonText">documents</span>
          </nuxt-link>
        </li>
        <li class="NavRouter__item NavRouter__item--works">
          <nuxt-link class="NavRouter__itemButton hoverable" :to="workLink">
            <span class="NavRouter__itemButtonText">galleries</span>
          </nuxt-link>
        </li>
        <li class="NavRouter__item NavRouter__item--contact">
          <nuxt-link
            v-scroll-to="'#contact'"
            class="NavRouter__itemButton hoverable"
            :to="topLink + '#contact'"
          >
            <span class="NavRouter__itemButtonText">contact</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { TweenMax } from 'gsap';
export default {
  name: 'NavRouter',
  props: {
    topLink: {
      type: String,
      required: false,
      default: '/'
    },
    workLink: {
      type: String,
      required: false,
      default: '/gallery'
    },
    documentLink: {
      type: String,
      required: false,
      default: '/documents'
    }
  },
  mounted() {
    // TODO: 各所にカーソルホバー用のイベントリスナーが書かれているので後でまとめる
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

<style scoped lang="scss">
@import './style.scss';
</style>
