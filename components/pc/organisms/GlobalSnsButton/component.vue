<template>
  <div class="GlobalSnsButton">
    <button class="GlobalSnsButton__button" @click="rotateButtonLine">
      <div
        :class="[
          isRotated
            ? 'GlobalSnsButton__buttonLine--rotated'
            : 'GlobalSnsButton__buttonLine'
        ]"
      ></div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'GlobalSnsButton',
  props: {
    isSnsDisplayed: Boolean
  },
  data() {
    return {
      isRotated: this.isSnsDisplayed,
      firstScrollY: 0
    };
  },
  methods: {
    rotateButtonLine() {
      this.isRotated = !this.isRotated;
      this.$emit('clickedSnsLine', this.isRotated);
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
        this.$emit('clickedSnsLine', this.isRotated);
        window.removeEventListener('scroll', this.rotateButtonLineByScroll);
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
