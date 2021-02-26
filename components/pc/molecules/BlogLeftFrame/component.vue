<template>
  <div class="BlogLeftFrame">
    <p class="BlogLeftFrame__text" :style="styles">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'BlogLeftFrame',
  props: {
    displayText: {
      type: String,
      required: false,
      default: 'FRONTEND ENGINEER / WEB DESIGNER'
    },
    textColor: {
      type: String,
      required: false,
      default: '#444'
    }
  },
  data() {
    return {
      text: this.displayText,
      color: this.textColor
    };
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
