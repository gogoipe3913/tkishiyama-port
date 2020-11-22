<template>
  <div id="app">
    <!-- <Loading v-show="loading" /> -->
    <TopView v-if="!isSp" />
    <TopViewSp v-if="isSp" />
  </div>
</template>

<script>
import isMobile from 'ismobilejs';
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
