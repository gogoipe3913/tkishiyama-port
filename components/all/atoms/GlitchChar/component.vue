<template>
  <div class="GlitchChar" :data-text="char" :style="styles">
    {{ char }}
  </div>
</template>

<script>
export default {
  name: 'GlitchChar',
  props: {
    char: {
      type: String,
      required: true,
      default: ''
    },
    textColor: {
      type: String,
      required: false,
      default: '#fff'
    }
  },
  computed: {
    // バインドするスタイルを生成
    styles() {
      return {
        '--color': this.textColor
      };
    }
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
