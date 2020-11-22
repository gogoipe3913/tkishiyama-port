<template>
  <div class="GlobalNavButton">
    <button class="GlobalNavButton__button" @click="rotateButtonLine">
      <div
        :class="[
          isRotated
            ? 'GlobalNavButton__buttonLine--posiRotated'
            : 'GlobalNavButton__buttonLine GlobalNavButton__buttonLinePosi'
        ]"
      ></div>
      <div
        :class="[
          isRotated
            ? 'GlobalNavButton__buttonLine--negaRotated'
            : 'GlobalNavButton__buttonLine GlobalNavButton__buttonLineNega'
        ]"
      ></div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'GlobalNavButton',
  props: {
    isNavDisplayed: Boolean
  },
  data() {
    return {
      isRotated: this.isNavDisplayed
    };
  },
  methods: {
    rotateButtonLine() {
      this.isRotated = !this.isRotated;
      this.$emit('clickedNavLine', this.isRotated);
      if (this.isRotated) {
        window.addEventListener('scroll', this.rotateButtonLineByScroll);
        this.firstScrollY = window.scrollY;
      } else {
        window.removeEventListener('scroll', this.rotateButtonLineByScroll);
      }
    },
    rotateButtonLineByScroll() {
      const scroll = window.scrollY;
      if (scroll > this.firstScrollY + 10 || scroll < this.firstScrollY - 10) {
        this.isRotated = false;
        this.$emit('clickedNavLine', this.isRotated);
        window.removeEventListener('scroll', this.rotateButtonLineByScroll);
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
