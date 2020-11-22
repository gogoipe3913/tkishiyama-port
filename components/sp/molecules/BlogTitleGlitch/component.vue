<template>
  <div class="BlogTitleGlitch">
    <div class="BlogTitleGlitch__textColumn">
      <p class="BlogTitleGlitch__glitchChar">
        <GlitchChar char="B" :text-color="textColor" />
      </p>
      <p class="BlogTitleGlitch__glitchChar">
        <GlitchChar char="L" :text-color="textColor" />
      </p>
      <p class="BlogTitleGlitch__glitchChar">
        <GlitchChar char="O" :text-color="textColor" />
      </p>
      <p class="BlogTitleGlitch__glitchChar">
        <GlitchChar char="G" :text-color="textColor" />
      </p>
    </div>
  </div>
</template>

<script>
import GlitchChar from '~/components/all/atoms/GlitchChar/component';

export default {
  name: 'BlogTitleGlitch',
  components: {
    GlitchChar
  },
  data() {
    return {
      textColor: '#a3b5c0'
    };
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
