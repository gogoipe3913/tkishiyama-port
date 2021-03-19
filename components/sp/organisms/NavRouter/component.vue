<template>
  <div class="NavRouter">
    <div class="NavRouter__secondBackground">
      <ul class="NavRouter__items">
        <li class="NavRouter__item NavRouter__itemAbout">
          <nuxt-link class="NavRouter__itemButton" :to="topLink">
            <span class="NavRouter__itemButtonText">top</span>
          </nuxt-link>
        </li>
        <li class="NavRouter__item NavRouter__itemWorks">
          <nuxt-link class="NavRouter__itemButton" :to="workLink">
            <span class="NavRouter__itemButtonText">galleries</span>
          </nuxt-link>
        </li>
        <li class="NavRouter__item NavRouter__itemBlog">
          <nuxt-link class="NavigationBar__itemButton" :to="documentLink">
            <span class="NavRouter__itemButtonText">documents</span>
          </nuxt-link>
        </li>
        <li class="NavRouter__item NavRouter__itemContact">
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
    documentLink: {
      type: String,
      required: false,
      default: '/documents'
    }
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
