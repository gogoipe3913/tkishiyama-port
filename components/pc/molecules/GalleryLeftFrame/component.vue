<template>
  <div class="GalleryLeftFrame">
    <nuxt-link
      class="GalleryLeftFrame__text hoverable"
      to="/gallery"
      :style="styles"
    >
      {{ text }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'GalleryLeftFrame',
  props: {
    displayText: {
      type: String,
      required: false,
      default: 'BACK'
    },
    textColor: {
      type: String,
      required: false,
      default: '#fff'
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
