<template>
  <div class="NavRouter">
    <div class="NavRouter__secondBackground">
      <ul class="NavRouter__items">
        <li class="NavRouter__item NavRouter__item--about">
          <nuxt-link class="NavRouter__itemButton" :to="topLink">
            <span class="NavRouter__itemButtonText">top</span>
          </nuxt-link>
        </li>
        <li class="NavRouter__item NavRouter__item--blog">
          <nuxt-link class="NavigationBar__itemButton" :to="blogLink">
            <span class="NavRouter__itemButtonText">blog</span>
          </nuxt-link>
        </li>
        <li class="NavRouter__item NavRouter__item--works">
          <nuxt-link class="NavRouter__itemButton" :to="workLink">
            <span class="NavRouter__itemButtonText">galleries</span>
          </nuxt-link>
        </li>
        <li class="NavRouter__item NavRouter__item--contact">
          <nuxt-link
            v-scroll-to="'#contact'"
            class="NavRouter__itemButton"
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
    blogLink: {
      type: String,
      required: false,
      default: '/blog'
    }
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
