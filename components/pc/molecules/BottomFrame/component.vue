<template>
  <div class="BottomFrame">
    <p class="BottomFrame__scrollNum">
      {{ nowScrollNum }}
      <!-- <span class="BottomFrame__scrollNumText"></span> -->
    </p>
    <div class="BottomFrame__scrollNumLine"></div>
  </div>
</template>

<script>
export default {
  name: 'BottomFrame',
  data() {
    return {
      // totalScrollNum: this.totalScroll,
      nowScrollNum: 0
    };
  },
  mounted() {
    addEventListener('scroll', this.updateScrollNum);
  },
  methods: {
    updateScrollNum() {
      this.nowScrollNum = window.scrollY < 0 ? 0 : window.scrollY;
    }
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
