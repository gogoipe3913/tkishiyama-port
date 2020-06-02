<template>
  <div v-show="loading" class="Loading">
    <div class="Loading__fullview">
      <div class="Loading__loadingSpacer"></div>
      <vue-loading
        type="bars"
        color="#fff"
        :size="{ width: '100px', height: '100px' }"
      >
      </vue-loading>
    </div>
  </div>
</template>

<script>
import { VueLoading } from 'vue-loading-template';

export default {
  name: 'Loading',
  components: {
    VueLoading
  },
  data() {
    return {
      loading: true
    };
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
